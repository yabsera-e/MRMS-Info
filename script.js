const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));navLinks.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-25% 0px -65% 0px'});
sections.forEach(s=>sectionObserver.observe(s));

document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.cap-card').forEach(card=>card.classList.toggle('hidden',filter!=='all'&&card.dataset.group!==filter))}));
document.querySelectorAll('.detail-trigger').forEach(button=>button.addEventListener('click',()=>{const card=button.closest('.cap-card');const open=card.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.childNodes[0].nodeValue=open?'Hide details ':'View details '}));
document.querySelector('[data-placeholder]')?.addEventListener('click',event=>event.preventDefault());
document.getElementById('year').textContent=new Date().getFullYear();
