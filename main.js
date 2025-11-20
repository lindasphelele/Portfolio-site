// Minimal JS: toggle mobile nav, prevent default form submit for demo
document.getElementById('nav-toggle')?.addEventListener('click', function(){
  const nav = document.getElementById('main-nav');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!expanded));
  if(nav) nav.style.display = expanded ? 'none' : 'block';
});

document.getElementById('contact-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks — this demo form does not send messages yet.');
});
