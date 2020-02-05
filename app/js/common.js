$(document).ready(function(){

	//arrow toTop
	$('.main-down').on('click', function(){
		$('html, body').stop().animate({scrollTop: $(window).innerHeight()}, 'slow', 'swing');
	});

	//menu lang
	$('.header-lang__text').on('click', function(){
		$('.header-lang').toggleClass('active');
	});

	$(document).on('click', function (e){
		var select = $(".header-lang__text");
		if (!select.is(e.target) && select.has(e.target).length === 0) {
			$('.header-lang').removeClass('active');
		}
	});

	//menu mob
	$('.header-bar, .header .close').on('click', function(){
		$('.header').toggleClass('header-active');
	});

	$(document).on('click', function (e){
		var select = $(".header-bar,.header-row");
		if (!select.is(e.target) && select.has(e.target).length === 0) {
			$('.header').removeClass('header-active');
		}
	});

	//modal
	var modalCont = $('.modal'),
		modalOver = $('.modal-overlay');

	$('.button-modal').on('click',function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).addClass('open');
		$(modalOver).addClass('open-overlay');
		$('body').addClass('body-open');
	});

	$('.close, .modal-overlay').on('click',function(){
		$(modalCont).removeClass('open');
		$('.modal-overlay').removeClass('open-overlay');
		$('body').removeClass('body-open');
	});

	//E-mail Ajax Send
	$("form.callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).parents('.modal-content').addClass('form-active');
			setTimeout(function() {
				$(th).parents('.modal-content').removeClass('form-active');
				$('.modal').removeClass('open');
				$('.modal-overlay').removeClass('open-overlay');
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	var close = function(e) {
		$('.main_content_alternativa').css({'transform': 'none'})
		$('.main').css({'display': 'block'})
		setTimeout(function()
		{
			$('.perspective').removeClass('animate')
			$('.perspective').removeClass('modalview')
			window.scrollTo(0,document.body.scrollHeight);
		}, 400)
		// $('.perspective').removeClass('effect-laydown')
		// $('.content_alternativa_side').css({'bottom':'0px'})
		$('.__closePopup').off('click', close);
	}

	$('.__animation__popup').on('click', function(e)
	{
		e.preventDefault();
		e.stopPropagation();
		$('.content_alternativa_side').addClass('__closePopup');
		$('.__closePopup').on('click', close);
		$('.perspective').addClass('animate').addClass('modalview');
		$('.main_content_alternativa').css({'transform': 'translateZ(-200px) rotateX(80deg)'})
		$('.main').css({'display': 'none'})
		$('.content_alternativa_side').css({'bottom':'0px'})
	});

	// $('.main_content_alternativa').on('click', '.__closePopup', function()
	// {
	// 	console.log(this)
	// 	// debugger;
	// 	// $('.perspective').removeClass('animate')
	// 	// $('.perspective').removeClass('modalview')
	// 	// $('.content_alternativa_side').css({'bottom':'0px'})
	// });
});