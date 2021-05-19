import React, { useState } from "react";
import {Row, Col, Button, Form, Card, Accordion} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import JSONDATA from '../MOCK_DATA.json';

function Search() {

    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }
    return (
        <>
        <div className="center">
            
            <Form >
                <Form.Group className="SearchBar">
                    <Form.Control
                    className="SearchBar"
                    type="text" 
                    value={inputValue}
                    placeholder="Hae" 
                    onChange={handleInputChange}
                    />
                </Form.Group>

                    {/* Hakusivun napit, jotka ei tee vielä mitään */}
                    <Button type="button" className="btn custom-btn">Lähin</Button>
                    <Button type="button" className="btn custom-btn">Hiljaisin</Button>
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
                        // Leikkipaikat listataan react-bootstrap -kirjaston Accordion- ja Card-komponentteja käyttäen
                        // Card aukeaa ja sulkeutuu klikkaamalla
            <Accordion className="center">

                <Card className="center custom-card" key={key}>
                <Accordion.Toggle style={{background:'white'}} as={Card.Header} variant="link" eventKey={val.id}>
                    <Row>
                        <Col xs={10}><h4>{val.name} </h4></Col>  {/*Näytetään leikkipaikan nimi Cardin Headerissa*/}
                        <Col><Icon.ArrowDownCircle size={35}/></Col>
                    </Row> 

                    <Row>
                        <Col><h4>{val.distance}m</h4> </Col> {/*Näytetään leikkipaikan etäisyys Cardin Headerissa*/}
                        <Col></Col>
                    </Row>
                </Accordion.Toggle>

                        {/*Cardin aukeava ja sulkeutuva osio */}
                    <Accordion.Collapse eventKey={val.id}>
                        <Card.Body>
                        <Card.Subtitle className="mb-2 d-flex">Lorem ipsum</Card.Subtitle>
                        <Card.Text className="mt-3 d-flex" href="#"><Icon.Map size={26} className="mx-2 d-flex"/> <a href="url">Sijainti kartalla</a></Card.Text>
                        <Card.Text className="mt-3 d-flex" href="#"><Icon.Map size={26} className="mx-2 d-flex"/> <a href="url">Ajo-ohjeet</a></Card.Text>
                        </Card.Body>

                    </Accordion.Collapse>
                        {/*Cardin aukeava ja sulkeutuva osio */}
                </Card>

            </Accordion>
                )
            })}
        </div>
        </>
    )
}

export default Search

