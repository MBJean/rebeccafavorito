const navigationAnimator = function(target, height, currentPosition) {
  if (currentPosition >= (height * 0.75 - 15)) {
    target.classList.add('nav__container--active');
  } else {
    target.classList.remove('nav__container--active');
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const primaryNavigation = document.querySelector('#primary-navigation');
  const portfolioButton = document.querySelector('#portfolio-button');
  const portfolioDropdown = document.querySelector('#portfolio-dropdown.nav__dropdown');
  let navTimer;

  if (primaryNavigation) {
    navigationAnimator(primaryNavigation, window.innerHeight, window.pageYOffset);
    document.addEventListener('scroll', function() {
      navigationAnimator(primaryNavigation, window.innerHeight, window.pageYOffset);
    });
  }

  if (portfolioButton && portfolioDropdown) {
    body.addEventListener('click', function(event) {
      if (event.target && event.target.id == 'portfolio-button') {
        return;
      }
      portfolioDropdown.classList.remove('nav__dropdown--active');
    });
    portfolioButton.addEventListener('mouseenter', function() {
      clearTimeout(navTimer);
      portfolioDropdown.classList.add('nav__dropdown--active');
    });
    portfolioDropdown.addEventListener('mouseenter', function() {
      clearTimeout(navTimer);
      portfolioDropdown.classList.add('nav__dropdown--active');
    });
    portfolioButton.addEventListener('mouseleave', function() {
      navTimer = setTimeout(function() {
        portfolioDropdown.classList.remove('nav__dropdown--active');
      }, 500);
    });
    portfolioDropdown.addEventListener('mouseleave', function() {
      navTimer = setTimeout(function() {
        portfolioDropdown.classList.remove('nav__dropdown--active');
      }, 500);
    });
  }
});
