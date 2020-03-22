"use strict"

/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	o2.init();
});

/**
 * основной объект
 * @type {object}
 */
var o2 =
{
	/**
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init: function()
	{
		this.makePhoneMask();
		this.range();
		this.header.stickyHeader();
		this.tabs()
		this.scroll();
		this.sliders.neededSlider();
		this.sliders.usersSaySlider();
		this.sliders.bannersSlider();
		this.sliders.helpfulSlider();
	},
	header:
	{
		stickyHeader: function()
		{
			if($('header').length > 0)
				var header = $('header').offset().top;

			var $window = $(window);
			$window.on('load scroll', function(){
				var top = $window.scrollTop();
				if (top > header+70)
				{
					$('header').addClass('showF');
					$('body').addClass('stickyHeader');
				}
				else
				{
					$('header').removeClass('showF');
					$('body').removeClass('stickyHeader');
				}
			})
		},
	},
	scroll: function()
	{
		let elementClick = $('.solutions');
		let destination = $(elementClick).offset().top;
		let blockHeight = $('.solutions__wrapper').height() + destination;
console.log(blockHeight)
		$(window).scroll(function (event)
		{
			if(window.innerWidth > 1200)
			{
				if(window.scrollY > destination && window.scrollY < blockHeight)
				{
					$('.solutions__title').find('svg, .solutions__box-icons').addClass('display-none');
					$('.solutions__title').addClass('solutions__title_fixed');
				}
				else
				{
					$('.solutions__title').find('svg, .solutions__box-icons').removeClass('display-none');
					$('.solutions__title').removeClass('solutions__title_fixed');
				}
			}
			else
			{
				$('.solutions__title').find('svg, .solutions__box-icons').removeClass('display-none');
				$('.solutions__title').removeClass('solutions__title_fixed');
			}
		})
	},
	tabs: function (instance, tabId)
	{
		$(instance).addClass('needed__tab-name-item_active')
		const active = $('.needed__tabs').find('.needed__tabs-wr[data-id="' + tabId + '"]');
		$(active).addClass('active')
		$(active).siblings().removeClass('active')

			// $(instance).parents('.slick-slide').siblings().find('.needed__tab-name-item').removeClass('needed__tab-name-item_active')
			$(instance).siblings().removeClass('needed__tab-name-item_active')
	},
	spoiler:
	{
		toggle: function(instance)
		{
		    $(instance).toggleClass('active');
			$(instance).next().slideToggle(300);
		}
	},
	sliders:
	{
		neededSlider: function ()
		{
			$('.needed__tab-name-list').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				mobileFirst: true,
				arrows: true,
				dots: false,
				nextArrow: "<img class='slick-next' src='./img/next.png'>",
				prevArrow: "<img class='slick-prev display-none' src='./img/prev.png'>",
				variableWidth: true,
				responsive: [
					{
						breakpoint: 768,
						settings: 'unslick'
					}
				],
			});
			$(window).resize(function ()
			{
				if ($(window).width() <= 768)
					$('.needed__tab-name-list').slick('init');
			});
			$('.needed__tab-name-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
					$('.slick-prev').removeClass('display-none')
			  });
		},
		bannersSlider: function ()
		{
			$('.infoblock__sldier-wr').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				mobileFirst: true,
				arrows: true,
				adaptiveHeight: true,
				dots: false,
				nextArrow: '<div class="slick-next nextArrow"><svg width="8" height="17" viewBox="0 0 8 17" fill="#F0F5FB" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.56517 7.42074C7.14912 8.0168 7.14912 8.9832 6.56517 9.57925L3.14505e-08 16.2805L0.704893 17L7.27006 10.2988C8.24331 9.30533 8.24331 7.69467 7.27006 6.70124L0.704894 -3.18879e-07L7.11643e-07 0.719503L6.56517 7.42074Z" fill="#2F74C8"/></svg></div>',
				prevArrow: '<div class="slick-prev prevArrow"><svg width="8" height="17" viewBox="0 0 8 17" fill="#2F74C8" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.43483 7.42074C0.850881 8.0168 0.85088 8.9832 1.43483 9.57925L8 16.2805L7.29511 17L0.729939 10.2988C-0.243315 9.30533 -0.243313 7.69467 0.729941 6.70124L7.29511 -3.18879e-07L8 0.719503L1.43483 7.42074Z" fill="#2F74C8"/></svg></div>',
				responsive: [
					{
						breakpoint: 768,
						settings: 'unslick'
					}
				],
			});
			$(window).resize(function ()
			{
				if ($(window).width() <= 768)
					$('.infoblock__sldier-wr').slick('init');
			});

		},
		helpfulSlider: function ()
		{
			$('.helpful__slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				mobileFirst: true,
				arrows: true,
				dots: false,
				adaptiveHeight: true,
				nextArrow: '<div class="slick-next nextArrow"><svg width="8" height="17" viewBox="0 0 8 17" fill="#F0F5FB" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.56517 7.42074C7.14912 8.0168 7.14912 8.9832 6.56517 9.57925L3.14505e-08 16.2805L0.704893 17L7.27006 10.2988C8.24331 9.30533 8.24331 7.69467 7.27006 6.70124L0.704894 -3.18879e-07L7.11643e-07 0.719503L6.56517 7.42074Z" fill="#2F74C8"/></svg></div>',
				prevArrow: '<div class="slick-prev prevArrow"><svg width="8" height="17" viewBox="0 0 8 17" fill="#2F74C8" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.43483 7.42074C0.850881 8.0168 0.85088 8.9832 1.43483 9.57925L8 16.2805L7.29511 17L0.729939 10.2988C-0.243315 9.30533 -0.243313 7.69467 0.729941 6.70124L7.29511 -3.18879e-07L8 0.719503L1.43483 7.42074Z" fill="#2F74C8"/></svg></div>',
				responsive: [
					{
						breakpoint: 768,
						settings: 'unslick'
					}
				],
			});
			$(window).resize(function ()
			{
				if ($(window).width() <= 768)
					$('.helpful__slider').slick('init');
			});

		},
		usersSaySlider: function()
		{
			$('.users-say__list').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				nextArrow: '<div class="slick-next nextArrow"><svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.56517 7.42074C7.14912 8.0168 7.14912 8.9832 6.56517 9.57925L3.14505e-08 16.2805L0.704893 17L7.27006 10.2988C8.24331 9.30533 8.24331 7.69467 7.27006 6.70124L0.704894 -3.18879e-07L7.11643e-07 0.719503L6.56517 7.42074Z" fill="white"/></svg></div>',
				prevArrow: '<div class="slick-prev prevArrow"><svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.43483 7.42074C0.850881 8.0168 0.85088 8.9832 1.43483 9.57925L8 16.2805L7.29511 17L0.729939 10.2988C-0.243315 9.30533 -0.243313 7.69467 0.729941 6.70124L7.29511 -3.18879e-07L8 0.719503L1.43483 7.42074Z" fill="white"/></svg></div>',
			});
		}
	},
	popups:
	{
		showPopup: function(popup)
		{
			$('._overlay').addClass('_show');
			$(popup).addClass('_show');
			$('body').css('overflow', 'hidden');
		},
		closePopup: function()
		{
			$('._overlay').removeClass('_show');
			$('.popup').removeClass('_show');
			$('body').css('overflow', 'visible');
		},
	},
	popupsFull:
	{
		showPopup: function(popup)
		{
			$('._overlay').toggleClass('_show');
			$('._overlay').toggleClass('mobile-overlay');
			$('.header__burger').toggleClass('active');
			$(popup).toggleClass('_show');
		}
	},
	makePhoneMask: function()
	{
		$('._phone-mask').inputmask({"mask": "+7 (999) 999-99-99"});
	},

	// custom placeholder
	customPlaceholder:
	{
		customPlaceholder: function(instance)
		{
			$(instance).prev().addClass('onFocus')
		},
		customPlaceholderHide: function(instance)
		{
			if($(instance).val() != "")
				return false
			$(instance).prev().toggleClass('onFocus')
		},
	},

	range: function()
	{
		var sliders = document.getElementsByClassName('daminion_range');

		for ( var i = 0; i < sliders.length; i++ ) {

		    noUiSlider.create(sliders[i], {
		        start: 9,
				connect: [true, false],
		        orientation: "horizontal",
		        step: 1,
		        range: {
		            'min': 0,
		            'max': 100
		        },
		    });

		    sliders[i].noUiSlider.on('slide', addValues);
		}

		function addValues(){
		    var allValues = [];

		    for (var i = 0; i < sliders.length; i++) {
		        console.log(allValues.push(sliders[i].noUiSlider.get()));
		    };

		    console.log(allValues);
		}
	},
}