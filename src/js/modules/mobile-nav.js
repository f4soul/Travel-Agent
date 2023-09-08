function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const body = document.body;

	if (!navBtn || !nav || !menuIcon || !body) {
		// Проверка на наличие элементов на странице
		console.error('One or more elements not found.');
		return;
	}

	navBtn.addEventListener('click', toggleMobileNav);

	function toggleMobileNav() {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		body.classList.toggle('no-scroll');

		const navLinks = document.querySelectorAll('.mobile-nav a');
		navLinks.forEach(link => {
			link.addEventListener('click', () => {
				nav.classList.remove('mobile-nav--open');
				menuIcon.classList.remove('nav-icon--active');
				body.classList.remove('no-scroll');
			});
		});
	}
}

export default mobileNav;