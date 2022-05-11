$(function(){

	$('.menu__btn').on('click', function(){
		$('.menu__items').toggleClass('menu__items--active');
	})

	$('.menu__link--servis').click( function(e){
		$('.header-servises').toggleClass('header-servises--active');	
		e.preventDefault();	
	})
	

	$('.about-tabs__top-item').on('click', function (e) {
		e.preventDefault();
		$('.about-tabs__top-item').removeClass('about-tabs__top-item--active');
		$(this).addClass('about-tabs__top-item--active');

		$('.about-tabs__content-item').removeClass('about-tabs__content-item--active');
		$($(this).attr('href')).addClass('about-tabs__content-item--active');
	});



  $('.slider__inner-wrapper').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick__btn slick-prev"><img src="images/icon/left.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick__btn slick-next"><img src="images/icon/right.png" alt=""></button>',
		responsive: [
			{
				breakpoint: 1450,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 840,
				settings: {
					dots: false,
					arrows: false,
				}
			}
		]
	});

	$('.big-slider__items').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.small-slider__items'
	});
	$('.small-slider__items').slick({
		slidesToShow: 3,
		arrows: true,
		vertical: true,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick__btn-doctor slick-prev"><img src="images/icon/btn-up.png" alt="кнопка"></button>',
		nextArrow: '<button type="button" class="slick__btn-doctor slick-next"><img src="images/icon/btn-down.png" alt="кнопка"></button>',
		asNavFor: '.big-slider__items',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [{
				breakpoint: 1330,
				settings: {
					slidesToShow: 2,
					vertical: false,
				}
			},
			{
				breakpoint: 930,
				settings: {
					slidesToShow: 1,
					vertical: false,
				}
			},
		]
	});

	$('.about-slider__items').slick({
		centerMode: true,
		slidesToShow: 1,
		prevArrow: false,
		nextArrow: '<button type="button" class="slick__btn-next slick-next"><img src="images/about/arrow-left.png"></button>'
	});

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.coment-tabs__top-item').on('click', function (e) {
		e.preventDefault();
		$('.coment-tabs__top-item').removeClass('coment-tabs__top-item--active');
		$(this).addClass('coment-tabs__top-item--active');

		$('.coment-tabs__content-item').removeClass('coment-tabs__content-item--active');
		$($(this).attr('href')).addClass('coment-tabs__content-item--active');
	});

	$('.coment-tabs__swiper').slick({
		slidesToShow: 2,
		dots: true,
		prevArrow: '<button type="button" class="swiper__btn slick-prev"><img src="images/swiper/left.png"></button>',
		nextArrow:'<button type="button" class="swiper__btn slick-next"><img src="images/swiper/right.png"></button>',
		responsive: [
			{
				breakpoint: 1450,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
			},
/* 			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, */
/* 			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			} */
		]
	});
});