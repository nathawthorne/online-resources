$(document).ready(function(){
	// Grade code
	$(".grade").hover(function(){
  	$(this).css("opacity", "0.5");
  }, function(){
  	$(this).css("opacity", "1");
	});

	$(".grade").click(function(){
		grade_clicked = $(this).attr('id');
		window.location.href='weekday.html';
	});

	// week code
	$(".day").hover(function(){
  	$(this).css("opacity", "0.5");
  }, function(){
  	$(this).css("opacity", "1");
	});

	$(".day").click(function(){
		grade_clicked = $(this).attr('id');
		window.location.href='teachers.html';
	});

});
