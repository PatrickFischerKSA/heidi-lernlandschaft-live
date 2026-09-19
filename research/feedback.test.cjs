const assert=require('node:assert/strict');
const {tasks,evaluate}=require('../dist/feedback.js');let n=0;
function test(id,text,expected){const r=evaluate(id,text);for(const [k,v]of Object.entries(expected)){if(k==='has')for(const x of v)assert(r.recognized.some(a=>a.id===x),`${id}: missing ${x}: ${text}\n${JSON.stringify(r)}`);else if(k==='not')for(const x of v)assert(!r.recognized.some(a=>a.id===x),`${id}: unexpected ${x}: ${text}`);else assert.equal(r[k],v,`${id}: ${text}`);}n++;}
for(const t of tasks){test(t.id,t.example,{state:'covered'});test(t.id,'',{state:'empty'});test(t.id,'Das finde ich sehr interessant.',{state:'unrecognized'});test(t.id,'a'.repeat(6001),{state:'long'});}
test('anime','Isao inszenierte die Serie. Hayao übernahm die Szenengestaltung. Zuiyo war die Produktionsfirma.',{state:'covered'});
test('anime','Takahata war der Regiseeur. Miyazaki machte die Layouts. Studio Ghibli gab es noch nicht.',{state:'covered'});
test('anime','Miyazaki führte Regie. Zuiyo produzierte die Serie.',{state:'review',not:['direction']});
test('anime','Nicht Miyazaki führte Regie, sondern Takahata führte Regie. Hayao machte die Hintergrundgestaltung. Ghibli entstand später.',{state:'covered'});
test('anime','Takahata führte nicht Regie.',{state:'unrecognized'});
test('anime','Zuiyo hat die Serie nicht produziert.',{state:'unrecognized'});
test('dramaturgy','Der Blickwinkel zeigt, wie wir Figuren verstehen. Dadurch entsteht Empathie. Die Serie von 1974 lässt sich Zeit mit den Beziehungen.',{state:'covered'});
test('dramaturgy','Konflikt Spannung Wirkung Heidi.',{state:'unrecognized'});
test('wheelchair','Im Buch macht der Geisspeter den Stuhl kaputt. Im Anime geschieht es versehentlich. Peter erscheint dadurch als liebenswerter Kamerad.',{state:'covered'});
test('wheelchair','In der Serie zerstört Peter den Rollstuhl absichtlich aus Eifersucht.',{state:'review'});
test('wheelchair','Im Roman zerstört Peter den Rollstuhl. Im Anime macht Peter ihn nicht absichtlich kaputt. Peter ist weniger böse.',{has:['novel','anime']});
test('walther','Der Text ist eine Hypothese. Es gibt keinen empirischen Nachweis. Man müsste Vergleichsgruppen befragen.',{state:'covered'});
test('walther','Der Essay beweist, dass Rottenmeier Vorurteile verursacht.',{state:'review'});
test('walther','Der Essay beweist nicht, dass Rottenmeier Vorurteile verursacht.',{has:['limit']});
test('city','In Frankfurt unterstützt der Doktor das Mädchen. Auf der Alm herrscht materielle Armut. Beide Orte haben positive und negative Seiten.',{state:'covered'});
test('city','In der Stadt hilft niemand. Auf der Alp gibt es keine Armut.',{state:'review',not:['rural','city-help']});
test('city','Der Arzt hilft nicht. Das Dorf ist nicht arm.',{state:'unrecognized'});
test('unesco','Die Sammlungen zu Johanna Spyri sind Weltdokumentenerbe. Der Ort Heididorf wurde nicht zum Welterbe erklärt.',{state:'covered'});
test('unesco','Das Heididorf wurde zum Welterbe erklärt.',{state:'review'});
test('unesco','Nicht das Dorf wurde zum Welterbe erklärt. Die Archive von Heidi gehören zum Gedächtnis der Welt.',{state:'covered'});
test('unesco','Die Archive von Spyri wurden nicht ausgezeichnet.',{not:['archives']});
test('anime','Ghibli entstand nicht erst später.',{not:['studio']});
test('walther','Die Wirkung ist nicht unbewiesen.',{not:['limit']});
assert.throws(()=>evaluate('missing','Text'));assert.throws(()=>evaluate('anime',null));
console.log(`${n} Antwortfälle und zwei Fehlerfälle geprüft.`);
