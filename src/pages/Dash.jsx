import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Admit from './Admitdelivery.jsx';
import {
  Home as HomeIcon,
  CalendarToday as CalendarTodayIcon,
  ViewComfy as ViewComfyIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  MessageOutlined as MessageOutlinedIcon,
  NotificationsActiveOutlined as NotificationsActiveOutlinedIcon,
  Dashboard as DashboardIcon,
  Groups as GroupsIcon,
  Description as DescriptionIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import team from '../images/mblogo1.png';
import team1 from '../images/lady1.png';
import '../css/tab.css';

export default function SearchAppBar() {
  const [activeTab, setActiveTab] = useState('London');
  const [selectedDate, setSelectedDate] = useState('');
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true); // State for placeholder visibility

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
        <Toolbar style={{ background: 'white', color: '#34495E', height: 80 }}>
          <Typography variant="h6" noWrap component="div">
            <img style={{ height: 80 }} src={team} alt="Team" />
          </Typography>
          <div className="nav" style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between', paddingLeft: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 35, marginLeft: 10, background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', borderRadius: 30, width: 1000 }}>
              <Link to="/home1" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 40, textDecoration: 'none', gap: 10 }}>
                <HomeIcon className='ic1'       style={{ fontSize: 35, marginLeft: -20 }} />
                Home
              </Link>
              <Link to="/transction" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 10, textDecoration: 'none', gap: 20 }}>
                <CalendarTodayIcon className='ic1'           style={{ fontSize: 35 }} />
                Calendar
              </Link>
              <Link to="/transction" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 10, textDecoration: 'none', gap: 20 }}>
                <MessageOutlinedIcon className='ic1'           style={{ fontSize: 35, marginTop: 10 }} />
                Messages
              </Link>
              <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 10, textDecoration: 'none', gap: 20 }}>
                <ViewComfyIcon className='ic1'            style={{ fontSize: 35 }} />
                Active
              </Link>
              <Link to="/viewall1" className="nav-link" style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 20, marginLeft: 10, textDecoration: 'none', gap: 20 }}>
                <SettingsOutlinedIcon className='ic1'           style={{ fontSize: 35 }} />
                Settings
              </Link>
            </div>
          </div>
          <div style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', width: 350, height: 60, marginLeft: -20, borderRadius: 30, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
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
            <Link to="/notifications" style={{ color: 'white', textDecoration: 'none' }}>
              <NotificationsActiveOutlinedIcon style={{ fontSize: 45 }} />
            </Link>
            <Link to="/myaccount" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
              <img style={{ height: 60, marginRight: -20 }} src={team1} alt="Team" />
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <div className="tabs-container" style={{ marginTop: 80 }}>
        <div className="tab-vertical" style={{ boxShadow: '0px 0px 5px black' }}>
          <button className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => handleTabClick('London')}>
            <DashboardIcon className='ic1'            style={{ color: '#006699', fontSize: 35 }} />
            Dashboard
          </button>
          <button className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>
            <GroupsIcon className='ic1'           style={{ color: '#006699', fontSize: 35 }} />
            Employees
          </button>
          <button className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`} onClick={() => handleTabClick('Tokyo')}>
            <DescriptionIcon className='ic1'           style={{ color: '#006699', fontSize: 35 }} />
            Job Notifications
          </button>
          <button className={`tablinks ${activeTab === 'Surya' ? 'active' : ''}`} onClick={() => handleTabClick('Surya')}>
            <DescriptionIcon className='ic1'          style={{ color: '#006699', fontSize: 35 }} />
            Admit Card Delivery
          </button>
          <button className={`tablinks ${activeTab === 'Roopa' ? 'active' : ''}`} onClick={() => handleTabClick('Roopa')}>
            <DescriptionIcon className='ic1'            style={{ color: '#006699', fontSize: 35 }} />
            Help and Support
          </button>
        </div>

        <div className="tabcontent-container">
          <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
            <h3>London</h3>
            <p>London is the capital city of England.</p>
          </div>
          <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
          </div>
          <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'active' : ''}`}>
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
          </div>
          <div id="Surya" className={`tabcontent ${activeTab === 'Surya' ? 'active' : ''}`}>
          <Admit/>
          </div>
          <div id="Roopa" className={`tabcontent ${activeTab === 'Roopa' ? 'active' : ''}`}>
            <h3>Roopa</h3>
            <p>Content for Roopa tab.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
