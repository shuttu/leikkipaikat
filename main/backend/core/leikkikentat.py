import requests

def fetch_playgrounds():

    how_many_fields = 400

    url = f"https://data.tampere.fi/data/api/action/datastore_search?resource_id=64981409-3cf7-4d32-a1b6-563963ea3fa8&limit={how_many_fields}"
    response = requests.get(url)

    data = response.json()

    playgrounds = []

    for i in range(how_many_fields):
        playground = {
        'id': i,
        'name': data["result"]["records"][i]["ALUE_NIMI"],
        'address': data["result"]["records"][i]["ALUE_SIJ"],
        'city_region': data["result"]["records"][i]["KAUPUNGINOSA"],
        'coordinates': data["result"]["records"][i]["GEOLOC"],
        }
        playgrounds.append(playground)


    return playgrounds