let elementsToSplit = $(".split-lines");
  let instancesOfSplit = [];
  // Split the text up
  function runSplit() {
    elementsToSplit.each(function (index) {
      let currentElement = $(this);
      instancesOfSplit[index] = new SplitType(currentElement, {
        types: "lines, words"
      });
    });
    $(".line").each(function (index) {
      $(this).append("<div class='line-mask'></div>");
    });
  }
  runSplit();
  // Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      elementsToSplit.each(function (index) {
        instancesOfSplit[index].revert();
      });
      runSplit();
      createAnimation();
    }
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  function createAnimation() {
    $(".line").each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          // trigger element - viewport
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });
      tl.to($(this).find(".line-mask"), {
        width: "0%",
        duration: 1
      });
    });
  }
  createAnimation();