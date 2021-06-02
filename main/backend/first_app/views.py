from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# kartan libit
import folium
from folium import plugins
from django.views.generic import TemplateView
import requests
import json
from .functions import get_marker_color, get_group, get_popup

# Leikkipaikkojen haku määrä, muuta pienemmäksi nopeampaa testailua varten
x = 100

# Tein frontin kansioon map.html tiedoston johon tää on esimerkkinä liitetty
class map(TemplateView):
    template_name = "map.html"

    def get_context_data(self, **kwargs):
        # Luo folium kartan
        figure = folium.Figure()
        map = folium.Map(
            location=[61.48, 23.8],
            zoom_start=12,
            zoom_control=False
            #tiles='Stamen Terrain' Tähän vaihtoehtoiset kartta pohjat
        )

        plugins.LocateControl(auto_start=True, position='bottomleft', drawCircle=False).add_to(map)

        fg = folium.FeatureGroup(name='Leikkikentät')

        plugins.LocateControl(position='bottomleft', icon='glyphicon glyphicon-record', drawCircle=False).add_to(map)

        with open('leikkipaikat.json', 'r') as f:
            data = json.load(f)

        # for loop joka käy läpi ja ottaa tiedot marker dataan
        for i in range(x):
            street = data[str(i)]['street'][0] + data[str(i)]['street'][1:].lower()
            name = data[str(i)]['name']
            vol = data[str(i)]['vol']
            _x = 350
            _y = 181
            la = data[str(i)]['la']
            lo = data[str(i)]['lo']
            link = "http://maps.google.com/maps?q={},{}&ll={},{}=17".format(la, lo, la, lo)

            html = get_popup(link, street, name, vol)
            iframe = IFrame(html=html,width=_x,height=_y)
            popup = folium.Popup(iframe,max_width=_x)

            #Failcheck jos tiedossa tai haussa virhe
            try:
                # Tulostaa markerit kartalle
                folium.Marker(
                    location=[la, lo],
                    popup=popup,
                    #con=folium.DivIcon(html=f"""<span class="material-icons-outlined">location_on</span>""")
                    #icon=folium.DivIcon(html=f"""<div style="font-family: courier new; color: blue">{street}</div>""") Jos haluatte oikeen sotkusesks
                    icon=folium.Icon(color=get_marker_color(vol), icon_color='black', icon='glyphicon glyphicon-map-marker')
                ).add_to(fg)
            except KeyError as err:
                print("Unknown key: ", err)


        map.add_child(fg)
        map.add_to(figure)
        figure.render()
        return {"map": figure}
