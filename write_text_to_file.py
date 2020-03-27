import os
import json



relevant_files = set(['menu_text.json', 'main_page.json'])
file_to_write = 'javascript/main.js'


special_remove = '//##'
json_folder_loc = 'text'


ignore_set = set(['.DS_Store'])

json_files = []
for root, dirs, files in os.walk(json_folder_loc, topdown=False):
    for name in files:
        if name in relevant_files:
            json_files.append((os.path.join(root, name), name[0:len(name)-5].strip().lstrip()))

# generate string
to_write = "var text_files = {\n"
for f, name in json_files:
    with open(f) as json_file:
        data = json.load(json_file)
        to_write += '"'+name + '":' + str(data) + ',\n'
to_write = to_write.strip()
to_write = to_write[:len(to_write)-1]
to_write += "}\n\n"

# clear out old var
with open(file_to_write) as work_file:
    data = ""
    for line in work_file:
        data += line

remove_index = max(data.index(special_remove) - 2, 0)

data = data[remove_index:]
data = to_write + data

with open(file_to_write, 'w+') as work_file:
    work_file.write(data)
