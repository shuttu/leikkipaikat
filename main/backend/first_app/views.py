from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# kartan libit
import folium
from django.views.generic import TemplateView
import requests
import json
from .functions import get_marker_color, get_group

# Leikkipaikkojen haku määrä, muuta pienemmäksi nopeampaa testailua varten
x = 399

# Tein frontin kansioon map.html tiedoston johon tää on esimerkkinä liitetty
class map(TemplateView):
    template_name = "map.html"

    def get_context_data(self, **kwargs):
        # Luo folium kartan
        figure = folium.Figure()
        map = folium.Map(
            location=[61.48, 23.8],
            zoom_start=11,
            #tiles='Stamen Terrain' Tähän vaihtoehtoiset kartta pohjat
        )
        fg = folium.FeatureGroup(name='Leikkikentät')

        for url in ["https://data.tampere.fi/data/api/action/datastore_search?resource_id=64981409-3cf7-4d32-a1b6-563963ea3fa8&limit={}".format(str(x))]:
                get = requests.get(url)
                get.raise_for_status()
        data = get.json()

        with open('coordinates.json', 'r') as f:
            cor = json.load(f)

        # for loop joka käy läpi ja ottaa tiedot marker dataan
        for i in range(int(x)):
            name = data['result']['records'][i]['ALUE_NIMI']
            street = cor[name]['street']
            color = get_marker_color(cor[name]['vol'])

            # Failcheck jos tiedossa tai haussa virhe
            try:
                # Tulostaa markerit kartalle
                folium.Marker(
                    location=[cor[name]['la'], cor[name]['lo']],
                    popup=name + " " + street[0] + street[1:].lower(),
                    icon=folium.Icon(color='black', icon_color=color, icon='tree', prefix='fa')
                ).add_to(fg)
            except KeyError as err:
                print("Unknown key: ", err)

        map.add_child(fg)
        map.add_to(figure)
        folium.LayerControl().add_to(map)
        figure.render()
        return {"map": figure}
