document.addEventListener("DOMContentLoaded", () => {
  const hamBurgerIcon = document.querySelector(".hamburger");
  const openMenuBar = document.querySelector(".nav-menu");

  hamBurgerIcon.addEventListener("click", () => { 
    openMenuBar.classList.toggle("active"); // 
  });

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    openMenuBar.classList.remove("active");
  }))
});
