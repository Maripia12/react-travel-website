 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button.js';
import '../Components/Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
     
        <navbar className="navbar">
          <div className="navbar-container">
            <img
              className="navbar-logo"
              src="https://api.freelogodesign.org/files/f9c73e8676c84c0aa0e5638e2205fde9/thumb/logo_200x200.png?v=637670884660000000"
            />
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "new-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobilMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobilMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobilMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links"
                  onClick={closeMobilMenu}
                >
                Sign Up
                </Link>
              </li> 
            </ul>
            {/* {button && <Button buttonStyle= 'btn--outline'>SIGN UP</Button>} */}
          </div>
        </navbar>
     
    );
}

export default Navbar
              

