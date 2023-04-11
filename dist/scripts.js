//mobile nav
const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
  document.getElementsByClassName("hero").dataset.nav = document.getElementsByClassName("hero").dataset.nav === 'true' ? 'false' : 'true';
}

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".pages__list")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active1");
  navMenu.classList.toggle("active1");
})

document.querySelectorAll("li").forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove("active1");
  navMenu.classList.remove("active1");
}))

console.log("he")


// if ($('pages__list').has('')) {
//   $('body').addClass("fixed-position");
// } else {
//   $('body').removeClass("fixed-position");
// }


/*
  $(function() {
    var hamburger = $(".hamburger");
    var navItems = $(".pages__list");

    $(hamburger).on('click', function(e){
      hamburger.classList.toggle('active');
      navItems.classList.toggle('active');
    });
  });
  */
 gsap.registerPlugin(ScrollTrigger);
 gsap.from('.scroll', {
  y: 50,
  opacity: 0,
  duration: 2,
  ease: 'power4',
  scrollTrigger: {
    trigger: '.scroll',
    // markers: true,
    start: "top 85%"

  }
 })

 gsap.from('.scroll2', {
  y: 100,
  opacity: 0,
  duration: 2,
  ease: 'power4',
  scrollTrigger: {
    trigger: '.scroll2',
    // markers: true,
    start: "top 85%"

  }
 })

 gsap.from('.scroll3', {
  x: -500,
  opacity: 0,
  duration: 2,
  ease: 'power4',
  scrollTrigger: {
    trigger: '.scroll3',
    // markers: true,
    start: "top 85%"

  }
 })