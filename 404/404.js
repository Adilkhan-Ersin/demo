document.addEventListener("DOMContentLoaded", function () {
  'use strict';

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
  
    $("button").on("mouseenter", function(){
      cursor.addClass("active");
      follow.addClass("active");
    });
    $("button").on("mouseleave", function(){
      cursor.removeClass("active");
      follow.removeClass("active");
    });
  }
  cursor();
})
