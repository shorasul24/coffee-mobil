const elHeader = document.querySelector('.header');
const elHamburger = document.querySelector('.humburger');

elHamburger.addEventListener('click', () => {
	elHeader.classList.toggle('header--open');
});