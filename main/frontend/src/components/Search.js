import React, { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from 'axios';

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
          return -1 //leikkipaikat ilman melutietoja tungetaan listan pohjalle
        }
      return a.vol.replace("-", "") - b.vol.replace("-", ""); 
    }); // ^ muutetaan melutiedot muodosta "45-50" tai "55-60" muotoon "4550" ja "5560" jne ja järjestetään pienimmästä suurimpaan
    setPlaygroundData(sorted);
    console.log(playgroundData)
  }

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
            <Button type="button" className="btn custom-list-left-btn shadow-none" autoFocus>
              Lähin
            </Button>
            <Button onClick={SortByVol} type="button" className="btn custom-list-right-btn shadow-none">
              Hiljaisin
            </Button>
          </div>
        </Form>

        {/* Tästä alkaa lista leikkipaikoista */}
        {playgroundData.filter((val) => {
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
        .map(playGround => {
          return (
            <Card className="custom-card">
              <Card.Body>
                <Card.Title className="custom-card-name">{playGround.name}</Card.Title>
                <Card.Text className="custom-card-content">
                  {playGround.street}
                </Card.Text>
                <Card.Text className="custom-card-content">
                  Mölytaso: {playGround.vol}
                </Card.Text>
                  <br/>
                <Card.Link className="custom-card-link" href={playGround.link}>Ajo-ohje</Card.Link>
                &nbsp;
                <Card.Link className="custom-card-link" href="#">Sijainti</Card.Link>
              </Card.Body>
            </Card>
          );
        })}

      </div>
    </>
  );
}

export default Search;
