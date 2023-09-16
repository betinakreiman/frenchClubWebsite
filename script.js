window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



//gsap.registerPlugin(ScrollTrigger);
// gsap.to(".m16", {rotation: 0, x: -600, duration: 0, opacity: 0.2});
// gsap.to(".m16", {
//   scrollTrigger: ".m16",
//   x: 0,
//   rotation: 0,
//   duration: 2.5,
//   opacity: 1.0
// })

gsap.to(".animation", {rotation: 0, x: -1000, duration: 0, opacity: 0});
var second = gsap.to(".animation", {rotation: 0, x: 0, duration: 4, opacity: 1}).delay(0.25);
