# Olin hiukka laiska tän kanssa :D Tekee mitä nimi sanoo
def get_marker_color(vol):
    if vol != 'Empty':
        if vol[:2].isdigit() == True:
            x = int(vol[:2])
        if x > 55:
            return 'red'
        elif x > 45:
            return 'orange'
        else:
            return 'green'
    else:
        return 'lightgray'

def get_group(i):
    return None

def get_popup(link, street, name, vol):
    #<iframe id="myIFrame" width="{}" height="{}" src={}""".format(x,y,url) + """ frameborder="0"></iframe>
    vol += " Desibeliä"
    html = f"""
        <h1> {name}</h1>
        <p>Jotain vaikka tekstiä</p>
        <ul>
            <li>{street}</li>
            <li>{vol}</li>
        </ul>
        </p>
        <a href={link} target="myIframe">Ajo-ohjeet</a>
        """
    return html
