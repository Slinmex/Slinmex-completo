const WA_BASE='https://wa.me/5519997223709';
function waLink(text,campaign){const p=new URLSearchParams();if(text)p.set('text',text);p.set('source','site');p.set('medium','cta');if(campaign)p.set('campaign',campaign);return `${WA_BASE}?${p.toString()}`;}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-wa]').forEach(a=>{a.href=waLink(a.getAttribute('data-wa-text')||'',a.getAttribute('data-wa-campaign')||'')});
  const sheet=document.getElementById('sheet'), closeBtn=document.getElementById('sheetClose');
  document.querySelectorAll('.js-pre').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();sheet.classList.add('open')}));
  closeBtn.addEventListener('click',()=>sheet.classList.remove('open'));
  sheet.addEventListener('click',e=>{if(e.target.id==='sheet')sheet.classList.remove('open')});
  const peso=document.getElementById('peso'), alt=document.getElementById('altura'), imc=document.getElementById('imc');
  function calc(){const p=parseFloat((peso.value||'').replace(',','.'));const a=parseFloat((alt.value||'').replace(',','.'));imc.value=(p>0&&a>0)?(p/(a*a)).toFixed(1):'';}
  ;[peso,alt].forEach(i=>i&&i.addEventListener('input',calc));
  document.getElementById('preForm').addEventListener('submit',e=>{
    e.preventDefault(); const d=new FormData(e.target);
    const linhas=[
      'Pré-consulta Slinmex',
      `Nome: ${d.get('nome')}`+(d.get('idade')?` (${d.get('idade')} anos)`:''),
      `Peso: ${d.get('peso')} kg`,
      `Altura: ${d.get('altura')} m`,
      `IMC: ${imc.value||'—'}`,
      `Condições: HAS ${d.get('has')?'SIM':'NÃO'} | DM ${d.get('dm')?'SIM':'NÃO'}`,
      `CIs – MTC ${d.get('mtc')?'SIM':'NÃO'} | MEN2 ${d.get('men2')?'SIM':'NÃO'} | Gest/Ama ${d.get('grav')?'SIM':'NÃO'} | Hiper ${d.get('hiper')?'SIM':'NÃO'}`,
      d.get('outros')?`Outras: ${d.get('outros')}`:null,
      `Objetivo: ${d.get('objetivo')}`
    ].filter(Boolean).join('\n');
    window.open(waLink(linhas,'pre-consulta'),'_blank');
  });
});