const slide = document.querySelectorAll('.gallery__slide');
const modalOverlay = document.querySelector('.modals-overlay');
const modal = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal-btn');
const main = document.querySelector('body');


slide.forEach((el) => {
  el.addEventListener('click', (e) => {

    let path = e.currentTarget.getAttribute('data-open');

    modal.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    main.classList.add('stop-scroll');

    document.querySelector(`[data-close="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modals-overlay--visible');
  });
});

modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.remove('modals-overlay--visible');
  main.classList.remove('stop-scroll');
  modal.forEach((e) => {
    e.classList.remove('modal--visible');
  });
});

modalClose.forEach((el) => {
  el.addEventListener('click', () => {
  modalOverlay.classList.remove('modals-overlay--visible');
  main.classList.remove('stop-scroll');
  modal.forEach((e) => {
    e.classList.remove('modal--visible');
  });
});
});
