let kinder_teachers = ['Miguel Del Rio', 'Narciso Del Rio', 'Ana Fernandez']
let first_teachers = ['Mauricio Del Rio', 'Michelle Del Rio']
let second_teachers = ['Dr. Mora']
let third_teachers = ['Dr. Gemini']
let fourth_teachers = ['Dr. Rosi']
let fifth_teachers = ['El Gordo']

function write_teacher(name){
	output = "<div class='row'><div class='col-lg-1 col-xs-1'></div><div class='col-lg-10 col-xs-10 teacher' id='"+string_to_var(name)+"'><h3>"+name+"</h3></div><div class='col-lg-1 col-xs-1'></div></div>"
	return output
}

function string_to_var(name){
	return name.replace(/ /g, "_");
}

function remove_page(){
	url = window.location.href
	last_sl = url.lastIndexOf('/')
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

$(document).ready(function(){
	var grade = extract_var('grade');
	var day = extract_var('day');

	if (grade == 'K'){
		text = ""
		for (var teacher_id = 0; teacher_id < kinder_teachers.length; teacher_id++) {
  		text += write_teacher(kinder_teachers[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'first'){
		text = ""
		for (var teacher_id = 0; teacher_id < first_teachers.length; teacher_id++) {
  		text += write_teacher(first_teachers[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'second'){
		text = ""
		for (var teacher_id = 0; teacher_id < second_teachers.length; teacher_id++) {
  		text += write_teacher(second_teachers[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'third'){
		text = ""
		for (var teacher_id = 0; teacher_id < third_teachers.length; teacher_id++) {
  		text += write_teacher(third_teachers[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'fourth'){
		text = ""
		for (var teacher_id = 0; teacher_id < fourth_teachers.length; teacher_id++) {
  		text += write_teacher(fourth_teachers[teacher_id]);
		}
		$('.teacher_container').html(text);
	}
	else if (grade == 'fifth'){
		text = ""
		for (var teacher_id = 0; teacher_id < fifth_teachers.length; teacher_id++) {
  		text += write_teacher(fifth_teachers[teacher_id]);
		}
		$('.teacher_container').html(text);
	}



	$(".teacher").hover(function(){
  	$(this).css("opacity", "0.5");
  }, function(){
  	$(this).css("opacity", "1");
	});

	$(".teacher").click(function(){
		teacher = $(this).attr('id');
		day_clicked = extract_var('day')
		window.location.href=remove_page()+'work.html?teacher='+teacher+'?day='+day_clicked;;
	});
});
