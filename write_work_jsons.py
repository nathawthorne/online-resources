import os
import json

special_remove = '//##'
json_folder_loc = 'teachers'
work_file_loc = 'javascript/work.js'

ignore_set = set(['.DS_Store'])

json_files = []
for root, dirs, files in os.walk(json_folder_loc, topdown=False):
    for name in files:
        if '.json' in name:
            json_files.append(os.path.join(root, name))
# generate string
to_write = "var teacher_work = {\n"
for f in json_files:
    with open(f) as json_file:
        data = json.load(json_file)
        key = data['teacher_name']
        print(key)
        key = key.replace('.','')
        key = key.replace(' ', '_')
        to_write += '"'+key + '":' + str(data) + ',\n'
to_write = to_write.strip()
to_write = to_write[:len(to_write)-1]
to_write += "}\n\n"


# clear out old var
with open(work_file_loc) as work_file:
    data = ""
    for line in work_file:
        data += line

remove_index = max(data.index(special_remove) - 2, 0)

data = data[remove_index:]
data = to_write + data

with open(work_file_loc, 'w+') as work_file:
    work_file.write(data)
