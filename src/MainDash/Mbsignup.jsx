import React, { useState } from 'react';

import Img1 from '../images/Mbsign.png';
import Ic1 from '@mui/icons-material/RemoveRedEye';
import Img2 from '../images/mbgoogle.png';
import '../css/Mbsignup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const P1 = () => {
  


  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Access navigate function from useNavigate

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Validate password length (at least 6 characters)
    return password.length >= 6;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    // Check if password and confirmPassword match
    return password === confirmPassword;
  };

  const validateMobileNumber = (mobileNumber) => {
    // Regular expression for basic mobile number validation (e.g., US format)
    const regex = /^\d{10}$/;
    return regex.test(mobileNumber);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    // Clear email error when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: '',
    }));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    // Clear password error when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: '',
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    // Clear confirm password error when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: '',
    }));
  };

  const handleMobileNumberChange = (e) => {
    const { value } = e.target;
    setMobileNumber(value);
    // Clear mobile number error when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      mobileNumber: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address',
      }));
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters long',
      }));
      return;
    }

    // Validate confirm password
    if (!validateConfirmPassword(password, confirmPassword)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match',
      }));
      return;
    }

    // Validate mobile number
    if (!validateMobileNumber(mobileNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: 'Please enter a valid 10-digit mobile number',
      }));
      return;
    }

    // If all validations pass, proceed to navigate to home page
    navigate('/mblogin');
  };

 
  return (
    <div style={{ display: 'flex', cursor: 'pointer',marginLeft:150}}>
      {/* body 1 side */}
      <div className='body1'>
        {/* margin for signin */}
        <div style={{ paddingTop: 70, paddingLeft: 230 }}>
          <h2 style={{ paddingLeft: 20,fontSize:20,fontWeight:'bold'}}>SIGN UP</h2>
          
          <button style={{ width:280, marginLeft:-75, height: 40, borderRadius: 10, border: 'none',boxShadow:'0px 0px 5px black',marginTop:10,background:'#003366',color:'white'}}>
          <img style={{width:30,height:30}}       src={Img2}  alt=''/>      Sign in with Google
          </button>
         
          <br />
          {/* line */}
          <hr style={{ width: 120, marginTop: 30, marginLeft: -120 }} />
          <p style={{ paddingLeft:20, marginTop: -30,fontWeight:'bold'}}>or with Email</p>
          <hr style={{ width: 120, marginLeft: 140, marginTop: -25 }} />
          <br />
          <br />
          {/* input 1 */}



          <form onSubmit={handleSubmit} style={{border:'2px soild red'}}>
      <div>
        <input
          className='fold3'
          style={{ width: 400, height: 45, border: 'none', borderRadius: 5, marginLeft: -130 }}
          type='text'
          placeholder='Enter your email'
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <p style={{ color: 'red', marginLeft: -130,marginTop:-10}}>{errors.email}</p>}
      </div>
      <div style={{marginTop:-10}}>
        <input
          className='fold6'
          style={{ width: 400, height: 45, border: 'none', borderRadius: 5, marginLeft: -130, marginTop: 10 }}
          type={passwordVisible ? 'text' : 'password'}
          placeholder='Enter your password'
          value={password}
          onChange={handlePasswordChange}
        />
          <Ic1
        onClick={handleTogglePassword}
        label={passwordVisible ? 'Hide Password' : 'Show Password'}
        style={{marginLeft:-40, cursor: 'pointer' }}
      />
        {errors.password && <p style={{ color: 'red', marginLeft: -130 }}>{errors.password}</p>}
      </div>
      <div  style={{marginTop:10}}>
        <input
          className='fold6'
          style={{ width: 400, height: 45, border: 'none', borderRadius: 5, marginLeft: -130, marginTop: 10 }}
          type={passwordVisible ? 'text' : 'password'}
          placeholder='Confirm your password'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
          <Ic1
        onClick={handleTogglePassword}
        label={passwordVisible ? 'Hide Password' : 'Show Password'}
        style={{marginLeft:-40, cursor: 'pointer' }}
      />
        {errors.confirmPassword && <p style={{ color: 'red', marginLeft: -130}}>{errors.confirmPassword}</p>}
      </div>
      <div  style={{marginTop:10}}>
        <input
          className='fold6'
          style={{ width: 400, height: 45, border: 'none', borderRadius: 5, marginLeft: -130, marginTop: 10 }}
          type='text'
          placeholder='Enter your mobile number'
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
        {errors.mobileNumber && <p style={{ color: 'red', marginLeft: -130 }}>{errors.mobileNumber}</p>}
      </div>
      <p style={{marginLeft:-45,marginTop:0}}>I Accept the <span style={{color:'red'}}>Terms & Condiions</span></p>
          <input type='checkbox' style={{marginLeft:-800,marginTop:-30}}/>
       
          <br />
      <div>
        <button type='submit'   style={{ width: 400, marginLeft: -130, height: 40, backgroundColor: '#0ff7b2', borderRadius: 10, border: 'none', fontSize: 20, fontWeight:'bold',boxShadow:'0px opx 5px black',marginTop:10}}>SignUp</button>
      </div>
    </form>







          
        
          
        
         
          <Link to="/mblogin">     <p style={{ marginLeft: -20,marginTop:20}}>Already have an Account? <span style={{ color: 'red', cursor: 'pointer' }} >Sign In</span></p> </Link>
        </div>
      </div>
      {/* body2 image on right side */}
      <div className='body2'>
        <img style={{ width: 350, height: 500, marginTop: 80, marginLeft: 120 }} src={Img1} alt='Img1' />
      </div>
    </div>
  );
}

export default P1;
