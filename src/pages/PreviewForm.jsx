import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';
import Img1 from '../images/otrimg1.png';
import Header1 from './header1.jsx';
import Fotter from './fotter.jsx';



function PreviewForm() {
  const [formData, setFormData] = useState({
    aadharNumber: '',
    idType: '',
    candidateName: '',
    newName: '',
    fatherName: '',
    motherName: '',
    gender: '',
    dob: '',
    category: '',
    eduBoard: '',
    rollNumber: '',
    passingYear: '',
    educationLevel: '',
    mobileNumber: '',
    email: '',
    idMarks: '',
    disability: '',
    address: '',
    state: '',
    district: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Simple validation example
    const {
      aadharNumber,
      idType,
      candidateName,
      fatherName,
      motherName,
      gender,
      dob,
      category,
      eduBoard,
      rollNumber,
      passingYear,
      educationLevel,
      mobileNumber,
      email,
      idMarks,
      disability,
      address,
      state,
      district,
      pincode
    } = formData;

    if (
      !aadharNumber ||
      !idType ||
      !candidateName ||
      !fatherName ||
      !motherName ||
      !gender ||
      !dob ||
      !category ||
      !eduBoard ||
      !rollNumber ||
      !passingYear ||
      !educationLevel ||
      !mobileNumber ||
      !email ||
      !idMarks ||
      !disability ||
      !address ||
      !state ||
      !district ||
      !pincode
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please fill all the required fields!',
            customClass: 'swal-blue-background' // Apply the custom class
          });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                html: `<div style="width: 380px; line-height: 2; text-align: center; padding-left: 30px; white-space: normal;">
              <span style="color: yellow; text-decoration: none;">OTR Form</span> is Completed Successfully. 
              Your SPN ID is <span style="color:#ff0066; text-decoration: none;">AP125XXXXX.</span> Now you can start your Job Application Form.
              <a href="/payment"><button style="background:#ff0066;color:white;width:150">Apply Job</button></a>
            </div>`,
                background: '#006699',
                color: 'white',
                width: '500px',
                iconColor: '#00ff00',
                height:'500px'
              });
        }
      };

  return (
    <div>
      <Header1 />
      <h2 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', paddingTop: 130 }}>Preview Form</h2>
      <div style={{ marginLeft: 400 }}>
        <Box>
          <br />
          <div style={{ marginLeft: 50 }}>
            <h3 style={{ fontSize: 20, fontWeight: '600px' }}>Personal Details</h3>
            <p>1. Aadhar Number</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='aadharNumber'
              value={formData.aadharNumber}
              onChange={handleChange}
            />
            <p>2. Type of ID</p>
            <select
              style={{ width: 600, marginLeft: 10, borderRadius: 10, height: 50 }}
              name='idType'
              value={formData.idType}
              onChange={handleChange}
            >
              <option value=''>Select</option>
              <option value='Aadhar'>Aadhar</option>
              <option value='Driving Licence'>Driving Licence</option>
            </select>
            <p style={{ marginTop: 15 }}>3. Candidate's Name (As per matriculation certificate)</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='candidateName'
              value={formData.candidateName}
              onChange={handleChange}
            />
            <p>4. New Name/Changed Name</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='newName'
              value={formData.newName}
              onChange={handleChange}
            />
            <p>5. Father's Name</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='fatherName'
              value={formData.fatherName}
              onChange={handleChange}
            />
            <p>6. Mother's Name</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='motherName'
              value={formData.motherName}
              onChange={handleChange}
            />
            <p>7. Gender</p>
            <div style={{ marginLeft: 20, marginTop: 20 }}>
              <input
                type='radio'
                name='gender'
                value='Male'
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              <p style={{ marginLeft: 30, marginTop: -25 }}>Male</p>
            </div>
            <div style={{ marginLeft: 120, marginTop: -37 }}>
              <input
                type='radio'
                name='gender'
                value='Female'
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <p style={{ paddingLeft: 30, marginTop: -27 }}>Female</p>
            </div>
            <p>8. Date of Birth</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='date'
              name='dob'
              value={formData.dob}
              onChange={handleChange}
            />
            <p style={{ marginTop: 20 }}>9. Category</p>
            <div style={{ marginLeft: 20, marginTop: 30 }}>
              <input
                type='radio'
                name='category'
                value='General'
                checked={formData.category === 'General'}
                onChange={handleChange}
              />
              <p style={{ marginLeft: 30, marginTop: -25 }}>General</p>
            </div>
            <div style={{ marginLeft: 120, marginTop: -38 }}>
              <input
                type='radio'
                name='category'
                value='EWS'
                checked={formData.category === 'EWS'}
                onChange={handleChange}
              />
              <p style={{ paddingLeft: 30, marginTop: -25 }}>EWS</p>
            </div>
            <div style={{ marginLeft: 200, marginTop: -38 }}>
              <input
                type='radio'
                name='category'
                value='SC'
                checked={formData.category === 'SC'}
                onChange={handleChange}
              />
              <p style={{ marginLeft: 30, marginTop: -25 }}>SC</p>
            </div>
            <div style={{ marginLeft: 270, marginTop: -38 }}>
              <input
                type='radio'
                name='category'
                value='ST'
                checked={formData.category === 'ST'}
                onChange={handleChange}
              />
              <p style={{ marginLeft: 30, marginTop: -25 }}>ST</p>
            </div>
            <p>10. Matriculation (10th class) Details</p>
            <p>a. Education Board</p>
            <select
              style={{ width: 600, marginLeft: 10, borderRadius: 10, height: 50 }}
              name='eduBoard'
              value={formData.eduBoard}
              onChange={handleChange}
            >
              <option value=''>Select</option>
              <option value='SCC'>SCC</option>
              <option value='Central Board'>Central Board</option>
            </select>
            <p style={{ marginTop: 15 }}>b. Roll Number</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='rollNumber'
              value={formData.rollNumber}
              onChange={handleChange}
            />
            <p>c. Year of passing</p>
            <select
              style={{ width: 600, marginLeft: 10, borderRadius: 10, height: 50 }}
              name='passingYear'
              value={formData.passingYear}
              onChange={handleChange}
            >
              <option value=''>Select</option>
              <option value='2015'>2015</option>
              <option value='2016'>2016</option>
              <option value='2017'>2017</option>
              <option value='2018'>2018</option>
              <option value='2019'>2019</option>
              <option value='2020'>2020</option>
            </select>
            <p style={{ marginTop: 15 }}>11. Level of Education</p>
            <select
              style={{ width: 600, marginLeft: 10, borderRadius: 10, height: 50 }}
              name='educationLevel'
              value={formData.educationLevel}
              onChange={handleChange}
            >
              <option value=''>Select</option>
              <option value='SCC'>10th</option>
              <option value='Central Board'>10+2/Diploma</option>
              <option value='Central Board'>Under Graduvation</option>
              <option value='Central Board'>Post Graduvation</option>
              <option value='Central Board'>Masters</option>

            </select>
            <p style={{ marginTop: 15 }}>12. Mobile Number</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='mobileNumber'
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <p>13. Email ID</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <p>14. Identification Marks</p>
            <input
              style={{ width: 600, height: 50, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='idMarks'
              value={formData.idMarks}
              onChange={handleChange}
            />
            <p>15. Are you a person with benchmark disability?</p>
            <div style={{ marginLeft: 20, marginTop: 30 }}>
              <input
                type='radio'
                name='disability'
                value='Yes'
                checked={formData.disability === 'Yes'}
                onChange={handleChange}
              />
              <p style={{ marginLeft: 30, marginTop: -25 }}>Yes</p>
            </div>
            <div style={{ marginLeft: 120, marginTop: -38 }}>
              <input
                type='radio'
                name='disability'
                value='No'
                checked={formData.disability === 'No'}
                onChange={handleChange}
              />
              <p style={{ paddingLeft: 30, marginTop: -25 }}>No</p>
            </div>
            <p>16. Permanent Address</p>
            <input
              style={{ width: 600, height: 130, marginLeft: 10, borderRadius: 10 }}
              type='text'
              name='address'
              value={formData.address}
              onChange={handleChange}
            />
            <p>a. State/UT</p>
            <select
              style={{ width: 600, marginLeft: 10, borderRadius: 10, height: 50 }}
              name='state'
              value={formData.state}
              onChange={handleChange}
            >
              <option value=''>Select</option>
              <option value='Punjab'>Punjab</option>
              <option value='Ap'>Ap</option>
            </select>
            <p style={{ marginTop: 15 }}>b. District</p>
            <select
              style={{ width: 600, marginLeft: 10, borderRadius: 10, height: 50 }}
              name='district'
              value={formData.district}
              onChange={handleChange}
            >
              <option value=''>Select</option>
              <option value='Guntur'>Guntur</option>
              <option value='Ap'>Visakapatanam</option>
            </select>
            <p style={{ marginTop: 15 }}>c. Pincode</p>
            <select
              style={{ width: 600, marginLeft: 10, borderRadius: 10, height: 50 }}
              name='pincode'
              value={formData.pincode}
              onChange={handleChange}
            >
              <option value=''>Select</option>
              <option value='522002'>522002</option>
              <option value='533002'>533002</option>
            </select>
            <br />
            <br />
            <br />
            <p style={{ fontWeight: 700, marginLeft: 200, fontSize: 25 }}>Uploaded Document</p>
            <div style={{ display: 'flex' }}>
              <div>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold', paddingTop: -10 }}>Image</p>
              </div>
              <div style={{ marginLeft: 30 }}>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold' }}>Signature</p>
              </div>
              <div style={{ marginLeft: 30 }}>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold' }}>Aadhar</p>
              </div>
              <div style={{ marginLeft: 40 }}>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold' }}>PAN</p>
              </div>
              <div style={{ marginLeft: 50 }}>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold' }}>Caste</p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold' }}>10th</p>
              </div>
              <div style={{ marginLeft: 30 }}>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold' }}>12th</p>
              </div>
              <div style={{ marginLeft: 45 }}>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 0, fontSize: 20, fontWeight: 'bold' }}>Graduation</p>
              </div>
              <div style={{ marginLeft: 30 }}>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 0, width: 100, fontSize: 20, fontWeight: 'bold' }}>PostGraduation</p>
              </div>
              <div style={{ marginLeft: 50 }}>
                <img style={{ width: 100, height: 100 }} src={Img1} alt='Img1' />
                <p style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold' }}>Resume</p>
              </div>
            </div>
            <button
              className='kconfirm'
              style={{ width: 130, height: 50, borderRadius: 10, border: 'none', marginTop: 30, boxShadow: '0px 0px 5px black', fontSize: 20, fontWeight: 'bold'}}
              onClick={handleSubmit}
            >
              Confirm
            </button>
            <button
              className='kconfirm'
              style={{ width: 130, height: 50, marginLeft: 350, borderRadius: 10, border: 'none', marginTop: 30, boxShadow: '0px 0px 5px black', fontSize: 20, fontWeight: 'bold' }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </Box>
      </div>
      <Fotter />
    </div>
  );
}

export default PreviewForm;
