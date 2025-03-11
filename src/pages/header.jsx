import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contact.css';
import team from '../images/mblogo1.png';
import team4 from '../images/india.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home" style={{ background: '#e6f9ff' }}>
      <AppBar position="fixed">
        <Toolbar style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', color: '#34495E', height: 80 }}>
          <Typography variant="h6" noWrap component="div">
            <img style={{ height: 150 }} src={team} alt="Team" />
          </Typography>
          <div className="nav" style={{ display: 'flex', color: 'white' }}>
            <Link to="/" className="what2">About Us</Link>
            <Link to="/About" className="nav1">Faq</Link>
            <Link to="/contact" className="nav1">Contact Us</Link>
          </div>
          <Link to="/login" className="what2">
            <button
              style={{
                background: 'linear-gradient(to left, #99ffcc 0%, #00ccff 100%)',
                boxShadow: '0px 0px 10px black',
                width: '120px'
              }}
              className="link-button"
              onClick={() => { /* Handle button click */ }}
            >
              Login
            </button>
          </Link>
          <img style={{ width: 60, height: 60, marginLeft: 50 }} src={team4} alt="" />
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn">
              <ArrowDropDownCircleIcon style={{ fontSize: 30, marginLeft: 20 }} />
            </button>
            {isOpen && (
              <div id="myDropdown" className="dropdown-content">
                <button onClick={(e) => e.preventDefault()}>Andhra Pradesh</button>
                <button onClick={(e) => e.preventDefault()}>Telangna</button>
                <button onClick={(e) => e.preventDefault()}>Delhi</button>
                <button onClick={(e) => e.preventDefault()}>Tamil Nadu</button>
                <button onClick={(e) => e.preventDefault()}>Maharashtra</button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
