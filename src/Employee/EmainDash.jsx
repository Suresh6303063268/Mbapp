import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


import {
  Home as HomeIcon,
  CalendarToday as CalendarTodayIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  MessageOutlined as MessageOutlinedIcon,
  NotificationsActiveOutlined as NotificationsActiveOutlinedIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import team from '../images/mblogo3.jpg';
import team1 from '../images/lady1.png';
import '../css/emtab.css';

export default function SearchAppBar() {
  const [selectedDate, setSelectedDate] = useState('');
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true); // State for placeholder visibility

  
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setIsPlaceholderVisible(false); // Hide placeholder once date is selected
  };

  const handleDateFocus = () => {
    setIsPlaceholderVisible(false); // Hide placeholder on focus
  };

  const handleDateBlur = () => {
    if (selectedDate === '') {
      setIsPlaceholderVisible(true); // Show placeholder if no date selected
    }
  };

  return (
    <div className="home">
      <AppBar position="fixed">
        <Toolbar style={{ background:'linear-gradient(to left, #ff6699 30%, #ff6699 100%)', color: '#34495E', height: 80 }}>
          <Typography variant="h6" noWrap component="div" style={{width:250}}>
            <img            style={{ height:100}} src={team} alt="Team" />
          </Typography>
          <div className="nav" style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between', paddingLeft: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 35, marginLeft:60, background: 'linear-gradient(to left,#ffcccc 30%, #ffcccc 100%)', width:1000,borderRadius:10}}>
              <Link to="/mblogin" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: 20, marginLeft: 100, textDecoration: 'none', gap: 10 }}>
                <HomeIcon className='ic1'       style={{ fontSize: 30, marginLeft: -20 }} />
                Home
              </Link>
              <Link to="/mbstep" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: 20, marginLeft: 10, textDecoration: 'none', gap: 20 }}>
                <CalendarTodayIcon className='ic1'           style={{ fontSize: 30 }} />
                Calendar
              </Link>
              <Link to="/emchat" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: 20, marginLeft: 10, textDecoration: 'none', gap: 20 }}>
                <MessageOutlinedIcon className='ic1'           style={{ fontSize: 30, marginTop: 10 }} />
                Messages
              </Link>
              <Link to="/emsetting" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: 20, marginLeft: 10, textDecoration: 'none', gap: 20 }}>
                <SettingsOutlinedIcon className='ic1'           style={{ fontSize: 30 }} />
                Settings
              </Link>
            </div>
          </div>
          <div style={{ background: '#ff99ff', width: 350, height:57, borderRadius:10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px',marginTop:0,marginLeft:20}}>
            <div style={{ position: 'relative'}}>
              {isPlaceholderVisible && (
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    pointerEvents: 'none', // Make sure placeholder doesn't interfere with input
                    paddingLeft: '10px' // Adjust padding as needed
                  }}
                >
              
                </div>
              )}
              <input
                type='date'
                value={selectedDate}
                onChange={handleDateChange}
                onFocus={handleDateFocus}
                onBlur={handleDateBlur}
                style={{
                  color: 'white',
                  border: 'none',
                  background: 'transparent',
                  fontSize: '16px',
                  outline: 'none',
                  width: '100%',
                  padding: '10px'
                }}
              />
            </div>
            <Link to="/emnotification" style={{ color: 'white', textDecoration: 'none' }}>
              <NotificationsActiveOutlinedIcon style={{ fontSize: 35 }} />
            </Link>
            <Link to="/emprofile" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
              <img style={{ height: 60, marginRight: -20 }} src={team1} alt="Team" />
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      
       




    </div>
  );
}
