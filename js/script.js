console.log('Init!')
const  burger = document?.querySelector('.burger');
const nav = document?.querySelector('.header-top__nav');
const  link = document?.querySelector('.header-top__link');
const  enter = document?.querySelector('.header-enter__link');
const  search = document?.querySelector('.header__search-mobile');
const form = document?.querySelector('.header__form');
const  close = document?.querySelector('.header__search-close');
const  logo = document?.querySelector('.header__logo');
const body = document?.body;

burger?.addEventListener('click', () => {
  nav?.classList.toggle('header-top__nav--visible');
  burger?.classList.toggle('burger--active');
  body?.classList.toggle('stop-scroll');
})

link?.addEventListener('click', () => {
  nav?.classList.remove('header-top__nav--visible');
  burger?.classList.remove('burger--active');
  body?.classList.remove('stop-scroll');
})

enter?.addEventListener('click', () => {
  nav?.classList.remove('header-top__nav--visible');
  burger?.classList.remove('burger--active');
  body?.classList.remove('stop-scroll');
})

search?.addEventListener('click', () => {
  form?.classList.toggle('header__form--visible');
  search?.classList.toggle('header__search-mobile--active');
  logo?.classList.toggle('header__logo--invisible');
  burger?.classList.toggle('header__burger--invisible');
})

close?.addEventListener('click', () => {
  form?.classList.toggle('header__form--visible');
  search?.classList.toggle('header__search-mobile--active');
  logo?.classList.toggle('header__logo--invisible');
  burger?.classList.toggle('header__burger--invisible');
})


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header-top__link').forEach(function(topLink) {
      topLink.addEventListener('click', function() {
          document.querySelectorAll('.header-top__nav').forEach(function(linkContent) {
              linkContent.classList.remove('header-top__nav--visible')
          })
          document.querySelectorAll('.burger').forEach(function(linkContent) {
            linkContent.classList.remove('burger--active')
          })
          document.querySelectorAll('body').forEach(function(linkContent) {
            linkContent.classList.remove('stop-scroll')
          })
      })
  })
})


const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

     if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
       });
     }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

setMenuListener();

const swiper = new Swiper('.js-fone-swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery__slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn-next",
      prevEl: ".gallery__btn-prev"
    },

     breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 5
      },

      577: {
        slidesPerView: 2,
        spaceBetween: 37
      },

     1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});





const element = document.querySelector('select');
const choices = new Choices(element, {
  shouldSort: false,
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom'
});

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();



document.querySelectorAll('.js-tab-btn').forEach(function(tabsBtn){

  tabsBtn.addEventListener('click', function(e){

  const path = e.currentTarget.dataset.path;


document.querySelectorAll('.js-tab-btn').forEach(function(btn){
  btn.classList.remove('tab-active')});
  e.currentTarget.classList.add('tab-active');


document.querySelectorAll('.js-tab-content').forEach(function(tabsBtn){
    tabsBtn.classList.remove('catalog-painters-active')});


document.querySelector(`[data-target="${path}"]`).classList.add('catalog-painters-active');
    });
    });

    document.addEventListener("DOMContentLoaded", () => {
      let eventsSlider = new Swiper(".events__swipper-container", {
        slidesPerView: 1,
        grid: {
          rows: 1,
          fill: "row"
        },
        spaceBetween: 20,
        pagination: {
          el: ".events .events__pagination",
          clickable: true,

        },
        navigation: {
          nextEl: ".events__btn-next",
          prevEl: ".events__btn-prev"
        },

        breakpoints: {
          441: {
            slidesPerView: 1,
            spaceBetween: 30
          },

          605: {
            slidesPerView: 2,
            spaceBetween: 34
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 27
          },

          1281: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true
        },

        a11y: {
          paginationBulletMessage: 'Перейти к слайду {{index}}',
         },


        // on: {
        //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
        //   beforeResize: function () {
        //     this.slides.forEach((el) => {
        //       el.style.marginTop = "";
        //     });
        //   }
        // }
      });
    });

    tippy('.js-btn-tooltip', {
      theme: 'btn-tooltip',
      maxWidth: 264,
    });

    document.addEventListener("DOMContentLoaded", () => {
      const projectsSlider = new Swiper(".projects__swiper-container", {
        slidesPerView: 1,
        grid: {
          rows: 1,
          fill: "row"
        },
        spaceBetween: 20,
        navigation: {
          nextEl: ".projects__btn-next",
          prevEl: ".projects__btn-prev"
        },

        breakpoints: {
          605: {
            slidesPerView: 2,
            spaceBetween: 36
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 50
          },

          1025: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },

        a11y: false,
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
          init: function () {
            this.slides.forEach((slide) => {
              if (!slide.classList.contains("slide-visible")) {
                slide.tabIndex = "-1";
              } else {
                slide.tabIndex = "";
              }
            });
          },
          slideChange: function () {
            this.slides.forEach((slide) => {
              if (!slide.classList.contains("slide-visible")) {
                slide.tabIndex = "-1";
              } else {
                slide.tabIndex = "";
              }
            });
          }
        }

        // on: {
        //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
        //   beforeResize: function () {
        //     this.slides.forEach((el) => {
        //       el.style.marginTop = "";
        //     });
        //   }
        // }
      });
    });

    const forms = document.querySelector('.contacts__form');
    const telSelector = forms.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    new window.JustValidate('.contacts__form', {
      rules: {
        tel:{
          required:true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        }
      },
      messages: {
        name: {
          required: 'Как вас зовут?',
          minLength: 'Минимум 3 символа',
          maxLength: 'Максимум 15 символов'
        },
        tel: {
          required: 'Укажите ваш телефон',
          function: 'Укажите ваш телефон',
        },
      },
      focusWrongField: true,
      colorWrong: '#d11616',
    })

    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75846806898367, 37.60108849999989],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
        });
        var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/metka.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -42]

        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
     }


