import os
import json

json_file = ''
for line in open('../text/grade_level_lesson_plans.json'):
    json_file+=line

grade_links = json.loads(json_file)

special_remove = '//##'
by_grade = dict({'prek':[],
                 'kinder':[],
                 'first':[],
                 'second':[],
                 'third':[],
                 'fourth':[],
                 'fifth':[],
                 'specials':[],
                 'sped':[]
                 })

sped = set(['FLS','SPED','PPCDA','PPCDB','Inclusion','Dyslexia','Speech'])

with open('all_teachers.txt') as teachers_list:
    for line in teachers_list:
        print(line)
        teacher_info = line.strip()
        teacher,section,email = teacher_info.split('\t')

        grade = None;
        if section.startswith('PK'):
            by_grade['prek'].append((teacher, section))
            grade = 'prek'
        elif section.startswith('K'):
            by_grade['kinder'].append((teacher, section))
            grade = 'kinder'
        elif section.startswith('1'):
            by_grade['first'].append((teacher, section))
            grade = 'first'
        elif section.startswith('2'):
            by_grade['second'].append((teacher, section))
            grade = 'second'
        elif section.startswith('3'):
            by_grade['third'].append((teacher, section))
            grade = 'third'
        elif section.startswith('4'):
            by_grade['fourth'].append((teacher, section))
            grade = 'fourth'
        elif section.startswith('5'):
            by_grade['fifth'].append((teacher, section))
            grade = 'fifth'
        elif section in sped:
            by_grade['sped'].append((teacher, section))
            grade = 'sped'
        else:
            by_grade['specials'].append((teacher, section))
            grade = 'specials'

        relevant_content = grade_links[grade]

        folder_name = teacher.replace('.','')
        folder_name = folder_name.replace(' ','_')

        if not os.path.isdir(folder_name):
            os.mkdir(folder_name)

        teacher_json = '{\n"teacher_name":"'+teacher+'",\n"grade":"'+section+'",\n"email":"'+email+'"'
        if len(relevant_content) > 0:
            teacher_json += ',\n"work":{'


            teacher_json += '"en":["text__Week of 3/30 to 4/3",\n"link__'+relevant_content[0]+'"],\n'
            teacher_json += '"es":["text__Semana de 3/30 a 4/3",\n"link__'+relevant_content[0]+'"]\n'

            teacher_json = teacher_json.strip()[0:len(teacher_json)-1]+'}'
        teacher_json += '\n}'
        with open(folder_name+'/'+folder_name+'.json','w') as teacher_file:
            teacher_file.write(teacher_json)

to_write = ''
for key, value in by_grade.items():
    teacher_names = 'let '+key+'_teachers=['
    teacher_sections = 'let '+key+'_section=['
    for name, grade in value:
        teacher_names += '"'+name+'",'
        teacher_sections += '"'+grade+'",'
    teacher_names = teacher_names[0:len(teacher_names)-1]+']'
    teacher_sections = teacher_sections[0:len(teacher_sections)-1]+']'

    to_write += teacher_names + '\n' + teacher_sections + '\n\n'

# clear out old var
with open('../javascript/teachers.js') as work_file:
    data = ""
    for line in work_file:
        data += line

remove_index = max(data.index(special_remove) - 2, 0)

data = data[remove_index:]
data = to_write + data

with open('../javascript/teachers.js', 'w+') as work_file:
    work_file.write(data)
