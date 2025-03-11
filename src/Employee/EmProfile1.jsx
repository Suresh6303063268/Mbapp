import React, { useState } from 'react';
import '../css/banu.css';
import team from '../images/Mbprofile.png';
import team1 from '../images/Mbprofile1.png';
import team2Img from '../images/Mbprofile2.png';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom';
import Ic1 from '@mui/icons-material/Edit';

const P4 = () => {
  const [profileImage, setProfileImage] = useState(team1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    state: '',
    organization: '',
    address: '',
    zipCode: '',
  });
  const [selectedState, setSelectedState] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setFormData({ ...formData, state: event.target.value });
  };

  const handleIconClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateName = (name) => name.trim().length > 0;
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;
  const validatePhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);
  const validateState = (state) => state.length > 0;

  const validateForm = () => {
    let formErrors = {};
    if (!validateName(formData.firstName)) formErrors.firstName = 'First name is required';
    if (!validateName(formData.lastName)) formErrors.lastName = 'Last name is required';
    if (!validateEmail(formData.email)) formErrors.email = 'Invalid email address';
    if (!validatePassword(formData.password)) formErrors.password = 'Password must be at least 6 characters long';
    if (!validatePhoneNumber(formData.phoneNumber)) formErrors.phoneNumber = 'Phone number must be 10 digits';
    if (!validateState(selectedState)) formErrors.state = 'State is required';
    

    return formErrors;
  };



  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      state: '',
      organization: '',
      address: '',
      zipCode: '',
    });
    setSelectedState('');
    setErrors({});
  };



  const handleSubmit = () => {
    const formErrors = validateForm();
    setErrors(formErrors);
  
    if (Object.keys(formErrors).length === 0) {
      Swal.fire({
        title: "Success",
        text: "Profile updated successfully!",
        background: '#006699',
        color: 'white',
        icon: "success",
        iconColor: '#00ff00',
        confirmButtonText: "OK",
      }).then(() => {
        // Handle further actions after user confirms
        // For example, you might want to submit the form data to a server
        // You can add your logic here
      });
    }
  };
  

 

  const  handleDeactivate = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will be Deactive out!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Deactive me out!',
    }).then((result) => {
        if (result.isConfirmed) {
            // Perform your logout logic here, e.g., clearing authentication tokens
            Swal.fire({
                title: 'Deactive Account!',
                text: 'You have been Deactive Account  successfully.',
                icon: 'success',
                showConfirmButton: false, // Hide the default 'OK' button
                background: '#006699',
                color: 'white',
                width: '500px',
                iconColor: '#00ff00',
                timer: 1500 // Automatically close after 1.5 seconds
            }).then(() => {
                // Redirect to login page after the timer
                navigate('/login');
            });
        }
    });
};


  return (
    <div style={{width:800}}>
      <div style={{ border: '1px solid black', width:1150, height:50,boxShadow: '0px 0px 5px black'}}>
        <h1 style={{ fontSize:25, textAlign: 'center',fontWeight:'bold',color:'red',paddingTop:8}}>Profile Details</h1>
      </div>
      <div>
        <img style={{ width:1150, height: 200, marginTop: 20 }} src={team2Img} alt='Team' />
        <img style={{ width:1150, height: 200, marginTop: -50, marginLeft: 8 }} src={team} alt='Team 1' />
      </div>

      <div style={{ marginLeft: 100, marginTop: -190, display: 'flex' }}>
        <div>
          <img style={{ width:180, height: 180, marginRight: 100, marginTop: -100,borderRadius:150,boxShadow: '0px 0px 5px black' }} src={profileImage} alt='Profile' />
          <Ic1 style={{ marginLeft: -150, color: 'white', cursor: 'pointer' }} onClick={handleIconClick} />
          <p style={{ paddingLeft: 170, marginTop: -40, marginLeft:10, color: 'white',fontSize:22, fontWeight:'bold' }}>Fathima </p>
          <p style={{ paddingLeft:40, marginTop: -10, marginLeft:10, color: 'red',fontSize:22, fontWeight:'bold'}}>Admin </p>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: 'none', width: 50, height: 50 }}
            onChange={handleImageChange}
          />
        </div>
        <div style={{float:'left'}}>
          <button className='Hello' style={{ width: 220, height: 60,fontSize: 20, borderRadius: 10, marginLeft:430,boxShadow: '0px 0px 5px black',fontWeight:'bold',marginTop:30}}>Update Profile</button>
        </div>
      </div>

      <div style={{ display: 'flex', marginTop:100 }}>
      <div style={{ marginLeft: 20 }}>
          <label style={{ color: 'black' }}>
            First Name
            <input type='text' name='firstName' value={formData.firstName} onChange={handleInputChange} style={{ width: 450, height: 50, borderRadius: 10 }} />
          </label>
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}

          <label style={{ color: 'black' }}>
            Email
            <input type='email' name='email' value={formData.email} onChange={handleInputChange} style={{ width: 450, height: 50, borderRadius: 10, marginLeft:30}} />
          </label>
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

          <label style={{ color: 'black' }}>
            Password
            <input type='password' name='password' value={formData.password} onChange={handleInputChange} style={{ width: 450, height: 50, borderRadius: 10,marginLeft:30}} />
          </label>
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

          <label style={{ color: 'black' }}>
            Phone Number
            <input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} style={{ width: 450, height: 50, borderRadius: 10 }} />
          </label>
          {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}

          <label style={{ fontSize: 20, paddingLeft: 270, fontWeight: '600px', paddingTop: 20 }}>Select State</label>
          <select style={{ marginLeft:60, width: 450, height:50, borderRadius: 10, fontSize: 15, paddingLeft: 50, marginTop:-150 }} value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {/* Options for state selection */}
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Manipur">Manipur</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
</div>
        <div style={{ marginLeft:40 }}>
          <label style={{color:'black'}}>
            Last Name
            <input type='text' name='lastName' value={formData.lastName} onChange={handleInputChange} style={{ width:450, height: 50, borderRadius: 10 }} />
          </label>
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
          <label style={{ color: 'black' }}>
            Organization
            <input type='text' name='organization' value={formData.organization} onChange={handleInputChange} style={{ width: 450, height: 50, borderRadius: 10 }} />
          </label>
          {errors.organization && <p style={{ color: 'red' }}>{errors.organization}</p>}

          <label style={{ color: 'black' }}>
            Address
            <textarea
              name='address'
              value={formData.address}
              onChange={handleInputChange}
              multiline
              rows={4}
              variant="outlined"
              style={{ width: 450, borderRadius: 10 }}
            />
          </label>
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
          <label style={{ color: 'black' }}>
            Zip Code
            <input className='fold3'           type='text' name='zipCode' value={formData.zipCode} onChange={handleInputChange} style={{ width: 450, height: 50, borderRadius: 10 }} />
          </label>
          {errors.zipCode && <p style={{ color: 'red' }}>{errors.zipCode}</p>}
        </div>
      </div>

      <div style={{ display: 'flex', marginLeft: 220, marginTop: 50 }}>
        <div>
          <button onClick={handleSubmit} style={{ width: 200, height: 50, fontSize: 20, borderRadius: 10, backgroundColor: '#0A4BF9', color: 'white', border: 'none', boxShadow: '0px 0px 5px black' }}>
            Save Changes
          </button>
        </div>

        <div style={{ marginLeft:200 }}>
          <button onClick={handleCancel} style={{ width: 200, height: 50, fontSize: 20, borderRadius: 10, backgroundColor: '#FF1C45', color: 'white', border: 'none', boxShadow: '0px 0px 5px black' }}>
            Cancel
          </button>
        </div>
      </div>
      <p style={{ marginLeft:20, fontSize:25, color:'#EC008C',fontWeight:'bold'}}>Delete Account</p>
      <div style={{ backgroundColor:'#00ff00',width:800, marginLeft:150, height: 100, borderRadius: 20,boxShadow: '0px 0px 5px black'}}>
        <p style={{ fontSize:20, paddingLeft:190, paddingTop: 10,fontWeight:'bold'}}>
          Are you sure you want to delete Account?
        </p>
        <p style={{ fontSize:20, marginTop: -10, paddingLeft: 220,fontWeight:'bold'}}>Once deleted you can’t go back.</p>
      </div>
      <br />
      <label><input style={{ marginLeft: 220, height: 20, width: 50 }} type='checkbox' />
      </label>
      <label style={{ fontSize: 20,color:'black' }}>
        I confirm my account Deactivation
      </label>
      <br />
      <br />
      <br />
      <button onClick={handleDeactivate} style={{ marginLeft:440, width: 200, marginTop:-170,height: 60, backgroundColor: '#FF1C45', fontSize: 20, border: 'none', borderRadius: 10, color: 'white', boxShadow: '0px 0px 5px black',fontWeight:'bold'}}>
        Deactivate Account
      </button>
    </div>
  );
};

export default P4;
