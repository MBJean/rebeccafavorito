const navigationAnimator = function(target, currentPosition) {
  if (currentPosition >= 100) {
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
  const portfolioImages = document.querySelectorAll('.portfolio__image');
  const portfolioPanel = document.querySelector('#portfolio-panel');
  const portfolioPanelBackground = document.querySelector('#portfolio-panel-background');
  const portfolioPanelButton = document.querySelector('#portfolio-panel-button');
  let navTimer;

  if (primaryNavigation) {
    navigationAnimator(primaryNavigation, window.pageYOffset);
    document.addEventListener('scroll', function() {
      navigationAnimator(primaryNavigation, window.pageYOffset);
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

if (portfolioPanel) {
  portfolioPanelButton.addEventListener('click', () => {
    portfolioPanel.classList.remove('portfolio__image-panel--active');
  });
  portfolioPanelBackground.addEventListener('click', () => {
    portfolioPanel.classList.remove('portfolio__image-panel--active');
  });
  portfolioImages.forEach(image => {
    image.addEventListener('click', (event) => {
      const oldImg = document.querySelector('#portfolio-panel-image');
      if (oldImg) {
        oldImg.remove();
      }
      portfolioPanel.classList.add('portfolio__image-panel--active');
      const originalSrc = event.target.src;
      const originalAlt = event.target.alt;
      const newSrc = event.target.src.replace('portfolio-thumbnails', 'portfolio-high-resolution');
      const newImg = document.createElement('img');
      newImg.src = newSrc;
      newImg.alt = originalAlt;
      newImg.id = 'portfolio-panel-image';
      newImg.classList.add('portfolio__image-panel-image');
      portfolioPanel.appendChild(newImg);
    });
  });
}
});
