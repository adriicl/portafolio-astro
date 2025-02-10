document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    document.querySelectorAll("nav a").forEach((link) => {
      if (link.getAttribute("data-link") === currentPath) {
        link.classList.add("text-green-400", "border-b-2", "border-green-400");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");
  
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("-translate-x-full");
      mobileMenu.classList.toggle("translate-x-0");
    });
  
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("translate-x-0");
      mobileMenu.classList.toggle("-translate-x-full");
    });
  });
  