const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('contactForm').addEventListener('submit',function(e){
 e.preventDefault();
 document.getElementById('formMsg').textContent='Thanks! Your enquiry has been received. We will contact you shortly.';
 this.reset();
});
