const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", navToggle);
function navToggle() {
  const nav = document.querySelector(".nav-list");
  const ham = document.querySelector(".hamburger-icon");
  ham.classList.toggle("open");
  nav.classList.toggle("responsive");
}

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 30) {
    document.querySelector(".navbar").classList.add("navbar-move");
  } else {
    document.querySelector(".navbar").classList.remove("navbar-move");
  }
});
