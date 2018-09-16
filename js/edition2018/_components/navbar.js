(() => {
  const $navbar = document.querySelector('.js-navbar');
  const $closeButton = document.querySelector('.js-navbar-close');
  const $openButton = document.querySelector('.js-navbar-open');

  const closeNavbar = (e) => {
    if (e) {
      e.preventDefault();
    }

    $navbar.classList.remove('is-open');
  };

  const openNavbar = (e) => {
    if (e) {
      e.preventDefault();
    }

    $navbar.classList.add('is-open');
  };

  $closeButton.addEventListener('click', closeNavbar);
  $openButton.addEventListener('click', openNavbar);

})();
