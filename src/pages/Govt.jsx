import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchIcon from '@mui/icons-material/Search';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddIcon from '@mui/icons-material/Add';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteIcon from '@mui/icons-material/Note';
import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';
import 'sweetalert2/dist/sweetalert2.css';
import '../css/govt.css';

const Tab = () => {





  










  const [activeTab, setActiveTab] = useState('tab1');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Search query:', searchQuery);
  };



  /*---------------------------navbar2 js -------------------------------*/



  /*----------------------------- download section ------------------------------ */
  const handleDownload = () => {
    const link = document.createElement('a');
    const BANK = '../images/Bank.png'; // Replace with the actual path to your image file
    link.href = BANK;
    link.download = 'Bank.png'; // Specify the filename for download
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link from the document
  };



  return (
    <div className="bcontainermain" style={{width: 1100, marginLeft:250, marginTop:175}}>
      <div className='bcontainermain2'   style={{height:180, border: '1px solid gray', boxShadow: '2px 2px 5px black', marginTop: 10, borderRadius:10,marginLeft:-150}}>
        <div className="tabingbtn" style={{gap:10, marginLeft:36, marginTop:30,height:50, display:'flex'}}>
          <button 
            className={activeTab === 'tab1' ? 'active' : ''}
            onClick={() => handleTabClick('tab1')} style={{width:'150px',padding:5, fontSize: 14, marginTop:8,  cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
            boxShadow:'none'}}   
         >
            All India Govt.Jobs
          </button>
          <button
            className={activeTab === 'tab2' ? 'active' : ''}
            onClick={() => handleTabClick('tab2')} style={{width:'150px', padding:5, fontSize: 14, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            State Govt.Jobs
          </button>
          <button
            className={activeTab === 'tab3' ? 'active' : ''}
            onClick={() => handleTabClick('tab3')} style={{width:'150px', padding:10, fontSize: 15, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            Bank Jobs
          </button>
          <button
            className={activeTab === 'tab4' ? 'active' : ''}
            onClick={() => handleTabClick('tab4')} style={{width:'150px', padding:10, fontSize: 14, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            Teaching Jobs
          </button>
          <button
            className={activeTab === 'tab5' ? 'active' : ''}
            onClick={() => handleTabClick('tab5')} style={{width:'150px', padding:11, fontSize: 13, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            EngineeringJobs
          </button>
          <button
            className={activeTab === 'tab6' ? 'active' : ''}
            onClick={() => handleTabClick('tab6')} style={{width:'150px', padding:11, fontSize: 14, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
            Railway Jobs
          </button>
          <button
            className={activeTab === 'tab15' ? 'active' : ''}
            onClick={() => handleTabClick('tab15')} style={{width:'150px', padding:11, fontSize: 14, marginTop:8,cursor: 'pointer',marginLeft: 5,background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)',border: 'none',borderRadius: 12,marginRight: 5,color: 'white',fontWeight: 'bold',
              boxShadow:'none'}}
          >
           Defence Jobs
          </button>
        </div>


        <div className="containerof" style={{ width: 900, marginLeft: 50, marginTop: 20, gap:56 }}>
  <p
    className={activeTab === 'tab7' ? 'active' : ''}
    onClick={() => handleTabClick('tab7')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',paddingLeft:30}}
  >
    Syllabus
  </p>
  <p
    className={activeTab === 'tab8' ? 'active' : ''}
    onClick={() => handleTabClick('tab8')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',paddingLeft:30}}
  >
    PQP
  </p>
  <p
    className={activeTab === 'tab9' ? 'active' : ''}
    onClick={() => handleTabClick('tab9')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',paddingLeft:30}}
  >
    AnswerKey
  </p>
  <h1
    className={activeTab === 'tab10' ? 'active' : ''}
    onClick={() => handleTabClick('tab10')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold',paddingLeft:30}}
  >
    Results
  </h1>
  <h1
    className={activeTab === 'tab11' ? 'active' : ''}
    onClick={() => handleTabClick('tab11')}
    style={{ fontSize: 18, textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',paddingLeft:30}}
  >
    CutOff
  </h1>
  <div>
    <div style={{ textDecoration: 'none',height:'50px'}}>
      <form style={{height:50}}         className="form1" onSubmit={handleSubmit}>
        <input
        className="fold4"
          style={{ width: 250, marginLeft:60, height:40, marginTop:-25 }}
          type="text"
          name="search"
          placeholder="Choose Your State"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon
          className='find'
          icon={faSearch}
          aria-hidden="true"
          style={{ marginLeft:270, marginTop:-50, fontSize: 5 }}
        />
      </form>
    </div>
  </div>
</div>

      </div>

{/*-------------------------------------------------------- All India Govt Jobs Tab -------------------------------------------*/}
      <div className="btab-content">
        {activeTab === 'tab1' && (
          <div>
            
          <div className='bcontainerjob1' style={{marginTop:50,marginLeft:0}}>
              <h1 style={{fontSize:23, textDecoration:'underline',width:250}}  className='statename'>All IndiaGovt.Jobs</h1>
              <button className='buttonjob1'    style={{marginLeft:60,marginTop:1, width:80, height:40, background: 'rgba(217, 216, 216, 1)', color: 'black', borderRadius:10, border:'none', fontWeight:600,
              boxShadow:'none'}}>New</button>

              <select className="selectbtn" name="state" id="state"  style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option value="AP">Andhra Pradesh</option>
              <option value="TG">Telangana</option>
              <option value="KL">Kerala</option>
              <option value="TN">Tamil Nadu</option>
              <option value="DL">Delhi</option>
              </select>


              <select className="selectbtn1" name="degrees" id="degrees"    style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option className="cha" value="qual">Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="msc">M.Sc</option>
              <option value="degree">Degree</option>
              </select>

            <div className='buttonjob2' style={{width:80, height: 40, marginLeft:30, marginTop:1}}>
            <EditNoteIcon className='icon1' style={{marginLeft:-10}} />
            <h1 className='bh1' style={{marginLeft:-10,fontSize:16,marginTop:5}}>Filter</h1>
            </div>

            </div>


            {/*--------------------------------------container1 job---------------------------------*/}
            <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
            {/* second section*/}


            <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
             
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
        background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>










                  <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
            
          </div>
        )}
      </div>

{/*--- ------------------------------------------------------------State Govt Jobs Tab------------------------------------------- */}
      <div className="tab-content">
        {activeTab === 'tab2' && (
          <div>
             <div className='bcontainerjob1' style={{marginTop:50,marginLeft:0}}>
              <h1 style={{fontSize:23, textDecoration:'underline',width:250}}  className='statename'>State Govt.Jobs</h1>
              <button className='buttonjob1'    style={{marginLeft:60,marginTop:1, width:80, height:40, background: 'rgba(217, 216, 216, 1)', color: 'black', borderRadius:10, border:'none', fontWeight:600,
              boxShadow:'none'}}>New</button>

              <select className="selectbtn" name="state" id="state"  style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option value="AP">Andhra Pradesh</option>
              <option value="TG">Telangana</option>
              <option value="KL">Kerala</option>
              <option value="TN">Tamil Nadu</option>
              <option value="DL">Delhi</option>
              </select>


              <select className="selectbtn1" name="degrees" id="degrees"    style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option className="cha" value="qual">Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="msc">M.Sc</option>
              <option value="degree">Degree</option>
              </select>

            <div className='buttonjob2' style={{width:80, height: 40, marginLeft:30, marginTop:1}}>
            <EditNoteIcon className='icon1' style={{marginLeft:-10}} />
            <h1 className='bh1' style={{marginLeft:-10,fontSize:16,marginTop:5}}>Filter</h1>
            </div>

            </div>
            {/*--------------------------------containerjob2-------------------------------*/}

            <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
       background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
    <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
               {/* second section*/}
               <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>

{/*----------------------------------------------------- Bank Jobs Tab---------------------------------------------------- */}
      <div className="tab-content">
        {activeTab === 'tab3' && (
          <div>

<div className='bcontainerjob1' style={{marginTop:50,marginLeft:0}}>
              <h1 style={{fontSize:23, textDecoration:'underline',width:250}}  className='statename'>Bank.Jobs</h1>
              <button className='buttonjob1'    style={{marginLeft:60,marginTop:1, width:80, height:40, background: 'rgba(217, 216, 216, 1)', color: 'black', borderRadius:10, border:'none', fontWeight:600,
              boxShadow:'none'}}>New</button>

              <select className="selectbtn" name="state" id="state"  style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option value="AP">Andhra Pradesh</option>
              <option value="TG">Telangana</option>
              <option value="KL">Kerala</option>
              <option value="TN">Tamil Nadu</option>
              <option value="DL">Delhi</option>
              </select>


              <select className="selectbtn1" name="degrees" id="degrees"    style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option className="cha" value="qual">Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="msc">M.Sc</option>
              <option value="degree">Degree</option>
              </select>

            <div className='buttonjob2' style={{width:80, height: 40, marginLeft:30, marginTop:1}}>
            <EditNoteIcon className='icon1' style={{marginLeft:-10}} />
            <h1 className='bh1' style={{marginLeft:-10,fontSize:16,marginTop:5}}>Filter</h1>
            </div>

            </div>


            {/*----------------------------------------------- container3 jobs ----------------------------------*/}
            <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
               {/* second section*/}
               <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>

{/*------------------------------------------------------- Teaching Jobs Tab------------------------------------------------------------------- */}
      <div className="tab-content">
        {activeTab === 'tab4' && (
          <div>
  <div className='bcontainerjob1' style={{marginTop:50,marginLeft:0}}>
              <h1 style={{fontSize:23, textDecoration:'underline',width:250}}  className='statename'>Teaching Jobs</h1>
              <button className='buttonjob1'    style={{marginLeft:60,marginTop:1, width:80, height:40, background: 'rgba(217, 216, 216, 1)', color: 'black', borderRadius:10, border:'none', fontWeight:600,
              boxShadow:'none'}}>New</button>

              <select className="selectbtn" name="state" id="state"  style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option value="AP">Andhra Pradesh</option>
              <option value="TG">Telangana</option>
              <option value="KL">Kerala</option>
              <option value="TN">Tamil Nadu</option>
              <option value="DL">Delhi</option>
              </select>


              <select className="selectbtn1" name="degrees" id="degrees"    style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option className="cha" value="qual">Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="msc">M.Sc</option>
              <option value="degree">Degree</option>
              </select>

            <div className='buttonjob2' style={{width:80, height: 40, marginLeft:30, marginTop:1}}>
            <EditNoteIcon className='icon1' style={{marginLeft:-10}} />
            <h1 className='bh1' style={{marginLeft:-10,fontSize:16,marginTop:5}}>Filter</h1>
            </div>

            </div>

            {/*------------------------------- container4 jobs-------------------------------------- */}
            <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
               {/* second section*/}
               <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>

            
          </div>
        )}
      </div>

{/* ----------------------------------------------------------------Engineering Jobs Tab-------------------------------------------------- */}
      <div className="tab-content">
        {activeTab === 'tab5' && (
          <div>

<div className='bcontainerjob1' style={{marginTop:50,marginLeft:0}}>
              <h1 style={{fontSize:23, textDecoration:'underline',width:250}}  className='statename'>Engneering Jobs</h1>
              <button className='buttonjob1'    style={{marginLeft:60,marginTop:1, width:80, height:40, background: 'rgba(217, 216, 216, 1)', color: 'black', borderRadius:10, border:'none', fontWeight:600,
              boxShadow:'none'}}>New</button>

              <select className="selectbtn" name="state" id="state"  style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option value="AP">Andhra Pradesh</option>
              <option value="TG">Telangana</option>
              <option value="KL">Kerala</option>
              <option value="TN">Tamil Nadu</option>
              <option value="DL">Delhi</option>
              </select>


              <select className="selectbtn1" name="degrees" id="degrees"    style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option className="cha" value="qual">Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="msc">M.Sc</option>
              <option value="degree">Degree</option>
              </select>

            <div className='buttonjob2' style={{width:80, height: 40, marginLeft:30, marginTop:1}}>
            <EditNoteIcon className='icon1' style={{marginLeft:-10}} />
            <h1 className='bh1' style={{marginLeft:-10,fontSize:16,marginTop:5}}>Filter</h1>
            </div>

            </div>


              {/* -------------------------------------- Engineering Jobs section-------------------------------*/}
              <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
               {/* second section*/}
               <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
           
          </div>
        )}
      </div>

      {/* -------------------------------------------------------Railway Jobs Tab --------------------------------------------------*/}
      <div className="tab-content">
        {activeTab === 'tab6' && (
          <div>

<div className='bcontainerjob1' style={{marginTop:50,marginLeft:0}}>
              <h1 style={{fontSize:23, textDecoration:'underline',width:250}}  className='statename'>Railway Jobs</h1>
              <button className='buttonjob1'    style={{marginLeft:60,marginTop:1, width:80, height:40, background: 'rgba(217, 216, 216, 1)', color: 'black', borderRadius:10, border:'none', fontWeight:600,
              boxShadow:'none'}}>New</button>

              <select className="selectbtn" name="state" id="state"  style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option value="AP">Andhra Pradesh</option>
              <option value="TG">Telangana</option>
              <option value="KL">Kerala</option>
              <option value="TN">Tamil Nadu</option>
              <option value="DL">Delhi</option>
              </select>


              <select className="selectbtn1" name="degrees" id="degrees"    style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option className="cha" value="qual">Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="msc">M.Sc</option>
              <option value="degree">Degree</option>
              </select>

            <div className='buttonjob2' style={{width:80, height: 40, marginLeft:30, marginTop:1}}>
            <EditNoteIcon className='icon1' style={{marginLeft:-10}} />
            <h1 className='bh1' style={{marginLeft:-10,fontSize:16,marginTop:5}}>Filter</h1>
            </div>

            </div>


            {/*---------------------------------container5 jobs-----------------------*/}
            <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
               {/* second section*/}
               <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>


          </div>
        )}
      </div>



      {/* -------------------------------------------------------Railway Jobs Tab --------------------------------------------------*/}
      <div className="tab-content">
        {activeTab === 'tab15' && (
          <div>

<div className='bcontainerjob1' style={{marginTop:50,marginLeft:0}}>
              <h1 style={{fontSize:23, textDecoration:'underline',width:250}}  className='statename'>Defence Jobs</h1>
              <button className='buttonjob1'    style={{marginLeft:60,marginTop:1, width:80, height:40, background: 'rgba(217, 216, 216, 1)', color: 'black', borderRadius:10, border:'none', fontWeight:600,
              boxShadow:'none'}}>New</button>

              <select className="selectbtn" name="state" id="state"  style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option value="AP">Andhra Pradesh</option>
              <option value="TG">Telangana</option>
              <option value="KL">Kerala</option>
              <option value="TN">Tamil Nadu</option>
              <option value="DL">Delhi</option>
              </select>


              <select className="selectbtn1" name="degrees" id="degrees"    style={{width:200, height:40, marginLeft:30, marginTop:1}}>
              <option className="cha" value="qual">Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="msc">M.Sc</option>
              <option value="degree">Degree</option>
              </select>

            <div className='buttonjob2' style={{width:80, height: 40, marginLeft:30, marginTop:1}}>
            <EditNoteIcon className='icon1' style={{marginLeft:-10}} />
            <h1 className='bh1' style={{marginLeft:-10,fontSize:16,marginTop:5}}>Filter</h1>
            </div>

            </div>


            {/*---------------------------------container5 jobs-----------------------*/}
            <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
               {/* second section*/}
               <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
       <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>


          </div>
        )}
      </div>








{/*-------------------------------------------------navbar section 2------------------------------------------ */}
{/*-------------------------------------------------- syllabus page------------------------------- */}
<div className="tab-content">
        {activeTab === 'tab7' && (

<div>

<h1  id='5'    style={{
  textAlign: 'center',
  textDecoration: 'underline',
  fontWeight: 700,
  fontSize:25,
  paddingTop: 50,
  marginLeft: -15,
  marginTop:-10,
fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>
SYLLABUS</h1>

<section style={{paddingLeft: 10}}>

<div style={{marginLeft: 20 , display: 'flex',width:100}}>
<input className='fold4'           type="search" id="gsearch" name="gsearch" placeholder="Search Target Syllabus" style={{ paddingLeft:0,borderRadius:10,border:'1px solid ',
cursor: 'pointer',width:350,height:40}}/>

<SearchIcon style={{ marginLeft:-24,marginTop:8,fontSize:25, height:30}}/>
</div>
<button style={{width:200,marginLeft:250,color:'whiteSmoke',marginTop:-20,height:40,border:'1px solid ',float:'right',borderRadius:12,boxShadow:'none',background: 'linear-gradient(180deg, #152D43 0%, #3572A9 100%)'}}  onClick={handleDownload}>
                <FontAwesomeIcon className="icon1" icon={faDownload} />
                Download PDF
                </button>
 

    
</section>


<h1 style={{
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontWeight: 'bold',paddingTop: 20,paddingLeft: 20, fontSize:20}}>Popular Syllabus</h1>


<nav>
       <ul style={{display: 'flex', gap:20, listStyle: 'none', marginTop:30,
 }}>
        <li className='lines'>SSC</li>
        <li className='lines'>Bank</li>
        <li className='lines'>UPSC</li>
        <li className='lines'>RRB</li>
        <li className='lines'>Railways</li>
        <li className='lines'>Others</li>
       </ul>
        
      </nav>



<section>
    <h1 style={{
            fontWeight:'bold',fontSize:20,marginTop:60,paddingLeft:-25,textDecoration:'none',textAlign:'justify',lineHeight:2,marginLeft:20,
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
    }}>Combined Graduate Level (Tier-1) Examination. Tier-I of the Combined Graduate Level <br/>
    Examination would be common for all categories of posts and will be held in one session
    </h1>

        <table style={{marginTop:50, width:950, marginLeft:30}}>
          <tr>
            <th>Part</th>
            <th>Subject</th>
            <th>Max Marks/Questions</th>
            <th>Total Duration/Timing for General candidates</th>
            <th>Total Duration/Timing for Visually Hnadicaped candidates</th>
          </tr>
          <tr>
            <td>A</td>
            <td>General Intelligence & Reasoning</td>
            <td style={{paddingLeft:50}}>50</td>
            <td className='td2' rowSpan="4" style={{textAlign:'center'}}>2 Hours <br /> 10.00 A.M. to 12.00 Noon <br /><span>OR</span><br />2.00 PM to 4.00 PM</td>
            <td rowSpan="4" className='td3' style={{textAlign:'center'}}>2 Hours 40 Minutes <br /> 10.00 AM to 12.40 PM <br/><span>OR</span><br />2.00 PM to 4.40 PM
            </td>
          </tr>
          <tr>
            <td>B</td>
            <td>General Awareness</td>
            <td style={{paddingLeft:50}}>32</td>
          </tr>
          <tr>
            <td>C</td>
            <td>Numerical Aptitude</td>
            <td style={{paddingLeft:50}}>41</td>
            
          </tr>
          <tr>
            <td>D</td>
            <td>English Comprehension</td>
            <td style={{paddingLeft:50}}>41</td>
          </tr>
        </table>


</section>



<section>
<h1 style={{
  fontWeight:'bold',fontSize:20,marginTop:60,paddingLeft:-25,textDecoration:'none',textAlign:'justify',marginLeft:20,
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
}}>Scheme of Examination for Combined Graduate Level (Tier-II) Examination :</h1>

<table style={{marginTop:50, width:950, marginLeft:30}}>
        <tr >
            <th>Paper No.</th>
            <th>Subject/ Paper</th>
            <th>Max. Marks / Questions</th>
            <th>Duration & Timings for General candidates</th>
            <th>Duration & Timings for VH candidates</th>
        </tr>
        <tr>
            <td>I</td>
            <td>Arthemetical Ability</td>
            <td>200 (100 questions)</td>
            <td>2Hours <br />10.00 AM to 12.00 PM</td>
            <td>2Hours and 40 Min. <br/> 10.00 AM to 12.40 PM <br/> 2.00 PM to 4.40 PM</td>
        </tr>
        <tr>
            <td>II</td>
            <td>English Language & Comprehension</td>
            <td style={{paddingLeft:50}}>200</td>
            <td>2 Hours <br />2.00 PM to 4.00 PM</td>
            <td>2 Hours and 40 Min <br />2.00 PM to 4.40 PM</td>
        </tr>
        
    </table>

    <div style={{marginTop: 40, textAlign: 'center'}}>
    <button className="dbutton"  onClick={handleDownload}>
                <FontAwesomeIcon className="icon5" icon={faDownload} />
                Download PDF
                </button>
    </div>
</section>


</div>

        )}

        </div>



{/*------------------------------------------ PQP section--------------------------------------------- */}

<div className="tab-content">
        {activeTab === 'tab8' && (

<div>
<section>

<article>
    <h1 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
      textDecoration: 'underline',
      fontSize: '25px',
      fontWeight:'bold',
      paddingTop: 50,
      paddingLeft: '20'}} id='4'>Previous Question Papers</h1>
</article>

<article style={{float:'inline-end', marginTop:45,}}>
          <button style={{background: 'linear-gradient(to bottom, rgb(10, 215, 237), rgb(2, 49, 62))',
      border: 'none',boxShadow: 'none',color: 'white',fontSize: 'small', marginLeft:100,marginRight:30,width:150, cursor:'pointer',marginTop:-100,height:40,borderRadius:5}}>
      RPF constable</button>
          
          <button style={{background: 'linear-gradient(to bottom, rgb(15, 113, 217), rgb(2, 49, 62))',
      border: 'none',boxShadow: 'none',color: 'white',fontSize: 'medium',padding: 8,textAlign: 'center',width:120, paddingTop:10,cursor:'pointer',borderRadius:5}}>
            <AddIcon style={{float: 'inline-start', paddingTop:-20, marginTop:0,cursor:'pointer' ,}}/>
            Add more
          </button>
</article>

<div style={{display: 'flex', gap:30, marginTop:50}}>
    <h1 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  textDecoration: 'underline',paddingLeft: '20', fontSize:20}}>2024</h1>
    <button type='button' className='prelims'>Prelims</button>
    <button type='button' className='mains'>Mains</button>
</div>


<div style={{marginTop:60, backgroundColor: 'whitesmoke',borderRadius: 10,margin: 10,boxShadow: '2px 4px 5px'}}>
<h1 style={{
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontSize: 'large',letterSpacing: 0,fontWeight: 'bold',paddingLeft: 40,paddingTop: 10}}>RPF Constable 2019 Question Paper</h1>

   <div style={{display: 'flex'}}>
   <DescriptionIcon className='description'/>
   <h2 style={{ fontSize:15,width:100,marginTop: -5,fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  paddingTop: 25, fontWeight:600}}>120 questions</h2>

   <NoteIcon className='description2'/>
   <h2 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontSize: 'medium',marginTop: -2,paddingLeft: 5,paddingTop: 22,letterSpacing: 1, fontWeight:600}}>4pages</h2>

   <h2 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
   fontSize: 'medium',marginTop: 0,paddingLeft: 22,paddingTop: 20, fontWeight:600}}>Ratings:</h2>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <StarBorderIcon className='star1'/>
   <button style={{width:200,marginLeft:250, backgroundColor:'white',border:'1px solid ',borderRadius:12,boxShadow: '0px 0px 5px black'}}  onClick={handleDownload}>
                <FontAwesomeIcon className="icon1" icon={faDownload} />
                Download PDF
                </button>
   </div>
   <div className='head2'>
   <GTranslateIcon style={{color: 'black', paddingTop: 10,paddingLeft: 28}}/>
   <h1 className='languages'>Available in : Telugu, English, Hindi, Tamil</h1>
   </div>
   
</div>
<div style={{display: 'flex', float: 'inline-end',marginTop:20}}>
<RemoveRedEyeIcon/>
<h2       className='viewmore'>View more</h2>

</div>
</section>










{/*--------------------------------------------------2023 section----------------------------------------*/}



<section>
    <article>
    <h1 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  textDecoration: 'underline',paddingLeft: '20', marginTop:40, fontSize:20}}>2023</h1>
    <div style={{marginTop:40, backgroundColor: 'whitesmoke',borderRadius: 10,margin: 10,boxShadow: '2px 4px 5px'}}>
<h1 style={{
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontSize: 'large',letterSpacing: 0,fontWeight: 'bold',paddingLeft: 40,paddingTop: 10}}>RPF Constable (2018) official Paper (Held on:03 Feb,2019,shift2)</h1>

   <div style={{display: 'flex'}}>
   <DescriptionIcon className='description'/>
   <h2 style={{ fontSize:15,width:100,marginTop: -5,fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  paddingTop: 25, fontWeight:600}}>120 questions</h2>

   <NoteIcon className='description2'/>
   <h2 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontSize: 'medium',marginTop: -2,paddingLeft: 5,paddingTop: 22,letterSpacing: 1, fontWeight:600}}>6pages</h2>

   <h2 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
   fontSize: 'medium',marginTop: 0,paddingLeft: 22,paddingTop: 20, fontWeight:600}}>Ratings:</h2>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <StarBorderIcon className='star1'/>
   <button style={{width:200,marginLeft:250, backgroundColor:'white',border:'1px solid ',borderRadius:12,boxShadow: '0px 0px 5px black'}}  onClick={handleDownload}>
                <FontAwesomeIcon className="icon1" icon={faDownload} />
                Download PDF
                </button>
   </div>
   <div className='head2'>
   <GTranslateIcon style={{color: 'black', paddingTop: 10,paddingLeft: 28}}/>
   <h1 className='languages'>Available in : Telugu, English, Hindi, Tamil</h1>
   </div>
   
</div>
<div style={{display: 'flex', float: 'inline-end',marginTop:20}}>
<RemoveRedEyeIcon/>
<h2 className='viewmore'>View more</h2>

</div>
    </article>
</section>





{/*-----------------------------------------------2022 section-----------------------------------*/}


<section>
<article>
<h1 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  textDecoration: 'underline',paddingLeft: '20', fontSize:20, marginTop:40}}>2022</h1>
<div style={{marginTop:40, backgroundColor:'white',borderRadius: 10,margin: 10,boxShadow: '2px 4px 5px'}}>
<h1 style={{
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontSize: 'large',letterSpacing: 0,fontWeight: 'bold',paddingLeft: 40,paddingTop: 10}}>RPF Constable (2018) official Paper (Held on 03 Feb 2019)</h1>

   <div style={{display: 'flex'}}>
   <DescriptionIcon className='description'/>
   <h2 style={{ fontSize:15,width:100,marginTop: -5,fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  paddingTop: 25, fontWeight:600}}>120 questions</h2>

   <NoteIcon className='description2'/>
   <h2 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontSize: 'medium',marginTop: -2,paddingLeft: 5,paddingTop: 22,letterSpacing: 1, fontWeight:600}}>6pages</h2>

   <h2 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
   fontSize: 'medium',marginTop: 0,paddingLeft: 22,paddingTop: 20, fontWeight:600}}>Ratings:</h2>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <StarBorderIcon className='star1'/>
   <button style={{width:200,marginLeft:250, backgroundColor:'whiteSmoke',border:'1px solid ',borderRadius:12,boxShadow: '0px 0px 5px black'}}  onClick={handleDownload}>
                <FontAwesomeIcon className="icon1" icon={faDownload} />
                Download PDF
                </button>
   </div>
   <div className='head2'>
   <GTranslateIcon style={{color: 'black', paddingTop: 10,paddingLeft: 28}}/>
   <h1 className='languages'>Available in : Telugu, English, Hindi, Tamil</h1>
   </div>
   
</div>
<div style={{display: 'flex', float: 'inline-end',marginTop:20}}>
<RemoveRedEyeIcon/>
<h2 className='viewmore'>View more</h2>

</div>
</article>

</section>




{/*--------------------------------------------2021------------------------------------------------------*/}

<section >
<article>
<h1 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  textDecoration: 'underline',paddingLeft: '20', marginTop:40, fontSize:20}}>2021</h1>       
<div style={{marginTop:40, backgroundColor: 'white',borderRadius: 10,margin: 10,boxShadow: '2px 4px 5px'}}>
<h1 style={{
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontSize: 'large',letterSpacing: 0,fontWeight: 'bold',paddingLeft: 40,paddingTop: 10}}>RPF Constable 2015 Memory Based Paper</h1>

   <div style={{display: 'flex'}}>
   <DescriptionIcon className='description'/>
   <h2 style={{ fontSize:15,width:100,marginTop: -5,fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  paddingTop: 25, fontWeight:600}}>120 questions</h2>

   <NoteIcon className='description2'/>
   <h2 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  fontSize: 'medium',marginTop: -2,paddingLeft: 5,paddingTop: 22,letterSpacing: 1, fontWeight:600}}>6pages</h2>

   <h2 style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
   fontSize: 'medium',marginTop: 0,paddingLeft: 22,paddingTop: 20, fontWeight:600}}>Ratings:</h2>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <GradeIcon className='star1'/>
   <StarBorderIcon className='star1'/>
   <button style={{width:200,marginLeft:250, backgroundColor:'white',border:'1px solid ',borderRadius:12,boxShadow: '0px 0px 5px black'}}  onClick={handleDownload}>
                <FontAwesomeIcon className="icon1" icon={faDownload} />
                Download PDF
                </button>
   </div>
   <div className='head2'>
   <GTranslateIcon style={{color: 'black', paddingTop: 10,paddingLeft: 28}}/>
   <h1 className='languages'>Available in : Telugu, English, Hindi, Tamil</h1>
   </div>
   
</div>
<div style={{display: 'flex', float: 'inline-end',marginTop:20}}>
<RemoveRedEyeIcon/>
<h2 className='viewmore'>View more</h2>

</div>
</article>
      
</section>
</div>
        )}
        </div>



{/*-----------------------------------------------Answer key----------------------------------------- */}
<div className="tab-content">
        {activeTab === 'tab9' && (

<div>
    <h1 style={{textAlign:'center',fontSize:25,marginTop:60,textDecoration: 'underline',fontWeight: 700,fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}id='1'>Answer key</h1>
        <div  style={{display: 'grid', justifyContent:'center', marginLeft:-190}}>

    <table className="table1" style={{marginTop:40}}>
        <tr className="tr1">
            <th className='tr'>S.No</th>
            <th className='tr1'>Name of exam</th>
            <th className='tr1'>Exam Release date</th>
            <th className='tr1'>Get Result</th>
        </tr>
        <tr>
            <td style={{paddingLeft:30}}>1</td>
            <td className='box1' style={{width: 300}}>SSC Constable GD 2024 Tentative <br />Answer Key</td>
            <td className='box1'  style={{paddingLeft:60}}>10-04-2024</td>
            <td className='clike'><a href="https://www.w3schools.com" style={{color:'red', paddingLeft:10}}>Click here</a></td>
        </tr>
        <tr>
            <td style={{paddingLeft:30}}>2</td>
            <td className='box1'>Assistant Foreman 2024 CBT Revised Final <br/>Answer Key</td>
            <td className='box1' style={{paddingLeft:60}}>24/05/2024</td>
            <td className='clike'><a href="https://www.w3schools.com" style={{color:'red', paddingLeft:10}}>Click here</a></td>
        </tr>
        <tr>
            <td style={{paddingLeft:30}}>3</td>
            <td className='box1'>Group 1 Services 2023 Screening Test Final Key</td>
            <td className='box1' style={{paddingLeft:60}}>13/04/2024</td>
            <td className='clike'><a href="https://www.w3schools.com" style={{color:'red', paddingLeft:10}}>Click here</a></td>
        </tr>
        <tr>
            <td style={{paddingLeft:30}}>4</td>
            <td className='box1' style={{width:300}}>Assistant Director,Block Agriculture Officer &
                <br/>Other 2024 Written Exam Revised Final Answer 
                <br/>Key
            </td>
            <td className='box1' style={{paddingLeft: 60}}>Coming Soon</td>
            <td className='clike'><a href="https://www.w3schools.com" style={{color:'red', paddingLeft:10}}>Click here</a></td>
        </tr>
    </table>
</div>

</div>

        )}
</div>


{/*-------------------------------------------------------Result section-----------------------------------------*/}
<div className="tab-content">
{activeTab === 'tab10' && (

  <div>
<h1 style={{textAlign:'center',textDecoration: 'underline',fontSize:25,marginTop:40,fontWeight: 700,fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} id='Results'>Results</h1>

<div  style={{display: 'grid', justifyContent:'center', marginLeft:-190,marginTop:40}}>
    <table className="table1">
        <tr className="tr1">
            <th className='tr'>S.No</th>
            <th className='tr1'>Name of exam</th>
            <th className='tr1'>Exam Release date</th>
            <th className='tr1'>Get Result</th>
        </tr>
        <tr>
            <td style={{paddingLeft:30}}>1</td>
            <td className='box1' style={{width:300}}>SSC Constable GD 2024 Tentative <br /> Answer Key</td>
            <td className='box1' style={{paddingLeft:60}}>10-04-2024</td>
            <td className='clike'><a href="https://www.w3schools.com" style={{color:'red', paddingLeft:20}}>Click here</a></td>
        </tr>
        <tr>
            <td style={{paddingLeft:30}}>2</td>
            <td className='box1' >Assistant Foreman 2024 CBT Revised Final <br />Answer Key</td>
            <td className='box1' style={{paddingLeft:60}}>24/05/2024</td>
            <td className='clike'><a href="https://www.w3schools.com"  style={{color:'red', paddingLeft:20}}>Click here</a></td>
        </tr>
        <tr>
            <td style={{paddingLeft:30}}>3</td>
            <td className='box1'>Group 1 Services 2023 Screening <br />Test Final Key</td>
            <td className='box1' style={{paddingLeft:60}}>Coming Soon</td>
            <td className='clike'><a href="https://www.w3schools.com"  style={{color:'red', paddingLeft:20}}>Click here</a></td>
        </tr>
        <tr>
            <td style={{paddingLeft:30}}>4</td>
            <td className='box1' >Assistant Director,Block Agriculture Officer &
                <br/>Other 2024 Written Exam Revised Final Answer key
                
            </td>
            <td className='box1' style={{paddingLeft:60}}>14/05/2024</td>
            <td className='clike'><a href="https://www.w3schools.com"  style={{color:'red', paddingLeft:20}}>Click here</a></td>
        </tr>
    </table>
</div>

</div>

)}

</div>



{/*------------------------------------------------Cut off section----------------------------------*/}
<div className="tab-content">
        {activeTab === 'tab11' && (

<div >
<h1  style={{textAlign:'center',textDecoration: 'underline',marginTop:25,fontSize:25,fontWeight: 700,fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} id='3'>Cut-Off</h1>
<div style={{display: 'grid', justifyContent:'center', marginLeft:-190, borderRadius:25,marginTop:40}}>
    <table className="table1">
        <tr className="tr1">
            <th className='tr'>S.No</th>
            <th className='tr1'>Name of exam</th>
            <th className='tr1'>Release date</th>
            <th className='tr1'>Cut-off</th>
            <th className='tr1'>PDF download</th>
        </tr>
        <tr>
            <td>1</td>
            <td className='box1' style={{width:300}}>SSB Head Constable (Ministerial) 2021 Cut Off Marks</td>
            <td className='box1'>30/03/2024</td>
            <td style={{borderLeft: '1px solid black'}}><a href="https://www.w3schools.com" style={{color: 'red',width:300}}>Click here</a></td>
            <td className='box1'>
            <button  onClick={handleDownload}       style={{width:180,paddingBottom:25,height:50,borderRadius:10,border: '1px solid',boxShadow: '2px 4px 5px black',paddingLeft: 6,backgroundColor: 'whiteSmoke',color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>
                <FontAwesomeIcon style={{fontSize:20,marginTop:12}}         className="icon1" icon={faDownload} />
                Download PDF
                </button>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td className='box1'>RRC, East Central Railway Act Apprentice 2023<br/>Cutoff Marks</td>
            <td className='box1'>24/01/2024</td>
            <td className='clike'><a href="https://www.w3schools.com" className="clickhere">Click here</a></td>
            <td className='box1'>
                <button  onClick={handleDownload}       style={{width:180,paddingBottom:25,height:50,borderRadius:10,border: '1px solid',boxShadow: '2px 4px 5px black',paddingLeft: 6,backgroundColor: 'whiteSmoke',color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>
                <FontAwesomeIcon style={{fontSize:20,marginTop:12}}         className="icon1" icon={faDownload} />
                Download PDF
                </button>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td className='box1'>APSET 2024 Cutoff Marks</td>
            <td className='box1'>26/05/2024</td>
            <td className='clike'><a href="https://www.w3schools.com" className="clickhere">Click here</a></td>
            <td className='box1'>
            <button  onClick={handleDownload}       style={{width:180,paddingBottom:25,height:50,borderRadius:10,border: '1px solid',boxShadow: '2px 4px 5px black',paddingLeft: 6,backgroundColor: 'whiteSmoke',color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>
                <FontAwesomeIcon style={{fontSize:20,marginTop:12}}         className="icon1" icon={faDownload} />
                Download PDF
                </button>
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td className='box1'>SSB, Head Constable 2023 CBT Cut Off  Marks
            </td>
            <td className='box1'>30/03/2024</td>
            <td className='clike'><a href="https://www.w3schools.com" className="clickhere">Click here</a></td>
            <td className='box1'>
            <button  onClick={handleDownload}       style={{width:180,paddingBottom:25,height:50,borderRadius:10,border: '1px solid',boxShadow: '2px 4px 5px black',paddingLeft: 6,backgroundColor: 'whiteSmoke',color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>
                <FontAwesomeIcon style={{fontSize:20,marginTop:12}}         className="icon1" icon={faDownload} />
                Download PDF
                </button>
            </td>
        </tr>
    </table>
    </div>
</div>

        )}
        </div>


    </div>
  );
};

export default Tab;
