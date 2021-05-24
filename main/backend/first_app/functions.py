# Olin hiukka laiska tän kanssa :D Tekee mitä nimi sanoo
def get_marker_color(vol):
    if vol != 'Empty':
        if vol[:2].isdigit() == True:
            x = int(vol[:2])
        if x > 60:
            return 'purple'
        elif x > 55:
            return 'darkred'
        elif x > 50:
            return 'red'
        elif x > 45:
            return 'orange'
        else:
            return 'green'
    else:
        return 'gray'

def get_group(i):
    return None
