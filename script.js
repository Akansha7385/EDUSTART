const hamburger=document=document.querySelector(".hamburger");
const navMenu=document=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
 
document.querySelectorAll("nav-link").forEach(n=>n. 
    addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)


gsap.from(".about h2", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",  // Starts when the top of the ".about" section reaches 80% of the viewport
    end: "bottom 60%", // Ends when the bottom reaches 60%
    toggleActions: "play none none reverse",  // Play on scroll down, reverse on scroll up
  },
  opacity: 0,
  y: 50,  // Slide in from below
  duration: 1.5,
  ease: "power2.out"
});


gsap.from(".about-text p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",  // Animation starts when ".about" reaches 80% of the viewport
    end: "bottom 60%", 
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  stagger: 0.3,
  ease: "power2.out"
});

gsap.from(".about-image img", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: 100,  // Slide in from the right
  duration: 1.5,
  ease: "power2.out"
});

gsap.from(".services h2", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",  // Trigger the animation when ".services" top reaches 80% of viewport
    end: "bottom 60%", // Ends when ".services" bottom reaches 60% of viewport
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out"
});

gsap.from(".service-cards .card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",  // Cards start animating when ".services" top reaches 80%
    end: "bottom 60%",
    toggleActions: "play none none reverse",
  },
 
});

gsap.from(".footer-content div", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",  // Start animation when footer top reaches 80% of the viewport
    end: "bottom 50%", // Ends when footer bottom reaches 50%
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  stagger: 0.3,
  ease: "power2.out"
});

gsap.from(".footer-bottom p", {
  scrollTrigger: {
    trigger: ".footer-bottom",
    start: "top 90%",  // Start animation when footer bottom reaches 90% of the viewport
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 20,
  duration: 1.2,
  ease: "power2.out"
});
