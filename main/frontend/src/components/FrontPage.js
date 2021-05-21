import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../graphics/logo.png';

function FrontPage() {

    return (
        <div className="container">
            <img className='logoOnFrontPage' src={logo} alt='Logo'/>
            <h1>Leikkipaikat ja<br/>melutasot</h1>
            <Link className="link" to='/Map'>
                <Button className="custom-btn shadow-none">Kartta</Button>
            </Link>
            <Link className="link" to='/SearchPage'>
                <Button className="custom-btn shadow-none">Listaus</Button>
            </Link>
        </div>
    )
}


export default FrontPage;