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
		this.customFormStyler.init();
		this.makePhoneMask();
		this.order.init();
		this.mainSlider();
		this.porfolioSlider();
		this.porfolioSliderBottom()
//		this.progressBar.init();
		$(document).ready(function() {
		  $('.image-magnific').magnificPopup({type:'image'});
		});
	},
	mainSlider() {
		$('.main-banner__slick').slick({
			autoplay: true,
			dots: true,
			slidesToShow: 4,
			arrows: true,
			prevArrow: "<img class='main__slick slick-prev' src='img/prev.png'>",
			nextArrow: "<img class='main__slick slick-next' src='img/next.png'>",
			slidesToScrol: 1,
			responsive:[
				{
					breakpoint: 1200,
					settings:{
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 992,
					settings:{
						slidesToShow: 1,
					}
				}
			]

		});
		},
		porfolioSlider() {
		$('.porfolio__slick').slick({
			autoplay: true,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: "<img class='main__slick slick-prev' src='img/prev.png'>",
			nextArrow: "<img class='main__slick slick-next' src='img/next.png'>",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						variableWidth: true,
						centerMode: true
					}
				}
			]


		});
	},
	porfolioSliderBottom() {
		$('.portfolio__bottom-slick').slick({
			autoplay: true,
			dots: true,
			slidesToShow: 3,
			arrows: true,
			variableWidth: true,
			prevArrow: "<img class='main__slick slick-prev' src='img/prev.png'>",
			nextArrow: "<img class='main__slick slick-next' src='img/next.png'>",
			slidesToScrol: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						variableWidth: true,
						centerMode: true
					}
				},
			]

		});
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
	spoiler:
	{
		toggle: function(instance)
		{
			$(instance).toggleClass('active');
			$(instance).next().slideToggle(300);
			$(instance).parent().siblings().children('.left-menu__btn').removeClass('active')
			$(instance).parent().siblings().children('.left-menu__list').css("display", "none")	
		}
	},
	menu:
	{
		toggleClassMenu: function()
		{
			$('.header__mobile').toggleClass('header__show');
			$('.main-header-mobileCatalog').toggleClass('_show');
		}
	},
	customFormStyler:
	{
		init: function()
		{
			$('.input-formstyler').styler();
		}
	},
	makePhoneMask: function()
	{
		$('._phone-mask').inputmask({"mask": "+7 (999) 999-99-99", showMaskOnHover: false});
	},
	progressBar:
	{
		init: function()
		{
			if ($('#progressbar').length>0){
				$('#progressbar').html('');
				var precent = $('#progressbar').attr('data-precent');
				var color = $('#progressbar').attr('data-color');
				console.log(precent)
				var bar = new ProgressBar.Circle(progressbar,
				{
					strokeWidth: 4,
					easing: 'easeInOut',
					duration: 1400,
					color: color,
					trailColor: '#eee',
					trailWidth: 1,
					svgStyle: null
				});
				bar.animate(precent);  // Number from 0.0 to 1.0
			}
		}
	},
	order:
	{
		init: function()
		{
		    // event.preventDefault();
			$('#order-payment input').on('change', function()
			{
				var inputText = $('input[name=payment]:checked', '#order-payment').parent().text();
				$('#_select-payment').text(inputText);
			});

			$('#order-gift input').on('change', function()
			{
				var inputText = $('input[name=extfld_gift]:checked', '#order-gift').parent().find('.gift-title').text();
				console.log(inputText);
				$('#_select-gift').text(inputText);
			});
		},
		addedItem: function(instance)
		{
            $(instance).addClass('item-added');
            $(instance).text('В корзине');
		}
	},
	animate:
	{
		scroll: function(el)
		{
		    event.preventDefault();
			if (window.innerWidth < 767)
			{
				$([document.documentElement, document.body]).animate({
			        scrollTop: $('.order-page-list-service-mob').offset().top - 40
			    }, 500);
			}
			else
			{
				if (el == '#service')
				{
					$('#service .order-page-list-content').show();
				}
				$([document.documentElement, document.body]).animate({
			        scrollTop: $(el).offset().top - 40
			    }, 500);
			}
		}
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
	}
}