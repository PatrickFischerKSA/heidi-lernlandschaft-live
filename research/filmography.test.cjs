const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const nodes=new Map();function node(s){if(!nodes.has(s))nodes.set(s,{innerHTML:'',textContent:'',value:'',addEventListener(){}});return nodes.get(s)}
const c={document:{querySelector:node},console,URLSearchParams};c.window=c;vm.createContext(c);
for(const f of ['content','filmography','clips','images','feedback'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),c);
const script=fs.readFileSync('dist/app.js','utf8').split('renderFilms();renderCompare();')[0];vm.runInContext(script,c);
const data=vm.runInContext('({films,sources,images,filmVariants,filmResearch,filmUpcoming})',c);
assert.equal(data.films.length,34);assert.equal(new Set(data.films.map(f=>f.id)).size,34);
for(const f of data.films){assert.equal(f.compare.length,4);for(const r of f.refs)assert(data.sources[r]);for(const k of ['title','director','kind','facts','analysis','context','question','scene'])assert(f[k],`${f.id}: ${k}`);if(f.video)assert(fs.existsSync('dist/'+f.video));}
for(const i of data.images)if(i.path)assert(fs.existsSync('dist/'+i.path),i.path);
vm.runInContext('renderFilms()',c);assert.equal((node('#film-grid').innerHTML.match(/class="film-card"/g)||[]).length,34);assert(node('#film-grid').innerHTML.includes('<video controls'));
for(const kind of new Set(data.films.map(f=>f.kind))){vm.runInContext(`renderFilms(${JSON.stringify(kind)})`,c);assert.equal((node('#film-grid').innerHTML.match(/class="film-card"/g)||[]).length,data.films.filter(f=>f.kind===kind).length);}
node('#film-search').value='BBC';vm.runInContext('renderFilms()',c);assert.equal((node('#film-grid').innerHTML.match(/class="film-card"/g)||[]).length,4);
node('#film-search').value='zzzznichtvorhanden';vm.runInContext('renderFilms()',c);assert(node('#film-grid').innerHTML.includes('Keine passende Produktion'));
node('#film-search').value='';node('#compare-a').value='1958india';node('#compare-b').value='2024moody';vm.runInContext('renderCompare()',c);assert(node('#comparison').innerHTML.includes('Do Phool'));assert(node('#comparison').innerHTML.includes('Precious Light'));
for(const id of ['schnittfassungen','recherchefaelle','angekuendigt','dokumentarfilm'])assert(node('#app').innerHTML.includes(`id="${id}"`));
assert.equal(data.filmVariants.length,13);assert.equal(data.filmResearch.length,8);assert.equal(data.filmUpcoming.length,2);
console.log('34 Datensätze, Quellen/Bilder, alle Kategorien, Suche, Leertreffer, Vergleich und Zusatzregister geprüft.');

const clips=vm.runInContext('filmClips',c);assert.equal(Object.keys(clips).length,29);
node('#film-search').value='';vm.runInContext('renderFilms()',c);
assert.equal((node('#film-grid').innerHTML.match(/data-load-clip=/g)||[]).length,29);
assert.equal((node('#film-grid').innerHTML.match(/class="clip-gap"/g)||[]).length,4);
assert(!node('#film-grid').innerHTML.includes('<iframe'),'No external requests before click');
for(const [id,clip] of Object.entries(clips)){
 assert(data.films.some(f=>f.id===id));assert(clip.source.startsWith('https://'));assert(clip.author&&clip.language&&clip.checked);
 vm.runInContext(`loadFilmClip(${JSON.stringify(id)})`,c);
 const html=node('#clip-stage-'+id).innerHTML;
 assert(html.includes(clip.provider==='mp4'?'<video':'<iframe'));
 assert(html.includes('title=')||html.includes('aria-label='));assert(!html.includes('autoplay'));
 if(clip.end)assert(html.includes('end='+clip.end));
}
assert(node('#app').innerHTML.includes('30 von 34'));
console.log('29 Clip-Player, 4 explizite Lücken, Klickladen, korrekte Anbieter, Zeitbegrenzung und barrierefreie Beschriftung geprüft.');

const full=vm.runInContext("renderFullFilm(films.find(f=>f.id==='2015'))",c);assert(full.includes('media/heidi-2015-realfilm.mp4'));assert(full.includes('preload="none"'));assert(!full.includes('autoplay'));assert(full.includes('vollständiger Realfilm'));console.log('Vollständiger Realfilm: eigener Player, korrekte Datei, kein automatisches Laden.');
