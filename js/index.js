$(window).scroll(function(){
	$('#nav1').toggleClass('hidden', $(this).scrollTop() > 50);
  $('#nav2').toggleClass('visible', $(this).scrollTop() > 50);
});
