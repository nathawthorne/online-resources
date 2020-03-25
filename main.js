function remove_page(){
	url = window.location.href
	last_sl = url.lastIndexOf('/')
	return url.substring(0,last_sl+1)
}

$(document).ready(function(){
	$(".header").click(function(){
		grade_clicked = $(this).attr('id');

		window.location.href='https://www.dallasisd.org/hawthorne';
	});
	// Grade code
	$(".header").hover(function(){
		$(this).css("cursor", "pointer");
  }, function(){
		$(this).css("cursor", "auto");
	});

	// Grade code
	$(".grade").hover(function(){
  	$(this).css("opacity", "0.5");
		$(this).css("cursor", "pointer");
  }, function(){
  	$(this).css("opacity", "1");
		$(this).css("cursor", "auto");
	});

	$(".grade").click(function(){
		grade_clicked = $(this).attr('id');

		window.location.href=remove_page()+'weekday.html?grade='+grade_clicked;
	});
});
