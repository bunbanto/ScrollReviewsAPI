// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import {
//   fetchReviews,
//   renderReviews,
//   showNotFound,
//   totalPages,
// } from './reviews.js';
// import { initSwiper, updateButtonsState, updateSwiper } from './swiper.js';

// let currentPage = 1;
// const btnNext = document.querySelector('.swiper-button-next');

// async function loadInitialReviews() {
//   try {
//     const reviews = await fetchReviews(currentPage);
//     renderReviews(reviews);
//     initSwiper();
//   } catch (err) {
//     iziToast.error({ message: 'Failed to load reviews', position: 'topRight' });
//     showNotFound();
//     btnNext.disabled = true;
//   }
// }

// btnNext.addEventListener('click', async () => {
//   const swiperWrapper = document.querySelector('.swiper-wrapper');
//   const visibleSlides = swiperWrapper.querySelectorAll('.swiper-slide').length;

//   const isAtEnd = visibleSlides <= currentPage * 2;
//   if (isAtEnd && currentPage < totalPages) {
//     currentPage += 1;
//     try {
//       const reviews = await fetchReviews(currentPage);
//       renderReviews(reviews);
//       updateSwiper();
//       updateButtonsState(totalPages, currentPage);
//     } catch (err) {
//       iziToast.error({
//         message: 'Error loading more reviews',
//         position: 'topRight',
//       });
//     }
//   }
// });

// loadInitialReviews();

import axios from 'axios';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
Swiper.use([Navigation, Keyboard]);
import 'swiper/css';

import 'swiper/css/pagination';

//import iziToast from 'izitoast';

const reviewsWrap = document.querySelector('#reviews-container');
const errorReviews = document.querySelector('.error-message');
//const baseURL = 'https://portfolio-js.b.goit.study/api';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

document.addEventListener('DOMContentLoaded', displayReviews);

const swiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    260: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});
// отримаємо всі відгуки з API
async function getReviews() {
  try {
    const response = await axios.get('/reviews');
    return response.data;
  } catch (error) {
    console.log('Error fetching reviews');
    showError();
  }
}
//рендер відгуків
function renderReviews(reviews) {
  const markup = reviews
    .map(
      ({ author, avatar_url, review }) => `
          <li class="swiper-slide">
            <div class="review-card">
            <p class="review-text">${review}</p>
            <div class="review-info">
              <img src="${avatar_url}" alt="${author}" class="review-avatar" />
              <h3 class="review-author">${author}</h3>
              </div>

            </div>
          </li>
        `
    )
    .join('');

  reviewsWrap.insertAdjacentHTML('beforeend', markup);
  swiper.update();
}

// функція яка відображає відгуки або повідомлення про помилку
async function displayReviews() {
  const reviews = await getReviews();
  if (reviews) {
    renderReviews(reviews);
  }
}

function showError() {
  errorReviews.classList.remove('hidden');
}
