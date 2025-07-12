const hamburgerIcon = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav_links");
const navItems = document.querySelectorAll(".navItems");

hamburgerIcon.addEventListener("click",() => {
    navLinks.classList.toggle("active");
})

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    })
})