import React, { useState } from 'react';
import Img1 from '../images/adminsignup.jpg';
import { RemoveRedEye, Smartphone as SmartphoneIcon } from '@mui/icons-material';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const P5 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
    state: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

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
        if (formData.isChecked) {
          navigate('/dash'); // Redirect to admin page if checkbox is checked
        } else {
          navigate('/emdash'); // Redirect to user page if checkbox is not checked
        }
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

  return (
    <div style={{ backgroundColor: '#202b63', height: 950, marginTop: 60, display: 'flex', width: 1100, marginLeft: 200 }}>
      <div>
        <h2 style={{ paddingLeft: 150, paddingTop: 85, color: 'white', fontSize: 25, fontWeight: 'bold' }}>Welcome to Login Page</h2>
        <img style={{ width: 400, marginLeft: 80, borderRadius: 70, boxShadow: '0px 0px 5px black', marginTop: 50, height: 400 }} src={Img1} alt='Img1' />
      </div>

      <div style={{ borderLeft: '4px solid white', height: 950, marginLeft: 50 }} className="vl"></div>

      <div style={{ height: 850, width: 450, backgroundColor: 'white', marginLeft: 60, marginTop: 80, borderTopLeftRadius: 20, borderTopRightRadius: 20, boxShadow: '0px 0px 5px black' }}>
        <h1 style={{ textAlign: 'center', background: '#008040', fontSize: 20, fontWeight: 'bold', height: 50, boxShadow: '0px 0px 5px black', color: 'white', paddingTop: 10, width: 450, cursor: 'none' }}>Sign In</h1>
        <br />

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

        <div style={{ marginLeft: 40 }}>
          <h6 style={{ fontWeight: 'bold', color: 'darkblue', fontSize: 18, marginTop: 28 }}>Confirm Password:</h6>
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

        <div style={{ marginLeft: 40 }}>
          <h6 style={{ fontWeight: 'bold', color: 'darkblue', marginTop: 20 }}>Select State:</h6>
          <select
            style={{
              width: 330,
              borderRadius: 15,
              height: 50,
              borderWidth: '1.5px',
              borderStyle: 'solid',
              color: 'black',
              paddingLeft: 10,
              marginTop: 10,
            }}
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Andra Pradesh">Andra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          </select>
          {errors.state && <p style={{ color: 'red', marginLeft: 40, marginTop: 5 }}>{errors.state}</p>}
        </div>

        <div style={{ marginLeft:240, marginTop: 40, display: 'flex', alignItems: 'center'}}>
        <Link to="/adiminsignup"> <p style={{ marginLeft: 50, color: 'blue', cursor: 'pointer', marginTop: -15 }}>Forgot Password?</p> </Link> 
        </div>

        <div style={{ marginLeft: 140, marginTop: 40, display: 'flex', alignItems: 'center' }}>
          <input
            style={{ marginRight: 10, marginTop: -25, height: 14, width: 14 }}
            type="checkbox"
            name="isChecked"
            checked={formData.isChecked}
            onChange={handleChange}
          />
          <label style={{ fontWeight: 'bold', color: 'darkblue', marginTop: -15 }}>I am Admin</label>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <button
            style={{ width: 150, height: 40, fontSize: 20, borderRadius: 10, border: 'none', backgroundColor: '#202b63', color: 'white',boxShadow:'0px 0px 5px black',fontWeight:'bold'}}
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>

        {successMessage && <div style={{ textAlign: 'center', color: 'green', marginTop: 20 }}>{successMessage}</div>}
      </div>
    </div>
  );
};

export default P5;
