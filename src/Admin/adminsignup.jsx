import React, { useState } from 'react';
import Img1 from '../images/adminsign.jpg';
import { RemoveRedEye, Smartphone as SmartphoneIcon } from '@mui/icons-material';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Link, useNavigate } from 'react-router-dom';

const P5 = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showMobileInput, setShowMobileInput] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
    state: '',
    otp: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.isChecked) {
      newErrors.isChecked = 'Please agree to the Privacy Policy';
    }

    if (!formData.emailOrMobile.trim()) {
      newErrors.emailOrMobile = 'Email or Mobile number is required';
    } else if (
      !/\S+@\S+\.\S+/.test(formData.emailOrMobile) &&
      !/^\d{10}$/.test(formData.emailOrMobile)
    ) {
      newErrors.emailOrMobile = 'Email or Mobile number is invalid';
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.state.trim()) newErrors.state = 'State is required';

    if (showEmailInput && !formData.otp.trim()) {
      newErrors.otp = 'Email OTP is required';
    } else if (showMobileInput && !formData.otp.trim()) {
      newErrors.otp = 'Mobile OTP is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Signup successfully created.');
      setTimeout(() => {
        navigate('/adminsign'); // Redirect to admin page after 2 seconds
      }, 2000);
    } else {
      setSuccessMessage('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleEmailOTPClick = () => {
    setShowEmailInput(true);
    setShowMobileInput(false); // Ensure mobile input is hidden
  };

  const handleMobileOTPClick = () => {
    setShowMobileInput(true);
    setShowEmailInput(false); // Ensure email input is hidden
  };

  const navigate = useNavigate(); // Hook for navigation

  return (
    <div style={{ backgroundColor: '#202b63', height: 1100, display: 'flex', width: 1100, marginLeft: 200, marginTop: 50 }}>
      <div>
        <h2 style={{ paddingLeft: 60, paddingTop: 85, color: 'white', fontSize: 25, fontWeight: 'bold' }}>Welcome to Sign-up Page</h2>
        <p style={{ paddingLeft: 60, paddingTop: 10, color: 'white', fontSize: 20, width: 500, textAlign: 'justify' }}>
          To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability. Consistent effort and a positive mindset will propel you towards success.
        </p>
        <img style={{ width: 400, marginLeft: 60, marginTop: 40, boxShadow: '0px 0px 5px black', borderTopRightRadius: 30, borderTopLeftRadius: 30 }} src={Img1} alt='Img1' />
      </div>

      <div style={{ borderLeft: '4px solid white', height: 950, marginLeft: 50 }} className="vl"></div>

      {/* Signup Form */}
      <div style={{ height: 950, width: 450, backgroundColor: 'white', marginLeft: 45, marginTop: 80, borderRadius: 20 }}>
        <h5 style={{ paddingLeft: 130, fontSize: 20, fontWeight: 'bold' }}>Sign Up</h5>
        <br />

        {/* Full Name */}
        <h6 style={{ paddingLeft: 40, color: 'darkblue', fontSize: 18, fontWeight: 'bold' }}>Full Name:</h6>
        <input
          className='fold6'
          style={{ marginLeft: 40, width: 330, borderRadius: 10, height: 50, borderWidth: '1.5px', borderStyle: 'solid', color: 'black', paddingLeft: 60 }}
          type='text'
          placeholder='Enter Your Name'
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p style={{ color: 'red', marginLeft: 40, marginTop: 5 }}>{errors.fullName}</p>}
        <br />

        {/* Email or Mobile */}
        <div style={{ marginLeft: 40 }}>
          <h5 style={{ fontWeight: 'bold', color: 'darkblue', fontSize: 18 }}>Email or Mobile Number:</h5>
          <input
            className='fold6'
            style={{
              width: 330,
              height: 50,
              borderRadius: 10,
              marginTop: 10,
              borderWidth: '1.5px',
              borderStyle: 'solid',
              color: 'black',
              paddingLeft: 60,
              marginLeft: 0,
            }}
            type="text"
            name="emailOrMobile"
            placeholder="Enter Your Email or Mobile"
            value={formData.emailOrMobile}
            onChange={handleChange}
          />
          <SmartphoneIcon style={{ marginLeft: -340, fontSize: 20, height: 35, width: 70, marginTop: -5, color: 'darkblue' }} />
          {errors.emailOrMobile && <p style={{ color: 'red', marginLeft: 40, marginTop: -5 }}>{errors.emailOrMobile}</p>}
        </div>

        {/* Send OTP Button */}
        <div style={{ marginLeft: 40, marginTop: 10 }}>
          <button
            type="button"
            style={{
              background: 'linear-gradient(to left, #152D43 100%, #006699 90%)',
              boxShadow: '0px 0px 10px black',
              width: 100,
              marginTop: 0,
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 0,
              height: 45
            }}
            onClick={formData.emailOrMobile.includes('@') ? handleEmailOTPClick : handleMobileOTPClick}
          >
            Send OTP
          </button>
        </div>

        {/* OTP Input Field */}
        {(showEmailInput || showMobileInput) && (
          <div style={{ marginTop: 10 }}>
            <input
              className='fold7'
              style={{
                width: 330,
                height: 50,
                borderRadius: 10,
                marginLeft: 40,
                background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'white',
                color: 'white',
                paddingLeft: 60
              }}
              type="text"
              name="otp"
              placeholder={showEmailInput ? "Enter Your Email OTP" : "Enter Your Mobile OTP"}
              value={formData.otp}
              onChange={handleChange}
            />
            {errors.otp && <p style={{ color: 'red', marginLeft: 40, marginTop: 5 }}>{errors.otp}</p>}
          </div>
        )}

        {/* Password */}
        <div style={{ marginLeft: 40 }}>
          <h6 style={{ fontWeight: 'bold', color: 'darkblue', paddingTop: 10, fontSize: 18 }}>Password:</h6>
          <input
            className='fold6'
            style={{
              width: 330,
              height: 50,
              borderRadius: 10,
              marginTop: 5,
              borderWidth: '1.5px',
              borderStyle: 'solid',
              color: 'black',
              paddingLeft: 60,
            }}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
          />
          <LockResetIcon style={{ marginLeft: -340, fontSize: 20, height: 35, width: 70, marginTop: -5, color: 'darkblue' }} />
          <div style={{ marginLeft: 300, marginTop: -40 }}>
            <RemoveRedEye style={{ color: 'darkblue' }} onClick={togglePasswordVisibility} />
          </div>
          {errors.password && <p style={{ color: 'red', marginLeft: 40, marginTop: 15 }}>{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div style={{ marginLeft: 40, marginTop: 10 }}>
          <h6 style={{ fontWeight: 'bold', color: 'darkblue', paddingTop: 10, fontSize: 18 }}>Confirm Password:</h6>
          <input
            className='fold6'
            style={{
              width: 330,
              height: 50,
              borderRadius: 10,
              marginTop: 5,
              borderWidth: '1.5px',
              borderStyle: 'solid',
              color: 'black',
              paddingLeft: 60,
            }}
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <LockResetIcon style={{ marginLeft: -340, fontSize: 20, height: 35, width: 70, marginTop: -5, color: 'darkblue' }} />
          <div style={{ marginLeft: 300, marginTop: -40 }}>
            <RemoveRedEye style={{ color: 'darkblue' }} onClick={toggleConfirmPasswordVisibility} />
          </div>
          {errors.confirmPassword && <p style={{ color: 'red', marginLeft: 40, marginTop: 15 }}>{errors.confirmPassword}</p>}
        </div>

        {/* I Agree statement */}
        <div style={{ marginTop: 40 }}>
          <input
            style={{ marginLeft: 20 }}
            type='checkbox'
            name="isChecked"
            onChange={handleChange}
          />
          <p style={{ marginLeft: 50, marginTop: -20 }}>I agree to the <span style={{ fontWeight: 600, textDecoration: 'underline' }}>User Agreement</span> and <span style={{ fontWeight: 600, textDecoration: 'underline' }}>Privacy Policy</span></p>
          {errors.isChecked && <p style={{ color: 'red', marginLeft: 40, marginTop: -20 }}>{errors.isChecked}</p>}

          <br />

          {/* Signup button */}
          <div style={{ marginLeft: 150 }}>
            <button
              style={{ width: 150, height: 40, fontSize: 20, borderRadius: 10, border: 'none', backgroundColor: '#202b63', color: 'white', boxShadow: '0px 0px 5px black', fontWeight: 'bold' }}
              onClick={handleSubmit}
            >
              Sign up
            </button>
            <Link to="/adminsign" style={{ textDecoration: 'none' }}><p style={{ marginTop: 10 }}>Already have an account? <span style={{ color: 'red' }}>Login</span></p></Link>

            {successMessage && <div style={{ textAlign: 'center', color: 'green', marginTop: 20 }}>{successMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default P5;
