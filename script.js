var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#two",
    markers: true,
    start: "50% 0%",
    end: "55% 0%",
    scrub: 1,
    duration: 1,
  },
});

tl.to(".main", {
  backgroundColor: "#55334A",
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#three",
    markers: true,
    start: "50% 0%",
    end: "55% 0%",
    scrub: 1,
    duration: 1,
  },
});

t2.to(".main", {
  backgroundColor: "#242E24",
});