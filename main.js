function remove_page(key){
	url = window.location.href
	last_sl = url.lastIndexOf(key)
	return url.substring(0,last_sl+1)
}
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

function setup_page(language){
	if(language == 'en'){
		$('.lang').html('<h5>Espa&#xf1;ol</h5>');
	} else {
		$('.lang').html('<h5>English</h5>');
	}
}

$(document).ready(function(){
	var curr_url = window.location.href
	if(!curr_url.includes('l?lang=')){
		index_html = curr_url.indexOf('.html') + 5;
		base = curr_url.substring(0,index_html);
		vars = curr_url.substring(index_html, curr_url.length);
		if(vars.startsWith('?lang=')){
			vars = vars.substring(8,vars.length);
		}
		window.location.href=base+'?lang=en'+vars
	}
	var lang = extract_var('lang');
	setup_page(lang);


	$(".logo").click(function(){
		grade_clicked = $(this).attr('id');

		window.location.href='https://www.dallasisd.org/hawthorne';
	});
	$(".logo").hover(function(){
		$(this).css("cursor", "pointer");
  }, function(){
		$(this).css("cursor", "auto");
	});
	$(".school_name").click(function(){
		grade_clicked = $(this).attr('id');

		window.location.href='https://www.dallasisd.org/hawthorne';
	});
	$(".school_name").hover(function(){
		$(this).css("cursor", "pointer");
  }, function(){
		$(this).css("cursor", "auto");
	});
	$(".lang").hover(function(){
		$(this).css("background-color", "white");
		$(this).css("border-radius", "40px");
		$(this).css("color", "blue");
  	$(this).css("opacity", "0.7");
		$(this).css("cursor", "pointer");
  }, function(){
		$(this).css("background-color", "black");
		$(this).css("color", "white");
  	$(this).css("opacity", "1");
		$(this).css("cursor", "auto");
	});
	$(".lang").click(function(){
		lang = extract_var('lang')
		if(lang == 'en'){
			new_lang = 'es';
		} else {
			new_lang = 'en';
		}
		curr_url = window.location.href
		index_html = curr_url.indexOf('.html') + 5;
		base = curr_url.substring(0,index_html);
		vars = curr_url.substring(index_html, curr_url.length);
		if(vars.startsWith('?lang=')){
			vars = vars.substring(8,vars.length);
		}
		window.location.href=base+'?lang='+new_lang+vars
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

		lang = extract_var('lang')

		window.location.href=remove_page('/')+'weekday.html?lang='+lang+'?grade='+grade_clicked;
	});
});
