const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
  const browser=await chromium.launch({headless:true,...(process.env.HEIDI_BROWSER?{executablePath:process.env.HEIDI_BROWSER}:{})});
  try{
    const page=await browser.newPage({acceptDownloads:true});
    await page.goto((process.env.HEIDI_URL||'http://127.0.0.1:8772/')+'#schweiz');
    await page.locator('[data-draft="schweiz-schule"]').fill('Schnee und Kälte erschweren den Schulweg.');
    await page.locator('[data-save="schweiz-schule"]').click();
    await page.locator('[data-swiss-case="schweiz-migration"]').click();
    await page.locator('[data-draft="schweiz-migration"]').fill('Dete sucht eine Stelle; Heidi kehrt wegen Heimwehs zurück.');
    await page.evaluate(()=>{state.drafts['schweiz-migration']='Älterer Entwurf ohne überlieferten Fragetext.'});
    await page.locator('.notebook-toggle').click();
    const downloading=page.waitForEvent('download');
    await page.getByRole('button',{name:'Fragen und Antworten herunterladen'}).click();
    const download=await downloading;
    assert.equal(download.suggestedFilename(),'Heidi_Fragen_und_Antworten.txt');
    const text=fs.readFileSync(await download.path(),'utf8');
    assert.equal(text.split('Schnee und Kälte erschweren den Schulweg.').length-1,1);
    assert(text.includes('Dete sucht eine Stelle; Heidi kehrt wegen Heimwehs zurück.'));
    for(const id of ['schweiz-schule','schweiz-migration'])assert(text.includes(await page.evaluate(id=>HeidiCases[id].question,id)));
    assert(text.includes('Der ursprüngliche Fragetext wurde nicht gespeichert.'));
    assert(text.includes('Älterer Entwurf ohne überlieferten Fragetext.'));
    assert(text.includes('Aktueller Entwurf'));
    console.log('PASS: Download mit vollständigen Fragen, gespeicherten Antworten, Entwürfen und Umlauten; keine doppelten Antworten oder falsch zugeordneten alten Fragen.');
  }finally{await browser.close()}
})().catch(error=>{console.error(error);process.exit(1)});
