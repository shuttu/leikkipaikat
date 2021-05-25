import React from "react";
import { Link } from "react-router-dom";
import backButton from "../graphics/Back-button.png";
import infoButton from "../graphics/Info-button.png";

function MapPage() {
  return (
    <div className="iframe_container">
      <Link to="/">
        <div className="backButtonContainer">
          <img className="backButton" src={backButton} alt="back" />
        </div>
      </Link>
      <div className="infoButtonContainer">
        <img className="infoButton" src={infoButton} alt="info" />
      </div>
      <iframe src="http://127.0.0.1:8000/map/" className="iframe"></iframe>
    </div>
  );
}

export default MapPage;
