Ohje leikkipaikat.json lähdetiedoston koostoon

1. Navigoi tiesi paikkatietoikkuna sivustolle
https://kartta.paikkatietoikkuna.fi/?lang=en

2. valitse COORDINATE TRANSFORMATION painike vasemmalta ja valitse seuraavat asetukset:
Geodetic coordinate reference system = ETRS-GK24
Coordinate system = Geographic 2D
Geodetic coordinate reference system = EUREF-FIN-GRS80
Coordinate information source = From file

Tarjoa tiedosto.txt:n joka sisältää muutettavat koordinaatit. Valitse Decimal ja Field seperator tiedostosi mukaan.
Tallenna tulokset kansioon nimellä coordinates.txt

3. Lisää samaan kansion python tiedosto.py joka siäsltää seuraavan:

import requests
import json
# Leikkipaikkojen määrä
x = 403
for url in ["https://data.tampere.fi/data/api/action/datastore_search?resource_id=64981409-3cf7-4d32-a1b6-563963ea3fa8&limit={}".format(str(x))]:
    get = requests.get(url)
data = get.json()
with open('coordinates.txt', 'r') as f:
    cor_lines = f.readlines()
with open('leikkipaikat.json','r+') as jsonFile:
    json_obj = {}
    for i in range(x):
        name = data['result']['records'][i]['ALUE_NIMI']
        point = data['result']['records'][i]['GEOLOC']
        street = data['result']['records'][i]['ALUE_SIJ']
        coordinates = point
        coordinates_rev = re.sub(r'(\d+\.\d+)\s(\d+\.\d+)',r'\2 \1',cor)
        coordinates_rev = coordinates_rev[7:]
        co = cor_lines[i]
        la = co.split(" ")[0]
        lo = co.split(" ")[1]
        lo = lo.replace('\n', '')
        link = "http://maps.google.com/maps?q={},{}&ll={},{}=17".format(la, lo, la, lo)
        try:
            coordinates_rev = re.sub(r'(\d+\.\d+)\s(\d+\.\d+)',r'\2 \1',coordinates)
            uri_melu = ''.join(['http://geodata.tampere.fi/geoserver/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=ymparisto_ja_terveys:YV_MELU_P_2017_KESKIAANI&cql_filter=INTERSECTS(GEOMETRY,', coordinates_rev, ')'])
            response_m = requests.get(uri_melu)
            mdata = response_m.cor_lines
            root_m = ET.fromstring(mdata)
            vol = root_m[0][0][1].text
        except Exception as exc:
            vol = 'Empty'
        if str(vol) == '':
            vol = 'Empty'
        json_obj[i] = []
        json_obj[i] = {
            'name' : name,
            'street' : street,
            'vol' : vol,
            'la' : la,
            'lo' : lo,
            'point' : coordinates,
            'link' : link
        }
    json.dump(json_obj, jsonFile, indent=7)

4. Muuta kopioudun skriptin x vastaamaan coordinates.txt:n rivimäärää.

5. Luo kansioon leikkipaikat.json tiedosto.

6. Käynnistä tiedosto.py ja leikkipaikka datan pitäisi ilmestyä leikkipaikat.json tiedostoon.