// Autor: Bryan DELAITRE
// Youtube: https://www.youtube.com/@bryan-delaitre
// Website : https://bryandelaitre.com/

let splides = document.querySelectorAll('.splide');
splides.forEach(splide => {
     splide.querySelector('.splide__list').classList.remove('designer');
     new Splide(splide, {
          autoWidth: 'true',
          pagination: false,
          arrows: false,
          focus: 'center',
          // direction: 'ltr',
          direction: splide.getAttribute('splide-direction'),
          // gap: "3rem",
          gap: splide.getAttribute('splide-gap'),
          type: 'loop',
          autoScroll: {
               autoStart: true,
               // speed: 1.5,
               speed: parseFloat(splide.getAttribute('splide-speed'))
          }
     }).mount(window.splide.Extensions);
});