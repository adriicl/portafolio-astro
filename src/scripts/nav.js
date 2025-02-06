document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    document.querySelectorAll("nav a").forEach((link) => {
      if (link.getAttribute("data-link") === currentPath) {
        link.classList.add("text-green-400", "border-b-2", "border-green-400");
      }
    });
  });