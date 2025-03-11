import React, { useState, useRef } from 'react';
import Img1 from '../images/refer2.jpeg'; // Import your default image

const P3 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [organization, setOrganization] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [organizationError, setOrganizationError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [stateError, setStateError] = useState('');
  const [zipCodeError, setZipCodeError] = useState('');

  const fileInputRef = useRef(null);

  const handleUpdatePhoto = () => {
    // Trigger click on file input to open file selection dialog
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedFile(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    // Reset the file input value to clear selection (if needed)
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSaveChanges = () => {
    let valid = true;

    // Validate first name
    if (!firstName) {
      setFirstNameError('Please enter your first name.');
      valid = false;
    } else {
      setFirstNameError('');
    }

    // Validate last name
    if (!lastName) {
      setLastNameError('Please enter your last name.');
      valid = false;
    } else {
      setLastNameError('');
    }

    // Validate email
    if (!email) {
      setEmailError('Please enter your email.');
      valid = false;
    } else {
      // Basic email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        setEmailError('Please enter a valid email address.');
        valid = false;
      } else {
        setEmailError('');
      }
    }

    // Validate phone number
    if (!phoneNumber) {
      setPhoneNumberError('Please enter your phone number.');
      valid = false;
    } else {
      // Basic phone number validation
      const regex = /^\d{10}$/;
      if (!regex.test(phoneNumber)) {
        setPhoneNumberError('Please enter a valid phone number (10 digits).');
        valid = false;
      } else {
        setPhoneNumberError('');
      }
    }

    // Validate organization
    if (!organization) {
      setOrganizationError('Please enter your organization.');
      valid = false;
    } else {
      setOrganizationError('');
    }

    // Validate address
    if (!address) {
      setAddressError('Please enter your address.');
      valid = false;
    } else {
      setAddressError('');
    }

    // Validate state
    if (!state) {
      setStateError('Please enter your state.');
      valid = false;
    } else {
      setStateError('');
    }

    // Validate zip code
    if (!zipCode) {
      setZipCodeError('Please enter your zip code.');
      valid = false;
    } else {
      // Basic zip code validation
      const regex = /^\d{5}$/;
      if (!regex.test(zipCode)) {
        setZipCodeError('Please enter a valid zip code (5 digits).');
        valid = false;
      } else {
        setZipCodeError('');
      }
    }

    // If all fields are valid, save changes
    if (valid) {
      setError('');
      // Implement your save logic here
      alert('Details saved successfully!');
    } 
  };

  const handleCancel = () => {
    // Clear all input fields and reset state
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setOrganization('');
    setAddress('');
    setState('');
    setZipCode('');
    setSelectedFile(null);
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneNumberError('');
    setOrganizationError('');
    setAddressError('');
    setStateError('');
    setZipCodeError('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div style={{ textAlign: 'left' }}>
      {/* Profile details */}
      <h2 style={{ color: '#f74a4a', textAlign: 'center' }}>Profile Details</h2>
      <br />

      {/* Image displaying */}
      <div style={{ display: 'inline-block', position: 'relative', marginLeft: 200 }}>
        <img
          src={selectedFile || Img1} // Display selected file or default image
          alt='Profile'
          style={{ width: '100px', height: '100px', borderRadius: 10 }}
        />

        {/* Update photo button */}
        <div style={{ position: 'absolute', marginLeft: 160, marginTop: -90 }}>
          <button style={{ backgroundColor: '#3280d9', height: 40, color: 'white', width: 150, border: 'none', borderRadius: 10 }} onClick={handleUpdatePhoto}>Update New Photo</button>
        </div>
      </div>

      <br /><br />

      {/*reset the image*/} 
      <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />

      {selectedFile && (
        <div>
          <br />
          <button style={{ position: 'absolute',marginLeft:380,marginTop:-70 ,backgroundColor:'#13bfa0',height:30,color:'white',width:100,border:'none',borderRadius:10}} onClick={handleReset}>Reset</button>
        </div>
      )}
      <br></br>
      {/* File input */}
      <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />

      {/* Error message */}
      {error && <p style={{ color: 'red', marginLeft: 60 }}>{error}</p>}

      {/* Inputs */}
      <div style={{ marginLeft: 60, display: 'flex' }}>
        {/* Inputs left */}
        <div>
          <label>First Name</label>
          <br /><br />
          <input
            style={{ width: '500px', height: '40px', borderRadius: '10px' }}
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && <p style={{ color: 'red', marginLeft: 60 }}>{firstNameError}</p>}
          <br /><br />
          <label>Email</label>
          <br /><br />
          <input
            style={{ width: '500px', height: '40px', borderRadius: '10px' }}
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: 'red', marginLeft: 60 }}>{emailError}</p>}
          <br /><br />
          <label  >Phone Number</label>
          <br /><br />
          <input
            style={{ width: '500px', height: '40px', borderRadius: '10px' }}
            type='text'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {phoneNumberError && <p style={{ color: 'red', marginLeft: 60 }}>{phoneNumberError}</p>}
          <br /><br />
          <label>State</label>
          <br /><br />
          <input
            style={{ width: '500px', height: '40px', borderRadius: '10px' }}
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          {stateError && <p style={{ color: 'red', marginLeft: 60 }}>{stateError}</p>}
        </div>

        {/* Inputs right */}
        <div style={{ marginLeft: '140px' }}>

          <label>Last Name</label>
          <br /><br />
          <input
            style={{ width: '500px', height: '40px', borderRadius: '10px' }}
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && <p style={{ color: 'red', marginLeft: 60 }}>{lastNameError}</p>}
          <br /><br />
          <label>Organization</label>
          <br /><br />
          <input
            style={{ width: '500px', height: '40px', borderRadius: '10px' }}
            type='text'
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
          {organizationError && <p style={{ color: 'red', marginLeft: 60 }}>{organizationError}</p>}
          <br /><br />
          <label>Address</label>
          <br /><br />
          <input
            style={{ width: '500px', height: '40px', borderRadius: '10px' }}
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {addressError && <p style={{ color: 'red', marginLeft: 60 }}>{addressError}</p>}
          <br /><br />
          <label>Zip Code</label>
          <br /><br />
          <input
            style={{ width: '500px', height: '40px', borderRadius: '10px' }}
            type='text'
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          {zipCodeError && <p style={{ color: 'red', marginLeft: 60 }}>{zipCodeError}</p>}
        </div>
      </div>

      <br /><br />

      {/* Save and Cancel buttons */}
      <div style={{ marginLeft: '70px' }}>
        <button
          style={{
            width: '130px',
            height: '40px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#3280d9',
            color: 'white',
            marginRight: '20px',
          }}
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
        <button
          style={{
            width: '100px',
            height: '40px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#13bfa0',
            color: 'white',
          }}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>

      <br /><br />

      {/* Delete Account section */}
      <div style={{marginLeft:60}}>
      <p style={{ color: 'red', fontWeight: '500' }}>Delete Account</p>
      {/*delect account box*/}
      <div style={{ width: '950px', height: '90px', backgroundColor: '#e6e3e3', borderRadius: '10px' }}>
        <p style={{ paddingLeft: '40px', paddingTop: '10px' }}>Are You sure you want to delete Account?</p>
        <p style={{ paddingLeft: '40px' }}>Once deleted you can't go back.</p>
      </div>
      <br />
      <input type='checkbox' />
      <p style={{ paddingLeft: '30px', marginTop: '-19px' }}>I confirm my account Deactivation</p>
      <br />
      <button
        style={{
          width: '150px',
          height: '30px',
          borderRadius: '5px',
          backgroundColor: '#f56767',
          color: 'white',
          border: 'none',
        }}
      >
        Deactivate Account
      </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
    </div>
  );
};

export default P3;
