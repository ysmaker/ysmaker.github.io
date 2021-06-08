"use strict"
o2.initSlider = function ()
{
	setTimeout(function()
	{
		if ($('.g-slider-vertical .slick-slide').length <= 4)
		{
			var elem = $('.g-slider-vertical .slick-track');
			console.log($(elem).length)
		}
		$(elem).addClass('importantRule');
	}, 300);

	$('.g-slider').slick(
	{
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="prev-arrow"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6042 0.877323L11.6041 0.877358L6.49996 5.99154L1.38574 0.877323C1.20497 0.696556 0.9113 0.696556 0.730533 0.877323C0.549767 1.05809 0.549767 1.35176 0.730533 1.53253L6.16232 6.96431C6.25248 7.05448 6.36605 7.09988 6.48992 7.09988C6.60306 7.09988 6.72691 7.05492 6.81752 6.96431L12.2488 1.53305C12.4403 1.35222 12.4402 1.05811 12.2594 0.877323C12.0786 0.696556 11.7849 0.696557 11.6042 0.877323Z" fill="#191C21" stroke="#191C21" stroke-width="0.1"/></svg></div>',
		nextArrow: '<div class="next-arrow"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6042 0.877323L11.6041 0.877358L6.49996 5.99154L1.38574 0.877323C1.20497 0.696556 0.9113 0.696556 0.730533 0.877323C0.549767 1.05809 0.549767 1.35176 0.730533 1.53253L6.16232 6.96431C6.25248 7.05448 6.36605 7.09988 6.48992 7.09988C6.60306 7.09988 6.72691 7.05492 6.81752 6.96431L12.2488 1.53305C12.4403 1.35222 12.4402 1.05811 12.2594 0.877323C12.0786 0.696556 11.7849 0.696557 11.6042 0.877323Z" fill="#191C21" stroke="#191C21" stroke-width="0.1"/></svg></div>',
		asNavFor: '.g-slider-vertical'
	});

	$('.g-slider-vertical').slick(
	{
		infinite: true,
		dots: false,
	    vertical: true,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    verticalSwiping: true,
	    prevArrow: '<div class="prev-arrow"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6042 0.877323L11.6041 0.877358L6.49996 5.99154L1.38574 0.877323C1.20497 0.696556 0.9113 0.696556 0.730533 0.877323C0.549767 1.05809 0.549767 1.35176 0.730533 1.53253L6.16232 6.96431C6.25248 7.05448 6.36605 7.09988 6.48992 7.09988C6.60306 7.09988 6.72691 7.05492 6.81752 6.96431L12.2488 1.53305C12.4403 1.35222 12.4402 1.05811 12.2594 0.877323C12.0786 0.696556 11.7849 0.696557 11.6042 0.877323Z" fill="#191C21" stroke="#191C21" stroke-width="0.1"/></svg></div>',
		nextArrow: '<div class="next-arrow"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6042 0.877323L11.6041 0.877358L6.49996 5.99154L1.38574 0.877323C1.20497 0.696556 0.9113 0.696556 0.730533 0.877323C0.549767 1.05809 0.549767 1.35176 0.730533 1.53253L6.16232 6.96431C6.25248 7.05448 6.36605 7.09988 6.48992 7.09988C6.60306 7.09988 6.72691 7.05492 6.81752 6.96431L12.2488 1.53305C12.4403 1.35222 12.4402 1.05811 12.2594 0.877323C12.0786 0.696556 11.7849 0.696557 11.6042 0.877323Z" fill="#191C21" stroke="#191C21" stroke-width="0.1"/></svg></div>',
		asNavFor: '.g-slider',
	});
}