/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER MACHINE ===============*/
const swiperMachine = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32, 
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 30, -500],
            rotate: [0, -90, 0],
            opacity: 0
        },
        next: {
            translate: [100, -30, -500],
            rotate: [0, 90, 0],
            opacity: 0
        }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  /*=============== MANUAL SWIPER  ===============*/
const swiperManual = new Swiper('.manual__swiper', {
  loop: true,
  spaceBetween: 5, 
  clickable: true,
  effect: 'creative',
  creativeflowEffect: {
      prev: {
          translate: [-100, 30, -500],
          rotate: [0, -90, 0],
          opacity: 50
      },
      next: {
          translate: [100, -30, -500],
          rotate: [0, 90, 0],
          opacity: 10
      }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

/*=============== MANUAL GSAP ANIMATION ===============*/
gsap.from('.manual__images', 1.5, {opacity: 0, y: 150, delay: .2})
gsap.from('.manual__data', 1.9, {opacity: 0, x: -100, delay: .9})
gsap.from('.manual__info', 1.9, {opacity: 0, x: -100, delay: .1})
/* slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }); */

/*=============== HOME GSAP ANIMATION ===============*/
gsap.from('.home__images', 1.5, {opacity: 0, y: 150, delay: .2})
gsap.from('.home__data', 1.9, {opacity: 0, x: -100, delay: .9})
gsap.from('.home__info', 1.9, {opacity: 0, x: -100, delay: .1})