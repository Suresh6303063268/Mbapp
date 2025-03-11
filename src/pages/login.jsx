import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import team35 from '../images/signin.png';
import '../css/home.css';
import '../css/signin.css';
import '../css/login.css';

const Home = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Validate the form fields
  const validateForm = () => {
    let valid = true;
   

    const newErrors = {};

    if (!formData.emailOrMobile.trim()) {
      newErrors.emailOrMobile = 'Email or Mobile number is required';
    } else if (
      !/\S+@\S+\.\S+/.test(formData.emailOrMobile) &&
      !/^\d{10}$/.test(formData.emailOrMobile)
    ) {
      newErrors.emailOrMobile = 'Email or Mobile number is invalid';
    }
    // Password validation
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      newErrors.password = passwordError;
      valid = false;
    }

   

    setErrors(newErrors);
    return valid;
  };

  // Validate password
  const validatePassword = (password) => {
    const minLength = 8;
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const numeric = /[0-9]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long';
    }
    if (!lowerCase.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!upperCase.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!numeric.test(password)) {
      return 'Password must contain at least one numerical digit';
    }
    if (!specialChar.test(password)) {
      return 'Password must contain at least one special character';
    }

    return '';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage(<span style={{ color: 'orange' }}>Login successful</span>);
      setTimeout(() => {
        navigate('/home1'); // Replace with your actual redirection logic
      }, 2000);
    } else {
      setSuccessMessage('');
    }
  };

  // Handle forgot password click
  const handleForgotPasswordClick = () => {
    navigate('/forgot'); // Replace with your actual logic
  };

  return (
    <div>
      <div className='MbLog'    style={{ display: 'flex' }}>
        <div  className='MbLog1'      style={{ background: 'linear-gradient(to bottom, #152D43 5%, #3572A9 100%)', width: 500, marginTop: -55, boxShadow: '0px 0px 10px black' }}>
          <h1 style={{ fontSize: 28, fontWeight: 'bold', color: 'white', textAlign: 'center', marginTop: 50 }}>Welcome to the Login Page !</h1>
          <img style={{ width: 400, height: 450, marginLeft: 50, marginTop: 60 }} src={team35} alt='' />
        </div>
        <div  className='MbLog2'      style={{ background: 'linear-gradient(to top, #152D43 5%, #3572A9 100%)', width: 500, height: 650, marginTop: 4 }}>
          <form onSubmit={handleSubmit}>
            <div  className='MbLog3'     style={{ width: 500 }}>
             


<div className='mblogo'         style={{ marginLeft:20 }}>
<PermIdentityIcon style={{ color: 'white', fontSize: 40, marginLeft: 30 }} />
          <input
            style={{
              width: 300,
              height: 50,
              borderRadius: 10,
              marginLeft: 10,
              marginTop: 10,
              background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
              borderWidth: '1.5px',
              borderStyle: 'solid',
              borderColor: 'white',
              color: 'white',
              padding: '10px'
            }}
            type="text"
            name="emailOrMobile"
            placeholder="Enter Your Email or Mobile"
            value={formData.emailOrMobile}
            onChange={handleChange}
          />
          {errors.emailOrMobile && <p style={{ color: 'red', marginLeft: 40, marginTop: -5 }}>{errors.emailOrMobile}</p>}
        </div>

              <div  className='mblogo'         style={{ marginLeft: 20, marginTop: 20 }}>
                <LockOpenIcon style={{ color: 'white', fontSize: 40, marginLeft: 30 }} />
                <input

className='mblogoinput'  
                  style={{
                    width: 300,
                    height: 50,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginTop: 10,
                    background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
                    borderWidth: '1.5px',
                    borderStyle: 'solid',
                    borderColor: 'white',
                    color: 'white',
                    padding: '10px'
                  }}
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className='error-txt' style={{ marginTop: 15, color: 'red' }}>{errors.password}</div>
              </div>

              <label style={{ color: 'white', marginTop: 30, marginLeft: 30, fontSize: 20 }}>
                <input
                  style={{ width: 50, height: 20 }}
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Remember
              </label>

              {errors.isChecked && <div className='error-txt' style={{ color: 'red', marginLeft: 30 }}>{errors.isChecked}</div>}

              <button
                type='button'
                style={{ background: 'none', border: 'none', cursor: 'pointer', width: 200, color: 'white' }}
                className="link-button"
                onClick={handleForgotPasswordClick}
              >
                <span style={{ color: 'white', fontSize: 20 }}> Forgot Password ?</span>
              </button>

              <button
                type='submit'
                style={{ background: 'linear-gradient(to left, #006699 30%, #006699 90%)', boxShadow: '0px 0px 10px black', width: 380, marginTop: 30, color: 'white', fontSize: 25, fontWeight: 'bold' }}
                className="link-button"
              >
                Login
              </button>
              {successMessage && <div style={{ color: 'darkorange', fontSize: 25 }}>{successMessage}</div>}
              <hr style={{ width: 200, borderWidth: '1.5px', borderStyle: 'solid', borderColor: 'white', marginTop: 50 }} />
              <p style={{ textAlign: 'center', fontSize: 23, color: 'white', marginTop: -40 }}>or</p>
              <hr style={{ width: 200, borderWidth: '1.5px', borderStyle: 'solid', borderColor: 'white', float: 'right', marginTop: -30 }} />

              <button
                type='button'
                style={{ background: 'linear-gradient(to left, #006699 30%, #006699 90%)', boxShadow: '0px 0px 10px black', width: 380, marginTop:10, color: 'white', fontSize: 23, fontWeight: 'bold' }}
                className="link-button"
              >
                <span style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}>G</span> Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
