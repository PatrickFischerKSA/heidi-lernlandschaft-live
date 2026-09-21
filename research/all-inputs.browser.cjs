const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const base=process.env.HEIDI_URL||'http://127.0.0.1:8772/';

(async()=>{
  const browser=await chromium.launch({headless:true,...(process.env.HEIDI_BROWSER?{executablePath:process.env.HEIDI_BROWSER}:{})});
  try{
    for(const width of [1440,390]){
      const context=await browser.newContext({viewport:{width,height:1000},acceptDownloads:true});
      const page=await context.newPage();
      const errors=[];
      page.on('pageerror',e=>errors.push(e.message));
      await page.goto(base+'#kino');
      const cases=await page.evaluate(()=>Object.values(HeidiCases));
      const answers=new Map();
      async function go(hash){
        if(await page.locator('#overlay').evaluate(d=>d.open))await page.keyboard.press('Escape');
        await page.goto(base+'#'+hash);
      }
      async function open(task){
        if(task.id.startsWith('film-'))return go(task.id);
        if(task.pair){await go('kino');await page.locator('footer [data-action="workshops"]').click();await page.locator(`[data-case-pair="${task.id}"]`).click();return;}
        if(task.id.startsWith('bild-')){await go('spuren');await page.locator(`[data-trace-image="${task.id.slice(5)}"]`).click();return;}
        if(task.id.startsWith('schweiz-')){await go('schweiz');await page.locator(`[data-swiss-case="${task.id}"]`).click();return;}
        if(task.id.startsWith('spyri-kempin-')){await go('kempin');await page.locator(`[data-kempin-case="${task.id}"]`).click();return;}
        if(task.id.startsWith('spyri-')){await go('spyri');await page.locator(`[data-spyri-case="${task.id}"]`).click();return;}
        if(task.id==='montage')return go('labor');
        if(task.id==='quelle-walther'){await go('kino');await page.locator('footer [data-action="workshops"]').click();return;}
        throw new Error('Nicht getesteter Aufgabenzugang: '+task.id);
      }
      for(const task of cases){
        await open(task);
        const field=page.locator(`[data-draft="${task.id}"]`);
        const save=page.locator(`[data-save="${task.id}"]`);
        const status=page.locator('#save-status-'+task.id);
        assert.equal(await field.count(),1,task.id+' eindeutiges Feld');
        await save.click();
        assert.match(await status.innerText(),/Bitte zuerst/);
        const text=`Antwort ${width} zu ${task.id}: ${task.facets[0].terms[0]}; ${task.facets[1].terms[0]}. Äpfel, Grüsse und «Belege».`;
        answers.set(task.id,text);
        await field.fill(text);
        await page.locator(`[data-reflect="${task.id}"]`).click();
        const feedback=await page.locator('#reflection-'+task.id).innerText();
        assert(feedback.includes(task.title),task.id+' Rückmeldung');
        for(const facet of task.facets)assert(feedback.includes(facet.label),task.id+' Einzelaspekte');
        if(task.id.startsWith('bild-')){
          await save.click();
          assert.match(await status.innerText(),/Stelle im Bild markieren/);
          assert.equal(await field.inputValue(),text);
          await page.locator('#trace-canvas>img').click({position:{x:30,y:30}});
        }
        await save.click();
        assert.match(await status.innerText(),/im Entdeckungsbuch gespeichert/);
        await status.scrollIntoViewIfNeeded();
        assert(await status.evaluate(n=>{const r=n.getBoundingClientRect();return !!document.elementFromPoint(r.left+8,r.top+8)?.closest('.save-status')}),task.id+' sichtbare Bestätigung');
        const note=await page.evaluate(()=>JSON.parse(localStorage.getItem('heidi-cases-v3')).notes[0]);
        assert.equal(note.taskId,task.id);
        assert.equal(note.question,task.question);
        assert.equal(note.text,text);
        if(task.id==='film-1920')await page.screenshot({path:`/tmp/heidi-input-fixed-${width}.png`});
      }
      assert.equal(await page.evaluate(()=>state.notes.length),66);
      await page.reload();
      for(const task of cases){await open(task);assert.equal(await page.locator(`[data-draft="${task.id}"]`).inputValue(),answers.get(task.id),task.id+' Entwurf nach Neuladen');}
      await go('kino');
      await page.locator('.notebook-toggle').click();
      assert.equal(await page.locator('.note').count(),66);
      const downloadPromise=page.waitForEvent('download');
      await page.locator('#overlay [data-action="export"]').click();
      const download=await downloadPromise;
      const exported=fs.readFileSync(await download.path(),'utf8');
      for(const task of cases){assert(exported.includes(task.question));assert(exported.includes(answers.get(task.id)));}
      // A non-curated pair must also save, without pretending to have a set question.
      await go('kino');
      await page.locator('[data-action="clear-pair"]').click();
      await page.locator('[data-pair="1937"]').click();
      await page.locator('[data-pair="2005"]').click();
      await page.locator('[data-action="compare"]').click();
      const free=page.locator('[data-draft^="frei-"]');
      await free.fill('Meine freie Vergleichsnotiz.');
      await page.locator('[data-save^="frei-"]').click();
      assert.match(await page.locator('.save-status').innerText(),/Notiz im Entdeckungsbuch gespeichert/);
      await go('spyri');
      await page.locator('[data-spyri-case="spyri-sina"]').click();
      await page.locator('summary').filter({hasText:'Medizin wählen'}).click();
      await page.locator('[data-draft="spyri-prediction"]').fill('Sina wird Ärztin?');
      await page.reload();
      await page.locator('[data-spyri-case="spyri-sina"]').click();
      await page.locator('summary').filter({hasText:'Medizin wählen'}).click();
      assert.equal(await page.locator('[data-draft="spyri-prediction"]').inputValue(),'Sina wird Ärztin?');
      // Storage failure must never produce a success message or a phantom saved note.
      await go('film-1920');
      await page.locator('[data-draft="film-1920"]').fill('Diese Antwort darf nicht als gespeichert erscheinen.');
      const count=await page.evaluate(()=>state.notes.length);
      await page.evaluate(()=>{Storage.prototype.setItem=function(){throw new DOMException('Quota exceeded','QuotaExceededError')}});
      await page.locator('[data-save="film-1920"]').click();
      assert.match(await page.locator('#save-status-film-1920').innerText(),/Nicht dauerhaft gespeichert/);
      assert.equal(await page.evaluate(()=>state.notes.length),count);
      assert.equal(await page.locator('[data-draft="film-1920"]').inputValue(),'Diese Antwort darf nicht als gespeichert erscheinen.');
      assert.deepEqual(errors,[]);
      console.log(`PASS ${width}px: alle 66 Aufgaben, leere Eingaben, individuelle Rückmeldung, sichtbare Speicherbestätigung, Fragenzuordnung, Neuladen und Export; 8 Bildmarkierungen; freier Vergleich; Sina-Entwurf; Speicherfehler.`);
      await context.close();
    }
  }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
