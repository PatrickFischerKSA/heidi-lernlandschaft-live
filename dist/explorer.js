/* Pure exploration logic; no network, no scoring of personal interpretations. */
(function(root){
'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=s=>String(s??'').toLocaleLowerCase('de').replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').normalize('NFKD').replace(/[\u0300-\u036f]/g,'');
function filterFilms(list,{query='',kind='Alle',until=2025,videoOnly=false}={}){const q=normalize(query);return list.filter(f=>(kind==='Alle'||f.kind===kind)&&parseInt(f.year)<=Number(until)&&(!videoOnly||f.video||f.clip||f.fullVideo)&&(!q||normalize([f.title,f.year,f.director,f.country,f.mode,f.facts].join(' ')).includes(q)));}
function moveItem(order,id,delta){const next=[...order],i=next.indexOf(id),j=i+delta;if(i>=0&&j>=0&&j<next.length)[next[i],next[j]]=[next[j],next[i]];return next;}
function togglePair(pair,id){if(pair.includes(id))return pair.filter(x=>x!==id);return pair.length<2?[...pair,id]:[pair[1],id];}
function embedUrl(c){if(c.provider==='youtube'){const p=new URLSearchParams({rel:'0',playsinline:'1',enablejsapi:'1',mute:'1'});if(typeof location!=='undefined')p.set('origin',location.origin);if(c.start!==undefined)p.set('start',c.start);if(c.end!==undefined)p.set('end',c.end);return 'https://www.youtube-nocookie.com/embed/'+c.id+'?'+p;}if(c.provider==='vimeo')return 'https://player.vimeo.com/video/'+c.id+'?dnt=1&muted=1';return c.embed;}
const segments=[{id:'alp',name:'Auf der Alp',start:'03:00',color:'#a8b786'},{id:'begegnung',name:'Heidi & Peter',start:'15:00',color:'#c5a287'},{id:'buch',name:'Die Buchseite',start:'45:00',color:'#d2c7af'},{id:'stadt',name:'Über der Stadt',start:'53:20',color:'#849b9c'}];
root.HeidiExplorer={esc,normalize,filterFilms,moveItem,togglePair,embedUrl,segments};
})(typeof window!=='undefined'?window:globalThis);
