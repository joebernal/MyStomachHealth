// Get reference to the navbar
var navbar = document.querySelector('.nav-container');

// Listen for the scroll event
window.addEventListener("scroll", function() {
    // Check the current scroll position
    var scrollY = window.scrollY;

    // If we've scrolled past 85px, add the 'small-navbar' class
    if (window.scrollY >= 40) {
        navbar.classList.add("small-navbar");
    }
    
    // If we're at the very top, remove the 'small-navbar' class
    if (window.scrollY === 0) {
        navbar.classList.remove("small-navbar");
    }
});

function toggleNavMenu() {
    const navWrapper = document.querySelector('.nav-list-wrapper');
    const navToggle = document.querySelector('.nav-toggle');

    // Toggle the show class on the nav list
    navWrapper.classList.toggle('show');

    // Toggle the active class on the button
    navToggle.classList.toggle('active');
}