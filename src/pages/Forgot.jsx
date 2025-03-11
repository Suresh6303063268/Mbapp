import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header.jsx';
import team36 from '../images/pass.jpg';

import '../css/forgot.css';

function Forgot() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleForgotPasswordClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', marginTop:200, marginLeft: 150 }}>
        <div>
          <h1 style={{marginTop:10}}>Forgot Password</h1>
          <p className="resent"style={{marginTop:20}}>You will receive a password reset link on your email</p>
          <label style={{color:'black',fontWeight:350,marginLeft:-30,marginTop:0}}    for="email"><b>Email</b></label> <br/>

          <input className='fold'           style={{borderRadius:5,width:400,marginLeft:0,marginTop:10}}         type="text" placeholder="Enter Your email" name="email" required/>



          <div className="custom-checkbox" style={{background:'lightgray',height:100,width:450}}>
            <input
            style={{paddingTop:-140, marginLeft:30}}
              type="checkbox"
              id="custom-checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label style={{color:'black',width:400,fontSize:18,paddingLeft:50,paddingTop:15,fontWeight:600,lineHeight:1.8}}            htmlFor="custom-checkbox" className={isChecked ? 'checked' : ''}>
              Kindly check your mail. You will receive a password reset link shortly
            </label>
          </div>

          <button
            onClick={handleForgotPasswordClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
          >
          Back to Login
          </button>
        </div>
        <div>
          <img style={{ width: 500, height: 500,marginTop:-100, marginLeft:150}} src={team36} alt="Password reset illustration" />
        </div>
      </div>
    </div>
  );
}

export default Forgot;
