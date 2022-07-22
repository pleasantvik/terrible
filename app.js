const header = document.querySelector(".heading");

const toggleBtn = document.querySelector(".btn-mobile-nav");

// MOBILE NAVIGATION
toggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
