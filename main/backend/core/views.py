import json
from django.http import JsonResponse
from django.shortcuts import render
from .leikkikentat import fetch_playgrounds


def test_view(request):
    data = {
        'leikkipaikat': fetch_playgrounds()
    }
    return JsonResponse(data)

def map_data(request):
    map_data = open('./leikkipaikat.json').read()
    map_json_data = json.loads(map_data)
    return JsonResponse(map_json_data)