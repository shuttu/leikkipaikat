import React, { useState, useEffect } from "react";
import * as functions from "./Functions";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import { Link } from "react-router-dom";
import LocateControl from "./LocateControl";
import backButton from "../graphics/Back-button.png";
import infoButton from "../graphics/Info-button.png";
import locateButton from "../graphics/Locate-button.png";
import greyMarker from "../graphics/Grey-marker.png";
import greenMarker from "../graphics/Green-marker.png";
import yellowMarker from "../graphics/Yellow-marker.png";
import redMarker from "../graphics/Red-marker.png";
import greyMapMarker from "../graphics/Grey-mapmarker.png";
import greenMapMarker from "../graphics/Green-mapmarker.png";
import yellowMapMarker from "../graphics/Yellow-mapmarker.png";
import redMapMarker from "../graphics/Red-mapmarker.png";
import LeikkipaikkaData from '../leikkipaikat.json';

const MapPage = () => {
  const [legend, setLegend] = useState(false);
  const [mapData, setMapData] = useState([]);
  const [userPos, setUserPos] = useState([]);

  const hideLegend = () => {
    setLegend(false);
  };

  const showLegend = () => {
    setLegend(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserPos([pos.coords.latitude, pos.coords.longitude]);
    });
    const GetData = () => {
        const paikat = [];
        for(let data of Object.keys(LeikkipaikkaData)) {
          paikat.push(LeikkipaikkaData[data])
        }
        setMapData(paikat);
    };
    GetData();
  }, []);

  let greyIcon = new L.Icon({
    iconUrl: greyMapMarker,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0.9, 5],
  });

  let greenIcon = new L.Icon({
    iconUrl: greenMapMarker,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0.9, 5],
  });

  let yellowIcon = new L.Icon({
    iconUrl: yellowMapMarker,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0.9, 5],
  });

  let redIcon = new L.Icon({
    iconUrl: redMapMarker,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0.9, 5],
  });

  return (
    <MapContainer
      center={[61.4978, 23.761]}
      zoom={15}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <LocateControl />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
      <div className="locateButtonContainer">
        <img className="locateButton" src={locateButton} alt="locate" />
      </div>
      {legend && (
        <div className="legend_container">
          <img className="legend_marker" src={greenMarker} alt="green" />
          <span className="legend_text_left">Hiljainen</span>
          <span className="legend_text_right">(45-50 dB)</span>
          <br />
          <br />
          <img className="legend_marker" src={yellowMarker} alt="yellow" />
          <span className="legend_text_left">Hälyisä</span>
          <span className="legend_text_right">(50-60 dB)</span>
          <br />
          <br />
          <img className="legend_marker" src={redMarker} alt="red" />
          <span className="legend_text_left">Meluisa</span>
          <span className="legend_text_right">(60- dB)</span>
          <br />
          <br />
          <img className="legend_marker" src={greyMarker} alt="grey" />
          <span className="legend_text_left">Ei melutietoja saatavilla</span>
          <div className="legend_close_button_container">
            <span className="legend_close_button" onClick={hideLegend}>
              X
            </span>
          </div>
        </div>
      )}
      {mapData.map((data) => {
        const parsedNameData = functions.parseData(data.name);
        const parsedStreetData = functions.parseData(data.street);
        const distance = functions.getDistance(userPos, [data.la, data.lo]);
        return (
          <Marker
            key={data.key}
            position={[data.la, data.lo]}
            icon={
              parseInt(data.vol.slice(0, 2)) > 55
                ? redIcon
                : parseInt(data.vol.slice(0, 2)) > 45
                ? yellowIcon
                : parseInt(data.vol.slice(0, 2)) <= 45
                ? greenIcon
                : greyIcon
            }
          >
            <Popup>
              <span className="popupName">{parsedNameData}</span>
              <br />
              <br />
              <span className="popupContent">{parsedStreetData}</span>
              <br />
              <span className="popupContentDistance">
                Etäisyys {distance} m
              </span>
              <br />
              <br />
              <a className="popupLink" href={data.link} target="_blank">
                Ajo-ohjeet
              </a>
              <div className="popup_close_button_container">
                <span className="popup_close_button">X</span>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapPage;
