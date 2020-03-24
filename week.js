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

$(document).ready(function(){
// week code
$(".day").hover(function(){
	$(this).css("opacity", "0.5");
}, function(){
	$(this).css("opacity", "1");
});

$(".day").click(function(){

	var grade = extract_var("grade");
	var day_clicked = $(this).attr('id');
	window.location.href='teachers.html?grade='+grade+'?day='+day_clicked;
});

});
