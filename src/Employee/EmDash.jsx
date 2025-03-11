import React, { useState } from 'react';
import Help from '../Employee/EmHelp.jsx';
import EmainDash from '../Employee/EmainDash.jsx';
import EmpOtr from '../Employee/Empotr.jsx';
import EmpDash from '../Employee/EmpDash.jsx';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';



import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
   Dashboard as DashboardIcon
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/emtab.css';

export default function SearchAppBar() {
  const [activeTab, setActiveTab] = useState('London');


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  

  
  return (
    <div className="home">
      
          <EmainDash/>

      <div className="Atabs-container" style={{ marginTop: 80 }}>
        <div className="Atab-vertical" style={{ boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top,#9933ff 0%, #ff00ff 100%)' }}>
        <button 
  className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} 
  onClick={() => handleTabClick('London')}
>
  <DashboardIcon style={{fontSize:30, color:'white'}}       />
  <span className='Abutton-text'>Dashboard</span>
</button>

          <button className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>
            <WysiwygIcon            style={{ color: 'white', fontSize: 30,height:50,fontWeight:300}} />
            <span className='Abutton-text'>OTR Management</span>
          </button>
          <button className={`tablinks ${activeTab === 'Roopa' ? 'active' : ''}`} onClick={() => handleTabClick('Roopa')}>
            <SupportAgentIcon             style={{ color: 'white', fontSize: 35,height:50}} />
            <span className='Abutton-text'>Customer Enquiry</span>
          </button>
         
        </div>

        <div className="Atabcontent-container">
          <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
           <EmpDash/>
          </div>
          <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
       <EmpOtr/>
          </div>
          <div id="Roopa" className={`tabcontent ${activeTab === 'Roopa' ? 'active' : ''}`}>
          <Help/>
          </div>
        </div>
      </div>
    </div>
  );
}
