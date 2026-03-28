// Console test
console.log("Portfolio Loaded 🚀");

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button message
function showMessage() {
    alert("Thanks for visiting my portfolio 😄");
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Welcome alert
window.onload = function() {
    console.log("Welcome to Priya's Portfolio 🎉");
}