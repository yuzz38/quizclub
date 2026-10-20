(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
function tg(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o)}
b.addEventListener('click',function(){tg(!n.classList.contains('open'))});
n.addEventListener('click',function(e){if(e.target.tagName==='A')tg(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')tg(false)});
var t=document.querySelector('.track'),s=t.children,d=document.querySelector('.dots'),i,c=0;
for(i=0;i<s.length;i++)d.appendChild(document.createElement('i'));
function go(k){c=(k+s.length)%s.length;t.scrollTo({left:s[c].offsetLeft-t.offsetLeft,behavior:'smooth'})}
function mark(){c=Math.round(t.scrollLeft/t.clientWidth);for(i=0;i<d.children.length;i++)d.children[i].className=i===c?'on':''}
document.querySelector('.prev').onclick=function(){go(c-1)};document.querySelector('.next').onclick=function(){go(c+1)};
t.addEventListener('scroll',function(){clearTimeout(t._w);t._w=setTimeout(mark,60)});mark();
document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();var f=e.target,ok=true,v={};
['name','phone','team','count'].forEach(function(k){var el=f.elements[k];v[k]=el.value.trim();var bad=!v[k]||(k==='phone'&&v[k].replace(/\D/g,'').length<10)||(k==='count'&&(v[k]<2||v[k]>10));el.classList.toggle('bad',bad);if(bad)ok=false});
var fn=document.getElementById('fn');
if(!ok){fn.textContent='Проверьте поля: нужны имя, телефон, название команды и от 2 до 10 человек.';return}
var m='Здравствуйте! Хочу записать команду на квиз.\nИмя: '+v.name+'\nТелефон: '+v.phone+'\nКоманда: '+v.team+'\nУчастников: '+v.count;
fn.textContent='Открываем WhatsApp с готовым сообщением. Не получается — позвоните: 8 (950) 110-22-11.';
window.open('https://wa.me/79501102211?text='+encodeURIComponent(m),'_blank','noopener');
});
})();
