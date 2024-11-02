// header Functions

function displayheaderOverlay() {
  const openBtn = document.querySelector(".nav-overlay-open-btn");
  const navOverlay = document.querySelector(".nav-overlay");
  const closeBtn = document.querySelector(".nav-overlay-close-btn");

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const enableScroll = () => {
    document.body.style.overflow = "";
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

handleNavAppearance();
displayheaderOverlay();
