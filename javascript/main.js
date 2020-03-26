var text_files = {
"main_page":{'image': 'imgs/anfernandez.jpg', 'text': {'en': 'Hello everyone!', 'es': 'Hola todos!'}, 'links': ['www.google.com', 'www.bing.com'], 'links_text': ['Google', 'Bing']},
"menu_text":{'en': {'prek': 'Pre-K', 'K': 'Kindergarten', 'first': 'First Grade', 'second': 'Second Grade', 'third': 'Third Grade', 'fourth': 'Fourth Grade', 'fifth': 'Fifth Grade', 'specials': 'Specials'}, 'es': {'prek': 'Pre-K', 'K': 'Kinder', 'first': 'Primer Grado', 'second': 'Segundo Grado', 'third': 'Tercer Grado', 'fourth': 'Cuarto Grado', 'fifth': 'Quinto Grado', 'specials': 'Especiales'}}}



//##


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
		$('.lang').html('<span> </span><h5>Espa&#xf1;ol</h5>');
	} else {
		$('.lang').html('<span> </span><h5>English</h5>');
	}

	// Setting up Menu
	$('#prek').html(text_files['menu_text'][language]['prek']);
	$('#K').html(text_files['menu_text'][language]['K']);
	$('#first').html(text_files['menu_text'][language]['first']);
	$('#second').html(text_files['menu_text'][language]['second']);
	$('#third').html(text_files['menu_text'][language]['third']);
	$('#fourth').html(text_files['menu_text'][language]['fourth']);
	$('#fifth').html(text_files['menu_text'][language]['fifth']);
	$('#specials').html(text_files['menu_text'][language]['specials']);

	// setting up main content
	$('.main_image').html('<img src="'+text_files['main_page']['image']+'">');
	$('.main_text').html('<p>'+text_files['main_page']['text'][language]+'</p>');

	// setting up links
	var links = text_files['main_page']['links'];
	var link_text = text_files['main_page']['links_text'];
	to_write = ""
	for(var link_id = 0; link_id < links.length; link_id++){
		var txt = link_text[link_id];
		var src = links[link_id];

		to_write += '<a href="'+src+'">'+txt+'</a><br>'
	}
	$('.links').html(to_write);
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
		$(this).css("border-radius", "20px");
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
		base = remove_page('?lang=')
		base = base.substring(0,base.length-1)
		vars = curr_url.substring(base.length,curr_url.length);
		if(vars.startsWith('?lang=')){
			vars = vars.substring(8,vars.length);
		}
		window.location.href=base+'?lang='+new_lang+vars
	});

	$('#prek').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=prek';
	});
	$('#K').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=K';
	});
	$('#first').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=first';
	});
	$('#second').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=second';
	});
	$('#third').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=third';
	});
	$('#fourth').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=fourth';
	});
	$('#fifth').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=fifth';
	});
	$('#specials').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=specials';
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

		window.location.href=remove_page('/')+'teachers.html?lang='+lang+'?grade='+grade_clicked;
	});
});
