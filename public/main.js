/* SLINMEX - Script principal */
function smoothTo(sel){const t=document.querySelector(sel);if(!t)return;window.scrollTo({top:t.offsetTop-60,behavior:"smooth"});}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();smoothTo(a.getAttribute('href'));}));

function registrarEvento(c){if(typeof gtag==='function'){gtag('event','conversion',{'send_to':c});}}
document.addEventListener('click',e=>{
  const wa = e.target.closest('a[href*="wa.me"]'); if(wa) registrarEvento('AW-17693917991/whatsapp_click');
  const pre = e.target.closest('.js-pre'); if(pre) registrarEvento('AW-17693917991/agendar_consulta');
});

window.addEventListener('load',()=>{document.body.style.opacity=0;setTimeout(()=>{document.body.style.transition='opacity .6s ease';document.body.style.opacity=1;},80)});

const btn=document.createElement('button');btn.innerText="↑";Object.assign(btn.style,{position:"fixed",bottom:"20px",right:"20px",padding:"10px 14px",border:"none",borderRadius:"50%",background:"#2F8E73",color:"#fff",cursor:"pointer",fontSize:"1.2rem",boxShadow:"0 3px 8px rgba(0,0,0,.2)",display:"none",zIndex:9999});btn.id="scrollTopBtn";document.body.appendChild(btn);
window.addEventListener("scroll",()=>{btn.style.display=window.scrollY>200?"block":"none"});btn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

if(document.getElementById("verValor")){document.getElementById("verValor").addEventListener("click",()=>{const v=document.getElementById("valorConsulta");if(v)v.style.display="block";});}

// WhatsApp builder centralizado
const WA_BASE="https://wa.me/5519997223709";
function buildWa(text,campaign){const p=new URLSearchParams();if(text)p.set('text',text);p.set('source','site');p.set('medium','cta');if(campaign)p.set('campaign',campaign);return WA_BASE+'?'+p.toString();}
document.querySelectorAll('[data-wa]').forEach(a=>{const text=a.getAttribute('data-wa-text')||'';const c=a.getAttribute('data-wa-campaign')||'';a.href=buildWa(text,c)});
