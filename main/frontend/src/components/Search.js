import React, { useState } from "react";
import { Row, Col, Button, Form, Card, Accordion } from "react-bootstrap";
import JSONDATA from "../MOCK_DATA.json";

function Search() {
  const [inputValue, setInputValue] = useState("");

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
            <Button type="button" className="btn custom-list-right-btn shadow-none">
              Hiljaisin
            </Button>
          </div>
        </Form>

        {/* MOCK_DATA.json filussa tällä hetkellä id, name ja distance
                    Datan haku ja filtteröinti MOCK_DATA.json filusta niin että hakukentän ollessa tyhjä 
                    näytetään kaikki paikat järjestettynä distancen mukaan pienimmästä suurimpaan. 
                    Hakukenttä toimii nimiä hakemalla */}

            {JSONDATA.filter((val) => {
                if (inputValue == "") {
                    return val
                } else if ( val.name.toLowerCase().startsWith(inputValue.toLowerCase())) {
                    return val
                }
            }).sort((a, b) => a.distance > b.distance ? 1 : -1 ) //Järjestetään distancen mukaan
            .map((val, key) => {
                return (

                        <Card className="center custom-card" >
                            <Card.Body>
                                <Card.Title>{val.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{val.distance}</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>

                )
            })}
        </div>
        </>
    )
}

export default Search;
