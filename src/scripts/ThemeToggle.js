document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.createElement("button");
    themeToggleBtn.classList.add("theme-toggle-btn", "fixed", "bottom-6", "right-6", "p-3", "rounded-full", "shadow-lg", "bg-gray-800", "text-white", "hover:bg-gray-700", "transition");
    themeToggleBtn.innerHTML = "🌙"; // Modo oscuro predeterminado
    document.body.appendChild(themeToggleBtn);

    // Verificar el tema en localStorage o aplicar oscuro por defecto
    let savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark"); // Guarda oscuro como predeterminado
        savedTheme = "dark";
    } else if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        themeToggleBtn.innerHTML = "☀️"; // Cambiar icono al sol en modo claro
    }

    // Función para alternar temas
    themeToggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");

        if (document.documentElement.classList.contains("light")) {
            localStorage.setItem("theme", "light");
            themeToggleBtn.innerHTML = "☀️"; // Cambiar a sol
        } else {
            localStorage.setItem("theme", "dark");
            themeToggleBtn.innerHTML = "🌙"; // Cambiar a luna
        }
    });
});
