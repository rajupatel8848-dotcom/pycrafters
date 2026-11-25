const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const WA="https://wa.me/918959277086?text=";
$("#yr").textContent=new Date().getFullYear();
const bg=$("#bg"),lk=$("#lk");function menu(o){lk.classList.toggle("open",o);bg.setAttribute("aria-expanded",o)}
bg.onclick=()=>menu(!lk.classList.contains("open"));$$("#lk a").forEach(a=>a.onclick=()=>menu(false));addEventListener("keydown",e=>{if(e.key==="Escape")menu(false)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});$$(".rv,#process").forEach(el=>io.observe(el));
const W=["Websites","Automation","Broadcasting","QR Menus"],cy=$("#cy");let wi=0;
if(!RM)setInterval(()=>{cy.classList.add("o");setTimeout(()=>{wi=(wi+1)%W.length;cy.textContent=W[wi];cy.classList.remove("o")},350)},2400);
if(!RM)$("#home").addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$("#lg").style.transform=`perspective(900px) rotateY(${x*14}deg) rotateX(${-y*10}deg)`});
$$("[data-svc]").forEach(a=>{a.href=WA+encodeURIComponent("Hi Pycrafters, I’m interested in "+a.dataset.svc+".");a.target="_blank";a.rel="noopener noreferrer"});
$$("[data-l]").forEach(b=>b.onclick=()=>{$("#dt").innerHTML=b.dataset.l;$("#dl").showModal()});
function stage(){
 const L=$$(".pj").filter(x=>!x.hidden),trk=$("#trk"),n=L.length;$("#cn").textContent=String(n).padStart(2,"0");
 if(!n)return;
 if(innerWidth<=900||RM){L.forEach(x=>{x.style.visibility="";x.querySelector(".pt").style.cssText="";x.querySelector(".pf").style.cssText=""});trk.style.height="";return}
 trk.style.height=`calc(${(n-1)*90}vh + 100vh - 72px)`;
 const r=trk.getBoundingClientRect(),tot=trk.offsetHeight-(innerHeight-72),s=n>1?Math.max(0,Math.min(1,(72-r.top)/tot)):0,p=s*(n-1);
 $("#ci").textContent=String(Math.round(p)+1).padStart(2,"0");
 L.forEach((x,i)=>{const d=i-p,a=Math.abs(d),t=x.querySelector(".pt"),f=x.querySelector(".pf");
  x.style.visibility=a<1.02?"visible":"hidden";
  t.style.opacity=Math.max(0,1-a*2.2);t.style.transform=`translateY(${d*60}px)`;t.style.filter=`blur(${Math.min(a*2,1)*8}px)`;
  f.style.opacity=d>0?Math.max(0,1-d*.85):Math.max(0,1+d*1.3);
  f.style.transform=d>0?`translateX(${d*70}%) rotateY(${-14-d*10}deg) scale(${1-d*.06})`:`translateX(${d*35}%) rotateY(${-14+d*10}deg) scale(${1+d*.05})`;
 })}
let tk=0;addEventListener("scroll",()=>{if(!tk)tk=requestAnimationFrame(()=>{tk=0;stage()})},{passive:true});addEventListener("resize",stage);
$$("[data-f]").forEach(b=>b.onclick=()=>{$$("[data-f]").forEach(x=>x.classList.toggle("on",x===b));$$(".pj").forEach(p=>p.hidden=b.dataset.f!=="all"&&p.dataset.c!==b.dataset.f);stage()});
stage();
