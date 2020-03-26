var text_files = {"menu_text":{'en': {'prek': 'Pre-K', 'K': 'Kindergarten', 'first': 'First Grade', 'second': 'Second Grade', 'third': 'Third Grade', 'fourth': 'Fourth Grade', 'fifth': 'Fifth Grade', 'specials': 'Specials'}, 'es': {'prek': 'Pre-K', 'K': 'Kinder', 'first': 'Primer Grado', 'second': 'Segundo Grado', 'third': 'Tercer Grado', 'fourth': 'Cuarto Grado', 'fifth': 'Quinto Grado', 'specials': 'Especiales'}}}



//##

let prek_teachers=["Mr. Aguilera","Ms. Lingow","Mr. Cocco","Ms. Johnson"]
let prek_section=["PK3","PKA","PKB","PKC"]

let kinder_teachers=["Ms. Medrano","Ms. Hernandez","Ms. Russell"]
let kinder_section=["KA","KB","KC"]

let first_teachers=["Ms. Neil","Ms. Escobedo","Ms. Stewart"]
let first_section=["1A","1B","1C"]

let second_teachers=["Ms. Figueroa","Ms. Hortelanos","Ms. Nolan"]
let second_section=["2A","2C","2D"]

let third_teachers=["Ms. Vaquerano","Ms. Gonzalez","Mr. Galvan"]
let third_section=["3A","3B","3C"]

let fourth_teachers=["Ms. Reyes","Mr. Vera","Ms. Veasna"]
let fourth_section=["4A","4B","4C"]

let fifth_teachers=["Dr. Zamora","Ms. Lopez","Ms. Lee"]
let fifth_section=["5A","5B","5C"]

let specials_teachers=["Ms. Manning","Mr. Morrow","Ms. Bishop","Ms. Valero","Ms. Cooper"]
let specials_section=["PE","Art","Music","TAG","Library"]


function write_teacher(name, section){
	output = "<div class='row'><div class='col-lg-1 col-xs-1'></div><div class='col-lg-10 col-xs-10 teacher' id='"+string_to_var(name)+"'><h3>"+section+' -- '+name+"</h3></div><div class='col-lg-1 col-xs-1'></div></div>"
	return output
}

function string_to_var(name){
	return name.replace(/\./g,"").replace(/ /g, "_");
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




	// Grade code

	var grade = extract_var('grade');
	var day = extract_var('day');

	if (grade == 'prek'){
		text = ""
		for (var teacher_id = 0; teacher_id < kinder_teachers.length; teacher_id++) {
  		text += write_teacher(prek_teachers[teacher_id], prek_section[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'K'){
		text = ""
		for (var teacher_id = 0; teacher_id < kinder_teachers.length; teacher_id++) {
  		text += write_teacher(kinder_teachers[teacher_id], kinder_section[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'first'){
		text = ""
		for (var teacher_id = 0; teacher_id < first_teachers.length; teacher_id++) {
  		text += write_teacher(first_teachers[teacher_id], first_section[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'second'){
		text = ""
		for (var teacher_id = 0; teacher_id < second_teachers.length; teacher_id++) {
  		text += write_teacher(second_teachers[teacher_id], second_section[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'third'){
		text = ""
		for (var teacher_id = 0; teacher_id < third_teachers.length; teacher_id++) {
  		text += write_teacher(third_teachers[teacher_id], third_section[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'fourth'){
		text = ""
		for (var teacher_id = 0; teacher_id < fourth_teachers.length; teacher_id++) {
  		text += write_teacher(fourth_teachers[teacher_id], fourth_section[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'fifth'){
		text = ""
		for (var teacher_id = 0; teacher_id < fifth_teachers.length; teacher_id++) {
  		text += write_teacher(fifth_teachers[teacher_id], fifth_section[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'specials'){
		text = ""
		for (var teacher_id = 0; teacher_id < specials_teachers.length; teacher_id++) {
  		text += write_teacher(specials_teachers[teacher_id], specials_section[teacher_id]);
		}
		$('.teacher_container').html(text);
	}

	$(".teacher").click(function(){
		teacher = $(this).attr('id');
		lang = extract_var('lang');
		window.location.href=remove_page()+'work.html?lang='+lang+'?teacher='+teacher;
	});
});
