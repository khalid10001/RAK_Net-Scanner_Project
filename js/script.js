// JavaScript to toggle the 'active' class on the nav for mobile view
document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector('nav');
  const menuBtn = document.querySelector('.dropdown-btn');

  menuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
});
