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



  
//ScrollTrigger for animations
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
 });

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
 });

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
 });

 gsap.from('main', {
  scale: .95,
  duration: .8,
  ease: true
 });

//Parallax
gsap.to(".parallax", {
  y: -100,
  scale: 1.1,
});

gsap.to(".parallax", {
  yPercent: 25,
  ease: "none",
  
  scrollTrigger: {
    trigger: ".parallax-section",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  } , 
});

//Sub-hero Parallax
gsap.to(".sub-parallax", {
  y: -70,
  scale: 1.1,
});

gsap.to(".sub-parallax", {
  yPercent: 25,
  ease: "none",
  
  scrollTrigger: {
    trigger: ".sub-parallax-section",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  } , 
});

//text appear
gsap.from(".text-appear1", {
  y: 50,
  duration: 1,
  ease: 'power4',
  opacity: 0,
  scrollTrigger: {
    trigger: ".text-appear1",
    opacity: 1,
    y: 0,
    
    
    // start: "top bottom", // the default values
    // end: "bottom top",
  } , 
});
gsap.from(".text-appear2", {
  y: 50,
  duration: 1,
  ease: 'power4',
  opacity: 0,
  scrollTrigger: {
    trigger: ".text-appear2",
    opacity: 1,
    y: 0,
    start: "top 85%",
    end: "bottom top",
  } , 
});
gsap.from(".text-appear3", {
  y: 50,
  duration: 1,
  opacity: 0,
  ease: 'power4',
  scrollTrigger: {
    trigger: ".text-appear3",
    opacity: 1,
    y: 0,
    start: "top 85%",
  } , 
});
gsap.from(".yellow-appear", {
  x: -10000,
  duration: 1,
  opacity: 0,
  ease: 'power4',
  scrollTrigger: {
    trigger: ".yellow-appear",
    opacity: 1,
    x: 0,
    start: "top bottom",
  } , 
});