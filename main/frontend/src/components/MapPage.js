import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function MapPage() {
    return (
        <div>
            <Link className="link" to='/'>
                <Button variant="outline-danger" className="buttonStyle custom-btn">Back</Button>
            </Link>
            <h1>Kartta</h1>
        </div>
    )
}

export default MapPage
