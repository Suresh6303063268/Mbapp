import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Faq1 from '../FaqSection/trans1.jsx';
import Faq2 from '../FaqSection/trans2.jsx';
import Faq3 from '../FaqSection/trans3.jsx';
import Faq4 from '../FaqSection/trans4.jsx';
import Faq5 from '../FaqSection/trans5.jsx';
import Header1 from './header1.jsx';
import Fotter from './fotter.jsx';
import '../css/notification.css';

function Transactions() {
  const faqSectionRef = useRef(null);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Applied Jobs');
 

  useEffect(() => {
    if (location.hash === '#faq' && faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div>
      <Header1 />

      <h1 style={{textAlign:'center',marginTop:150, color:'black',fontWeight:'bold'}}> <NotificationsNoneOutlinedIcon style={{fontSize:50}}  />Notifications</h1>


      <div ref={faqSectionRef}>
        <div className='text-center mt-10' dir='ltr'>
          <div>
            <div className='tab' style={{ marginTop:100, marginLeft:100 }}>
              {['Applied Jobs', 'Admit Card Release', 'Answer Key', 'Results', 'Transactions'].map((category) => (
                <button
                  key={category}
                  style={{
                    width:190,
                    background: 'linear-gradient(to left,  #006699 60%, #152D43 100%, #0B496F 100%, #152D43 100%)',
                    borderRadius: 10,
                    color: 'white',
                    transition: 'background-color 0.3s ease'
                  }}
                  className={`tablinks ${activeTab === category ? 'active' : ''}`}
                  onClick={() => openCity(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {['Applied Jobs', 'Admit Card Release', 'Answer Key', 'Results', 'Transactions'].map((category) => (
              <div
                key={category}
                id={category}
                className={`tabcontent ${activeTab === category ? 'active' : ''}`}
              >
                {React.createElement(
                  {
                    'Applied Jobs': Faq1,
                    'Admit Card Release': Faq2,
                    'Answer Key': Faq3,
                    'Results': Faq4,
                    'Transactions': Faq5,
                  }[category],
                  { category }
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default Transactions;
