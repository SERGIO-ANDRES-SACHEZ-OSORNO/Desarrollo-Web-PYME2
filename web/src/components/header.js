import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Header =()=>{
    return(
        <header>
            <nav id='menu'>
                <ul>
                    <li><Link to="/" className='item'>Inicio</Link></li>
                    <li><Link to="/store" className='item'>Tienda</Link></li>
                    <li><Link to="/form" className='item'>Formulario</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;