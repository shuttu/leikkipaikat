from django.http import JsonResponse
from django.shortcuts import render
from .leikkikentat import fetch_playgrounds


def test_view(request):
    data = {
        'leikkipaikat': fetch_playgrounds()
    }
    return JsonResponse(data)