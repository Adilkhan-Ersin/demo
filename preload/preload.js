function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

startLoader();

gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
});

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".title", 1.5, {
  delay: 4,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".header_marq", 2, {
  delay: 4.5,
  y: 400,
  ease: "power4.inOut",
});

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

  $(".about_img").on("mouseenter", function(){
    cursor.addClass("active");
    follow.addClass("active");
  });
  $(".about_img").on("mouseleave", function(){
    cursor.removeClass("active");
    follow.removeClass("active");
  });

  $(".section-title").on("mouseenter", function(){
    cursor.addClass("active");
    follow.addClass("active");
  });
  $(".section-title").on("mouseleave", function(){
    cursor.removeClass("active");
    follow.removeClass("active");
  });

}
cursor();
