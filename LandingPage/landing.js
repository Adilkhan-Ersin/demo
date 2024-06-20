function loader() {
  const loader = document.querySelector(".loader");
  let loaderItem = document.querySelectorAll(".loader_item");
  
  const tl = gsap.timeline();
  gsap.set(loaderItem, {
    transformOrigin: "100% 100%",
    scaleX: 1
  }),

    tl.to(loaderItem, .5, {
      scalex: 0,
      transformOrigin: "0% 0%",
      stagger: .02,
      ease: "power3.out"
    })
  
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loader();
  },  1000);
});