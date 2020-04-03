var text_files = {
"menu_text":{'en': {'buster': 'Weekly Boredom Buster', 'news': 'Weekly News Letter', 'grades': 'Weekly Work', 'online': 'Remote Learning FAQ'}, 'es': {'buster': 'Reto Semanal Para no Aburrirse', 'news': 'Noticiero Semanal', 'grades': 'Trabajo de la Semana', 'online': 'Ayuda para Aprender de Casa'}},
"news_letter":{
	"en":"imgs/news_letters/en_news_46-410.png",
	"es":"imgs/news_letters/es_news_46-410.png"
}
}


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
		$('.lang').html('<h5>A Espa&#xf1;ol</h5>');
	} else {
		$('.lang').html('<h5>To English</h5>');
	}

	// Setting up Menu
	$('#buster').html(text_files['menu_text'][language]['buster']);
	$('#news').html(text_files['menu_text'][language]['news']);
	$('#grades').html(text_files['menu_text'][language]['grades']);
	$('#online').html(text_files['menu_text'][language]['online']);
	if(language == 'en'){
		$('#counsel').html('Counseling Services');
	}else{
		$('#counsel').html('Servicios de Consejeria');
	}

	console.log(text_files['news_letter'][language])
	$('.news_letter').attr('src', text_files['news_letter'][language]);
}

$(document).ready(function(){
	var curr_url = window.location.href
	if(!(curr_url.includes('?lang='))){
		curr_url = window.location.href + '?lang=en';
		window.location.href = curr_url;
	}
	var lang = extract_var('lang');
	setup_page(lang);


	$(".logo").click(function(){
		grade_clicked = $(this).attr('id');

		window.location.href='https://www.dallasisd.org/hawthorne';
	});
	$(".school_name").click(function(){
		grade_clicked = $(this).attr('id');

		window.location.href=remove_page('/')+'index.html?lang='+lang;
	});

	$(".lang").click(function(){
		lang = extract_var('lang')
		if(lang == 'en'){
			new_lang = 'es';
		} else {
			new_lang = 'en';
		}
		curr_url = window.location.href
		base = remove_page('?lang=')
		base = base.substring(0,base.length-1)
		vars = curr_url.substring(base.length,curr_url.length);
		if(vars.startsWith('?lang=')){
			vars = vars.substring(8,vars.length);
		}
		window.location.href=base+'?lang='+new_lang+vars
	});

	var timer;
	$(".menu_button").hover(function(){
		$(this).css('display','auto');
		clearTimeout(timer);
		$('.nav').removeClass('invisible');
	}, function(){
		timer = setTimeout(function() {
        $('.nav').addClass('invisible');
    }, 100);
	});





	$('#buster').click(function(){
		window.location.href = remove_page('/')+ 'buster.html?lang='+lang;
	});
	$('#news').click(function(){
		window.location.href = remove_page('/')+ 'news_letter.html?lang='+lang;
	});

	$('#grades').click(function(){
		window.location.href = remove_page('/')+ 'grade.html?lang='+lang;
	});
	$('#online').click(function(){
		window.location.href = remove_page('/')+ 'faq.html?lang='+lang;
	});
	$('#counsel').click(function(){
		window.location.href = "https://sites.google.com/dallasisd.org/kariskounselingkorner/home";
	});
});
