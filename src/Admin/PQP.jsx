import React, { useState } from 'react'; // Ensure your CSS file path is correct
import Icon1 from '@mui/icons-material/FileUpload';

const JobForm = () => {
  const [jobCategory, setJobCategory] = useState('RPF');
  const [jobTitle, setJobTitle] = useState('');
  const [language, setLanguage] = useState('English');
  const [qualification, setQualification] = useState('Degree');
  const [pqp, setPqp] = useState('2020');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!jobCategory) newErrors.jobCategory = 'Job category is required';
    if (!jobTitle) newErrors.jobTitle = 'Job title is required';
    if (!language) newErrors.language = 'Language is required';
    if (!qualification) newErrors.qualification = 'Qualification is required';
    if (!pqp) newErrors.pqp = 'PQP is required';
    if (!file) newErrors.file = 'PDF file is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      alert('All details are filled');
      console.log('Form submitted:', { jobCategory, jobTitle, language, qualification, pqp });
    } else {
      setErrors(newErrors);
    }
  };

  const handleUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form className="job-form" onSubmit={handleSubmit} style={{ marginTop: 50, boxShadow: '0px 0px 5px black', marginLeft: 200,height:800}}>
      <div style={{ height: 550, width: '100%' }}>
      <div className="results-form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Job Category :</label>
        <select style={{ height: 50, padding: '0 10px',width:500,marginLeft:50}} value={jobCategory} onChange={(e) => setJobCategory(e.target.value)}>
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
          style={{ height: 50, borderRadius: 5,marginLeft:50}}
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Enter Job Title"
        />
        {errors.jobTitle && <p style={{ color: 'red', marginTop:-5 }}>{errors.jobTitle}</p>}
      </div>

      

        <div className="results-form-group" style={{ display: 'flex', flexDirection: 'column', marginTop:0 }}>
        <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Languages :</label>
        <select style={{ height: 50, padding: '0 10px',width:500,marginLeft:50}} value={jobCategory} onChange={(e) => setLanguage(e.target.value)}>
          <option value="Job" style={{fontSize:18}}>Enter your Language</option>
          <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
        </select>
        {errors.language && <div className="error-text">{errors.language}</div>}
      </div>




      <div className="results-form-group" style={{ display: 'flex', flexDirection: 'column', marginTop:40 }}>
        <label style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Qualification :</label>
        <select style={{ height: 50, padding: '0 10px',width:500,marginLeft:50}} value={jobCategory} onChange={(e) => setQualification(e.target.value)}>
          <option value="Job" style={{fontSize:18}}>Enter your Qualification</option>
          <option value="10th">10th</option>
            <option value="Intermediate">10th+2/Diploma</option>
            <option value="Diploma">Post Graduation</option>
            <option value="Degree">Under Graduation</option>
            <option value="btech">Ph.D</option>
            <option value="pg">PG</option>
            <option value="mba">Masters</option>
        </select>
        {errors.qualification && <div style={{color: 'red'}}      className="error-text">{errors.qualification}</div>}
      </div>

        <div className="pqp-form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
          <label style={{ color: 'darkblue', fontSize: 20, fontWeight: 'bold' }}>PQP :</label>
          <input
            style={{ width:500, height: 50, marginLeft:50, borderRadius: 5 }}
            type="text"
            value={pqp}
            onChange={(e) => setPqp(e.target.value)}
          />
          {errors.pqp && <div className="error-text">{errors.pqp}</div>}
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
      </div>
    </form>
  );
};

export default JobForm;
