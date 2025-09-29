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
  
// Scroll suave al dar clic en Projects cuando ya estás en el index
document.addEventListener("DOMContentLoaded", () => {
  const projectsLink = Array.from(document.querySelectorAll('nav a'))
    .find(a => a.getAttribute('href') === '/#projects');
  if (projectsLink) {
    projectsLink.addEventListener('click', (e) => {
      const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
      if (isHome) {
        e.preventDefault();
        const section = document.getElementById('projects');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('translate-x-0')) {
          mobileMenu.classList.remove('translate-x-0');
          mobileMenu.classList.add('-translate-x-full');
        }
      }
    });
  }
});
