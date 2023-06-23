import json
import random
import string


def random_string(length):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(length))


json_objects = []

for i in range(1, 5001):
    name = random_string(5).capitalize()
    email = name.lower() + "@gmail.com"
    json_object = {
        "id": i,
        "name": name,
        "email": email,
        "active": bool(random.getrandbits(1))
    }
    json_objects.append(json_object)

json_output = {"members": json_objects}

with open('../members-large.json', 'w') as f:
    json.dump(json_output, f)
