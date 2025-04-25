// import axios from 'axios';

// const notFound = document.querySelector('.fallback-message');
// const reviewsList = document.querySelector('#reviews-container');
// exp ort let totalPages ;

// export async function fetchReviews(page = 1, limit = 2) {
//   const { data } = await axios.get(
//     `https://portfolio-js.b.goit.study/api/reviews?page=${page}&limit=${limit}`
//   );

//   if (!data || !data.results.length) throw new Error('No reviews');

//   if (!totalPages) totalPages = Math.ceil(data.total / limit);
//   return data.results;
// }

// export function renderReviews(reviews) {
//   const markup = reviews
//     .map(
//       ({ author, avatar_url, review }) => `
//         <li class="swiper-slide">
//           <div class="review-card">
//             <img src="${avatar_url}" alt="${author}" class="review-avatar" />
//             <h3 class="review-author">${author}</h3>
//             <p class="review-text">${review}</p>
//           </div>
//         </li>
//       `
//     )
//     .join('');
//   reviewsList.insertAdjacentHTML('beforeend', markup);
// }

// export function showNotFound() {
//   notFound.classList.remove('hidden');
// }
