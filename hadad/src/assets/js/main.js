"use strict"
/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	o2.init();

	o2.uiKit.init();
});

/**
 * основной объект
 */
const o2 =
{
	/**
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init()
	{
		this.gRangeSlider.init();
		this.gDatePicker.init();
		this.innputMask.init();
		this.initSlider();
		this.stickHeader();
		this.turnable.init();
		this.customFormStyler.init();
	},
	/**
	* отслеживание клика вне блока
	*/
	clickOutside(element, callback)
	{
		const outsideChecker = (event) =>
		{
			const container = $(element);

			if (!container.is(event.target) && container.has(event.target).length === 0)
			{
				document.removeEventListener('click', outsideChecker);
				callback();
			}
		};

		document.addEventListener('click', outsideChecker);

		return outsideChecker;
	},

	customFormStyler:
	{
		init: function()
		{
			$('.__cart-number').styler();
			$('.__radio-input').styler();
		}
	},

	turnable:
	{
		init: function()
		{
			$('#imag-turn').turntable();
			$('#imag-turn2').turntable();
		},
	},

	stickHeader: function(instance)
	{
		$(window).scroll(function()
		{
			var top = $(document).scrollTop();
	        if(top > 150)
	        {
	        	$("._header").addClass('header--fixed');
	        	// $(".navigation").addClass('navigation--fixed');
	        	$(".navigation-sticky").addClass('navigation--fixed');
	        	$("body").addClass('body--fixed');
	        }
	        else
	        {
	        	$("body").removeClass('body--fixed');
	        	$("._header").removeClass('header--fixed');
	        	// $(".navigation").removeClass('navigation--fixed');
	        	$(".navigation-sticky").removeClass('navigation--fixed');
	        }
		});
	},

	stickHeaderCall: function()
	{
		o2.stickHeader(window);

		$(window).scroll(function()
		{
			o2.stickHeader(this);
		});
	},
}