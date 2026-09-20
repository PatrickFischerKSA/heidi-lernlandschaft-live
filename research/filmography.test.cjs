const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const c={console,URLSearchParams};c.window=c;vm.createContext(c);
for(const file of ['content','filmography','clips','images','feedback','explorer'])vm.runInContext(fs.readFileSync('dist/'+file+'.js','utf8'),c);
const data=vm.runInContext('({films,sources,images,filmVariants,filmResearch,filmUpcoming,filmClips,filmClipGaps})',c),E=c.HeidiExplorer;
assert.equal(data.films.length,35);assert.equal(new Set(data.films.map(f=>f.id)).size,35);
for(const f of data.films){assert.equal(f.compare.length,4);for(const r of f.refs)assert(data.sources[r],`${f.id}: ${r}`);for(const k of ['title','director','kind','facts','analysis','context','question','scene'])assert(f[k]);if(f.video)assert(fs.existsSync('dist/'+f.video));}
for(const i of data.images)if(i.path)assert(fs.existsSync('dist/'+i.path));
assert.equal(Object.keys(data.filmClips).length,30);assert.equal(Object.keys(data.filmClipGaps).length,4);assert.equal(data.filmVariants.length,13);assert.equal(data.filmResearch.length,8);assert.equal(data.filmUpcoming.length,2);
for(const [id,clip] of Object.entries(data.filmClips)){assert(data.films.some(f=>f.id===id));assert(clip.source.startsWith('https://'));assert(clip.author&&clip.language);const url=E.embedUrl(clip);assert(url.startsWith('https://'));if(clip.end)assert(url.includes('end='+clip.end));assert(!url.includes('autoplay'));}
assert.equal(E.filterFilms(data.films).length,35);assert.equal(E.filterFilms(data.films,{query:'BBC'}).length,4);assert.equal(E.filterFilms(data.films,{query:'unfindbarxxxx'}).length,0);assert.equal(E.filterFilms(data.films,{videoOnly:true}).length,31);
for(const f of E.filterFilms(data.films,{until:1960}))assert(parseInt(f.year)<=1960);
for(const kind of new Set(data.films.map(f=>f.kind)))assert(E.filterFilms(data.films,{kind}).every(f=>f.kind===kind));
assert.equal(E.filterFilms(data.films,{query:'groeschel'}).length,E.filterFilms(data.films,{query:'Gröschel'}).length);
assert.deepEqual(Array.from(E.moveItem(['a','b','c'],'b',-1)),['b','a','c']);assert.deepEqual(Array.from(E.moveItem(['a','b'],'a',-1)),['a','b']);
assert.deepEqual(Array.from(E.togglePair(['1937','1974'],'2015')),['1974','2015']);assert.deepEqual(Array.from(E.togglePair(['1937','2015'],'1937')),['2015']);
for(const s of E.segments){assert(fs.existsSync('dist/media/montage/'+s.id+'.mp4'));assert(fs.existsSync('dist/media/montage/'+s.id+'.jpg'));}
assert.equal(E.reflect('').items.length,1);assert.equal(E.reflect('Bei 01:20 sehe ich ein Fenster. Dadurch wirkt die Stadt eng. Vielleicht könnte es auch Schutz bedeuten.').items.length,3);
assert.equal(E.esc('<img onerror="x">'),'&lt;img onerror=&quot;x&quot;&gt;');
const index=fs.readFileSync('dist/index.html','utf8');for(const script of ['content','filmography','clips','images','feedback','explorer','app'])assert(index.includes(script+'.js'));
console.log('35 Archiveinträge, 31 Videozugänge, alle Quellen/Bilder, Filter, Zeitgrenzen, Vergleichsauswahl, Montage-Reihenfolge und offene Rückmeldung geprüft.');
