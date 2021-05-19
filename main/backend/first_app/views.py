from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# kartan libit
import folium
from django.views.generic import TemplateView
import pandas
# Tein frontin kansioon map.html tiedoston johon tää on esimerkkinä liitetty
class map(TemplateView):
    template_name = "map.html"

    def get_context_data(self, **kwargs):
        figure = folium.Figure()
        map = folium.Map(
            location=[20, 30],
            zoom_start=5,
            tiles='Stamen Terrain'
        )
        # Esimerkki markkeri
        map.add_to(figure)
        folium.Marker(
            location=[20, 30],
            popup='Esimerkki txt',
            icon=folium.Icon(color='green', icon='tree', prefix='fa')
        ).add_to(map)

        figure.render()
        return {"map": figure}

# leikkipaikat json-muotoon
from django.http import JsonResponse
from .leikkikentat import fetch_playgrounds

def test_view(request):
    data = {
        'leikkikentat': fetch_playgrounds()
    }
    return JsonResponse(data)

