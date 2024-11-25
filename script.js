// First Color shade #F2E9E4
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#two",
    // markers: true,
    start: "50% 0%",
    end: "55% 0%",
    scrub: 1,
    duration: 1,
  },
});

tl.to(".main", {
  backgroundColor: "#55334A",
});

// Second Color shade #F2E9E4
var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#three",
    // markers: true,
    start: "50% 0%",
    end: "55% 0%",
    scrub: 1,
    duration: 1,
  },
});

t2.to(".main", {
  backgroundColor: "#242E24",
});

// Third Color shade #F2E9E4
var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#four",
    // markers: true,
    start: "50% 0%",
    end: "55% 0%",
    scrub: 1,
    duration: 1,
  },
});

t2.to(".main", {
  backgroundColor: "#ffffff",
});
