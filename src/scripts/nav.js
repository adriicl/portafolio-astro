document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    document.querySelectorAll("nav a").forEach((link) => {
      if (link.getAttribute("data-link") === currentPath) {
        link.classList.add("text-yellow-400", "border-b-2", "border-yellow-400");
      }
    });
  });