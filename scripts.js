// scripts.js
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      const nav = document.querySelector('.nav-links');
      nav?.classList.remove('show');
    }
  });
});

const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', ()=>{
  document.querySelector('.nav-links')?.classList.toggle('show');
});
function validateSignup(event) {
  event.preventDefault();
  const pass = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;
  if (pass !== confirm) {
    alert("Passwords do not match!");
    return false;
  }
  alert("Signup successful! (Demo only)");
  return true;
}
