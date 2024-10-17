let menuBtn = document.querySelector(".menu-img");
let navLinks = document.querySelector(".backdrop");
let closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener("click", (e) => {
  document.body.classList.add("lock");
  navLinks.style.display = "block";
  navLinks.classList.add("show");
});
closeBtn.addEventListener("click", (e) => {
  document.body.classList.remove("lock");
  navLinks.style.display = "none";
});