import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Img1 from '../images/Mblogin.jpg';
import Img2 from '../images/mbgoogle.png';
import Ic1 from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import '../css/Mblogin.css';

const P1 = () => {
  


  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    // If both are valid, proceed to navigate to home page
    // Replace '/home' with the path to your home page component
    navigate('/mbdash');
  };

  

  return (
    <div style={{ display: 'flex', cursor: 'pointer',marginLeft:140,height:400,marginTop:40}}>
      {/* body 1 side */}
      <div className='body1'>
        {/* margin for signin */}
        <div style={{ paddingTop: 70, paddingLeft: 230 }}>
          <h2 style={{ paddingLeft: 20,fontSize:20,fontWeight:'bold'}}>SIGN IN</h2>
          
          <button style={{ width:280, marginLeft: -80, height:40, borderRadius: 10, border: 'none',boxShadow:'0px 0px 5px black',marginTop:30,background:'#003366',color:'white'}}>
        <img style={{width:30,height:30}}       src={Img2}  alt=''/>  Sign in with Google
          </button>
          <br />
          {/* line */}
          <hr style={{ width: 120, marginTop: 30, marginLeft: -120 }} />
          <p style={{ paddingLeft:20, marginTop: -30,fontWeight:'bold'}}>or with email</p>
          <hr style={{ width: 120, marginLeft: 140, marginTop: -25 }} />
          <br />
          <br />
          {/* input 1 */}

          <form onSubmit={handleSubmit}>
      <div>
        <input
          className='fold3'
          style={{ width: 400, height: 45, border: 'none', borderRadius: 5, marginLeft: -130 }}
          type='text'
          placeholder='Enter your email'
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <p style={{ color: 'red', marginLeft: -130 }}>{errors.email}</p>}
      </div>
      <div>
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
        <Link to="/mbforgot">    <p style={{ color: 'red', paddingLeft: 140,textDecoration:'none'}}>Forgot Password?</p>  </Link>
      </div>
      <div>
        <button type='submit'   style={{ width: 400, marginLeft: -130, height: 40, backgroundColor: '#0ff7b2', borderRadius: 10, border: 'none', fontSize: 20, fontWeight:'bold',boxShadow:'0px 0px 5px black'}}>SignIn</button>
      </div>
    </form>









          
          
          <br />
      
          {/* sign in button */}
         
          {/* signup */}
      <Link to="/mbsignup">      <p style={{ marginLeft: -20 }}>Don't have Account? <span style={{ color: 'red', cursor: 'pointer' }} >Sign up</span></p> </Link> 
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
