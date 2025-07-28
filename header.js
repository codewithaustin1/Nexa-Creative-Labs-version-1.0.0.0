document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  // Toggle menu on button click
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent triggering document click
    navMenu.classList.toggle('show');
  });

  // Prevent clicks inside the menu from closing it
  navMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Close menu on click outside
  document.addEventListener('click', function () {
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
    }
  });
});

