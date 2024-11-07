// header Functions

function displayheaderOverlay() {
  const openBtn = document.querySelector(".nav-overlay-open-btn");
  const navOverlay = document.querySelector(".nav-overlay");
  const closeBtn = document.querySelector(".nav-overlay-close-btn");

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    navOverlay.style.pointerEvents = "auto";
  };
  const enableScroll = () => {
    document.body.style.overflow = "";
    document.body.style.pointerEvents = "auto";
  };

  openBtn.addEventListener("click", () => {
    disableScroll();
    gsap.to(navOverlay, {
      translateX: "0%",
    });
    if (navOverlay.classList.contains("hidden")) {
      navOverlay.classList.remove("hidden");
    }
  });

  closeBtn.addEventListener("click", () => {
    enableScroll();
    gsap.to(navOverlay, {
      translateX: "100%",
    });
    if (!navOverlay.classList.contains("hidden")) {
      setTimeout(() => {
        navOverlay.classList.add("hidden");
      }, 400);
    }
  });
}

function handleNavAppearance() {
  const header = document.querySelector(".header");
  let lastScrollTop = document.documentElement.scrollTop;
  let timeout;

  function handleScroll() {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;

    clearTimeout(timeout);

    if (currentScrollTop < lastScrollTop) {
      //   console.log(
      //     "Scrolling up: Current scroll position is less than the previous position."
      //   );

      gsap.to(header, {
        translateY: "0%",
        duration: 0.4, // Duration of the animation
      });

      if (header.classList.contains("hidden")) {
        header.classList.remove("hidden");
      }
    } else if (currentScrollTop > lastScrollTop) {
      //   console.log(
      //     "Scrolling down: Current scroll position is more than the previous position."
      //   );

      gsap.to(header, {
        translateY: "-100%",
        duration: 0.4, // Duration of the animation
      });

      timeout = setTimeout(() => {
        if (!header.classList.contains("hidden")) {
          header.classList.add("hidden");
        }
      }, 400);
    }

    lastScrollTop = currentScrollTop;
  }

  window.addEventListener("scroll", handleScroll);
}

// Animations

gsap.from(".hero > .hero-part-3 > .card", {
  y: "20%",
  ease: "power4",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".hero > .hero-part-3 > .card",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.from(".portfolio-section > .card", {
  y: "20%",
  ease: "power4",
  duration: 0.8,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".portfolio-section > .card",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.from(".projects-section > .content", {
  y: "20%",
  ease: "power4",
  duration: 0.8,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".projects-section > .content",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.from(".get-free-quote-section > .content", {
  y: "20%",
  ease: "power4",
  duration: 0.8,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".get-free-quote-section > .content",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.from(".how-it-works-section > .content", {
  y: "20%",
  ease: "power4",
  duration: 0.8,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".how-it-works-section > .content",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.from(".cta-section > .content", {
  y: "20%",
  ease: "power4",
  duration: 0.8,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".cta-section > .content",
    start: "top bottom",
    scrub: 1,
  },
});

handleNavAppearance();
displayheaderOverlay();
