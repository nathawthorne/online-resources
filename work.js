var teacher_work = {
Ana_Fernandez:{'teacher_name': 'Ana Fernandez', 'grade': 'K-B', 'work': [['text__Watch the following video for support on the homework!', 'video__head_moving.mp4', 'text__Thanks for watching!']]},
Miguel_Del_Rio:{'teacher_name': 'Miguel Del Rio', 'grade': 'K-A', 'work': [['text__Alpha Go Documentary', 'link__https://www.youtube.com/watch?v=WXuK6gekU1Y&feature=youtu.be', 'text__Please watch the first 10 minutes of this video. Write your response and send it to me via email: test@gmail.com.'], ['text__No work today!'], ['text__Wednesday! Take a funky pic of your socks!'], ['text__Thursday! Draw Garfield!'], ['text__Friday! Download this file and do the first two problems.', 'download__puebla.pdf']]},
Narciso_Del_Rio:{'teacher_name': 'Narciso Del Rio', 'grade': 'K-C', 'work': [['text__No work today']]}}



//##

special_text = 'text__';
special_video = 'video__';
special_link = 'link__';
special_download = 'download__'

days_of_week = ['mon', 'tues','wed','thur','fri']

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

function string_to_var(name){
	return name.replace(/ /g, "_");
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
		base = remove_page('l?lang=')
		vars = curr_url.substring(base.length,curr_url.length);
		if(vars.startsWith('?lang=')){
			vars = vars.substring(8,vars.length);
		}
		window.location.href=base+'?lang='+new_lang+vars
	});

	$(".header").hover(function(){
		$(this).css("cursor", "pointer");
  }, function(){
		$(this).css("cursor", "auto");
	});




	teacher_name = extract_var('teacher');
	var_name = string_to_var(teacher_name);
	json_document = teacher_work[teacher_name];
	html_doc = '<h1>'+json_document['teacher_name']+'</h1>'
	html_doc += '<h1>'+json_document['grade']+'</h1><br>'

	day = extract_var('day');
	day_index = days_of_week.indexOf(day);

	all_work = json_document['work'][day_index];
	for(var work_id = 0; work_id < all_work.length; work_id++){
		if(all_work[work_id].startsWith(special_text)){
			text = all_work[work_id].substring(special_text.length);

			html_doc += '<h3>'+text+'</h3><br>'
		}
		else if(all_work[work_id].startsWith(special_link)){
			link = all_work[work_id].substring(special_link.length);
			html_doc+='<a class="link" href="'+link+'"><h3>Click Here</h3></a><br>'
		}
		else if(all_work[work_id].startsWith(special_video)){
			link = all_work[work_id].substring(special_video.length);
			link = 'teachers/'+var_name+'/'+link
			html_doc+='<video controls><source src="'+link+'" type="video/mp4">There was an issue loading the video...</video><br>'
		}
		else if(all_work[work_id].startsWith(special_download)){
			link_name = all_work[work_id].substring(special_download.length);
			link = 'teachers/'+var_name+'/'+link_name
			html_doc+='<a href="'+link+'" download="work_file"><h3>Download Me</h3></a><br>'
		}
	}
	lastbr = html_doc.lastIndexOf('<br>')
	html_doc = html_doc.substring(0, lastbr)
	$('.work_container').html(html_doc);
});
