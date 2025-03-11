import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Jobs() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <div>
       <div className='bcontainermain2'   style={{height:180, border: '1px solid gray', boxShadow: '2px 2px 5px black', marginTop:200, borderRadius:10,width:1200,marginLeft:150}}>
        <div className="tabingbtn" style={{gap:65, marginLeft:55, marginTop:30,height:50, display:'flex'}}>
          <button 
            className={activeTab === 'tab1' ? 'active' : ''}
            onClick={() => handleTabClick('tab1')} style={{width:'130px',padding:5, fontSize: 14, marginTop:8,  cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
            boxShadow:'none'}}   
         >
            AllIndiaGovt.Jobs
          </button>
          <button
            className={activeTab === 'tab2' ? 'active' : ''}
            onClick={() => handleTabClick('tab2')} style={{width:'100', padding:5, fontSize: 14, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            State Govt.Jobs
          </button>
          <button
            className={activeTab === 'tab3' ? 'active' : ''}
            onClick={() => handleTabClick('tab3')} style={{width:'100', padding:10, fontSize: 15, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            Bank Jobs
          </button>
          <button
            className={activeTab === 'tab4' ? 'active' : ''}
            onClick={() => handleTabClick('tab4')} style={{width:'100', padding:10, fontSize: 14, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            Teaching Jobs
          </button>
          <button
            className={activeTab === 'tab5' ? 'active' : ''}
            onClick={() => handleTabClick('tab5')} style={{width:'100', padding:11, fontSize: 13, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            EngineeringJobs
          </button>
          <button
            className={activeTab === 'tab6' ? 'active' : ''}
            onClick={() => handleTabClick('tab6')} style={{width:'100', padding:11, fontSize: 14, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            Railway Jobs
          </button>
        </div>


        <div className="containerof" style={{ width: 900, marginLeft: 50, marginTop:30, gap:46 }}>
  <p
    className={activeTab === 'tab7' ? 'active' : ''}
    onClick={() => handleTabClick('tab7')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',paddingLeft:30}}
  >
    Syllabus
  </p>
  <p
    className={activeTab === 'tab8' ? 'active' : ''}
    onClick={() => handleTabClick('tab8')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',paddingLeft:30}}
  >
    PQP
  </p>
  <p
    className={activeTab === 'tab9' ? 'active' : ''}
    onClick={() => handleTabClick('tab9')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',paddingLeft:30}}
  >
    AnswerKey
  </p>
  <h1
    className={activeTab === 'tab10' ? 'active' : ''}
    onClick={() => handleTabClick('tab10')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold',paddingLeft:30}}
  >
    Results
  </h1>
  <h1
    className={activeTab === 'tab11' ? 'active' : ''}
    onClick={() => handleTabClick('tab11')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',paddingLeft:30}}
  >
    CutOff
  </h1>
  <div>
    <div style={{ textDecoration: 'none',height:'50px'}}>
      <form style={{height:50}}         className="form1" onSubmit={handleSubmit}>
        <input
        className="fold4"
          style={{ width: 250, marginLeft:100, height:40, marginTop:-25 }}
          type="text"
          name="search"
          placeholder="Choose Your State"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon
          className='find'
          icon={faSearch}
          aria-hidden="true"
          style={{ marginLeft:310, marginTop:-50, fontSize: 5 }}
        />
      </form>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Jobs;
