"use strict";

const mobileNav = document.getElementById('mobileNav');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileList = document.querySelectorAll('.mobile-list a');


hamburgerBtn.addEventListener('click', ()=>{
  mobileNav.classList.toggle('open');
  hamburgerBtn.classList.toggle('toggle');
})



mobileList.forEach(link => {
  link.addEventListener('click', ()=>{
    mobileNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('toggle');
  })
});




// Postavljanje IntersectionObserver-a
const observerOptions = {
  root: null, // koristi viewport ekrana
  threshold: 0.15 // sekcija se aktivira kada je 15% vidljiva na ekranu
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Ako želiš da se animacija desi samo prvi put kada korisnik skroluje, ukloni sledeći komentar:
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Pronalaženje svih sekcija i dodavanje u observer
const sectionsToAnimate = document.querySelectorAll('.fade-in-section');
sectionsToAnimate.forEach(section => {
  sectionObserver.observe(section);
});