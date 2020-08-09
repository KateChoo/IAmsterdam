//aria-label="toggle navigation"
    
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('nav-open'); //how is nav-open within the html structure?
})

navLinks.forEach(link => {
  link.addEventListener('click', ()=>{
    document.body.classList.remove('nav-open');
  })
})