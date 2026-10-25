const $ = (s) => document.querySelector(s);
const config = window.LEONET_CONFIG || {};
const email = config.contactEmail || '';
let intent = 'seller';
function setIntent(value) {
  intent = value;
  $('#intent').value = value;
  document.querySelectorAll('[data-tab]').forEach(b => {const on=b.dataset.tab===value;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
  for(const type of ['seller','buyer']) {
    const block=$('#'+type+'-fields');block.hidden=type!==value;
    block.querySelectorAll('input,select').forEach(el=>el.disabled=type!==value);
  }
  $('#submit-label').textContent = email ? 'Prepare email enquiry ↗' : `Download my ${value==='seller'?'property enquiry':'buyer profile'} ↗`;
  $('#form-status').textContent='';
}
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>setIntent(b.dataset.tab)));
document.querySelectorAll('[data-intent]').forEach(a=>a.addEventListener('click',()=>setIntent(a.dataset.intent)));
$('.menu').addEventListener('click',()=>{const open=$('.menu').getAttribute('aria-expanded')!=='true';$('.menu').setAttribute('aria-expanded',String(open));$('#navigation').classList.toggle('open',open);});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{$('#navigation').classList.remove('open');$('.menu').setAttribute('aria-expanded','false');}));
if(email){$('#connection-note').textContent='Prepare your details below. We’ll open an email draft for you to review and send.';$('.privacy-note').textContent='Your details will be included in an email draft. Nothing is sent until you send it from your email application.';}
$('#enquiry').addEventListener('submit',e=>{
  e.preventDefault();const lines=[`LEONET — ${intent==='seller'?'PROPERTY ENQUIRY':'BUYER PROFILE'}`,'',...Array.from(new FormData(e.target),([key,value])=>`${key}: ${value}`)];const body=lines.join('\n');
  if(email){window.location.href=`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('LeoNet '+(intent==='seller'?'property enquiry':'buyer profile'))}&body=${encodeURIComponent(body)}`;$('#form-status').textContent='Email draft requested. Review and send it in your email application. Nothing has been submitted by this website.';}
  else {const blob=new Blob([body],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`leonet-${intent==='seller'?'property-enquiry':'buyer-profile'}.txt`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#form-status').textContent='Your copy has been downloaded. It has not been sent to LeoNet.';}
});
$('#year').textContent=new Date().getFullYear();$('#privacy-button').addEventListener('click',()=>$('#privacy').showModal());$('#close-privacy').addEventListener('click',()=>$('#privacy').close());setIntent('seller');
