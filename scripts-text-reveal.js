console.clear()
// GSAP scroll trigger, splittext setup 
gsap.registerPlugin(SplitText, ScrollTrigger);

const split = new SplitText(".wrapper p", {
  type: "chars",
});

const tl  = gsap.timeline({
  scrollTrigger: {
    trigger: "#textSection",
    start: "top top",
    end: "+=150%",
    pin: true,
    scrub: 0.75,
    markers: false,
  }
})
  .set(split.chars, {
    color: "#ffcc66",
    stagger: 0.1,
  }, 0.1);


  // Lenis smooth scroll setup 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)