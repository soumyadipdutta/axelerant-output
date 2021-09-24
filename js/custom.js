/*Custom jquery*/

$('document').ready(function(){
	$('.c-tab__single--heading').click(function(){
		$('.c-tab__single-inner').removeClass('active');
		$(this).parent().addClass('active');
	});

	$('.c-hambargar').click(function(){
		var headerheight = $('.c-header').innerHeight();
		$(this).toggleClass('cross');
		$('.c-navigation').toggleClass('open');
		$('.c-navigation').css('top', headerheight);
	});

	$('.update-config').click(function(){
		$('.c-popup').addClass('open');
	});


	$('.c-input').focus(function() {
	  $(this).parent().addClass('active');
	});
});