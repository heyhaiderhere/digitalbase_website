const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", navToggle);
function navToggle() {
  const nav = document.querySelector(".nav-list");
  nav.classList.toggle("responsive");
}

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       document.querySelector(".navbar").classList.add("navbar-move");
//     } else {
//       document.querySelector(".navbar").classList.remove("navbar-move");
//     }
//   });
// });

// const trigger = document.querySelectorAll(".nav-trigger");

// trigger.forEach((el) => observer.observe(el));

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 30) {
    document.querySelector(".navbar").classList.add("navbar-move");
  } else {
    document.querySelector(".navbar").classList.remove("navbar-move");
  }
});
