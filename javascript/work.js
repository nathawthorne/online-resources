var teacher_work = {
Ana_Fernandez:{'teacher_name': 'Ana Fernandez', 'grade': 'K-B', 'work': ['text__Watch the following video for support on the homework!', 'video__head_moving.mp4', 'text__Thanks for watching!']},
Ms_Medrano:{'teacher_name': 'Ms. Medrano', 'grade': 'K-A', 'work': ['text__*Monday*', 'text__Alpha Go Documentary', 'link__https://www.youtube.com/watch?v=WXuK6gekU1Y&feature=youtu.be', 'text__Please watch the first 10 minutes of this video. Write your response and send it to me via email: test@gmail.com.', 'text__', 'text__', 'text__', 'text__*Tuesday*', 'text__No work today!', 'text__', 'text__', 'text__', 'text__*Wednesday*', 'text__Take a funky pic of your socks!', 'text__', 'text__', 'text__', 'text__*Thursday*', 'text__Draw Garfield!', 'text__', 'text__', 'text__', 'text__*Friday*', 'text__Download this file and do the first two problems.', 'download__puebla.pdf']},
Narciso_Del_Rio:{'teacher_name': 'Narciso Del Rio', 'grade': 'K-C', 'work': ['text__No work today']}}



//##

special_text = 'text__';
special_video = 'video__';
special_link = 'link__';
special_download = 'download__'


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

function string_to_html(text){
	var open = false;
	replaced_string = "";
	for (var i = 0; i < text.length; i++) {
		if(text.charAt(i) == '*' && !open){
			replaced_string += '<b>';
			open = true;
		} else if (text.charAt(i) == '*' && open) {
			replaced_string += '</b>';
			open = false;
		} else{
			replaced_string += text.charAt(i);
		}
	}
	return replaced_string;
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
	$(".school_name").click(function(){
		grade_clicked = $(this).attr('id');

		window.location.href='https://www.dallasisd.org/hawthorne';
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




	teacher_name = extract_var('teacher');
	var_name = string_to_var(teacher_name);
	json_document = teacher_work[teacher_name];
	html_doc = '<h1>'+json_document['teacher_name']+'</h1>'
	html_doc += '<h1>'+json_document['grade']+'</h1><br>'

	all_work = json_document['work'];
	for(var work_id = 0; work_id < all_work.length; work_id++){
		if(all_work[work_id].startsWith(special_text)){
			text = all_work[work_id].substring(special_text.length);

			if(text.length == 0){
				html_doc += "<br>";
			}
			else{
				html_doc += '<h3>'+string_to_html(text)+'</h3>';
			}
		}
		else if(all_work[work_id].startsWith(special_link)){
			link = all_work[work_id].substring(special_link.length);
			html_doc+='<a class="link" href="'+link+'"><h3>Click Here</h3></a>'
		}
		else if(all_work[work_id].startsWith(special_video)){
			link = all_work[work_id].substring(special_video.length);
			link = 'teachers/'+var_name+'/'+link
			html_doc+='<video controls><source src="'+link+'" type="video/mp4">There was an issue loading the video...</video>'
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
