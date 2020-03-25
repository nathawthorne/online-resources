function extract_var(name){
	var url = window.location.href
	var first_q = url.indexOf('html?')

	var all_vars = url.substring(first_q+1, url.length)

	var useful_var = all_vars.indexOf(name)
	var next_var = all_vars.indexOf('?',useful_var)
	if (next_var == -1){
		next_var = all_vars.length
	}

	var value = all_vars.substring(useful_var + name.length+1,next_var)

	return value
}

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

// week code
$(".day").hover(function(){
	$(this).css("cursor", "pointer");
	$(this).css("opacity", "0.5");
}, function(){
	$(this).css("cursor", "auto");
	$(this).css("opacity", "1");
});

$(".day").click(function(){

	var grade = extract_var("grade");
	var day_clicked = $(this).attr('id');
	window.location.href=remove_page()+'teachers.html?grade='+grade+'?day='+day_clicked;
});

});
