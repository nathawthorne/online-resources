import os

special_remove = '//##'
by_grade = dict({'prek':[],
                 'kinder':[],
                 'first':[],
                 'second':[],
                 'third':[],
                 'fourth':[],
                 'fifth':[],
                 'specials':[]
                 })

with open('all_teachers.txt') as teachers_list:
    for line in teachers_list:
        print(line)
        teacher_info = line.strip()
        teacher,grade,email = teacher_info.split('\t')

        if grade.startswith('PK'):
            by_grade['prek'].append((teacher, grade))
        elif grade.startswith('K'):
            by_grade['kinder'].append((teacher, grade))
        elif grade.startswith('1'):
            by_grade['first'].append((teacher, grade))
        elif grade.startswith('2'):
            by_grade['second'].append((teacher, grade))
        elif grade.startswith('3'):
            by_grade['third'].append((teacher, grade))
        elif grade.startswith('4'):
            by_grade['fourth'].append((teacher, grade))
        elif grade.startswith('5'):
            by_grade['fifth'].append((teacher, grade))
        else:
            by_grade['specials'].append((teacher, grade))

        folder_name = teacher.replace('.','')
        folder_name = folder_name.replace(' ','_')

        if not os.path.isdir(folder_name):
            os.mkdir(folder_name)

        teacher_json = '{\n"teacher_name":"'+teacher+'",\n"grade":"'+grade+'",\n"email":"'+email+'"\n}'
        with open(folder_name+'/'+folder_name+'.json','w') as teacher_file:
            teacher_file.write(teacher_json)

# to_write = ''
# for key, value in by_grade.items():
#     teacher_names = 'let '+key+'_teachers=['
#     teacher_sections = 'let '+key+'_section=['
#     for name, grade in value:
#         teacher_names += '"'+name+'",'
#         teacher_sections += '"'+grade+'",'
#     teacher_names = teacher_names[0:len(teacher_names)-1]+']'
#     teacher_sections = teacher_sections[0:len(teacher_sections)-1]+']'
#
#     to_write += teacher_names + '\n' + teacher_sections + '\n\n'
#
# # clear out old var
# with open('../javascript/teachers.js') as work_file:
#     data = ""
#     for line in work_file:
#         data += line
#
# remove_index = max(data.index(special_remove) - 2, 0)
#
# data = data[remove_index:]
# data = to_write + data
#
# with open('../javascript/teachers.js', 'w+') as work_file:
#     work_file.write(data)
