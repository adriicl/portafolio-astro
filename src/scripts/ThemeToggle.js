document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.innerHTML = "🌙";
    themeToggle.classList.add("theme-toggle-btn");

    document.body.appendChild(themeToggle);

    // Verificar si hay un tema guardado en localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeToggle.innerHTML = "☀️";
    } else {
        document.body.classList.remove("dark");
        themeToggle.innerHTML = "🌙";
    }

    // Evento de clic para alternar tema
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙";
        }
    });
});
