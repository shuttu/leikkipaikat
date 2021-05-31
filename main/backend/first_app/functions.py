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
        <body style='padding: 10px; background-color: #5A0BBA; color: #FFFFFF; @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
                                                                               @import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");'>
        <span style='font-family: "Roboto", sans-serif; font-weight: bold; font-size: 25px;'> {name}</span>
        <br/>
        <br/>
        <span style='white-space: nowrap; font-family: "Roboto", sans-serif; font-size: 20px;'>{street}</span>
        <br/>
        <span style='font-family: "Roboto", sans-serif; font-size: 20px;'>Etäisyys</span>
        <br/>
        <br/>
        <a style='font-family: "Neucha", cursive; font-size: 25px; text-decoration: none; color: white;' href={link} target="myIframe">Ajo-ohjeet</a>
        </body>
        """
    return html
