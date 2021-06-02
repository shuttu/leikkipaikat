import { useEffect } from "react";
import { useMap } from "react-leaflet";
import Locate from "leaflet.locatecontrol";

const LocateControl = () => {
  const map = useMap();

  useEffect(() => {
    const locateOptions = {
      position: "bottomleft",
      drawCircle: false,
      initialZoomLevel: 17,
      strings: {
        title: "",
      },
      onActivate: () => {},
    };

    const lc = new Locate(locateOptions);
    lc.addTo(map);
  }, [map]);

  return null;
};

export default LocateControl;
