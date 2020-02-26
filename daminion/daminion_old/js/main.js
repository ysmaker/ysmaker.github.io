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
		this.magnific.init();
		this.sliders.indexSlider();
		this.sliders.indexCompanies();
		this.header.stickyHeader();
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
					$('.body').addClass('stickyHeader');
				}
				else
				{
					$('header').removeClass('showF');
					$('.body').removeClass('stickyHeader');
				}
			})
		},
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
		}
	},
	sliders:
	{
		indexSlider: function()
		{
			if($('.index-slider-wr').length > 0)
				$('.index-slider-wr-navigation').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay:true,
					transformEnabled:false,
					arrows: false,
					fade: false,
					asNavFor: '.index-slider-wr-content',
				});
				$('.index-slider-wr-content').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
  					autoplaySpeed: 4000,
					infinite: true,
					asNavFor: '.index-slider-wr-navigation',
					arrows:false,
				});
		},
		indexCompanies: function()
		{
			if($('.index-companies-list').length > 0)
			{
				$('.index-companies-list').slick({
					slidesToShow: 6,
					slidesToScroll: 1,
					variableWidth:true,
					arrows: true,
					fade: false,
					nextArrow: '<div class="nextArrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="26" viewBox="0 0 15 26"><g><g><image width="15" height="26" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAACn0lEQVQ4T42U3U/TUBiH90m6VqEgZR/+D14YLk1IIFxoAmMGwWTTZptjFzhhWYkz3BAiUhSyTOfHgGlmzJgTvTCoiclIdmuIiYl/gCbGHtY1yGb8mKbHnIbOI9Jt567n/J6np2/fc/QzMzOGVCp1X5KkE729vdMbGxuPdU0OfU9PT7xQKFxCebPZ/N3pdHrW19efNcPrD7e2fq6Uy3Y1bDKZqqdHRly5TOZlIwF6s6tQKOR0Op0JE/xwu93D6XT6RT2BHi3a7fYLAIC7EMKagCCIryzLDiWTybyWQIHRcDgcPkEQUhDCWpYgiArLsi4tQQ3e20EACMLyX1ynoyhK8ng8owcJ/oGRgLHZLooA3MK3arFYvvj9/v5EIrGFz/8HKwKGCYmieBMPkhQlBcfGTsVisTfq/IEwWmxvb7+8s7PD4wKapgWvd2wwFruu7EATRotHGOaKJIrX9guCweDJhYWFd3XhvSJOC4JwFRd0dHR8nJycdDWEVQEAYBZCaFAlXV3W983CAQDAPRymafpDQ9hqtQaKxWISQljLkiQpcRw3WhdmGMZfKpVW8a4jSbLs8/lciURiUxPu7OwMSJJ0B+93i8VSGR8fH1pcXNzU/FU2m+3M9vb2GoTQqBaopaXlWygUGl5aWnql2SR7YBYvjtls/hmJRAZ5nn+t2Z4ILBaLD2VZJtQQOprhcNg9Pz//fP/RrH2z1eEYEAHI4SC6VcIc57nB808OOtMKTNP0YLlczsiyTKkho9H4OxqdPjs3N/tU8zLo6+vrz+fz6MI7hINTU9HzPD+3pgUq1W5ra/u0u7t7FA9NTEyci8fjj+qBCny8uzv7dmtrFD0YDAaZ9XqDD1Kp1UagAnMcR60sr+Sqv6rHBpxOPpfN3m4GRJk/musFw+y7howAAAAASUVORK5CYII="/></g></g></svg></div>',
					prevArrow: '<div class="prevArrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="26" viewBox="0 0 15 26"><g><g><image width="15" height="26" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAACn0lEQVQ4T42U3U/TUBiH90m6VqEgZR/+D14YLk1IIFxoAmMGwWTTZptjFzhhWYkz3BAiUhSyTOfHgGlmzJgTvTCoiclIdmuIiYl/gCbGHtY1yGb8mKbHnIbOI9Jt567n/J6np2/fc/QzMzOGVCp1X5KkE729vdMbGxuPdU0OfU9PT7xQKFxCebPZ/N3pdHrW19efNcPrD7e2fq6Uy3Y1bDKZqqdHRly5TOZlIwF6s6tQKOR0Op0JE/xwu93D6XT6RT2BHi3a7fYLAIC7EMKagCCIryzLDiWTybyWQIHRcDgcPkEQUhDCWpYgiArLsi4tQQ3e20EACMLyX1ynoyhK8ng8owcJ/oGRgLHZLooA3MK3arFYvvj9/v5EIrGFz/8HKwKGCYmieBMPkhQlBcfGTsVisTfq/IEwWmxvb7+8s7PD4wKapgWvd2wwFruu7EATRotHGOaKJIrX9guCweDJhYWFd3XhvSJOC4JwFRd0dHR8nJycdDWEVQEAYBZCaFAlXV3W983CAQDAPRymafpDQ9hqtQaKxWISQljLkiQpcRw3WhdmGMZfKpVW8a4jSbLs8/lciURiUxPu7OwMSJJ0B+93i8VSGR8fH1pcXNzU/FU2m+3M9vb2GoTQqBaopaXlWygUGl5aWnql2SR7YBYvjtls/hmJRAZ5nn+t2Z4ILBaLD2VZJtQQOprhcNg9Pz//fP/RrH2z1eEYEAHI4SC6VcIc57nB808OOtMKTNP0YLlczsiyTKkho9H4OxqdPjs3N/tU8zLo6+vrz+fz6MI7hINTU9HzPD+3pgUq1W5ra/u0u7t7FA9NTEyci8fjj+qBCny8uzv7dmtrFD0YDAaZ9XqDD1Kp1UagAnMcR60sr+Sqv6rHBpxOPpfN3m4GRJk/musFw+y7howAAAAASUVORK5CYII="/></g></g></svg></div>',
					responsive: [
					    {
					     	breakpoint: 767,
							settings:
							{
								slidesToShow: 1,
								slidesToScroll: 1,
					     	}
					    }
				    ]
				});
			}
		},
		showSlide: function(instance)
		{
			event.preventDefault();
			var slideno = $(instance).data('slide');
			console.log(slideno)
			$('.index-slider-wr-navigation').slick('slickGoTo', slideno - 1);
		}
	},
	menu:
	{
		toggleClassMenu: function()
		{
			$('.main-header-mobileCatalog-list').toggleClass('_show');
			$('.main-header-mobileCatalog').toggleClass('_show');
		}
	},
	customFormStyler:
	{
		init: function()
		{
			$('.kuppers-input-count').styler();
		}
	},
	scroll:
	{
		animate: function(el)
		{
			$([document.documentElement, document.body]).animate({
		        scrollTop: $(el).offset().top - 150
		    }, 500);
		}
	},
	magnific:
	{
		init: function()
		{
			$('.image-popup').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-img-mobile',
				image: {
					verticalFit: true
				}

			});
		}
	},
	makePhoneMask: function()
	{
		$('._phone-mask').inputmask({"mask": "+7 (999) 999-99-99", showMaskOnHover: false});
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