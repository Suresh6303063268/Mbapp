import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import team36 from '../images/signup.png';

import '../css/signup.css';
import LockResetSharpIcon from '@mui/icons-material/LockResetSharp';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import SchoolIcon from '@mui/icons-material/School';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';

function Signup() {



  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showMobileInput, setShowMobileInput] = useState(false);


  

  const handleEmailOTPClick = () => {
    setShowEmailInput(true);
    setShowMobileInput(false); // Ensure other input is hidden
  };

  const handleMobileOTPClick = () => {
    setShowMobileInput(true);
    setShowEmailInput(false); // Ensure other input is hidden
  };


    const navigate = useNavigate(); // Access navigate function for redirection

    // State variables for form data, errors, and success message
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      emailOtp: '',
      mobile: '',
      mobileOtp: '',
      qualification: '',
      interest: '',
      password: '',
      confirmPassword: '',
      isChecked: false,
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
  
    // Handle form input changes
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    // Validate the entire form
    const validateForm = () => {
      const newErrors = {};
  
      // Name validation
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      else if (formData.name.length < 3) newErrors.name = 'Name must be at least 3 characters long';
  
      // Email validation
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
  
      // Email OTP validation
      if (!formData.emailOtp.trim()) newErrors.emailOtp = 'Email OTP is required';
  
      // Mobile number validation
      if (!formData.mobile.trim()) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = 'Mobile number is invalid';
      }
  
      // Mobile OTP validation
      if (!formData.mobileOtp.trim()) newErrors.mobileOtp = 'Mobile OTP is required';
  
      // Qualification validation
      if (!formData.qualification) newErrors.qualification = 'Qualification is required';
  
      // Interest validation
      if (!formData.interest) newErrors.interest = 'Interest is required';
  
      // Password validation
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError;
      }
  
      // Confirm password validation
      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = 'Confirm password is required';
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
  
      // Checkbox validation
      if (!formData.isChecked) newErrors.isChecked = 'You must agree to the user agreement and privacy policy';
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    // Password validation function
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
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Simulate signup success (you would typically call an API here)
        setSuccessMessage(<span style={{ color: 'orange' }}>Signup successfully Created.</span>);
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after 2 seconds
        }, 2000);
      } else {
        setSuccessMessage(''); // Clear success message if there are validation errors
      }
    };




      const [showPassword, setShowPassword] = useState(false);
      const [showConfromPassword, setShowConfromPassword] = useState(false);

      const togglePasswordVisibility = () => {
        setShowConfromPassword(!showConfromPassword);
        setShowPassword(!showPassword);
      };
    








  return (
       <div style={{display:'flex'}}>
      <div style={{background: 'linear-gradient(to top, #152D43 5%, #3572A9 100%)',width:500,marginTop:-66}}>
      <h1 style={{fontSize:28, fontWeight:'bold', color:'white',textAlign:'center',paddingTop:40}}>Welcome to the SignUp Page !</h1>
      <p style={{width:430, textAlign:'justify',color:'white',fontSize:20,padding:20, lineHeight:2,marginLeft:25,paddingTop:50}}>To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability.Consistent effort and a positive mindset will propel you towards success.</p>
          <img style={{width:400,height:600,marginLeft:50,marginTop:100}}            src={team36} alt='' />
        </div>


        <div style={{ background: 'linear-gradient(to bottom, #152D43 5%, #3572A9 100%)', width: 500, height:1200, marginTop: -10 }}>
      <form onSubmit={handleSubmit}>
        <div style={{ paddingTop: 25 }}>
          <input
            style={{
              width: 300, height: 50, borderRadius: 10, marginLeft: 50, marginTop: 10,
              background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
              borderWidth: '1.5px', borderStyle: 'solid', borderColor: 'white', color: 'white'
            }}
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="error-txt" style={{ marginTop: -5, color: 'red', marginLeft:40}}>{errors.name}</div>
        </div>
        <div style={{ paddingTop: 10 }}>
          <input
          className='fold1'
            style={{
              width: 300, height: 50, borderRadius: 10, marginLeft: 50, marginTop: 10,
              background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
              borderWidth: '1.5px', borderStyle: 'solid', borderColor: 'white', color: 'white'
            }}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
             <EmailIcon style={{ marginLeft: -303, fontSize: 20, height: 35, width: 60, marginTop: -4, color: 'white' }} />
          <div className="error-txt" style={{ marginTop: 15, color: 'red', marginLeft:40}}>{errors.email}</div>
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
          marginLeft: 270,
          height: 45
        }}
        className="link-button"
        onClick={handleEmailOTPClick}
      >
        Send OTP
      </button>
        </div>
        {showEmailInput && (
        <div style={{ paddingTop: -10 }}>
          <input
            style={{
              width: 250,
              height: 50,
              borderRadius: 10,
              marginLeft: 50,
              marginTop: 10,
              background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'white',
              color: 'white',
              paddingLeft: 10
            }}
            type="text"
            name="emailOtp"
            placeholder="Enter Your Email OTP"
            value={formData.emailOtp}
            onChange={handleChange}
          />
        </div>
      )}
        <div style={{ paddingTop: 0 }}>
        <input
  className='fold2'
  style={{
    width:330,
    height: 50,
    borderRadius: 10,
    marginLeft: 50,
    marginTop: 10,
    background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderColor: 'white',
    color: 'white',
    paddingLeft: 60, // Adjust padding-left as needed
  }}
  type="text"
  name="mobile"
  placeholder="Enter Your Mobile Number"
  value={formData.mobile}
  onChange={handleChange}
/>
              <SmartphoneIcon style={{ marginLeft: -340, fontSize: 20, height: 35, width: 70, marginTop: -5, color: 'white' }} />
          <div className="error-txt" style={{ marginTop: -10, color: 'red', marginLeft:40}}>{errors.mobile}</div>
          <button
            type="button"
            style={{
              background: 'linear-gradient(to left, #152D43 100%, #006699 90%)',
              boxShadow: '0px 0px 10px black', width: 100, marginTop: 0, color: 'white',
              fontSize: 15, fontWeight: 'bold', marginLeft: 260, height: 45
            }}
            className="link-button"
            onClick={handleMobileOTPClick}
          >
            Send OTP
          </button>
        </div>
        {showMobileInput && (
        <div style={{ paddingTop: 0 }}>
          <input
            style={{
              width: 250,
              height: 50,
              borderRadius: 10,
              marginLeft: 50,
              marginTop: 10,
              background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'white',
              color: 'white',
              paddingLeft: 10
            }}
            type="text"
            name="mobileOtp"
            placeholder="Enter Your Mobile OTP"
            value={formData.mobileOtp}
            onChange={handleChange}
          />
        </div>
      )}
        <div>
          <select
            style={{
              width: 300, height: 50, borderRadius: 10, marginLeft: 50, marginTop: 10,
              background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
              borderWidth: '1px', borderStyle: 'solid', borderColor: 'white', color: 'white', paddingLeft: 50
            }}
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          >
            <option style={{ background: 'gold', color: 'black' }} value="">Choose Your Qualification</option>
            <option style={{ background: '#006699' }} value="10th">10th</option>
            <option style={{ background: '#006699' }} value="10+2/Diploma">10+2/Diploma</option>
            <option style={{ background: '#006699' }} value="Under Graduation">Under Graduation</option>
            <option style={{ background: '#006699' }} value="Post Graduation">Post Graduation</option>
            <option style={{ background: '#006699' }} value="Masters">Masters</option>
            <option style={{ background: '#006699' }} value="Masters">Phd</option>
          </select>
          <SchoolIcon style={{ marginLeft: -310, fontSize: 20, height: 39, width: 70, marginTop: -5, color: 'white' }} />
        </div>
        <div style={{ paddingTop: 20 }}>
          <select
            style={{
              width: 300, height: 50, borderRadius: 10, marginLeft: 50, marginTop: 10,
              background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
              borderWidth: '1px', borderStyle: 'solid', borderColor: 'white', color: 'white', paddingLeft: 50
            }}
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          >
            <option style={{ background: 'gold', color: 'black' }} value="">Choose Your Interest</option>
            <option style={{ background: '#006699' }} value="10th">Upsc</option>
            <option style={{ background: '#006699' }} value="10+2/Diploma">Railway</option>
            <option style={{ background: '#006699' }} value="Under Graduation">Bank</option>
            <option style={{ background: '#006699' }} value="Post Graduation">Engneering</option>
            <option style={{ background: '#006699' }} value="Masters">Teaching</option>
          </select>
        </div>
        <div style={{ paddingTop: 20 }}>
        <input
  style={{
    width: 350,
    height: 50,
    borderRadius: 10,
    marginLeft: 50,
    marginTop: 10,
    background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderColor: 'white',
    paddingLeft:'50px',
    color: 'white'
  }}
  type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password' type
  name="password"
  placeholder="Enter Your Password"
  value={formData.password}
  onChange={handleChange}
/>

            <LockResetSharpIcon style={{ marginLeft: -360, fontSize: 20, height: 35, width: 70, marginTop: -3, color: 'white' }} />
            <RemoveRedEyeSharpIcon
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          marginLeft:220,
          fontSize: 20,
          height: 35,
          width: 70,
          marginTop: 18,
          color: 'white',
          cursor: 'pointer',
        }}
      />
          <div className="error-txt" style={{ marginTop:10, color: 'red', marginLeft:40}}>{errors.password}</div>
        </div>
        <div style={{ paddingTop:20 }}>
        <input
        style={{
          width:350,
          height: 50,
          borderRadius: 10,
          marginLeft: 50,
          marginTop: 10,
          background: 'linear-gradient(to right, #152D43 30%, #3572A9 100%)',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          borderColor: 'white',
          paddingLeft: '50px',
          color: 'white',
        }}
        type={showConfromPassword ? 'text' : 'password'} // Toggle between 'text' and 'password' type
        name="confirmPassword"
        placeholder="Confirm Your Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

            <LockResetSharpIcon style={{ marginLeft: -360, fontSize: 20, height: 35, width: 70, marginTop: -3, color: 'white' }} />
            <RemoveRedEyeSharpIcon
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          marginLeft:220,
          fontSize: 20,
          height: 35,
          width: 70,
          marginTop: 18,
          color: 'white',
          cursor: 'pointer',
        }}
      />
          <div className="error-txt" style={{ marginTop:10, color: 'red', marginLeft:40}}>{errors.confirmPassword}</div>
        </div>
        <div style={{ paddingTop: 20, marginLeft
: 50 }}>
          <input
            type="checkbox"
            name="isChecked"
            checked={formData.isChecked}
            onChange={handleChange}
          />
          <label style={{ color: 'white', width:450, fontSize:16}}>
            I agree to the user agreement and privacy policy
          </label>
          <div className="error-txt" style={{ marginTop: -10, color: 'red' }}>{errors.isChecked}</div>
        </div>
        <div style={{ paddingTop:5, marginLeft: 50 }}>
          <button
            type="submit"
            style={{
              background: 'linear-gradient(to left, #152D43 100%, #006699 90%)',
              boxShadow: '0px 0px 10px black', width: 150, marginTop: 30, color: 'white',
              fontSize: 15, fontWeight: 'bold', height: 45
            }}
          >
            Sign Up
          </button>
        </div>
        {successMessage && <div style={{ color: 'green', marginTop: 20, marginLeft: 50 }}>{successMessage}</div>}
      </form>
      <h1 style={{fontSize:20, color:'white',paddingLeft:100,paddingTop:30}}>Already have an Account ? <a style={{color:'red',fontSize:20}}    href='/login'>Login</a>    </h1>

    </div>


    </div>
  )
}

export default Signup;
