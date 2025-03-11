import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header1 from './header1.jsx';
import Fotter from './fotter.jsx';
import { Link } from 'react-router-dom';



import '../css/otr.css';
const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [formData, setFormData] = React.useState({
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







  
  const isStepOptional = (step) => step === 1;

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

  

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Header1/>
    <Box sx={{ width: '80%', marginLeft: 20, marginTop:20 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
       
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
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
   
       
               {/*submit*/}
               <div style={{ marginLeft: 650,}}>
                       <Button
                         style={{ backgroundColor: '#ff0066',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginTop:-65,marginLeft:50}}
                         onClick={handleNext}
                       >
                  Next
                       </Button>
                     </div>
   
   
   
           
         </Box>
       </div>
          
          )}
    {/*step 2*/}
          {activeStep === 1 && (
            <Box >
              {/*stepper step2* 10th class*/}
             
              <h3 style={{ paddingLeft:500, paddingTop:20, fontSize:25, fontWeight:'bold'}}>Professional Details</h3>
<hr />
<div style={{marginLeft:30}}>
<p style={{marginLeft:-30}}>1.Matriculation (10 class) Details</p>
{/*step1*/}
<p>1.Matriculation (10 class) Education Board</p>
<div>
  <select name="step21" value={formData.step21} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="SSC">SSC</option>
    <option value="Other">Other</option>
  </select>
</div>

<div style={{marginLeft:30}}>
  <p style={{marginTop:20}}>a.Verify matriculation (10 class) Education Board</p>
  <select name="step22" value={formData.step22} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="SSC">SSC</option>
    <option value="Other">Other</option>
  </select>
</div>
{/*2rollnumber*/}
<div>
  <p style={{marginTop:20}}>2. Roll Number</p>
  <div>
    <select name="step23" value={formData.step23} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="201Fa08002">201Fa08002</option>
      <option value="201F08003">201F08003</option>
    </select>
    <div style={{ marginLeft: 30 }}>
      <p style={{marginTop:20}}>a. Verify Roll Number</p>
      <div>
        <select name="step24" value={formData.step24} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
          <option value="">Select</option>
          <option value="201Fa08002">201Fa08002</option>
          <option value="201F08003">201F08003</option>
        </select>
      </div>
    </div>
  </div>
</div>

{/*3 year passing*/ }
<div>
  <p style={{marginTop:20}}>3. Year of Passing</p>
  <select name="step25" value={formData.step25} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>
<div style={{marginLeft:30}}>
  <p style={{marginTop:20}}>a.Verify Year of Passing</p>
  <select name="step26" value={formData.step26} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>

{/*4 School Name*/}
<div>
  <p style={{marginTop:20}}>4. School Name</p>
  <div>
    <select name="step27" value={formData.step27} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="Vignan">Vignan</option>
      <option value="KLU">KLU</option>
    </select>
  </div>
</div>

{/*5 percenatge*/}
<p style={{marginTop:20}}>5.10th Percentage</p>
<div style={{ display: 'flex' }}>
  <div style={{ display: 'flex' }}>
    <div>
      <input type='radio' name="percentageType" value="percentage" onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>%</p>
    </div>
  </div>
  <div style={{ display: 'flex', marginLeft: 20 }}>
    <div>
      <input type='radio' name="percentageType" value="cgpa" onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>CGPA</p>
    </div>
  </div>
</div>

{/*2 secoundary education*/}  
{/*seperator*/}
<hr style={{marginLeft:-50,width:700}}></hr>
<p style={{marginLeft:-30}}>2.Secoundary Education Details</p>
{/*checking whther 12th or diploma */}
<div style={{ display: 'flex' }}>
  <div style={{ display: 'flex' }}>
    <div>
      <input type='radio' name='educationType' value='12th' onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>12th</p>
    </div>
  </div>
  <div style={{ display: 'flex', marginLeft: 20 }}>
    <div>
      <input type='radio' name='educationType' value='diploma' onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>Diploma</p>
    </div>
  </div>
</div>

{/*12th details starts */}
{formData.educationType === '12th' && (
  <div style={{ marginLeft: 10 }}>
    <div>
      <p>1. Secoundary Education(12th class) Education Board</p>
      <select name="step28" value={formData.step28} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Other">Other</option>
      </select>
    </div>
    
    <div style={{marginLeft:30}}>
      <p style={{marginTop:20}}>a.Verify Secoundary Education(12th class) Education Board</p>
      <select name="step29" value={formData.step29} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Other">Other</option>
      </select>
    </div>
    {/*2rollnumber*/}
    <div>
      <p>2. Roll Number</p>
      <div>
        <select name="step30" value={formData.step30} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
          <option value="">Select</option>
          <option value="201Fa08002">201Fa08002</option>
          <option value="201F08003">201F08003</option>
        </select>
        <div style={{ marginLeft: 30 }}>
          <p style={{marginTop:20}}>a. Verify Roll Number</p>
          <div>
            <select name="step31" value={formData.step31} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
              <option value="">Select</option>
              <option value="201Fa08002">201Fa08002</option>
              <option value="201F08003">201F08003</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    {/*3 year passing*/ }
    <div>
      <p style={{marginTop:20}}>3. Year of Passing</p>
      <select name="step32" value={formData.step32} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
    <div style={{marginLeft:30}}>
      <p>a.Verify Year of Passing</p>
      <select name="step33" value={formData.step33} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>

  {/*step4*/}
  <div>
    <p>4. Collage Name</p>
    <div>
      <select name="step35" value={formData.step35} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="Vignan">Vignan</option>
        <option value="KLU">KLU</option>
      </select>
    </div>
  </div>

  {/*5 percentage*/}
  <p>5.12th Percentage</p>
  <div style={{ display: 'flex' }}>
    <div style={{ display: 'flex' }}>
      <div>
        <input type='radio' name="secondaryPercentageType" value="percentage" onChange={handleChange} />
      </div>
      <div style={{ marginTop: -17, marginLeft: 3 }}>
        <p>%</p>
      </div>
    </div>
    <div style={{ display: 'flex', marginLeft: 20 }}>
      <div>
        <input type='radio' name="secondaryPercentageType" value="cgpa" onChange={handleChange} />
      </div>
      <div style={{ marginTop: -17, marginLeft: 3 }}>
        <p>CGPA</p>
      </div>
    </div>
  </div>
</div>
)}  

{/*page2 secoundary education if diploma this will open*/}      
{formData.educationType === 'diploma' && (
  <div style={{ marginLeft: 10 }}>
    <div>
      <p>1. Secoundary Education(Diploma class) Education Board</p>
      <select name="step36" value={formData.step36} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="Diploma">Diploma</option>
        <option value="Other">Other</option>
      </select>
    </div>
    
    <div style={{marginLeft:30}}>
      <p>a.Verify Secoundary Education(Diploma class) Education Board</p>
      <select name="step37" value={formData.step37} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="Diploma">Diploma</option>
        <option value="Other">Other</option>
      </select>
    </div>
    {/*2rollnumber*/}
    <div>
      <p>2. Roll Number</p>
      <div>
        <select name="step38" value={formData.step38} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
          <option value="">Select</option>
          <option value="201Fa08002">201Fa08002</option>
          <option value="201F08003">201F08003</option>
        </select>
        <div style={{ marginLeft: 30 }}>
          <p>a. Verify Roll Number</p>
          <div>
            <select name="step39" value={formData.step39} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
              <option value="">Select</option>
              <option value="201Fa08002">201Fa08002</option>
              <option value="201F08003">201F08003</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    {/*3 year passing*/ }
    <div>
      <p>3. Year of Passing</p>
      <select name="step40" value={formData.step40} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
    <div style={{marginLeft:30}}>
      <p>a.Verify Year of Passing</p>
      <select name="step41" value={formData.step41} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  
{/*4 Collage Name*/}
  <div>
    <p>4. Collage Name</p>
    <div>
      <select name="step42" value={formData.step42} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="Vignan">Vignan</option>
        <option value="KLU">KLU</option>
      </select>
    </div>
  </div>

  {/*5 percentage*/}
  <p>5.Diploma Percentage</p>
  <div style={{ display: 'flex' }}>
    <div style={{ display: 'flex' }}>
      <div>
        <input type='radio' name="diplomaPercentageType" value="percentage" onChange={handleChange} />
      </div>
      <div style={{ marginTop: -17, marginLeft: 3 }}>
        <p>%</p>
      </div>
    </div>
    <div style={{ display: 'flex', marginLeft: 20 }}>
      <div>
        <input type='radio' name="diplomaPercentageType" value="cgpa" onChange={handleChange} />
      </div>
      <div style={{ marginTop: -17, marginLeft: 3 }}>
        <p>CGPA</p>
      </div>
    </div>
  </div>
</div>
)}

{/*graduvations starts*/}  
{/*seperator*/}
<hr style={{marginLeft:-50,width:700}}></hr>
<p style={{marginLeft:-30}}>3.Graduation Details</p>
{/*step1*/}
<p>1.Graduation Board</p>
<div>
  <select name="step43" value={formData.step43} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="B.tech">B.tech</option>
    <option value="Degree">Degree</option>
  </select>
</div>

<div style={{marginLeft:30}}>
  <p style={{marginTop:20}}>a.Verify Graduation Board</p>
  <select name="step44" value={formData.step44} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="B.tech">B.tech</option>
    <option value="Degree">Degree</option>
  </select>
</div>
{/*2rollnumber*/}
<div>
  <p style={{marginTop:20}}>2. Roll Number</p>
  <div>
    <select name="step45" value={formData.step45} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="201Fa08002">201Fa08002</option>
      <option value="201F08003">201F08003</option>
    </select>
    <div style={{ marginLeft: 30 }}>
      <p style={{marginTop:20}}>a. Verify Roll Number</p>
      <div>
        <select name="step46" value={formData.step46} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
          <option value="">Select</option>
          <option value="201Fa08002">201Fa08002</option>
          <option value="201F08003">201F08003</option>
        </select>
      </div>
    </div>
  </div>
</div>

{/*3 year passing*/ }
<div>
  <p style={{marginTop:20}}>3. Year of Passing</p>
  <select name="step47" value={formData.step47} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>
<div style={{marginLeft:30}}>
  <p style={{marginTop:20}}>a.Verify Year of Passing</p>
  <select name="step48" value={formData.step48} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>

{/*4 Collage Name*/}
<div>
  <p style={{marginTop:20}}>4. Collage Name</p>
  <div>
    <select name="step49" value={formData.step49} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="Vignan">Vignan</option>
      <option value="KLU">KLU</option>
    </select>
  </div>
</div>

{/*5 percentage*/}
<p style={{marginTop:20}}>5.Graduation Percentage</p>
<div style={{ display: 'flex' }}>
  <div style={{ display: 'flex' }}>
    <div>
      <input type='radio' name="graduationPercentageType" value="percentage" onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>%</p>
    </div>
  </div>
  <div style={{ display: 'flex', marginLeft: 20 }}>
    <div>
      <input type='radio' name="graduationPercentageType" value="cgpa" onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>CGPA</p>
    </div>
  </div>
</div>

{/*seperator*/}
<hr style={{marginLeft:-50,width:700}}></hr>
{/*post graduation starts*/}    
<p style={{marginLeft:-40}}>4.Post-Graduation Details</p>
<div>
  <select name="step50" value={formData.step50} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="SSC">SSC</option>
    <option value="Other">Other</option>
  </select>
</div>

<div style={{marginLeft:30}}>
  <p style={{marginTop:20}}>a.Verify Post-Graduation Board</p>
  <select name="step51" value={formData.step51} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="SSC">SSC</option>
    <option value="Other">Other</option>
  </select>
</div>
{/*2rollnumber*/}
<div>
  <p style={{marginTop:15}}>2. Roll Number</p>
  <div>
    <select name="step52" value={formData.step52} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="201Fa08002">201Fa08002</option>
      <option value="201F08003">201F08003</option>
    </select>
    <div style={{ marginLeft: 30 }}>
      <p style={{marginTop:10}}>a. Verify Roll Number</p>
      <div>
        <select name="step53" value={formData.step53} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
          <option value="">Select</option>
          <option value="201Fa08002">201Fa08002</option>
          <option value="201F08003">201F08003</option>
        </select>
      </div>
    </div>
  </div>
</div>

{/*3 year passing*/ }
<div>
  <p style={{marginTop:20}}>3. Year of Passing</p>
  <select name="step54" value={formData.step54} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>
<div style={{marginLeft:30}}>
  <p style={{marginTop:20}}>a.Verify Year of Passing</p>
  <select name="step55" value={formData.step55} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>

{/*4 Collage Name*/}
<div>
  <p style={{marginTop:20}}>4. Collage Name</p>
  <div>
    <select name="step56" value={formData.step56} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="Vignan">Vignan</option>
      <option value="KLU">KLU</option>
    </select>
  </div>
</div>

{/*5 percentage*/}
<p style={{marginTop:20}}>5.Post-Graduation Percentage</p>
<div style={{ display: 'flex' }}>
  <div style={{ display: 'flex' }}>
    <div>
      <input type='radio' name="postGraduationPercentageType" value="percentage" onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>%</p>
    </div>
  </div>
  <div style={{ display: 'flex', marginLeft: 20 }}>
    <div>
      <input type='radio' name="postGraduationPercentageType" value="cgpa" onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>CGPA</p>
    </div>
  </div>
</div>

{/*seperator*/}
<hr style={{marginLeft:-50,width:700}}></hr>
{/*PHB Details*/}    
<p style={{marginLeft:-40}}>5.PHB Details</p>
<div>
  <select name="step57" value={formData.step57} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="PHB">PHB</option>
    <option value="Other">Other</option>
  </select>
</div>

<div style={{marginLeft:30}}>
  <p style={{marginTop:20}}>a.Verify PHB Board</p>
  <select name="step58" value={formData.step58} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="PHB">PHB</option>
    <option value="Other">Other</option>
  </select>
</div>
{/*2rollnumber*/}
<div>
  <p style={{marginTop:20}}>2. Roll Number</p>
  <div>
    <select name="step59" value={formData.step59} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="201Fa08002">201Fa08002</option>
      <option value="201F08003">201F08003</option>
    </select>
    <div style={{ marginLeft: 30 }}>
      <p style={{marginTop:20}}>a. Verify Roll Number</p>
      <div>
        <select name="step60" value={formData.step60} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
          <option value="">Select</option>
          <option value="201Fa08002">201Fa08002</option>
          <option value="201F08003">201F08003</option>
        </select>
      </div>
    </div>
  </div>
</div>

{/*3 year passing*/ }
<div>
  <p style={{marginTop:20}}>3. Year of Passing</p>
  <select name="step61" value={formData.step61} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>
<div style={{marginLeft:30}}>
  <p style={{marginTop:20}}>a.Verify Year of Passing</p>
  <select name="step62" value={formData.step62} onChange={handleChange} style={{ width: 590, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>

{/*4 Collage Name*/}
<div>
  <p style={{marginTop:20}}>4. Collage Name</p>
  <div>
    <select name="step63" value={formData.step63} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="Vignan">Vignan</option>
      <option value="KLU">KLU</option>
    </select>
  </div>
</div>

{/*5 percentage*/}
<p style={{marginTop:20}}>5.PHB Percentage</p>
<div style={{ display: 'flex' }}>
  <div style={{ display: 'flex' }}>
    <div>
      <input type='radio' name="phbPercentageType" value="percentage" onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>%</p>
    </div>
  </div>
  <div style={{ display: 'flex', marginLeft: 20 }}>
    <div>
      <input type='radio' name="phbPercentageType" value="cgpa" onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:20}}>CGPA</p>
    </div>
    </div>
  </div>
</div>




<Button
                      style={{ backgroundColor: '#004466',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginTop:40,marginLeft:40}}
                      onClick={handleBack}
                    >
               Back
                    </Button>
            {/*submit*/}
            <div style={{ marginLeft: 650,}}>
                    <Button
                      style={{ backgroundColor: '#ff0066',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginTop:-65,marginLeft:50}}
                      onClick={handleNext}
                    >
               Next
                    </Button>
                  </div>



            </Box>
          )}
  {/*step3*/}
  {activeStep === 2 && (
    <Box>
      <h3 style={{paddingTop:20, fontSize:25,fontWeight:'bold',textAlign:'center'}}>Additional Details</h3>
<hr />
<p>1. Do you have caste Certificate?</p>
<div style={{ display: 'flex' }}>
  <div style={{ display: 'flex' }}>
    <div>
      <input type='radio' name='casteCertificateYesNo' value='yes' onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:18}}>Yes</p>
    </div>
  </div>
  <div style={{ display: 'flex', marginLeft: 20 }}>
    <div>
      <input type='radio' name='casteCertificateYesNo' value='no' onChange={handleChange} />
    </div>
    <div style={{ marginTop: -17, marginLeft: 3 }}>
      <p style={{marginTop:18}}>No</p>
    </div>
  </div>
</div>
{formData.casteCertificateYesNo === 'yes' && (
  <div style={{ marginLeft: 80 }}>
    <p>a.Enter CAST Certificate Number</p>
    <input name="step62" value={formData.step62} onChange={handleChange} style={{ width: 530, height: 40, borderRadius: 10 }} type='text' />
    <p>b.Verify CAST Certificate Number</p>
    <input name="step90" value={formData.step90} onChange={handleChange} style={{ width: 530, height: 40, borderRadius: 10 }} type='text' />
  </div>
)}
{/*2.nationality*/}
<div>
  <p>2.Nationality</p>
  <div>
    <select name="step63" value={formData.step63} onChange={handleChange} style={{ width: 618, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="Indian">Indian</option>
      <option value="Others">Others</option>
    </select>
  </div>
</div>
{/*3 marks*/}
<div>
  <p style={{marginTop:20}}>3.Visible Identification marks</p>
  <div>
    <p style={{paddingLeft:40}}>a. New Name/changed Name</p>
    <input name="step64" value={formData.step64} onChange={handleChange} style={{ width: 530, height:50, borderRadius: 10 }} type='text' />
  </div>
</div>
{/*4 disability*/}
<p>4. Are you person with benchmark Disability (pwBD)</p>
<p style={{paddingLeft:40}}>a.Type of disability</p>
<div style={{marginLeft:40}}>
  <select name="step65" value={formData.step65} onChange={handleChange} style={{ width: 580, height: 50, borderRadius: 10 }} id='select'>
    <option value="">Select</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
</div>
<div style={{marginLeft:40}}>
  <p style={{marginTop:15}}>b.Disability certificate Number</p>
  <input name="step66" value={formData.step66} onChange={handleChange} style={{ width: 580, height:50, borderRadius: 10 }} type='text' />
</div>

{/*Permanent Address*/}
<div>
  <p>5. Permanent Address</p>
  <div style={{marginLeft:40}}>
    <p>a.Address</p>
    <input name="step67" value={formData.step67} onChange={handleChange} style={{ width: 580, height: 150, borderRadius: 10 }} type='text' />
  </div>
  <div style={{marginLeft:40}}>
    <p>b.State/UT</p>
    <select name="step68" value={formData.step68} onChange={handleChange} style={{ width: 580, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="State1">State1</option>
      <option value="State2">State2</option>
    </select>
  </div>
  <div style={{marginLeft:40}}>
    <p style={{marginTop:15}}>c.District</p>
    <select name="step69" value={formData.step69} onChange={handleChange} style={{ width: 580, height: 50, borderRadius: 10 }} id='select'>
      <option value="">Select</option>
      <option value="District1">District1</option>
      <option value="District2">District2</option>
    </select>
  </div>
  <div style={{marginLeft:40}}>
    <p style={{marginTop:15}}>d.Pincode</p>
    <input name="step70" value={formData.step70} onChange={handleChange} style={{ width: 580, height:50, borderRadius: 10 }} type='text' />
  </div>
</div>
<div>
  <p>6.Is permanent address same as current address?</p>
  <div style={{ display: 'flex' }}>
    <div style={{ display: 'flex' }}>
      <div>
        <input type='radio' name='sameAddressYesNo' value='yes' onChange={handleChange} />
      </div>
      <div style={{ marginTop: -17, marginLeft: 3 }}>
        <p style={{marginTop:18}}>Yes</p>
      </div>
    </div>
    <div style={{ display: 'flex', marginLeft: 20 }}>
      <div>
        <input type='radio' name='sameAddressYesNo' value='no' onChange={handleChange} />
      </div>
      <div style={{ marginTop: -17, marginLeft: 3 }}>
        <p style={{marginTop:18}}>No</p>
      </div>
    </div>
  </div>
  {formData.sameAddressYesNo === 'no' && (
    <div style={{ marginLeft: 80 }}>
      <p>a.Address</p>
      <input name="step71" value={formData.step71} onChange={handleChange} style={{ width: 580, height: 150, borderRadius: 10 }} type='text' />
      <p>b.State/UT</p>
      <select name="step72" value={formData.step72} onChange={handleChange} style={{ width: 580, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="State1">State1</option>
        <option value="State2">State2</option>
      </select>
      <p>c.District</p>
      <select name="step73" value={formData.step73} onChange={handleChange} style={{ width: 580, height: 50, borderRadius: 10 }} id='select'>
        <option value="">Select</option>
        <option value="District1">District1</option>
        <option value="District2">District2</option>
      </select>
      <p>d.Pincode</p>
      <input name="step74" value={formData.step74} onChange={handleChange} style={{ width: 580, height: 40, borderRadius: 10 }} type='text' />
    </div>
  )}
</div>



<Button
                      style={{ backgroundColor: '#004466',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginTop:40,marginLeft:40}}
                      onClick={handleBack}
                    >
               Back
                    </Button>
            {/*submit*/}
            <div style={{ marginLeft: 650,}}>
                    <Button
                      style={{ backgroundColor: '#ff0066',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginTop:-65,marginLeft:50}}
                      onClick={handleNext}
                    >
               Continue
                    </Button>
                  </div>

    </Box>
  )}

  {/*step4*/}
  {activeStep === 3 && (
    <Box>
        <h3 style={{textAlign:'center',paddingTop:20, fontSize:25,fontWeight:'bold'}}>Upload Document</h3>
<hr />
<p style={{fontSize:20,fontWeight:'bold'}}>Note:</p>
<p style={{paddingTop:150}}>Guidelines for Scanning the Photograph, Signature & Additional Documents</p>
{/*1.scan the photos*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>1.Scanned Photograph Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} style={{ width: 580, height: 150}} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:-110,marginLeft:30}}>
        <p style={{marginTop:16}}>I confirm that this is my valid photo and also agree to the above mentioned note</p>
    </div>
</div>

{/*2.signature*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>2.Scanned Signature Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="newName" value={formData.newName} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid Signature and also agree to the above mentioned note</p>
    </div>
</div>

{/*3.aadhar card*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>3.Scanned Aadhar Card Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="email" value={formData.email} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid Aadhar Card and also agree to the above mentioned note</p>
    </div>
</div>

{/*4.pan card*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>4.Scanned PAN Card Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="candidateName" value={formData.candidateName} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid Pan Card and also agree to the above mentioned note</p>
    </div>
</div>

{/*5.caste certificate*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>5.Scanned Caste Certificate Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid Caste Certificate and also agree to the above mentioned note</p>
    </div>
</div>

{/*6.10th certificate*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>6.Scanned 10th class Certificate Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="motherName" value={formData.motherName} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid 10th Certificate and also agree to the above mentioned note</p>
    </div>
</div>

{/*7.12th certificate*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>7.Scanned 12th or Diploma Certificate Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="identificationNumber" value={formData.identificationNumber} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid 12th or Diploma Certificate and also agree to the above mentioned note</p>
    </div>
</div>

{/*8.graduation certificate*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>8.Scanned Graduation Certificate Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:37,marginTop:-80}}>
        <input name="fatherName" value={formData.fatherName} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid Graduation Certificate and also agree to the above mentioned note</p>
    </div>
</div>

{/*9.post graduation certificate*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>9.Scanned Post Graduation Certificate Of The Candidate:</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="aadharCard" value={formData.aadharCard} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid Post Graduation Certificate and also agree to the above mentioned note</p>
    </div>
</div>

{/*10.resume*/}
<div>
    <p style={{fontWeight:700,fontSize:20}}>10.Upload Your Updated Resume</p>
    <input type='checkbox' style={{marginTop:60}} />
    
    <div style={{marginLeft:20,marginTop:-80}}>
        <input name="verifyAadharCard" value={formData.verifyAadharCard} onChange={handleChange} type='file' />
    </div>
    {/*click box*/}
    <div style={{marginTop:37,marginLeft:30}}>
        <p style={{marginTop:-10}}>I confirm that this is my valid Resume and also agree to the above mentioned note</p>
    </div>
</div>

<br />
<hr style={{width:580,marginLeft:-40,marginTop:10}} />
<p style={{textAlign:'center',marginTop:-25}}>Or</p>
<hr style={{width:550,float:'right',marginTop:-34}} />
<button className='but2' style={{width:200,height:40,textAlign:'center',marginTop:40,border:'none',color:'white',borderRadius:10}}>Upload with Digi Locker</button>




            {/*submit*/}
            <div style={{ marginLeft: 650,}}>
                    <Button
                      style={{ backgroundColor: '#ff0066',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginTop:-65,marginLeft:50}}
                      onClick={handleNext}
                    >
               Next
                    </Button>
                  </div>

      
    </Box>

  )}
  {/*step5*/}
  {activeStep === 4 && (
    <Box>
      <h3 style={{textAlign:'center',paddingTop:20,fontWeight:'bold',fontSize:25}} >Declaration</h3>
                <hr></hr>
                <br></br>
                <br></br>
                <p>One Time Registration</p>
                <p>Declaration:</p>
                <br></br>
                <p>1.I hearby Declare that the Information given by me in this form is true..,complete and correct to the best of my knowledge and believe.</p>
                <br></br>
                <p>2.I understand that the event of any information being found false or incorrect at any stage, my Candidature /appointment is liable to be cancelled or terminated.</p>
                <br></br>
                <input type='checkbox' style={{marginLeft:420,marginTop:10}}/>
                <p style={{textAlign:'center',marginTop:-25}}>I Agree for the Above Terms And Conditions</p>
                <div style={{marginLeft:500,marginTop:40}}>
                <Link to="/prview" style={{ marginRight: 20 }}>
              <button
                style={{
                  background: '#004466',
                  boxShadow: '0px 0px 10px black',
                  width: '180px',
                  height: '40px',
                  border: 'none',
                  color:'white',
                  fontSize:'20px',
                  marginLeft:'-10px',
                  borderRadius: '5px'
                }}
                className="link-button"
              >
          Confrom
              </button>
            </Link>
            </div>

    </Box>
  )}
  {/*step6*/}
  
        </React.Fragment>
      )}
    </Box>
    <Fotter/>
    </div>
  );
}
