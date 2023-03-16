const initCarousel = () => {
  const carousels = $('.carousel--photos');
  if (carousels.length) {
    console.log(carousels);
    $.each(carousels, function (index, carousel) {
      console.log(carousel);
      $(carousel).slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
    });
  }
};

$(function () {});
$(window).on('load', function () {
  initCarousel();
});

// viewportをスクリーンサイズによって切り替え
const viewport = document.querySelector('meta[name="viewport"]');

function update() {
  let content = 'width=device-width, initial-scale=1.0';
  if (window.screen.width > 640) {
    content = 'width=1240';
  } else if (window.screen.width < 375) {
    content = 'width=375';
  }
  viewport.setAttribute('content', content);
}

window.addEventListener('resize', update);
window.addEventListener('orientationchange', update);
update();

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const header = document.querySelector('.Header');
const button = document.querySelector('.HeaderMenuButton');
const menu = document.querySelector('#HeaderMenu');

let isOpened = false;

const open = () => {
  if (isOpened) {
    return;
  }
  isOpened = true;
  button.setAttribute('aria-expanded', 'true');
  menu.setAttribute('aria-hidden', 'false');
};

const close = () => {
  if (!isOpened) {
    return;
  }
  isOpened = false;
  button.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
};

button.addEventListener('click', () => {
  if (isOpened) {
    close();
  } else {
    open();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    close();
  }
});

window.matchMedia('screen and (max-width: 1000px').addEventListener('change', e => {
  if (!e.target.matches) {
    close();
  }
});