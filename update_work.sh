#!/bin/bash

# 1. Once all the data is updated, we update the teachers links
cd teachers
python3 teachers_to_json.py

# 2. We update the teachers.json file
cd ..
python3 write_work_jsons.py
