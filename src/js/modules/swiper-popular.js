import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc() {
	const swiper = new Swiper('#swiper-popular', {
		slidesPerView: 1,
		spaceBetween: 32,
		navigation: {
			nextEl: '#popularNext',
			prevEl: '#popularPrev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			425: {
				slidesPerView: 1,
				spaceBetween: 20,
			}
		},
	});
}

export default swiperFunc;