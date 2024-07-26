document.addEventListener("DOMContentLoaded", function () {

  'use strict';

  Splitting();
  luxy.init();
  gsap.registerPlugin(ScrollTrigger)

  const gTl = gsap.timeline();
  gTl.from(".title .char",1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
  gTl.from(".header_marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");
  
  const gsapSq = gsap.utils.toArray('.section-title_square');
  gsapSq.forEach((gSq, i) => {
    const rotat = gsap.from(gSq, 3, { rotation: 720});
    ScrollTrigger.create({
      trigger: gSq,
      animation: rotat,
      start: 'top bottom',
      scrub: 1.9
    });
  });
  //reload on top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  //Nav-bar
  function navbar() {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;
  
    gsap.set(".menu-item p", { y: 225 });
  
    const timeline = gsap.timeline({ paused: true });
  
    timeline.to(".overlay", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut"
    });
  
    timeline.to(".menu-item p", {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "power4.out"
    }, "-=1");
  
    timeline.to(activeItemIndicator, {
      width: "100%",
      duration: 1,
      ease: "power4.out",
      delay: 0.5
    }, "<");
      
    timeline.to(".sub-nav", {
      bottom: "10%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5
    }, "<");
    
    const menuItems = document.querySelectorAll(".menu-item a");
    menuItems.forEach(menuItem => {
      menuItem.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor tag behavior

        // Remove active class from previously active item
        const previousActive = document.querySelector(".menu-item p#active");
        if (previousActive) {
          previousActive.removeAttribute("id");
        }

        // Add active class to the clicked item
        this.parentElement.id = 'active';

        // Optionally, close the menu after navigation
        if (isOpen) {
          timeline.reverse();
          isOpen = false;
          toggleButton.classList.remove('active'); // Ensure button returns to its original state
        }
      });
    });

    $('a[href^="#"]').click(function () {
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      let position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, 300);
      if (isOpen) {
        timeline.reverse();
        isOpen = false;
        toggleButton.classList.remove('active'); // Ensure button returns to its original state
      }
      return false;
    });

    toggleButton.addEventListener("click", function() {
      if (isOpen) {
        timeline.reverse();
        toggleButton.classList.remove('active');
      } else {
        timeline.play();
        toggleButton.classList.add('active');
      }
      isOpen = !isOpen;
    });
  }
  navbar();

  //header
  function header() {
    gsap.to('.title_paralax', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9
      },
      xPercent: -50
    })
    gsap.to('.header .stroke', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9
      },
      xPercent: 50
    })
    gsap.to('.header_marq-wrapp', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9
      },
      xPercent: -50
    })
    gsap.to('.header_marq-star img', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9
      },
      rotate: -720
    })
  }
  header();


  //about
  function about() {
    gsap.from('.about_img img', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        scrub: 1.9
      },
      scale: 1.5
    })
    gsap.to('.about_txt', {
      scrollTrigger: {
        trigger: '.about_wrapp',
        start: 'top bottom',
        scrub: 1.9
      },
      yPercent: 40
    })
  }
  about();

  // //benefits
  // function benefits() {
  //   gsap.from('.benefits_num', {
  //     x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
  //     scrollTrigger: {
  //       trigger: '.benefits_list',
  //       start: 'top bottom',
  //       scrub: 1.9
  //     }
  //   })

  //   gsap.from('.benefits_tit', {
  //     x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
  //     scrollTrigger: {
  //       trigger: '.benefits_list',
  //       start: 'top bottom',
  //       scrub: 1.9
  //     }
  //   })
  // }
  // benefits();

  //portfolio
  function portfolio() {
    gsap.from('.work_item-num', {
      scrollTrigger: {
        trigger: '.work',
        start: 'top bottom',
        scrub: 1.9
      },
      yPercent: 100
    })
  }
  portfolio();

  //serv
  // function serv() {
  //   gsap.from('.serv_item-arrow', {
  //     x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
  //     scrollTrigger: {
  //       trigger: '.serv_list',
  //       start: 'top bottom',
  //       scrub: 1.9
  //     }
  //   })
  // }
  // serv();

  //footer
  function footer() {
    const fancy = document.querySelector('.fancy');
    const footlers = document.querySelectorAll('.footler');
    gsap.from('.footer_div span', {
      y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
      opacity: 0,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1.9
      }
    });

    fancy.addEventListener('mouseenter', () => {
      gsap.to(footlers[0], { x: '-80%', y: '60%', rotation: 8, duration: 0.8 });
      gsap.to(footlers[1], { x: '-40%', y: '10%', rotation: 3, duration: 0.8 });
      gsap.to(footlers[2], { x: '50%', y: '-60%', rotation: 5, duration: 0.8 });
      gsap.to(footlers[3], { x: '90%', y: '90%', rotation: 10, duration: 0.8 });
      gsap.to(footlers[4], { x: '-10%', y: '-20%', rotation: 1, duration: 0.8 });
      gsap.to(footlers[5], { x: '35%', y: '-45%', rotation: 12, duration: 0.8 });
      gsap.to(footlers[6], { x: '-80%', y: '60%', rotation: 2, duration: 0.8 });
      gsap.to(footlers[7], { x: '69%', y: '69%', rotation: 6, duration: 0.8 });
      gsap.to(footlers[8], { x: '30%', y: '-90%', rotation: 9, duration: 0.8 });
      gsap.to(footlers[9], { x: '-75%', y: '70%', rotation: 4, duration: 0.8 });
      gsap.to(footlers[10], { x: '58%', y: '-56%', rotation: 11, duration: 0.8 });
    })

    fancy.addEventListener('mouseleave', () => {
      gsap.to(footlers, { x: '0%', y: '0%', rotation: 0, duration: 0.8 });
    });
  }
  footer();

  //cursor
  function cursor() {
    let cursor = $(".cursor"),
      follow = $(".follow"),
      posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    gsap.ticker.add(() => {
      posX += (mouseX - posX) / 7;
      posY += (mouseY - posY) / 7;

      gsap.set(cursor, {
        left: mouseX - 5,
        top: mouseY - 5
      });

      gsap.set(follow, {
        left: posX - 15,
        top: posY - 15
      });
    });

    $(window).on('mousemove', function(e){
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    $(".work_item-img, .work_item-num, .serv_item-txt, .burger, a").on("mouseenter", function(){
      cursor.addClass("active");
      follow.addClass("active");
    });
    $(".work_item-img, .work_item-num, .serv_item-txt, .burger, a").on("mouseleave", function(){
      cursor.removeClass("active");
      follow.removeClass("active");
    });

  }
  cursor();
  //Media responsive
  let mm = gsap.matchMedia();
  mm.add("(max-width: 600px)", () => {
    //nav-bar click
    $('a[href^="#"]').click(function () {
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      let position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, 100);
      if (isOpen) {
        timeline.reverse();
        isOpen = false;
        toggleButton.classList.remove('active'); // Ensure button returns to its original state
      }
      return false;
    })
    //header
    gsap.to('.header_marq-wrapp', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9
      },
      xPercent: -180
    })

    //about
    gsap.from('.about_img img', {
      scrollTrigger: {
        trigger: '.about',
        start: 'bottom top',
        scrub: 1.9
      },
      scale: 2
    })

    //benefits
    // const gTl = gsap.timeline();
    // gTl.from(".benefits_num .char ",1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
    // gTl.from(".benefits_tit", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");

    // gsap.from('.benefits_num', {
    //   scrollTrigger: {
    //     trigger: '.benefits_list',
    //     start: 'top bottom',
    //     scrub: 1.9
    //   },
    //   xPercent: -40
    // })
    // gsap.from('.benefits_tit', {
    //   scrollTrigger: {
    //     trigger: '.benefits_list',
    //     start: 'top bottom',
    //     scrub: 1.9
    //   },
    //   xPercent: -40
    // })
    // work
    gsap.from('.work_item-num', {
      scrollTrigger: {
        trigger: '.work',
        start: 'top bottom',
        scrub: 1.9
      },
      yPercent: 300
    })
  });
})