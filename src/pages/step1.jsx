import React, { useState } from 'react';
import Box from '@mui/material/Box';


function Step1() {
  const [formData, setFormData] = useState({
    aadharCardYesNo: '',
    aadharCard: '',
    verifyAadharCard: '',
    identificationType: '',
    identificationNumber: '',
    candidateName: '',
    nameChanged: '',
    newName: '',
    verifyNewName: '',
    gender: '',
    verifyGender: '',
    dateOfBirth: '',
    fatherName: '',
    motherName: '',
    mobileNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'aadharCard':
      case 'verifyAadharCard':
        if (formData.aadharCardYesNo === 'yes' && !/^\d{12}$/.test(value)) {
          error = 'Aadhar card number must be a 12-digit number';
        }
        if (name === 'verifyAadharCard' && value !== formData.aadharCard) {
          error = 'Aadhar card numbers do not match';
        }
        break;
      case 'identificationNumber':
        if (!value) {
          error = 'Type of ID and ID number to be provided if you don’t want to give Aadhar number';
        }
        break;
      case 'candidateName':
        if (!value) {
          error = 'Candidate’s Name should be same as mentioned in Matriculation certificate';
        }
        break;
      case 'newName':
      case 'verifyNewName':
        if (formData.nameChanged === 'yes' && !value) {
          error = 'New name is required';
        }
        if (name === 'verifyNewName' && value !== formData.newName) {
          error = 'Names do not match';
        }
        break;
      case 'gender':
      case 'verifyGender':
        if (!value) {
          error = 'Gender is required';
        }
        if (name === 'verifyGender' && value !== formData.gender) {
          error = 'Genders do not match';
        }
        break;
      case 'dateOfBirth':
        if (!value) {
          error = 'Date of birth is required';
        }
        break;
      case 'fatherName':
        if (!value) {
          error = 'Father name is required';
        }
        break;
      case 'motherName':
        if (!value) {
          error = 'Mother name is required';
        }
        break;
      case 'mobileNumber':
        if (!/^\d{10}$/.test(value)) {
          error = 'Mobile number must be a 10-digit number';
        }
        break;
      case 'email':
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          error = 'Email is not valid';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'newName' && key !== 'verifyNewName' && key !== 'verifyGender') {
        validateField(key, formData[key]);
        valid = false;
      }
    });

    if (valid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please correct the errors in the form');
    }
  };

  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };





  

  return (
    <div>
      <Box>
        <h3 style={{ paddingLeft: 530, paddingTop: 30, fontSize: 25, fontWeight: 'bold' }}>Personal Details</h3>
        <hr />
        <form onSubmit={handleSubmit} style={{ marginLeft: 30 }}>
          <p style={{ fontWeight: 400 }}>1. Do you have an Aadhar card?</p>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              <div>
                <input
                  type='radio'
                  name='aadharCardYesNo'
                  value='yes'
                  onChange={handleChange}
                />
              </div>
              <div style={{ marginTop: -10, marginLeft: 3 }}>
                <p style={{ marginTop: 10 }}>Yes</p>
              </div>
            </div>
            <div style={{ display: 'flex', marginLeft: 20 }}>
              <div>
                <input
                  type='radio'
                  name='aadharCardYesNo'
                  value='no'
                  onChange={handleChange}
                />
              </div>
              <div style={{ marginTop: -10, marginLeft: 3 }}>
                <p style={{ marginTop: 10 }}>No</p>
              </div>
            </div>
          </div>
          {formData.aadharCardYesNo === 'yes' && (
            <div style={{ marginLeft: 80 }}>
              <p>a. Aadhar card Number</p>
              <input
                name="aadharCard"
                value={formData.aadharCard}
                onChange={handleChange}
                style={{ width: 530, height: 50, borderRadius: 10 }}
                type='text'
              />
              {errors.aadharCard && <p style={{ color: 'red' }}>{errors.aadharCard}</p>}
              <p>b. Verify Aadhar card Number</p>
              <input
                name="verifyAadharCard"
                value={formData.verifyAadharCard}
                onChange={handleChange}
                style={{ width: 530, height: 50, borderRadius: 10 }}
                type='text'
              />
              {errors.verifyAadharCard && <p style={{ color: 'red' }}>{errors.verifyAadharCard}</p>}
            </div>
          )}
          <div>
            <p>2. Type of Identification card</p>
            <div>
              <select
                name="identificationType"
                value={formData.identificationType}
                onChange={handleChange}
                style={{ width: 618, height: 50, borderRadius: 10 }}
                id='select'
              >
                <option value="">Select</option>
                <option value="Aadhar card">Aadhar card</option>
                <option value="driving licence">Driving licence</option>
              </select>
              <div style={{ marginLeft: 80 }}>
                <p style={{ marginTop: 30 }}>a. Identification card Number</p>
                <input
                  name="identificationNumber"
                  value={formData.identificationNumber}
                  onChange={handleChange}
                  style={{ width: 530, height: 50, borderRadius: 10 }}
                  type='text'
                />
                {errors.identificationNumber && <p style={{ color: 'red' }}>{errors.identificationNumber}</p>}
              </div>
              <div>
                <p>3. Candidate Name (As per matriculation Certificate)</p>
                <input
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleChange}
                  style={{ width: 610, height: 50, borderRadius: 10 }}
                  type='text'
                />
                {errors.candidateName && <p style={{ color: 'red' }}>{errors.candidateName}</p>}
              </div>
            </div>
          </div>
          <p>4. Have you ever changed Name?</p>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              <div>
                <input
                  type='radio'
                  name='nameChanged'
                  value='yes'
                  onChange={handleChange}
                />
              </div>
              <div style={{ marginTop: -10, marginLeft: 3 }}>
                <p style={{ marginTop: 10 }}>Yes</p>
              </div>
            </div>
            <div style={{ display: 'flex', marginLeft: 20 }}>
              <div>
                <input
                  type='radio'
                  name='nameChanged'
                  value='no'
                  onChange={handleChange}
                />
              </div>
              <div style={{ marginTop: -10, marginLeft: 3 }}>
                <p style={{ marginTop: 10 }}>No</p>
              </div>
            </div>
          </div>
          {formData.nameChanged === 'yes' && (
            <div style={{ marginLeft: 80 }}>
              <p>a. New Name/changed Name</p>
              <input
                name="newName"
                value={formData.newName}
                onChange={handleChange}
                style={{ width: 530, height: 50, borderRadius: 10 }}
                type='text'
              />
              {errors.newName && <p style={{ color: 'red' }}>{errors.newName}</p>}
              <p>b. Verify New Name/changed Name</p>
              <input
                name="verifyNewName"
                value={formData.verifyNewName}
                onChange={handleChange}
                style={{ width: 530, height: 50, borderRadius: 10 }}
                type='text'
              />
              {errors.verifyNewName && <p style={{ color: 'red' }}>{errors.verifyNewName}</p>}
            </div>
          )}
          <div>
            <p>5. Gender</p>
            <div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{ width: 618, height: 50, borderRadius: 10 }}
                id='select'
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div style={{ marginLeft: 80 }}>
              <p style={{ marginTop: 15 }}>a. Verify Gender</p>
              <select
                name="verifyGender"
                value={formData.verifyGender}
                onChange={handleChange}
                style={{ width: 540, height: 50, borderRadius: 10 }}
                id='select'
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.verifyGender && <p style={{ color: 'red' }}>{errors.verifyGender}</p>}
            </div>
          </div>
          <div>
            <p style={{ marginTop: 15 }}>6. Date of Birth</p>
            <input
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              style={{ width: 610, height: 50, borderRadius: 10 }}
              type='date'
            />
            {errors.dateOfBirth && <p style={{ color: 'red' }}>{errors.dateOfBirth}</p>}
          </div>
          <div>
            <p style={{ marginTop: 15 }}>7. Father Name</p>
            <input
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              style={{ width: 610, height: 50, borderRadius: 10 }}
              type='text'
            />
            {errors.fatherName && <p style={{ color: 'red' }}>{errors.fatherName}</p>}
          </div>
          <div>
            <p>8. Mother Name</p>
            <input
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              style={{ width: 610, height: 50, borderRadius: 10 }}
              type='text'
            />
            {errors.motherName && <p style={{ color: 'red' }}>{errors.motherName}</p>}
          </div>
          <div>
            <p>9. Mobile Number</p>
            <input
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              style={{ width: 610, height: 50, borderRadius: 10 }}
              type='text'
            />
            {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
            <button style={{ marginLeft: 10, height: 40, width: 100, background: '#00ffff', color: 'black', borderRadius: 10, boxShadow: '0px 0px 5px black' }}>Send OTP</button>
          </div>
          <div>
            <p>10. Candidate Email ID</p>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: 610, height: 50, borderRadius: 10 }}
              type='text'
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <button style={{ marginLeft: 10, height: 40, width: 100, background: '#00ffff', color: 'black', borderRadius: 10, boxShadow: '0px 0px 5px black' }}>Send OTP</button>
          </div>
        </form>

    
      



        
      </Box>
    </div>
  );
}

export default Step1;
