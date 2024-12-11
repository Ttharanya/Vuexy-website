const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '🌞';  // Show sun for switching to light mode
    } else {
        themeToggleBtn.textContent = '🌙';  // Show moon for switching to dark mode
    }
});

// Initial setting based on light mode
if (body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '🌞';  // Set sun icon if in dark mode
} else {
    themeToggleBtn.textContent = '🌙';  // Set moon icon if in light mode
}

// script.js


