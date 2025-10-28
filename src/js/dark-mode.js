// dark-mode.js - shared across all pages
const initTheme = () => {
    const toggleButton = document.getElementById("themeToggle");
    const body = document.body;

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        if (toggleButton) toggleButton.textContent = "☀️";
    }

    // Toggle functionality
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggleButton.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                toggleButton.textContent = "🌙";
            }
        });
    }
};

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}