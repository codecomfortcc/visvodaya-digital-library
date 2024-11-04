const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});




document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('show');
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
});
