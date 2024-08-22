const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage and apply it
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    themeToggleBtn.innerHTML = currentTheme === 'light-mode' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const navToggleBtn = document.querySelector('.nav-toggle-btn');
    const nav = document.querySelector('nav');

    navToggleBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

