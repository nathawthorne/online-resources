var text_files = {
"menu_text":{'en': {'buster': 'Weekly Boredom Buster', 'news': 'Weekly News Letter', 'grades': 'Weekly Work', 'online': 'Remote Learning FAQ'}, 'es': {'buster': 'Reto Semanal Para no Aburrirse', 'news': 'Noticiero Semanal', 'grades': 'Trabajo de la Semana', 'online': 'Ayuda para Aprender de Casa'}},
"faq":{
	"en":{
		"questions":["Step-by-step Instructions to use Zoom",
								"Zoom Video Guidelines",
								"How do I connect to SeeSaw?",
								"How do I get to KhanAcademy?",
								"How do I access my CleverAccount?",
								"How do I get to BrainPop?"
								],
		"answers":["link__https://docs.google.com/presentation/d/1tR5U7ogiej62-m4v7256xhfLTEDmfKpmiFpiqLAQuLY/edit#slide=id.p",
							 "link__https://m.youtube.com/channel/UCL23Z0i9lKBsHNSe7KvKkzw?reload=9",
							 "link__https://web.seesaw.me/remote-learning-for-families",
							 "link__https://www.khanacademy.org/",
							 "link__https://clever.com/in/dallasisd",
							 "link__https://www.brainpop.com/"
						 	]
	},
	"es":{
		"questions":["Instrucciones para connectar con Zoom",
								"Guias de uso para Zoom",
								"Como me conecto a SeeSaw?",
								"Como me conecto KhanAcademy?",
								"Como puedo accesar a mi CleverAccount?",
								"Commo me conecto a BrainPop?"
								],
		"answers":["link__https://docs.google.com/presentation/d/1tR5U7ogiej62-m4v7256xhfLTEDmfKpmiFpiqLAQuLY/edit#slide=id.p",
							 "link__https://m.youtube.com/channel/UCL23Z0i9lKBsHNSe7KvKkzw?reload=9",
							 "link__https://web.seesaw.me/remote-learning-for-families",
							 "link__https://www.khanacademy.org/",
							 "link__https://clever.com/in/dallasisd",
							 "link__https://www.brainpop.com/"
						 	]
	}
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


	var special_text = 'text__';
	var special_video = 'video__';
	var special_link = 'link__';
	var special_download = 'download__'


	var questions = text_files['faq'][language]['questions']
	var answers = text_files['faq'][language]['answers']
	var html_doc = '';
	for(var work_id = 0; work_id < questions.length; work_id++){
		console.log(answers[work_id])
		if(answers[work_id].startsWith(special_text)){
			text = answers[work_id].substring(special_text.length);
			if(text.length == 0){
				html_doc += "<br>";
			}
			else{
				html_doc += '<li><h2><b>'+string_to_html(questions[work_id])+'</b><h3>'+string_to_html(text)+'</h3></li>';
			}
		}
		else if(answers[work_id].startsWith(special_link)){
			link = answers[work_id].substring(special_link.length);
			if(language == 'en'){
				html_doc+='<li><h2><b>'+questions[work_id]+'</b></h2><a class="link" href="'+link+'"><h3>Click Here</h3></a></li><br>'
			}else{
				html_doc+='<li><h2><b>'+questions[work_id]+'</b></h2><a class="link" href="'+link+'"><h3>Haz Click Aqui</h3></a></li><br>'
			}
		}
		else if(answers[work_id].startsWith(special_video)){
			link = answers[work_id].substring(special_video.length);
			link = 'teachers/'+var_name+'/'+link
			html_doc+='<li><h2><b>'+string_to_html(questions[work_id])+'</b><video controls><source src="'+link+'" type="video/mp4">There was an issue loading the video...</video></li><br>'
		}
		else if(answers[work_id].startsWith(special_download)){
			link_name = answers[work_id].substring(special_download.length);
			link = 'teachers/'+var_name+'/'+link_name
			html_doc+='<li><h2><b>'+string_to_html(questions[work_id])+'</b><a href="'+link+'" download="file"><h3>Download Me</h3></a></li><br>'
		}
	}
	console.log(html_doc)
	$('.main_text').html(html_doc);
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
});
