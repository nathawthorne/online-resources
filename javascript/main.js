var text_files = {
"main_page":{'image': 'imgs/anfernandez.jpg', 'text': {'en': 'Hello Hawthorne Families!<br /><br />Here are some important links for you to use at home to support your students, every week starting on Monday March 23rd, we will add more activities and ideas.', 'es': 'Hola Familias de Hawthorne,<br /><br />En esta pagina, cada semana empezando el lunes 23 de marzo, pondremos ideas y actividades que ustedes pueden usar para ayudar a sus hijos en casa.'},
'links_title': {'en': 'Useful Resources', 'es': 'Recursos Utiles'}, 'food_bank_links': ['https://www.citysquare.org/food', 'https://www.ivcompassion.org/', 'https://goodstreetbaptistchurch.org/social-service-center-2/'], 'food_bank_links_text': ['City Square Food Pantry', 'Inspired Vision Compassion Center', 'Good Street Baptist Church'], 'food_bank_extra_info':{'en':['Tuesday - Friday 9:00 am - 1 pm,<br />1610 S Malcolm X Blvd, Bldg 350, Dallas, TX 75226<br />(214) 823-8710' ,'Monday - Friday 9:30 am - 5:00 pm, <br/>2019 N. Masters, Dallas, Texas 75217, <br/>P:(972) 971-8879' ,'Monday, Tuesday, Friday 10:00 am - 12:00 pm,<br />Wednesday 12:00 pm - 2:00 pm,<br />Thursday 10:00 am - 2:00 pm,<br />3126 Hatcher Street, Dallas, TX 75215<br />(214) 421-8208'],
'es':['Martes - Viernes 9:00 am - 1 pm,<br />1610 S Malcolm X Blvd, Bldg 350, Dallas, TX 75226<br />(214) 823-8710' ,'Lunes - Viernes 9:30 am - 5:00 pm, <br/>2019 N. Masters, Dallas, Texas 75217, <br/>P:(972) 971-8879','Lunes, Martes, Viernes 10:00 am - 12:00 pm,<br /> Miercoles 12:00 pm - 2:00 pm,<br />Jueves 10:00 am - 2:00 pm,<br />3126 Hatcher Street, Dallas, TX 75215<br />(214) 421-8208']},'shelter_links':['https://www.familygateway.org/', 'https://www.edenoutreach.com/contactus.htm', 'https://hccdallas.org/'],'shelter_text':['Family Gateway', 'Eden Outreach', 'Housing Crisis Center'],'shelter_extra_info':['711 S. St. Paul St. Dallas, TX 75201<br />(214) 823-4500', '3110 Metropolitan Ave, Dallas, Texas 75215<br />(214) 421-5894', '4210 Junius Street, Dallas, TX 75246<br />(214) 828-4244']},
"menu_text":{'en': {'prek': 'Pre-K', 'K': 'Kindergarten', 'first': 'First Grade', 'second': 'Second Grade', 'third': 'Third Grade', 'fourth': 'Fourth Grade', 'fifth': 'Fifth Grade', 'specials': 'Specials'}, 'es': {'prek': 'Pre-K', 'K': 'Kinder', 'first': 'Primer Grado', 'second': 'Segundo Grado', 'third': 'Tercer Grado', 'fourth': 'Cuarto Grado', 'fifth': 'Quinto Grado', 'specials': 'Especiales'}}}





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

	// setting up main content
	$('.main_image').html('<img src="'+text_files['main_page']['image']+'">');
	$('.main_text').html('<p>'+text_files['main_page']['text'][language]+'</p>');

	// setting up links
	to_write = "<h4>"+text_files['main_page']['links_title'][language]+"</h4><ul>"
	$('.links_title').html(to_write);

	var food_bank_links = text_files['main_page']['food_bank_links'];
	var food_bank_links_text = text_files['main_page']['food_bank_links_text'];
	var food_bank_extra_info = text_files['main_page']['food_bank_extra_info'][language];

	if(language == 'en')
	{
		to_write = '<h5>Food Pantries</h5>';
	} else {
		to_write = '<h5>Despensas de Alimentos</h5>';
	}
	for(var link_id = 0; link_id < food_bank_links.length; link_id++){
		var txt = food_bank_links_text[link_id];
		var src = food_bank_links[link_id];
		var extra = food_bank_extra_info[link_id];
		to_write += '<li><a href="'+src+'">'+txt+'</a><br>'
		to_write += extra+'</li><br>'
	}
	to_write += "</ul>"
	$('.food_bank').html(to_write);

	var shelter_links = text_files['main_page']['shelter_links'];
	var shelter_links_text = text_files['main_page']['shelter_text'];
	var shelter_extra_info = text_files['main_page']['shelter_extra_info'];

	if(language == 'en')
	{
		to_write = '<h5>Shelter Assistance</h5>';
	} else {
		to_write = '<h5>Assistencia para Vivienda</h5>';
	}
	for(var link_id = 0; link_id < shelter_links.length; link_id++){
		var txt = shelter_links_text[link_id];
		var src = shelter_links[link_id];
		var extra = shelter_extra_info[link_id];
		to_write += '<li><a href="'+src+'">'+txt+'</a><br>'
		to_write += extra+'</li><br>'
	}
	to_write += "</ul>"
	console.log(to_write)
	$('.shelter').html(to_write);
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
	$('#sped').click(function(){
		window.location.href = remove_page('/')+ 'teachers.html?lang='+lang+'?grade=sped';
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
