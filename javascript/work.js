var teacher_work = {
"Dr_Zamora":{'teacher_name': 'Dr. Zamora', 'grade': '5A', 'email': 'azamoraoviedo@dallasisd.org'},
"Mr_Aguilera":{'teacher_name': 'Mr. Aguilera', 'grade': 'PK3', 'email': 'joaguilera@dallasisd.org'},
"Mr_Cocco":{'teacher_name': 'Mr. Cocco', 'grade': 'PKB', 'email': 'acocco@dallasisd.org'},
"Mr_Galvan":{'teacher_name': 'Mr. Galvan', 'grade': '3C', 'email': 'omgalvan@dallasisd.org'},
"Mr_Morrow":{'teacher_name': 'Mr. Morrow', 'grade': 'Art', 'email': 'domorrow@dallasisd.org'},
"Mr_Vera":{'teacher_name': 'Mr. Vera', 'grade': '4B', 'email': 'anvera@dallasisd.org'},
"Ms_Bishop":{'teacher_name': 'Ms. Bishop', 'grade': 'Music', 'email': 'rdbishop@dallasisd.org'},
"Ms_Cooper":{'teacher_name': 'Ms. Cooper', 'grade': 'Library', 'email': 'cocooper@dallasisd.org'},
"Ms_Escobedo":{'teacher_name': 'Ms. Escobedo', 'grade': '1B', 'email': 'vescobedo@dallasisd.org'},
"Ms_Figueroa":{'teacher_name': 'Ms. Figueroa', 'grade': '2A', 'email': 'dfreytes@dallasisd.org'},
"Ms_Gonzalez":{'teacher_name': 'Ms. Gonzalez', 'grade': '3B', 'email': 'mcosme@dallasisd.org'},
"Ms_Hernandez":{'teacher_name': 'Ms. Hernandez', 'grade': 'KB', 'email': 'mhernandezramirez@dallasisd.org'},
"Ms_Hortelanos":{'teacher_name': 'Ms. Hortelanos', 'grade': '2C', 'email': 'mhortelanogarcia@dallasisd.org'},
"Ms_Johnson":{'teacher_name': 'Ms. Johnson', 'grade': 'PKC', 'email': 'margjohns@dallasisd.org'},
"Ms_Lee":{'teacher_name': 'Ms. Lee', 'grade': '5C', 'email': 'jennilee@dallasisd.org'},
"Ms_Lingow":{'teacher_name': 'Ms. Lingow', 'grade': 'PKA', 'email': 'vlingow@dallasisd.org'},
"Ms_Lopez":{'teacher_name': 'Ms. Lopez', 'grade': '5B', 'email': 'hylopez@dallasisd.org'},
"Ms_Manning":{'teacher_name': 'Ms. Manning', 'grade': 'PE', 'email': 'vmanning@dallasisd.org'},
"Ms_Medrano":{'teacher_name': 'Ms. Medrano', 'grade': 'KA', 'email': 'clmedrano@dallasisd.org'},
"Ms_Neil":{'teacher_name': 'Ms. Neil', 'grade': '1A', 'email': 'mneil@dallasisd.org'},
"Ms_Nolan":{'teacher_name': 'Ms. Nolan', 'grade': '2D', 'email': 'chrodgers@dallasisd.org'},
"Ms_Reyes":{'teacher_name': 'Ms. Reyes', 'grade': '4A', 'email': 'cecreyes@dallasisd.org'},
"Ms_Russell":{'teacher_name': 'Ms. Russell', 'grade': 'KC', 'email': 'torussel@dallasisd.org'},
"Ms_Stewart":{'teacher_name': 'Ms. Stewart', 'grade': '1C', 'email': 'kastewart@dallasisd.org'},
"Ms_Valero":{'teacher_name': 'Ms. Valero', 'grade': 'TAG', 'email': 'acolon@dallasisd.org'},
"Ms_Vaquerano":{'teacher_name': 'Ms. Vaquerano', 'grade': '3A', 'email': 'jvaqerano@dallasisd.org'},
"Ms_Veasna":{'teacher_name': 'Ms. Veasna', 'grade': '4C', 'email': 'vkok@dallasisd.org'}}



//##
var text_files = {
"main_page":{'image': 'imgs/anfernandez.jpg', 'text': {'en': 'Hello everyone!', 'es': 'Hola todos!'}, 'links': ['www.google.com', 'www.bing.com'], 'links_text': ['Google', 'Bing']},
"menu_text":{'en': {'prek': 'Pre-K', 'K': 'Kindergarten', 'first': 'First Grade', 'second': 'Second Grade', 'third': 'Third Grade', 'fourth': 'Fourth Grade', 'fifth': 'Fifth Grade', 'specials': 'Specials'}, 'es': {'prek': 'Pre-K', 'K': 'Kinder', 'first': 'Primer Grado', 'second': 'Segundo Grado', 'third': 'Tercer Grado', 'fourth': 'Cuarto Grado', 'fifth': 'Quinto Grado', 'specials': 'Especiales'}}}




special_text = 'text__';
special_video = 'video__';
special_link = 'link__';
special_download = 'download__'

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
		$('.lang').html('<h5>A Espa&#xf1;ol</h5>');
	} else {
		$('.lang').html('<h5>To English</h5>');
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


	// Teacher Code
	teacher_name = extract_var('teacher');
	var_name = string_to_var(teacher_name);
	json_document = teacher_work[teacher_name];
	html_doc = '<h2>'+json_document['teacher_name']+'</h2>'
	html_doc += '<h2>'+json_document['grade']+'</h2>'
	html_doc += '<h2>'+json_document['email']+'</h2><br>'

	if(json_document.hasOwnProperty('work')){
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
	}
	lastbr = html_doc.lastIndexOf('<br>')
	html_doc = html_doc.substring(0, lastbr)
	$('.work_container').html(html_doc);
});
