from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# kartan libit
import folium
from django.views.generic import TemplateView
import requests
import json

# Leikkipaikkojen haku määrä, muuta pienemmäksi nopeampaa testailua varten
x = 99

# Tein frontin kansioon map.html tiedoston johon tää on esimerkkinä liitetty
class map(TemplateView):
    template_name = "map.html"

    def get_context_data(self, **kwargs):
        # Luo folium kartan
        figure = folium.Figure()
        map = folium.Map(
            location=[61.48, 23.8],
            zoom_start=11,
            tiles='Stamen Terrain'
        )
        for url in ["https://data.tampere.fi/data/api/action/datastore_search?resource_id=64981409-3cf7-4d32-a1b6-563963ea3fa8&limit={}".format(str(x))]:
                get = requests.get(url)
                get.raise_for_status()
                map.add_to(figure)
        data = get.json()

        with open('coordinates.json', 'r') as f:
            cor = json.load(f)

        # for loop joka käy läpi ja ottaa tiedot marker dataan
        for i in range(int(x)):
            street = data['result']['records'][i]['ALUE_SIJ']
            name = data['result']['records'][i]['ALUE_NIMI']

            # Failcheck jos tiedossa tai haussa virhe
            try:
                # Tulostaa markerit kartalle
                map.add_to(figure)
                folium.Marker(
                    location=[float(cor[name]['la']), float(cor[name]['lo'])],
                    popup=name + " " + street[0] + street[1:].lower(),
                    icon=folium.Icon(color='green', icon='tree', prefix='fa')
                ).add_to(map)
            except KeyError as err:
                print("Unknown key: ", err)

        figure.render()
        return {"map": figure}
