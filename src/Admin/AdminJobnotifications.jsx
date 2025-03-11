import React, { useState } from 'react';
import Icon1 from '@mui/icons-material/FileUpload';
import TextField from '@mui/material/TextField';

import AdminTab from './verticaltab.jsx';

function Adi() {
  const [jobTitle, setJobTitle] = useState('');
  const [qualification, setQualification] = useState('Degree');
  const [releasedDate, setReleasedDate] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [pqp, setPqp] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [file, setFile] = useState(null);


  const [activeTab, setActiveTab] = useState('');
  const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };

  const validateForm = () => {
    const newErrors = {};
    if (!jobTitle) newErrors.jobTitle = 'Job title is required';
    if (!qualification) newErrors.qualification = 'Qualifications are required';
    if (!releasedDate) newErrors.releasedDate = 'Released date is required';
    if (!pqp) newErrors.pqp = 'Total Vacancy is required';
    if (!description) newErrors.description = 'Description is required';
    if (!file) newErrors.file = 'PDF file is required';
    if (!jobCategory) newErrors.jobCategory = 'Job category is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const jobData = {
      qualification,
      jobTitle,
      releasedDate,
      pqp,
      description,
      file,
      jobCategory
    };
    console.log(jobData);
    alert('All details are filled');
  };

  const handleUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div style={{ backgroundColor: '#F0F8FF', width: 1200 }}>
      <div style={{ display: 'flex', marginLeft: 230 }}>
        <div style={{ backgroundColor: "#20527B", width: 200, height: 200, borderRadius: 200, marginTop: 50, boxShadow: '0px 0px 5px black', lineHeight: 2 }}>
          <h1 style={{ fontSize: 15, paddingTop: 70, paddingLeft: 50, color: 'white', fontWeight: 'bold', lineHeight: 2 }}>Updated Job<br />Notifications</h1>
          <label style={{ fontSize: 20, color: 'white', paddingLeft: 80, fontWeight: 'bold' }}>100</label>
        </div>
        <div style={{ backgroundColor: "#FF4382", width: 200, height: 200, borderRadius: 200, marginLeft: 100, marginTop: 50, boxShadow: '0px 0px 5px black', lineHeight: 2 }}>
          <h1 style={{ fontSize: 15, paddingTop: 70, paddingLeft: 60, color: 'white', fontWeight: 'bold' }}>Active Jobs</h1>
          <label style={{ fontSize: 20, color: 'white', paddingLeft: 90, fontWeight: 'bold' }}>50</label>
        </div>
      </div>

      {/* Update Job Text */}
      <div style={{ textAlign: 'center', width: 600, height: 50, backgroundColor: 'white', borderRadius: 10, marginLeft: 200, background: 'darkblue', boxShadow: '0px 0px solid black', marginTop: 30, color: 'white', paddingTop: 10 }}>
        <h1 style={{ fontSize: 20 }}>Update Job Notifications</h1>
      </div>

      <AdminTab />

      {/* Login Pages */}
      <div style={{ marginLeft: 200, marginTop: 10, width: 600, height: 1200, backgroundColor: 'white', borderRadius: 0, alignItems: 'center', boxShadow: '0px 4px 8px black' }}>
        <form onSubmit={handleSubmit} className="results-form" style={{ boxShadow: '0px 0px 5px black', margin: '30px auto', width: 600, padding: 20, marginLeft: 0, height: 1200 }}>
          <div className="results-form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
            <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Job Category :</label>
            <input
              className='fold6'
              style={{ width: 500, height: 50, marginLeft: 30, borderRadius: 5 }}
              type="text"
              value={jobCategory}
              placeholder="Enter the Job Category"
              onChange={(e) => setJobCategory(e.target.value)}
            />
            {errors.jobCategory && <div className="error-text" style={{ color: 'red', marginTop: 5 }}>{errors.jobCategory}</div>}
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginTop: -5 }}>
            <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Job Title :</label>
            <input
              className='fold6'
              style={{ height: 50, borderRadius: 5 }}
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter Job Title"
            />
            {errors.jobTitle && <p style={{ color: 'red', marginTop: -15 }}>{errors.jobTitle}</p>}
          </div>

          <div className="pqp-form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
            <label style={{ color: 'darkblue', fontSize: 20, fontWeight: 'bold' }}>Total Vacancy :</label>
            <input
              className='fold6'
              style={{ width: 500, height: 50, marginLeft: 30, borderRadius: 5 }}
              type="text"
              value={pqp}
              placeholder="Enter total vacancy"
              onChange={(e) => setPqp(e.target.value)}
            />
            {errors.pqp && <div className="error-text">{errors.pqp}</div>}
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
            <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Description:</label>
            <TextField
              name="description"
              style={{ width: 500, marginBottom: 10, marginLeft: 30 }}
              multiline
              rows={4}
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Job Description"
              error={!!errors.description}
              helperText={errors.description}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginTop: -20 }}>
            <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Post Date :</label>
            <div style={{ alignItems: 'center' }}>
              <input
                className='fold6'
                style={{ height: 50, borderRadius: 5, marginTop: 0, width: 500, marginLeft: 30 }} // Adjusted styles for input
                type="date"
                value={releasedDate}
                onChange={(e) => setReleasedDate(e.target.value)}
                placeholder="dd-mm-yyyy"
              />
              {errors.releasedDate && <p style={{ color: 'red', fontSize: 14, marginTop: 0 }}>{errors.releasedDate}</p>}
            </div>
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
            <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Last Date :</label>
            <div style={{ alignItems: 'center' }}>
              <input
                className='fold6'
                style={{ height: 50, borderRadius: 5, marginTop: 0, width: 500, marginLeft: 30 }} // Adjusted styles for input
                type="date"
                value={releasedDate}
                onChange={(e) => setReleasedDate(e.target.value)}
                placeholder="dd-mm-yyyy"
              />
              {errors.releasedDate && <p style={{ color: 'red', fontSize: 14, marginTop: 0 }}>{errors.releasedDate}</p>}
            </div>
          </div>

          <div className="results-form-group" style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
            <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Qualification :</label>
            <select style={{ height: 50, padding: '0 10px', width: 500, marginLeft: 30 }} value={qualification} onChange={(e) => setQualification(e.target.value)}>
              <option value="Job" style={{ fontSize: 18 }}>Enter your Qualification</option>
              <option value="10th">10th</option>
              <option value="Intermediate">10th+2/Diploma</option>
              <option value="Diploma">Post Graduation</option>
              <option value="Degree">Under Graduation</option>
              <option value="btech">Ph.D</option>
              <option value="pg">PG</option>
              <option value="mba">Masters</option>
            </select>
            {errors.qualification && <div style={{ color: 'red' }} className="error-text">{errors.qualification}</div>}
          </div>

          <div style={{ marginTop: 50 }}>
            <button
              style={{
                background: 'darkred',
                color: 'white',
                height: 50,
                boxShadow: '0px 0px 5px black',
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
              }}
              type="button"
              onClick={handleUpload}
            >
              <Icon1 />
              <span role="button" style={{ textDecoration: 'none', marginLeft: 10 }}>
                Upload PDF
              </span>
            </button>
            <input
              type="file"
              id="fileInput"
              accept="application/pdf"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {file && <p style={{ marginTop: 10 }}>{file.name}</p>}
            {errors.file && <p style={{ color: 'red', marginTop: 9 }}>{errors.file}</p>}
          </div>

          <div style={{ marginTop: 20 }}>
            <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}           type="submit" style={{ background: 'darkblue', color: 'white', height: 50, boxShadow: '0px 0px 5px black', borderRadius: 5, width: '100%' }}>Submit</button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adi;
