import React, { useState } from "react";
import { Link } from "react-router-dom";
import backButton from "../graphics/Back-button.png";
import infoButton from "../graphics/Info-button.png";
import greenMarker from "../graphics/Green-marker.png";
import yellowMarker from "../graphics/Yellow-marker.png";
import redMarker from "../graphics/Red-marker.png";

function MapPage() {
  const [legend, setLegend] = useState(false);

  const hideLegend = () => {
    setLegend(false);
  };

  const showLegend = () => {
    setLegend(true);
  };

  return (
    <div className="iframe_container">
      <Link to="/">
        <div className="backButtonContainer">
          <img className="backButton" src={backButton} alt="back" />
        </div>
      </Link>
      <div className="infoButtonContainer">
        <img
          className="infoButton"
          src={infoButton}
          alt="info"
          onClick={showLegend}
        />
      </div>
      {legend && (
        <div className="legend_container">
          <img className="legend_marker" src={greenMarker} alt="green" />
<<<<<<< HEAD:main/frontend/src/components/MapPage.js
          <span className="legend_text">Hiljaista</span>
          <br />
          <br />
          <img className="legend_marker" src={yellowMarker} alt="yellow" />
          <span className="legend_text">Siedettävää</span>
          <br />
          <br />
          <img className="legend_marker" src={redMarker} alt="red" />
          <span className="legend_text">Hirveä mökä</span>
=======
          <span className="legend_text_left">Hiljainen</span><span className="legend_text_right">(45-50 dB)</span>
          <br />
          <br />
          <img className="legend_marker" src={yellowMarker} alt="yellow" />
          <span className="legend_text_left">Hälyisä</span><span className="legend_text_right">(50-60 dB)</span>
          <br />
          <br />
          <img className="legend_marker" src={redMarker} alt="red" />
          <span className="legend_text_left">Meluisa</span><span className="legend_text_right">(60- dB)</span>
>>>>>>> develop:main/frontend/src/components/MapPage.js
          <div className="legend_close_button_container">
            <span className="legend_close_button" onClick={hideLegend}>
              X
            </span>
          </div>
        </div>
      )}
      <iframe
        src="http://127.0.0.1:8000/map/"
        className="iframe"
        allow="geolocation"
      ></iframe>
    </div>
  );
}

export default MapPage;
