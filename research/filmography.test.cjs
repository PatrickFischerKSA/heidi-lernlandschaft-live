const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const nodes=new Map();function node(s){if(!nodes.has(s))nodes.set(s,{innerHTML:'',textContent:'',value:'',addEventListener(){}});return nodes.get(s)}
const c={document:{querySelector:node},console};c.window=c;vm.createContext(c);
for(const f of ['content','filmography','images','feedback'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),c);
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
