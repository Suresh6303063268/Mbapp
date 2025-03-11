import React, { useState } from 'react';
import EmainDash from './EmainDash.jsx';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom'; 
import EmProfile1 from './EmProfile1.jsx';
import ErSettings from './ErSettings.jsx';
import EmSecurity from './EmSecurity.jsx';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
  
  
  SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Prtabs.css';

export default function SearchAppBar() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('London');
 

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

   
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform your logout logic here, e.g., clearing authentication tokens
                Swal.fire({
                    title: 'Logged Out!',
                    text: 'You have been logged out successfully.',
                    icon: 'success',
                    showConfirmButton: false, // Hide the default 'OK' button
                    background: '#006699',
                    color: 'white',
                    width: '500px',
                    iconColor: '#00ff00',
                    timer: 1500 // Automatically close after 1.5 seconds
                }).then(() => {
                    // Redirect to login page after the timer
                    navigate('/login');
                });
            }
        });
    };

    return (
        <div className="home">
            <EmainDash/>
            <div className="Ptabs-container" style={{ marginTop: 80 }}>
                <div className="Ptab-vertical" style={{ boxShadow: '0px 0px 5px black', background: 'linear-gradient(to top,#006666 0%, #003366 100%)' }}>
                    <button
                        className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
                        onClick={() => handleTabClick('London')}
                    >
                        <AccountCircleOutlinedIcon style={{ fontSize: 30, color: 'white' }} />
                        <span className='button-text'>Profile</span>
                    </button>

                    <button className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>
                        <VpnLockIcon style={{ color: 'white', fontSize: 30, height: 50, fontWeight: 300 }} />
                        <span className='button-text'>Security</span>
                    </button>
                    <button className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`} onClick={() => handleTabClick('Tokyo')}>
                        <SettingsOutlinedIcon style={{ color: 'white', fontSize: 30 }} />
                        <span className='button-text'>Settings</span>
                    </button>
                    <button
                        className={`tablinks ${activeTab === 'Surya' ? 'active' : ''}`}
                        onClick={handleLogout}
                    >
                        <LogoutIcon style={{ color: 'white', fontSize: 30 }} />
                        <span className='button-text'>LogOut</span>
                    </button>
                </div>

                <div className="Ptabcontent-container">
                    <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
                    <EmProfile1/>
                    </div>
                    <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
                        <EmSecurity />
                    </div>
                    <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'active' : ''}`}>
                        <ErSettings/>
                    </div>
                    <div id="Surya" className={`tabcontent ${activeTab === 'Surya' ? 'active' : ''}`}>
                        <EmProfile1/>
                    </div>
                </div>
            </div>
        </div>
    );
}
