import React from 'react';
import SmsIcon from '@mui/icons-material/Sms';
import RaviImage1 from '../images/lady2.png';
import { Link } from 'react-router-dom';
import Report from './Mbk2.jsx';
import "../css/share.css";

function Progressbar() {
  const employees = [
    { name: 'Jagadeesh', active: true },
    { name: 'Naveen', active: true },
    { name: 'Raju', active: false },
    { name: 'Akhila', active: true },
    { name: 'Karthik', active: false },
    { name: 'Abhi', active: true },
    { name: 'Suresh', active: false },
    { name: 'Roopa', active: true },
  ];






  const handleMouseOver = (e) => {
    e.target.style.color = 'red';
  };

  const handleMouseOut = (e) => {
    e.target.style.color = 'black';
  };


  return (
    <div style={{width:1200}}>
      <div style={{ display: 'flex', width:1000, height: 70, backgroundColor: 'darkred', marginLeft: 70, marginTop: 20, borderRadius:10,boxShadow: '0px 0px 5px black'}}>
        <h1 style={{ color: 'white', fontSize: 20, paddingTop:20, paddingLeft:20,fontWeight:'bold',width:300}}>Employee Profile</h1>
        <div style={{ display: 'grid' }}>
          <label style={{ color: 'white', marginLeft:480, fontSize: 20,paddingTop:15}}>Andhra Pradesh</label><br />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: 70, marginTop: 20, width:600, height: 500,boxShadow: '0px 0px 5px black'}}>
         <div style={{width:600,height:70}}>
            <div style={{background:'#ff0066',height:50,boxShadow: '0px 0px 5px black'}}>
          <h1  style={{fontSize:20,fontWeight:'bold',paddingTop:10,paddingLeft:50,color:'white'}}>Employee<span style={{fontSize:20,fontWeight:'bold',paddingTop:0, paddingLeft:140, textDecoration:'none'}}>Active</span> <span style={{fontSize:20,fontWeight:'bold',paddingTop:20, paddingLeft:130,textDecoration:'none'}}>Message</span></h1></div>
  <div style={{height:430,width:600,marginTop:0,overflowX:'hidden',overflowY:'auto'}}>
  <div className="employee-list">
            {employees.map((employee, index) => (
              <div key={index} className="employee-item">
                <img
                  className="employee-image"
                  src={RaviImage1}
                  alt={employee.name}
                />
                <div style={{color:'black'}}             className="employee-name" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  {employee.name}
                </div>
                <div className="employee-status">
                  <label style={{color:'black'}}        className="status-text">{employee.active ? 'Yes' : 'No'}</label>
                  <div className="chat-container">
                  <Link to="/suryachat">       <SmsIcon style={{fontSize:20}}         className="chat-icon" /> </Link>  
                    <div className="chat-text">Chat</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  </div>
         </div>
        </div>
        <div>
          <Report />
        </div>
      </div>
    </div>
  );
}

export default Progressbar;
