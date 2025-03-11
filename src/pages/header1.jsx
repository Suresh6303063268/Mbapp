import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contact.css';
import team from '../images/mblogo1.png';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GetAppIcon from '@mui/icons-material/GetApp';

function Header() {
  return (
    <div className="home" style={{ background: '#e6f9ff' }}>
       <AppBar position="fixed">
      <Toolbar style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', color: '#34495E', height: 80 }}>
        <Typography variant="h6" noWrap component="div">
          <img style={{ height: 150 }} src={team} alt="Team" />
        </Typography>
        <div className="nav" style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between', paddingLeft: 20 }}>
            <Link to="/transction" style={{ marginRight: 20 }}>
              <button
                style={{
                  background: 'linear-gradient(to left, #00ffcc 0%, #00ffff 100%)',
                  boxShadow: '0px 0px 10px black',
                  width: '180px',
                  height: '40px',
                  border: 'none',
                  fontSize:'20px',
                  marginLeft:'-10px',
                  borderRadius: '5px'
                }}
                className="link-button"
              >
            <GetAppIcon/>           ADMIT CARD
              </button>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/home1" className="nav-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 20, textDecoration: 'none' }}>
                <HomeIcon style={{ fontSize: 35 }} />
                Home
              </Link>
              <Link to="/transction" className="nav-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 20, textDecoration: 'none' }}>
                <NotificationsActiveOutlinedIcon style={{ fontSize: 35 }} />
                Notifications
              </Link>
              <Link to="/adiminsign" className="nav-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 20, textDecoration: 'none' }}>
                <RocketLaunchIcon style={{ fontSize: 35 }} />
                Tracking
              </Link>
              <Link to="/viewall1" className="nav-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 20, textDecoration: 'none' }}>
                <NotificationsActiveOutlinedIcon style={{ fontSize: 35 }} />
                Upcoming Jobs
              </Link>
            </div>
          </div>
        <Link to="/otr" style={{ marginRight: 20 }}>
          <button
            style={{
              background: 'linear-gradient(to left, #ccffcc 0%, #ffff99 100%)',
              boxShadow: '0px 0px 10px black',
              width: '120px'
            }}
            className="link-button"
          >
            OTR
          </button>
        </Link>
        <Link to="/myaccount" className="nav-link" style={{ marginRight: 20 }}>
          <AccountCircleOutlinedIcon style={{ color: 'white', fontSize: 55 }} />
        </Link>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default Header;
