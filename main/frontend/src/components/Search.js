import React, { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from 'axios';

function Search() {
  const [inputValue, setInputValue] = useState("");
<<<<<<< HEAD:main/frontend/src/components/Search.js
  const [playgroundData, setPlaygroundData] = useState([{name: "", address: ""}]);

  const url = 'http://127.0.0.1:8000/leikkipaikat/'

  useEffect(() => {
    const getData = async () => {
      await axios.get(url)
      .then(response => {
        setPlaygroundData(response.data.leikkipaikat.map(item => {
          return item
        }))
      })
    }
    getData();
  }, [])
=======
  const [playgroundData, setPlaygroundData] = useState([{}]);

  const url = 'http://127.0.0.1:8000/leikkipaikat/'

  useEffect(() => {
    const getData = async () => {
      await axios.get(url)
      .then(response => {
        setPlaygroundData(response.data.leikkipaikat.map(item => {
          return item
        }))
      })
    }
    getData();
  }, [])

>>>>>>> develop:main/frontend/src/components/Search.js

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

        {/* Tästä alkaa lista leikkipaikoista */}
        {playgroundData.filter((val) => {
        if (inputValue == "") {
          return val;
        } else if (
<<<<<<< HEAD:main/frontend/src/components/Search.js
          val.name.toLowerCase().startsWith(inputValue.toLowerCase())
=======
          val.name.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          return val;
        } else if (
          val.address.toLowerCase().includes(inputValue.toLowerCase())
>>>>>>> develop:main/frontend/src/components/Search.js
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
                  {playGround.address}
                </Card.Text>
                  <br/>
                <Card.Link className="custom-card-link" href="#">Ajo-ohje</Card.Link>
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
