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
		this.sliders.neededSlider();
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
	tabs: function (instance, tabId)
	{
		$(instance).addClass('needed__tab-name-item_active')
		const active = $('.needed__tabs').find('.needed__tabs-wr[data-id="' + tabId + '"]');
		$(active).addClass('active')
		$(active).siblings().removeClass('active')

		if ($(window).width() < 768)
		{
			$(instance).parents('.slick-slide').siblings().find('.needed__tab-name-item').removeClass('needed__tab-name-item_active')
		}
		else
		{
			$(instance).siblings().removeClass('needed__tab-name-item_active')
		}
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