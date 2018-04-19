// libs
//-------------------------------------------------------
window.$ = window.jQuery = require('jquery');

import Swiper from 'swiper';
window.Swiper = Swiper;

require('./libs/index');

// utils
//----------------------------------------------
require('./utils/index');

// app
//---------------------------------------------
require('./components/swiper/index');
require('./components/fadeIn/index');

$(document).ready(function () {

	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

import '../styles/index.scss';
