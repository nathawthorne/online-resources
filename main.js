function remove_page(){
	url = window.location.href
	last_sl = url.lastIndexOf('/')
	return url.substring(0,last_sl+1)
}

$(document).ready(function(){
	console.log()
	// Grade code
	$(".grade").hover(function(){
  	$(this).css("opacity", "0.5");
  }, function(){
  	$(this).css("opacity", "1");
	});

	$(".grade").click(function(){
		grade_clicked = $(this).attr('id');

		window.location.href=remove_page()+'weekday.html?grade='+grade_clicked;
	});
});
