import React, { useState, useEffect } from 'react';

function Security() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (newPassword !== confirmPassword) {
      
    } else if (newPassword.length < 8) {
      
    } else {
      setValidationMessage('');
    }
  }, [newPassword, confirmPassword]);

  return (
    <div style={{marginLeft:50,boxShadow: '0px 0px 5px black',width:1000}}>
      <div>
        <h1 style={{fontSize:30,fontWeight:'bold', color:'red', textAlign:'center',paddingTop:20}}   >Security</h1>
        <p style={{textAlign:'center',fontSize:20}}>This information will determine the level of security of your account.</p>
        <label style={{color:'black',paddingLeft:200}}  >Change Password</label> <br />
        <input
         className='fold4'
          type="password"
          style={{ width:500, height: 40, marginTop: 10,marginLeft:200}}
          placeholder="Enter your old password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
        /> <br />
        <input
        className='fold3'
          type="password"
          style={{ width:500, height: 40, marginTop: 10, color:'black', marginLeft:200}}
          placeholder="New password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        /> <br />
        <input

 className='fold4'
          type="password"
          style={{ width:500, height: 40, marginTop: 10,marginLeft:200}}
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>}
      </div>

      <div>
        <h2 style={{fontSize:20,fontWeight:'bold',paddingLeft:200, color:'black',marginTop:20}}>Two Factor Authentication</h2>
        <h3 style={{ backgroundColor: '#0cc1c4', color: 'white', width:500, padding: 30,marginLeft:200,marginTop:20,boxShadow: '0px 0px 5px black'}}>
          Enable two-factor authentication
        </h3>
        <p style={{marginLeft:200,width:600,lineHeight:2}}>
          Two factor authentication adds an additional layer of security to your account by requiring more than just a
          password to login.
        </p>
      
        
        
      </div>
    </div>
  );
}

export default Security;
