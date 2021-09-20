'use strict';

const burgerBtn = document.querySelector('.header__burger'),
      burgerMenu = document.querySelector('.header__nav'),
      burgerLinks = document.querySelectorAll('.nav__item');
const toggleBurger = () => {

      burgerBtn.classList.toggle('active');
      burgerMenu.classList.toggle('active');
      document.body.classList.toggle('lock');
};
  burgerBtn.addEventListener('click', ()=> {
    toggleBurger();
  });
  burgerLinks.forEach(item => {
    item.addEventListener('click',toggleBurger);
  });


(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight + 50;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;
    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };
  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 500);
      });
    });
  };
  scrollTo();
}());

const cover = document.querySelectorAll('.works__hide');
let btnNumber ;
// переменная не позволяет функции сработать, когда открыт таб, а пользователь кликает на него для закрытия.
cover.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            hide();
            if (btnNumber !== i){
            show(this);
            }
            btnNumber = undefined;
        });
        
    });

    const show = function (trigger) {
        trigger.classList.add('active-style');
    }
    function hide() {
      cover.forEach((activeBtn, i) => {
            if (activeBtn.classList.contains('active-style')) {
                activeBtn.classList.remove('active-style');
                btnNumber = i;
            }
        });
    }
console.log('Total grade for the task - 150. (Doesn`t have video)')
