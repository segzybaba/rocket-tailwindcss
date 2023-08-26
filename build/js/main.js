const initApp = () => {
  const btn = document.querySelector('#hamburger-button');
  const mobileMenu = document.querySelector('#mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    btn.classList.toggle('toggle-btn');
  };

  btn.addEventListener('click', toggleMenu);

  mobileMenu.addEventListener('click', toggleMenu);
};
document.addEventListener('DOMContentLoaded', initApp);
