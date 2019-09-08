import json


def myview(request):
    obj = requests.post(url, json = userupload, headers=headers)
    return render_to_response("template.html", {"obj_as_json": json.dumps(obj.json())})