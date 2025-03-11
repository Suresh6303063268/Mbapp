import React, { useState } from 'react';
import Dash1 from './Dash1.jsx';
import Admit from './Admitdelivery.jsx';
import Help from './Helpchart.jsx';
import Share from './share.jsx';
import MBHover from './hover.jsx';
import MBGroup from './Mbgroup.jsx';
import AdminJob from './AdminJobnotifications.jsx';
import ShareIcon from '@mui/icons-material/Share';
import { FaIdCard } from "react-icons/fa";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  Dashboard as DashboardIcon,
  Groups as GroupsIcon,
  Description as DescriptionIcon
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/tab.css';

export default function SearchAppBar() {
  const [activeTab, setActiveTab] = useState('London');
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <div className="home">
      <Dash1/>

      <div className="ktabs-container" style={{ marginTop: 80 }}>
        <div className="ktab-vertical" style={{ boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top,#006666 0%, #003366 100%)' }}>
        <button 
  className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} 
  onClick={() => handleTabClick('London')}
>
  <DashboardIcon style={{fontSize:30, color:'white'}}       />
  <span className='button-text'>Dashboard</span>
</button>

          <button className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>
            <GroupsIcon            style={{ color: 'white', fontSize: 30,height:50,fontWeight:300}} />
            <span className='button-text'>Employees</span>
          </button>
          <button className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`} onClick={() => handleTabClick('Tokyo')}>
            <DescriptionIcon            style={{ color: 'white', fontSize: 30 }} />
            <span className='button-text'>Job Notifications</span>
          </button>
          <button className={`tablinks ${activeTab === 'Surya' ? 'active' : ''}`} onClick={() => handleTabClick('Surya')}>
            <FaIdCard          style={{ color: 'white', fontSize: 30 }} />
            <span className='button-text'>Admit Card Delivery</span>
          </button>
          <button className={`tablinks ${activeTab === 'Roopa' ? 'active' : ''}`} onClick={() => handleTabClick('Roopa')}>
            <SupportAgentIcon             style={{ color: 'white', fontSize: 35,height:50}} />
            <span className='button-text'>Help and Support</span>
          </button>
          <button className={`tablinks ${activeTab === 'vani' ? 'active' : ''}`} onClick={() => handleTabClick('vani')}>
            <ShareIcon className='ic1'            style={{ color: 'white', fontSize: 35 }} />
          <span className='button-text'>Share</span>
          </button>
        </div>

        <div className="Ktabcontent-container">
          <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
            <MBGroup/>
          </div>
          <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
           <MBHover/>
          </div>
          <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'active' : ''}`}>
          <AdminJob/>
          </div>
          <div id="Surya" className={`tabcontent ${activeTab === 'Surya' ? 'active' : ''}`}>
          <Admit/>
          </div>
          <div id="Roopa" className={`tabcontent ${activeTab === 'Roopa' ? 'active' : ''}`}>
          <Help/>
          </div>
          <div id="vani" className={`tabcontent ${activeTab === 'vani' ? 'active' : ''}`}>
          <Share/>
          </div>
        </div>
      </div>
    </div>
  );
}
