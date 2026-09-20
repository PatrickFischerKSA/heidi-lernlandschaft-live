const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const c={};c.window=c;vm.createContext(c);for(const f of ['content','filmography','cases','case-feedback'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),c);
const {films,sources,cases,archive}=vm.runInContext('({films,sources,cases:HeidiCases,archive:HeidiArchiveNotes})',c),F=c.HeidiCaseFeedback;
assert.equal(Object.keys(cases).length,51);
assert.equal(new Set(Object.values(cases).map(t=>t.question)).size,51);
for(const f of films){if(!cases['film-'+f.id]){assert(archive[f.id],f.id);assert.equal(f.question,undefined);assert.equal(f.scene,undefined);assert(f.taskStatus);continue;}assert.equal(f.question,cases['film-'+f.id].question);assert(!f.scene.includes('Begründet eure Deutung mit einer konkreten Szene'));}
for(const t of Object.values(cases)){for(const key of ['title','where','material','action','question','answer'])assert(t[key]?.length>10,t.id+' '+key);assert.equal(t.facets.length,2);for(const r of t.refs)assert(sources[r],t.id+' '+r);for(const a of t.facets){assert(a.terms.length>=3);assert(a.hint&&a.follow)}if(t.pair){assert.equal(t.pair.length,2);assert(t.pair.every(id=>films.find(f=>f.id===id)))}assert(F.evaluate(t.id,'').aspects.every(a=>!a.evidence));assert(F.evaluate(t.id,'Mein Fahrrad hat einen platten Reifen.').aspects.every(a=>!a.evidence),t.id+' unrelated');}
const checks=[
 ['film-1920','Peter ist neidisch. Das Publikum kennt seine Tat bereits.',[true,true]],
 ['film-1920','Eifersuch macht Peter wütend. Die Zuschauer wissen es vorher.',[true,true]],
 ['film-1974','Peter trägt keine absichtliche Schuld. Klaras Unsicherheit bleibt.',[true,true]],
 ['bild-1937','Der gelbe Name Temple dominiert. Die Darstellerin wird verkauft.',[true,true]],
 ['bild-buch-klara','Hut und Bündel machen Heidi reisefertig. Klara sitzt unter der Decke.',[true,true]],
 ['film-2025','Das Tier braucht seinen Lebensraum. Das Sägewerk verfolgt wirtschaftliche Interessen.',[true,true]],
 ['montage','Die Buchseite kommt zuerst. Diese Verbindung ist eine Konstruktion.',[true,true]],
 ['quelle-walther','Dürfte markiert eine Vermutung. Es fehlen Daten zur Rezeption.',[true,true]],
 ['film-1920','Die Farben sind sehr schön.',[false,false]],
];for(const [id,text,want]of checks)assert.deepEqual(Array.from(F.evaluate(id,text).aspects,a=>!!a.evidence),want,id+': '+text);
const neg=F.evaluate('film-1920','Peter handelt nicht aus Eifersucht.');assert(neg.aspects[0].negated);assert(neg.items[0].includes('nicht als Zustimmung'));
assert.throws(()=>F.evaluate('frei-1937-2005','Heidi'));
const app=fs.readFileSync('dist/app.js','utf8');for(const old of ['E.reflect(',"observer('vergleich'","observer('bild'",'Deine erste Spur.','Wo bleibt dein Blick hängen?'])assert(!app.includes(old),old);
assert(fs.readFileSync('dist/cases.js','utf8').includes('01:48–02:30'));
assert.equal(Object.keys(archive).length,3);
for(const t of Object.values(cases)){for(const id of t.materialImages||(t.materialImage?[t.materialImage]:[]))assert(fs.existsSync('dist/assets/'+id+'.webp'),id);}
console.log('51 individuelle Materialfälle geprüft: 32 Filme, 8 Bilder, 9 Vergleiche, Montage, Walther; eigene Fragen, Quellen, getrennte Aufgaben, Synonyme, Tippfehler, Verneinungen und sachfremde Antworten.');
// Individually chosen alternate phrasings for the newly researched cases.
for(const [id,answer] of [
 ['film-1958india','Die Schauspielerin arbeitet an der Rolle. Ungekünsteltes Verhalten ist eine erzeugte Wirkung.'],
 ['film-1982song','Hootie überbringt die Nachricht. Klara entscheidet sich selbst fürs Mitreisen.'],
 ['film-2017bienvenida','Pedro folgt ihr und überbrückt die Trennung. Alte Freundschaft und neue Freunde können Loyalität verlangen.'],
 ['paar-1968-1978','Der Blick findet sein Gegenüber. Verdecke ich Peter, fehlt die Beziehung.']
])assert(F.evaluate(id,answer).aspects.every(a=>a.evidence),id+' alternate phrasing');
assert(F.evaluate('film-1982song','Ohne Hooties Nachricht weiss Peter nichts.').aspects[0].negated);
