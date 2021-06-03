import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import * as functions from "./Functions";
import axios from "axios";
import greyMarker from "../graphics/Grey-marker.png";
import greenMarker from "../graphics/Green-marker.png";
import yellowMarker from "../graphics/Yellow-marker.png";
import redMarker from "../graphics/Red-marker.png";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [playgroundData, setPlaygroundData] = useState([]);

  const url = "http://127.0.0.1:8000/map/";

  useEffect(() => {
    const getData = async () => {
      await axios.get(url).then((response) => {
        const data = [];
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          data.push({ key: i, ...response.data[i] });
        }
        setPlaygroundData(data);
      });
    };
    getData();
  }, []);

  const SortByVol = () => {
    const sorted = [...playgroundData].sort((a, b) => {
      if (b.vol === "Empty") {
        return -1; //leikkipaikat ilman melutietoja tungetaan listan pohjalle
      }
      return a.vol.replace("-", "") - b.vol.replace("-", "");
    }); // ^ muutetaan melutiedot muodosta "45-50" tai "55-60" muotoon "4550" ja "5560" jne ja järjestetään pienimmästä suurimpaan
    setPlaygroundData(sorted);
    console.log(playgroundData);
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="container">
        <Form className="form">
          <Form.Group>
            <Form.Control
              className="SearchBar shadow-none"
              type="text"
              value={inputValue}
              placeholder="Hae hakusanalla"
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Hakusivun napit, jotka ei tee vielä mitään */}
          <div className="listButtonContainer">
            <Button
              type="button"
              className="btn custom-list-left-btn shadow-none"
              autoFocus
            >
              Lähin
            </Button>
            <Button
              onClick={SortByVol}
              type="button"
              className="btn custom-list-right-btn shadow-none"
            >
              Hiljaisin
            </Button>
          </div>
        </Form>

        {/* Tästä alkaa lista leikkipaikoista */}
        {playgroundData
          .filter((val) => {
            if (inputValue == "") {
              return val;
            } else if (
              val.name.toLowerCase().startsWith(inputValue.toLowerCase())
            ) {
              return val;
            } else if (
              val.street.toLowerCase().startsWith(inputValue.toLowerCase())
            ) {
              return val;
            }
          })
          .map((playGround) => {
            const parsedNameData = functions.parseData(playGround.name);
            const parsedStreetData = functions.parseData(playGround.street);
            const volIcon =
              parseInt(playGround.vol.slice(0, 2)) > 55
                ? redMarker
                : parseInt(playGround.vol.slice(0, 2)) > 45
                ? yellowMarker
                : parseInt(playGround.vol.slice(0, 2)) <= 45
                ? greenMarker
                : greyMarker;
            return (
              <div className="custom-card">
                <div className="custom-card-vol-marker-container">
                  <img className="custom-card-vol-marker" src={volIcon} alt="volume-level" />
                </div>
                <div className="custom-card-content-container">
                <span className="custom-card-name">{parsedNameData}</span>
                <br />
                <br />
                <span className="custom-card-content">{parsedStreetData}</span>
                <br />
                <span className="custom-card-content">Etäisyys 300 m</span>
                <br />
                <br />
                <a
                  className="custom-card-link"
                  href={playGround.link}
                  target="_blank"
                >
                    Ajo-ohjeet
                </a>
                  </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Search;
