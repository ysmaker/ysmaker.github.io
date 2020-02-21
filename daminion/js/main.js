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