import React, { useState } from 'react';
import Icon1 from '@mui/icons-material/FileUpload';

const JobForm = () => {
  const [jobCategory, setJobCategory] = useState('ssc');
  const [jobTitle, setJobTitle] = useState('');
  const [releasedDate, setReleasedDate] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!jobTitle) newErrors.jobTitle = 'Job title is required';
    if (!releasedDate) newErrors.releasedDate = 'Released date is required';
    if (!websiteURL) newErrors.websiteURL = 'Website URL is required';
    if (!file) newErrors.file = 'PDF file is required';
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
      jobCategory,
      jobTitle,
      releasedDate,
      websiteURL,
      file
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
    <form onSubmit={handleSubmit} className="results-form" style={{ boxShadow: '0px 0px 5px black', margin: '30px auto', width: 600, padding: 20,marginLeft:200,height:750}}>
      <div className="results-form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Job Category :</label>
        <select style={{ height: 50, padding: '0 10px',width:500,marginLeft:30}} value={jobCategory} onChange={(e) => setJobCategory(e.target.value)}>
          <option value="Job" style={{fontSize:18}}>Enter the Job Category</option>
          <option value="RPF">RPF</option>
          <option value="ssc">SSC</option>
          <option value="ssc-cgl">UPSC</option>
          <option value="ssc-chsl">PSU</option>
          <option value="ssc-je">RRB</option>
          <option value="ssc-cpo">Banking</option>
          <option value="ssc-cpo">Defense</option>
          <option value="ssc-cpo">Health Care & Medical</option>
          <option value="ssc-cpo">PSC</option>
          <option value="Railway">Railway</option>
          <option value="ssc-cpo">IPS</option>
          <option value="ssc-cpo">Judicial</option>
          <option value="postoffice">PostOffice</option>
        </select>
        {errors.jobCategory && <div className="error-text" style={{ color: 'red', marginTop: 5 }}>{errors.jobCategory}</div>}
      </div>
      
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginTop:-5 }}>
        <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Job Title :</label>
        <input
        className='fold6'
          style={{ height: 50, borderRadius: 5}}
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Enter Job Title"
        />
        {errors.jobTitle && <p style={{ color: 'red', marginTop:-5 }}>{errors.jobTitle}</p>}
      </div>
      
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginTop:0 }}>
  <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Released Date :</label>
  <div style={{ alignItems: 'center' }}>
    <input
      className='fold6'
      style={{ height: 50, borderRadius: 5,marginTop:0,width:500,marginLeft:30}} // Adjusted styles for input
      type="date"
      value={releasedDate}
      onChange={(e) => setReleasedDate(e.target.value)}
      placeholder="dd-mm-yyyy"
    />
    {errors.releasedDate && <p style={{ color: 'red', fontSize: 14,marginTop:0}}>{errors.releasedDate}</p>}
  </div>
</div>



   
<div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginTop:0 }}>
  <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Website URL :</label>
  <div style={{ alignItems: 'center' }}>
    <input
      className='fold6'
      style={{ height: 50, borderRadius: 5,marginTop:0,width:500,marginLeft:30}} // Adjusted styles for input
      type="url"
          value={websiteURL}
          onChange={(e) => setWebsiteURL(e.target.value)}
           placeholder="Enter URL"
    />
   {errors.websiteURL && <p className="error-text" style={{ marginTop: 10 }}>{errors.websiteURL}</p>}
  </div>
</div>


      
      <div style={{ marginTop:30 }}>
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
        {errors.file && <p style={{ color: 'red',marginTop:9}}>{errors.file}</p>}
      </div>
      
      <div style={{marginTop:20}}>
        <button type="submit" style={{ background: 'darkblue', color: 'white', height: 50, boxShadow: '0px 0px 5px black', borderRadius: 5, width: '100%' }}>Submit</button>
      </div>
    </form>
  );
};

export default JobForm;
