import React, { useState } from 'react';
import MbMainDash from './MbMainDash.jsx';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShareIcon from '@mui/icons-material/Share';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MBMain from './MBmain.jsx';
import MBadmin from './Mbadmin.jsx';
import MBbank from './MBbank.jsx';
import MBDASH from './MBDashBoard.jsx';
import DIGILOCKER from './Digilocker.jsx';
import MbAnaltyics from './MbAnlytics.jsx';
import Mbshake from './Mbshake.jsx';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  Dashboard as DashboardIcon,
  Groups as GroupsIcon,
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
      
          <MbMainDash/>    
               

      <div className="ktabs-container" style={{ marginTop: 80 }}>
        <div className="ktab-vertical" style={{ boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top,#ff9966 0%, #ff9966 100%)' }}>
        <button 
  className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} 
  onClick={() => handleTabClick('London')}
>
  <DashboardIcon style={{fontSize:30, color:'black'}}       />
  <span style={{color:'black'}}              className='button-text'>Dashboard</span>
</button>

          <button className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>
            <GroupsIcon            style={{ color: 'black', fontSize: 30,height:50,fontWeight:300}} />
            <span style={{color:'black'}}              className='button-text'>Admins</span>
          </button>
          <button className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`} onClick={() => handleTabClick('Tokyo')}>
            <AccountBalanceIcon            style={{ color: 'black', fontSize: 30 }} />
            <span style={{color:'black'}}                 className='button-text'>Accounts</span>
          </button>
          <button className={`tablinks ${activeTab === 'Surya' ? 'active' : ''}`} onClick={() => handleTabClick('Surya')}>
            <CreditCardIcon          style={{ color: 'black', fontSize: 30 }} />
            <span style={{color:'black'}}                 className='button-text'>Payments</span>
          </button>
          <button className={`tablinks ${activeTab === 'Roopa' ? 'active' : ''}`} onClick={() => handleTabClick('Roopa')}>
            <AutoGraphIcon            style={{ color: 'black', fontSize: 35,height:50}} />
            <span style={{color:'black'}}                  className='button-text'>Analytics</span>
          </button>
          <button className={`tablinks ${activeTab === 'Kavya' ? 'active' : ''}`} onClick={() => handleTabClick('Kavya')}>
            <SupportAgentIcon             style={{ color: 'black', fontSize: 35,height:50}} />
            <span style={{color:'black'}}               className='button-text'>DigiLocker</span>
          </button>
          <button className={`tablinks ${activeTab === 'vani' ? 'active' : ''}`} onClick={() => handleTabClick('vani')}>
            <ShareIcon className='ic1'            style={{ color: 'black', fontSize: 35 }} />
          <span style={{color:'black'}}                className='button-text'>Share</span>
          </button>
        </div>

        <div className="Ktabcontent-container">
          {/* <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
          <MBDASH/>
          </div> */}
          {activeTab === "London" && <MBDASH/>}
          <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
          <MBadmin/>
          </div>
          <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'active' : ''}`}>
         <MBbank/>
          </div>
          <div id="Surya" className={`tabcontent ${activeTab === 'Surya' ? 'active' : ''}`}>
          <MBMain/>
          </div>
          <div id="Roopa" className={`tabcontent ${activeTab === 'Roopa' ? 'active' : ''}`}>
  <MbAnaltyics/>
          </div>
          <div id="Kavya" className={`tabcontent ${activeTab === 'Kavya' ? 'active' : ''}`}>
        <DIGILOCKER/>
          </div>
          <div id="vani" className={`tabcontent ${activeTab === 'vani' ? 'active' : ''}`}>
        <Mbshake/>
          </div>
        </div>
      </div>
    </div>
  );
}
