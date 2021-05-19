import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../logo.png';

function FrontPage() {

    
    return (
        <div>
            <img className='logo' src={logo} alt='Logo'/>;
            <h1>Leikkipaikat ja melutasot</h1>
            <Link to='/Map'>
                <Button className="buttonStyle">Kartta leikkipaikoista</Button>
            </Link>
            <Link to='/SearchPage'>
                <Button className="buttonStyle">Listaus leikkipaikoista</Button>
            </Link>
        </div>
    )
}


export default FrontPage;