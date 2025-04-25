// import Swiper from 'swiper';
// import { Navigation, Keyboard } from 'swiper/modules';
// Swiper.use([Navigation, Keyboard]);
// import 'swiper/css';
// //import 'swiper/css/navigation';

// let swiper;
// const btnPrev = document.querySelector('.swiper-button-prev');
// const btnNext = document.querySelector('.swiper-button-next');

// export function initSwiper() {
//   swiper = new Swiper('.swiper', {
//     slidesPerView: 2,
//     spaceBetween: 24,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//     on: {
//       slideChange: updateButtonsState,
//     },
//   });

//   updateButtonsState();
// }

// export function updateButtonsState(totalPages, currentPage) {
//   btnPrev.disabled = swiper.isBeginning;
//   btnNext.disabled = currentPage >= totalPages;

//   btnPrev.classList.toggle('disabled', swiper.isBeginning);
//   btnNext.classList.toggle('disabled', currentPage >= totalPages);
// }

// export function updateSwiper() {
//   if (swiper) swiper.update();
// }
