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
    gsap.from('.about_img', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        scrub: 1.9
      },
      yPercent: 60
    })
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


  //benefits
  function benefits() {
    gsap.from('.benefits_num', {
      x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
      scrollTrigger: {
        trigger: '.benefits_list',
        start: 'top bottom',
        scrub: 1.9
      }
    })
  }
  benefits();


  //portfolio
  function portfolio() {
    gsap.from('.work_item, .work_item-num', {
      y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
      scrollTrigger: {
        trigger: '.work',
        start: 'top bottom',
        scrub: 1.9
      }
    })
    gsap.from('.work_item-img img', {
      scale: 1.5,
      scrolLTrigger: {
        trigger: '.work_wrapp',
        start: 'top bottom',
        scrub: 1.9
      }
    })
  }
  portfolio();


  //serv
  function serv() {
    gsap.from('.serv_item-arrow', {
      x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
      scrollTrigger: {
        trigger: '.serv_list',
        start: 'top bottom',
        scrub: 1.9
      }
    })
  }
  serv();


  //footer
  function footer() {
    gsap.from('.footer_div span', {
      y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
      opacity: 0,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1.9
      }
    })
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

    gsap.to({}, 0.016, {
      repeat: -1,

      onRepeat: function(){
        posX += (mouseX - posX) / 7;
        posY += (mouseY - posY) / 7;

        gsap.set(cursor, {
          css: {
            left: mouseX -5,
            top: mouseY -5
          }
        })
        gsap.set(follow, {
          css: {
            left: posX -15,
            top: posY -15
          }
        })
      }
    });

    $(window).on('mousemove', function(e){
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    $(".work_item-img").on("mouseenter", function(){
      cursor.addClass("active");
      follow.addClass("active");
    });
    $(".work_item-img").on("mouseleave", function(){
      cursor.removeClass("active");
      follow.removeClass("active");
    });
    
    $(".serv_item-txt").on("mouseenter", function(){
      cursor.addClass("active");
      follow.addClass("active");
    });
    $(".serv_item-txt").on("mouseleave", function(){
      cursor.removeClass("active");
      follow.removeClass("active");
    });

  }
  cursor()
});