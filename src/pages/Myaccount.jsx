import React, {useState} from 'react';
import '../css/back.css';
import Img2 from '../images/frame.png'
import Ic1 from '@mui/icons-material/AccountBalanceWallet';
import Ic3 from '@mui/icons-material/FavoriteBorder';
import Ic4 from '@mui/icons-material/FileCopy';
import Ic6 from '@mui/icons-material/Share';
import Ic7 from '@mui/icons-material/QuestionMark';
import Ic8 from '@mui/icons-material/Settings';
import Ic9 from '@mui/icons-material/Edit';
import Ic10 from '@mui/icons-material/Phone';
import Ic11 from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Ic12 from '@mui/icons-material/PersonRounded';
import Ic13 from '@mui/icons-material/AccountBalanceWallet';
import Ic14 from '@mui/icons-material/QrCodeScanner';
import Ic15 from '@mui/icons-material/TransferWithinAStation';
import Ic16 from '@mui/icons-material/Toll';
import Ic17 from '@mui/icons-material/ReplyAll';
import Ic18 from '@mui/icons-material/MobileFriendly';
import Ic19 from '@mui/icons-material/Payments';
import Ic20 from '@mui/icons-material/LocalActivity';
import Ic21 from '@mui/icons-material/EmojiEvents';
import Ic22 from '@mui/icons-material/HealthAndSafety';
import Ic23 from '@mui/icons-material/Subscriptions';
import Ic24 from '@mui/icons-material/Movie';
import Ic25 from '@mui/icons-material/Quiz';
import Ic26 from '@mui/icons-material/School';
import Ic27 from '@mui/icons-material/AccessibilityNew';
import Ic28 from '@mui/icons-material/ArrowForwardIos';
import Ic29 from '@mui/icons-material/Delete';
import Ic30 from '@mui/icons-material/Favorite';
import Img3 from '../images/refer1.jpeg';
import Img4 from '../images/refer2.jpeg';
import Ic35 from '@mui/icons-material/CopyAll';
import Ic36 from '@mui/icons-material/Share';
import Ic37 from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Header1 from './header1.jsx';
import Fotter from './fotter.jsx';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import Img5 from '../images/civil2.png';
import Img0 from '../images/lady.png';
import Img7 from '../images/Bank.png';
import Img8 from '../images/railways.png';
import Img9 from '../images/stategovt.png';
import Img6 from '../images/ssc2.png';
import Img10 from '../images/teaching.png';
import Img11 from '../images/engineering.png';
import Img13 from '../images/police.png';
import Img14 from '../images/insurance.png';
import Img15 from '../images/nursing.jpeg';
import Img16 from '../images/govtexams.jpg';
import Img17 from '../images/nra.png';
import Img18 from '../images/mba.jpeg';
import Img19 from '../images/cut.png';
import Img20 from '../images/accounting.jpeg';
import Img21 from '../images/judge.jpg';
import team31 from '../images/ic5.png';
import team32 from '../images/ic (2).png';
import team33 from '../images/ic (3).png';
import team34 from '../images/ic (4).png';

    


const App = () => {
  const [activeTab, setActiveTab] = useState('wallet');

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const navigate = useNavigate();

  

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform your logout logic here, e.g., clearing authentication tokens
        Swal.fire({
          title: 'Logged Out!',
          text: 'You have been logged out successfully.',
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




  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  

  const handleClick = (e) => {
    e.preventDefault();
    // Handle delete account logic here
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete your account?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      background: '#006699',
      color: 'white',
      width: '500px',
      iconColor: '#00ff00'
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete account logic here
        Swal.fire({
          title: 'Deleted!',
          text: 'Your account has been deleted.',
          icon: 'success',
          background: '#006699',
          color: 'white',
          width: '500px',
          iconColor: '#00ff00'
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');
    setError('');

    // Validation logic
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }



    // Successful submission logic
    Swal.fire({
      title: 'Success!',
      text: 'Your password has been changed and mobile number updated.',
      icon: 'success',
      confirmButtonText: 'OK',
      background: '#006699',
      color: 'white',
      width: '500px',
      iconColor: '#00ff00',
    });

    // Reset form if needed
    setNewPassword('');
    setConfirmPassword('');
  };




  
  return (
    <div>

      <Header1/>
    <div            style={{display:'flex',marginLeft:100,marginTop:90}}>
        {/*button1*/}
        <div>
        <button className='bt1'>My Account</button>
        </div>
        <br></br>
        <br></br>


        {/*border */}
      <div className="Ktab">
      <div>
      <div>
        <img style={{width:150,height:150,borderRadius:'50%',marginTop:20,marginLeft:92,postion:'fix'}} src={Img0} alt='Img1'/>
      </div>
        {imageSrc && (
        <div>
          <img 
            src={imageSrc} 
            alt="Selected" 
            style={{ 
              maxWidth: '100%',  
              borderRadius: '50%', 
              width: '180px', // Optional: set a fixed width to ensure a circular shape
              height: '180px',
              marginLeft:90,
              marginTop:-210, // Optional: set a fixed height to ensure a circular shape
            }} 
          />
        </div>
      )}
      <input style={{marginLeft:120}}type="file" accept="image/*" onChange={handleImageUpload} /> 
    </div>
        {/*name and id*/}
        <p style={{paddingLeft:80,paddingTop:10,color:'white'}}>NAME :<span style={{paddingLeft:10}}>Roopa</span></p>
        <p style={{paddingLeft:80,color:'white'}}>SPIN ID :<span style={{paddingLeft:10}}>AP125XXXXX</span></p>
        {/*line*/}
        <hr className='line'></hr>
        {/*icon1 wallet*/}
        <div className='icon'>
            <div>
                <Ic1 style={{fontSize:30}}/>
            </div>
        {/*wallet text*/}
        <div className='text'>
            <p
          className={`tablinks ${activeTab === 'wallet' ? 'active' : ''}`}
          onClick={() => openCity('wallet')}
        >
          Wallet
        </p>
        </div>   
        </div>


        {/* button 2*/}
        <div className='icon2'>
            <div>
                <Ic12 style={{fontSize:30}}/>
            </div>
            <div className='text'>
                {/*otr form text button */}
            <p
            className={`tablinks ${activeTab === 'OTR' ? 'active' : ''}`}
            onClick={() => openCity('OTR')}
            >
            OTR Form
            </p>
        </div>
        </div>


        {/*button 3*/}
        <div className='icon2'>
            <div>
                <Ic3 style={{fontSize:30}}/>
            </div>
            <div className='text'>
                {/*saved jobs button*/}
            <p
                className={`tablinks ${activeTab === 'saved' ? 'active' : ''}`}
                onClick={() => openCity('saved')}
            >
                Saved Jobs
            </p>
        </div>
        </div>


        {/*button 4*/}
        <div className='icon2'>
            <div>
                <Ic4 style={{fontSize:30}}/>
            </div>
            <div className='text'>
                {/*PQP button*/}
            <p
                className={`tablinks ${activeTab === 'PQP' ? 'active' : ''}`}
                onClick={() => openCity('PQP')}
            >
                PQP
            </p>
        </div>
        </div>




        {/*button6*/}
        <div className='icon2'>
            <div>
                <Ic6 style={{fontSize:30}}/>
            </div>
            <div className='text'>
                {/*refer earn button*/}
            <p
                className={`tablinks ${activeTab === 'refer' ? 'active' : ''}`}
                onClick={() => openCity('refer')}
            >
                Refer & Earn
            </p>
        </div>
        </div>


        {/*button7*/}
        <div className='icon2'>
            <div>
                <Ic7 style={{fontSize:30}}/>
            </div>
            <div className='text'>
                {/*help button*/}
            <p
                className={`tablinks ${activeTab === 'help' ? 'active' : ''}`}
                onClick={() => openCity('help')}
            >
                Help & Support
            </p>
        </div>
        </div>


        {/*button8*/}
        <div className='icon2'>
            <div>
                <Ic8 style={{fontSize:30}}/>
            </div>
            <div className='text'>
                {/* setting button*/}
            <p
                className={`tablinks ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => openCity('settings')}
            >
                Settings
            </p>
        </div>
        </div>
        

        {/*button9*/}
        <div>
      <button
        onClick={handleLogout}
        style={{
          background: 'linear-gradient(to left, #00ffcc 0%, #00ffff 100%)',
          boxShadow: '0px 0px 10px black',
          width: '180px',
          height: '40px',
          border: 'none',
          fontSize: '20px',
          marginLeft: '30px',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer',
        }}
        className="link-button"
      >
        <LoginIcon /> Login Out
      </button>
    </div>






      </div>



{/*responces section*/}

        {/*wallet responces*/}
        <div className={`wallet ${activeTab === 'wallet' ? 'active' : ''}`} id="London">
        <img style={{width:610,height:310}}src={Img2} alt='Img2' />
        <h3 style={{paddingLeft:100,marginTop:-280,fontSize:20}}>Wallet Balance:</h3>
        <h3 style={{paddingLeft:100,fontSize:20}}>RS 500/-</h3>
        <div style={{marginLeft:400,marginTop:-50}}>
            <button style={{width:150,height:40,border:'none',borderRadius:20,backgroundColor:'#8de3f2',fontSize:18}}><b>WithDraw</b></button>
        </div>
        {/*add money pay transfer button*/}
        <div style={{display:'flex',marginLeft:140,marginTop:180}}>
            {/*add money button*/}
            <div className='walleticcolor' style={{width:90,height:80,paddingLeft:35,paddingTop:10}}>
                <Ic13  style={{fontSize:40,marginLeft:-13}}/>
                <p style={{marginLeft:-30,marginTop:1,width:100}} >Add money</p>
            </div>
            {/* pay button*/}
            <div className='walleticcolor' style={{width:90,height:80,marginLeft:30,paddingLeft:30,paddingTop:15}}>
                <Ic14 style={{fontSize:40,marginLeft:-5}}/>
                <p style={{marginTop:-3}}>pay</p>
            </div>
            {/*Transfer button*/}
            <div className='walleticcolor' style={{width:90,height:80,marginLeft:30,paddingLeft:30,paddingTop:15}}>
                <Ic15 style={{fontSize:40,marginLeft:-5}}/>
                <p style={{marginTop:1,marginLeft:-10}}>Transfer</p>
            </div>
        </div>

        {/*Services border*/}
        <div  style={{border:'1px solid #004080',width:600,height:300,marginLeft:10,marginTop:50,color:'#004080',boxShadow: '0px 0px 5px black'}}>
            <h2 style={{paddingLeft:20, color:'#004080',fontSize:28,fontWeight:'bold',paddingTop:10}}>Services</h2>
            {/*1st services row*/}
            <div style={{display:'flex',paddingTop:30}}>
                {/*send money*/}
                <div>
                    <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic16  style={{color:'#004080'}}/></button>
                    <p style={{fontSize:11,paddingLeft:30,color:'#004080',paddingTop:10}}>Send money</p>
                </div>
                <div>
               {/*request money*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic17 style={{color:'#004080'}}/></button>
               <p style={{fontSize:11,paddingLeft:45,width:100,color:'#004080',paddingTop:10}}>Request Money</p>
               </div>
               <div>
               {/*Mobile reacharge button*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic18 style={{color:'#004080'}}/></button>
               <p style={{fontSize:11,paddingLeft:40,width:100,color:'#004080',paddingTop:10}}>Mobile Recharge</p>
               </div>
               <div>
                {/*Pay Bills*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic19 style={{color:'#004080'}}      /></button>
               <p style={{fontSize:11,paddingLeft:35,color:'#004080',paddingTop:10}}>Pay Bills</p>
               </div>
               <div>
                {/*Ticket Booking*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic20 style={{color:'#004080'}}  /></button>
               <p style={{fontSize:11,paddingLeft:20,color:'#004080',paddingTop:10}}>Ticket Booking</p>
               </div>
               {/*Reward &cashback*/}
               <div>
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic21 style={{color:'#004080'}}  /></button>
               <p style={{fontSize:11,paddingLeft:40,width:50,color:'#004080',paddingTop:10}}>Rewards&<br/>Cashbacks</p>
               </div>
            </div>

            {/*2nd row of services */}
            <div style={{display:'flex'}}>
                {/*Insurance button*/}
                <div>
                    <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic22 style={{color:'#004080'}}/></button>
                    <p style={{fontSize:11,paddingLeft:30, color:'#004080',paddingTop:10}}>Insurance</p>
                </div>
                <div>
               {/*Subscription*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic23 style={{color:'#004080'}}/></button>
               <p style={{fontSize:11,paddingLeft:30, color:'#004080',paddingTop:10}}>Subscription </p>
               </div>
               <div>
               {/*Watch and earn*/}
               <button style={{marginLeft:35,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic24 style={{color:'#004080'}}  /></button>
               <p style={{fontSize:11,paddingLeft:45,width:100, color:'#004080',paddingTop:10}}>Watch&earn</p>
               </div>
               <div>
                {/*Quizzes*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic25 style={{color:'#004080'}}   /></button>
               <p style={{fontSize:11,paddingLeft:40, color:'#004080',paddingTop:10}}>Quizzes</p>
               </div>
               <div>
                {/*Cources*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic26 style={{color:'#004080'}}   /></button>
               <p style={{fontSize:11,paddingLeft:40, color:'#004080',paddingTop:10}}>Cources</p>
               </div>
               {/*Reward &cashback*/}
               <div>
               <button style={{marginLeft:40,width:60,height:50,borderRadius:10,border:'none',boxShadow: '0px 0px 5px black',background:'white'}}><Ic27 style={{color:'#004080'}}     /></button>
               <p style={{fontSize:11,paddingLeft:50, color:'#004080',paddingTop:10}}>Rewards </p>
               </div>
            </div>
        </div>   
      </div>
   

{/*otr form responces*/}
     
      <div className={`otr ${activeTab === 'OTR' ? 'active' : ''}`} id="OTR">
       
<div className='otr1' style={{height:300,width:550, border:'1px soild red', marginTop:50,marginLeft:150}}>
<h1 style={{color:'#004080',fontSize:20,fontWeight:'bold',marginTop:20}}>OTR FROM</h1>
<input  style={{width:550,height:200,border:'1px soild red'}}           type='text'/>
<button className='bt2' style={{color:'white',marginTop:0,fontSize:20,fontWeight:'bold'}}> <Ic9 style={{color:'white'}}/>          Edit</button>
</div>


      </div>
     

{/*saved jobs responces*/}
      <div className={`saved ${activeTab === 'saved' ? 'active' : ''}`} id="saved">
        <div  style={{marginTop:-70,fontSize:30,marginLeft:10}}>
            {/*icon with saved jobs name*/}
            <Ic28 style={{color:'#004080'}}/>
            <p style={{marginLeft:30,marginTop:-35,color:'#004080',fontSize:20,fontWeight:'bold'}}> Saved Jobs</p>
            {/*border1 for the job every thing*/}
            <div style={{border:'1px solid black',width:750,height:530,borderRadius:20,boxShadow: '0px 0px 5px black'}}>
                <p style={{textAlign:'center',textDecoration:'underline',fontWeight:1000}}>Osmania University</p>
                {/*heart icon */}
                <div style={{marginLeft:700,color:'#eb2a6a',marginTop:-60}}>
                    <Ic30/>
                </div>
                {/*telangana state content */}
                <div style={{width:650,fontSize:20,height:50,marginLeft:45,backgroundColor:'#c8cfcc',marginTop:10}}>
                    <p style={{paddingLeft:130,fontWeight:1000,paddingTop:10}}>Telangana State Eligibility Test 2024</p>
                </div>
                {/*qualifications*/}
                <p style={{fontWeight:1000,fontSize:20,paddingLeft:30,paddingTop:10}}>Job Description:</p>
                <br></br>
                {/*qualifiactions*/}
                <p style={{fontSize:20,marginTop:-55,paddingLeft:30}}>Government of telangana has given an employment notification for telangana state eligibility test (ts set 2024)</p>
                <p style={{fontWeight:1000,fontSize:20,paddingLeft:30,marginTop:-5}}>Qualification:</p>
                <br></br>
                {/*date of posted and last date*/}
                <p style={{fontSize:20,marginTop:-55,paddingLeft:30}}>Government of telangana has given an employment notification for telangana state eligibility test (ts set 2024)</p>
                <b style={{fontSize:20,paddingLeft:30}}>Post Dated:</b>
                <p style={{fontSize:20,marginLeft:150,marginTop:-33}}>08-08-2024</p>
                <b style={{fontSize:20,paddingLeft:30}}>Posted 12 days ago</b>
                <b style={{fontSize:20,marginLeft:280}}>Last Date:</b>
                <p style={{fontSize:20,paddingLeft:620,marginTop:-33}}>30-08-2-2024</p>
                <br></br>
                <br></br>
                {/*delete button */}
                <div style={{marginTop:-85,marginLeft:80}}>
                    <button className='delete1' style={{fontSize:20, fontWeight:'bold'}}>Delete</button>
                    <div style={{marginTop:-35,marginLeft:20,color:'white'}}>
                        <Ic29 style={{marginTop:-20,marginLeft:-10}}/>
                    </div>
                </div>
                {/*Apply button*/}
                <div style={{marginLeft:540,marginTop:-65}}>
                <Link to="/home1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:20,
        marginTop: 10,
        borderRadius: 10,
        border: 'none',
     background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
    Apply Now
      </button>
    </Link>
                </div>
            </div>
            {/* second section*/}
        </div>
      </div>



{/*pqp responces*/}
      <div className={`pqp ${activeTab === 'PQP' ? 'active' : ''}`} id="PQP">
            {/*icon with saved jobs name*/}
            <Ic28 style={{color:'#004080',fontSize:20}}/>
        <b style={{paddingLeft:10, color:'#004080',fontSize:20,fontWeight:'bold',paddingTop:25}}>PQP</b>
        <br></br>
    {/*search button*/}
    <div>
        <input  className='fold3'           style={{marginLeft:30,marginTop:40,height:40,width:220,borderRadius:10}} type='text' placeholder='Search Exam'/>
          <SearchIcon  style={{fontSize:30, marginTop:0, marginLeft:-40}}/>
      

      {/*rpf*/}
      <div style={{marginTop:-61,width:50}}>
        <button className='rpf '>RPF Constable</button>
      </div>

      {/*add more button*/}
      <div style={{marginTop:-38,width:50}}>
        <button className='add'>+ Add more</button>
      </div>
      </div>
      <p style={{marginLeft:30,width:50,fontWeight:1000,paddingTop:20}}>Popular Exams</p>
        <br></br>

        {/*main boxes*/}
        <div style={{display:'flex'}}>
          {/*Ssc*/}
          <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 10px black'}}>
            <div style={{paddingTop:35,paddingLeft:20}}>
              <img style={{width:60,height:40}} src={Img5} alt='Img5'/>
            </div>
            <div style={{paddingTop:35,paddingLeft:20}} >
              <p style={{color:'black',textDecoration:'none'}}>SSC</p>
            </div>
          </div>
          </Link>






         




          

        {/*civil services*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:35,paddingLeft:10}}>
              <img style={{width:60,height:40}} src={Img5} alt='Img5'/>
            </div>
            <div style={{paddingTop:30,paddingLeft:20}} >
              <p style={{color:'black'}}>Civil Services Exam</p>
            </div>
          </div>
          </Link>

        {/*defence Exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
           <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,paddingLeft:-10}}>
              <img style={{width:100,height:70}} src={Img6} alt='Img6'/>
            </div>
            <div style={{paddingTop:25}} >
              <p style={{color:'black'}}   >Defense Exam</p>
            </div>
          </div>
          </Link> 
        </div>

        <br></br>
        <br></br>
      {/*Banking exam*/}
        <div style={{display:'flex'}}>
          {/*Ssc*/}
          <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,paddingLeft:20}}>
              <img style={{width:70,height:70}} src={Img7} alt='Img7'/>
            </div>
            <div style={{paddingTop:30,paddingLeft:20}} >
              <p style={{color:'black'}}  >Banking Exams</p>
              
            </div>
          </div>
          </Link>

        {/*Railways exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,paddingLeft:20}}>
              <img style={{width:70,height:70}} src={Img8} alt='Img8'/>
            </div>
            <div style={{paddingTop:30,paddingLeft:20}} >
              <p style={{color:'black'}}>Railway Exam</p>
            </div>
          </div>
          </Link>

        {/*defence Exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
           <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,paddingLeft:20}}>
              <img style={{width:70,height:70}} src={Img9} alt='Im9'/>
            </div>
            <div style={{paddingTop:30,paddingLeft:15}} >
              <p style={{color:'black'}}>State Govt.Exam</p>
            </div>
          </div>
          </Link>
          </div>
        
  {/*3rd row*/}
      <br></br>
      <br></br>
          <div style={{display:'flex'}}>
          {/*Ssc*/}
          <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,paddingLeft:20}}>
              <img style={{width:70,height:70}} src={Img10} alt='Img10'/>
            </div>
            <div style={{paddingTop:35,paddingLeft:20}} >
              <p style={{color:'black'}}>Teaching Exams</p>
              
            </div>
          </div>
          </Link>

        {/*Railways exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:35,paddingLeft:20}}>
              <img style={{width:70,height:40}} src={Img11} alt='Img11'/>
            </div>
            <div style={{paddingTop:30,paddingLeft:10}} >
              <p style={{color:'black'}}>Engineering Exam</p>
            </div>
          </div>
          </Link>

        {/*defence Exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
           <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,paddingLeft:20}}>
              <img style={{width:70,height:70}} src={Img13} alt='Img13'/>
            </div>
            <div style={{paddingTop:30,paddingLeft:15}} >
              <p style={{color:'black'}}>Police Exam</p>
            </div>
          </div>
          </Link>
          </div>

      {/*row4*/}
      <br></br>
      <br></br>
          <div style={{display:'flex'}}>
          {/*Ssc*/}
          <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,paddingLeft:20}}>
              <img style={{width:70,height:70}} src={Img14} alt='Img14'/>
            </div>
            <div style={{paddingTop:20,paddingLeft:20}} >
              <p style={{color:'black'}}>Insurance Exam</p>
              
            </div>
          </div>
          </Link>

        {/*Railways exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:25,paddingLeft:20}}>
              <img style={{width:60,height:50}} src={Img15} alt='Img15'/>
            </div>
            <div style={{paddingTop:25,paddingLeft:20}} >
              <p style={{color:'black'}}>Nursing Exam</p>
            </div>
          </div>
          </Link>

        {/*defence Exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
           <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:25,paddingLeft:20}}>
              <img style={{width:70,height:50}} src={Img16} alt='Img16'/>
            </div>
            <div style={{paddingTop:25,paddingLeft:15}} >
              <p style={{color:'black'}}>Other Govt.Exam</p>
            </div>
          </div>
          </Link>
          </div>

          <br></br>
          <br></br>
        {/*6th row*/}
        <div style={{display:'flex'}}>
        
          {/*Ssc*/}
          <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,paddingLeft:10}}>
              <img style={{width:100,height:70}} src={Img17} alt='Img17'/>
            </div>
            <div style={{paddingTop:20}} >
              <p style={{color:'black'}}>NRA SET Exam</p>
              
            </div>
          </div>
          </Link>

        {/*Railways exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:25,paddingLeft:20}}>
              <img style={{width:80,height:50}} src={Img18} alt='Img18'/>
            </div>
            <div style={{paddingTop:20,paddingLeft:20}} >
              <p style={{color:'black'}}>MBA Entrance</p>
            </div>
          </div>
          </Link>

          {/*defence Exam*/}
          <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:15,marginLeft:-20}}>
              <img style={{width:130,height:60}} src={Img19} alt='Img19'/>
            </div>
            <div style={{paddingTop:20,marginLeft:-15}} >
              <p style={{color:'black'}}>CUT & UG Entrance</p>
            </div>
          </div>
          </Link>
          </div>
          <br></br>
          <br></br>
        {/*6th row*/}
        <div style={{display:'flex'}}>
        
          {/*Ssc*/}
          <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:20,paddingLeft:20}}>
              <img style={{width:70,height:60}} src={Img20} alt='Img20'/>
            </div>
            <div style={{paddingTop:20,paddingLeft:5}} >
              <p style={{color:'black'}}>Accounting and Commerce</p>
              
            </div>
          </div>
          </Link>

        {/*Railways exam*/}
        <Link to="/pqp" style={{textDecoration:'none'}}>
          <div style={{backgroundColor:'#bcc0c2', display:'flex',width:200,height:100,marginLeft:30,boxShadow: '0px 0px 5px black'}}>
            <div style={{paddingTop:25,paddingLeft:20}}>
              <img style={{width:90,height:50}} src={Img21} alt='Img21'/>
            </div>
            <div style={{paddingTop:20,paddingLeft:10}} >
              <p style={{color:'black'}}>Judiciary Exam</p>
            </div>
          </div> 
          </Link>
          </div>
      </div>


{/*login responces*/}
      <div className={`login ${activeTab === 'login' ? 'active' : ''}`} id="login">




      <Ic28 style={{color:'#004080',fontSize:20,marginTop:30}}/>
      <p style={{color:'#004080',fontSize:20,fontWeight:'bold',marginTop:-25,paddingLeft:40}}>Login Details</p>
        {/*login details*/}
        <h1 style={{paddingLeft:130,paddingTop:50}}>Login Details</h1>
        <p style={{paddingLeft:130}}>Mange your Login Details</p>
        {/*login input like name,userid,passowrd,intrest*/}
        <div>
        <div className='logo1'       style={{ marginLeft: 80, marginTop:50,boxShadow: '0px 0px 5px black',paddingTop:30}}>
        <input className='fold4'          style={{width:300,height:50,marginLeft:75,marginTop:20,borderRadius:15,border:'1px solid black'}} type='text' placeholder='NAME' />
        <input className='fold4'          style={{width:300,height:50,marginLeft:75,marginTop:20,borderRadius:15,border:'1px solid black'}} type='text' placeholder='EMAIL' />
        <input className='fold4'          style={{width:300,height:50,marginLeft:75,marginTop:20,borderRadius:15,border:'1px solid black'}} type='text' placeholder='MOBILE NUMBER' />
        <input className='fold4'          style={{width:300,height:50,marginLeft:75,marginTop:20,borderRadius:15,border:'1px solid black'}} type='text' placeholder='QUALIFICATION' />
        <input className='fold4'          style={{width:300,height:50,marginLeft:75,marginTop:20,borderRadius:15,border:'1px solid black'}} type='text' placeholder='INTERSETS' />
    </div>
        </div>
      </div>



{/*refer earn responces */}
      <div >
        <div className={`refer ${activeTab === 'refer' ? 'active' : ''}`} id="refer">

        <Ic28 style={{color:'#004080',fontSize:20,marginTop:30}}/>
        <p style={{color:'#004080',fontSize:20,fontWeight:'bold',marginTop:-25,paddingLeft:40}}>Refer & Earn</p>
        <div style={{marginLeft:150}}>
        <div className='refericons'>
          <div style={{marginLeft:20,paddingTop:30}}>
            <Ic37 style={{fontSize:30}}/>
          </div>
            <p style={{textAlign:'center',paddingTop:10,fontWeight:1000,fontSize:20}}>Refer and Earn </p>
        </div>
        <div style={{display:'flex',marginTop:-170,marginLeft:190}}>
          <div >
            <img style={{width:100,height:100,borderRadius:50,marginTop:-30}} src={Img3} alt='Img3'/>
          </div>
          <br></br>
          <div >
          <img style={{width:100,height:100,borderRadius:50,marginLeft:80,marginTop:-30}} src={Img4} alt='Img4'/>
          </div>
        </div>
        <h3 style={{paddingLeft:150,fontSize:20,paddingTop:10}}>Send a Referral Link to Your Friend</h3>
        
        {/*first row of the refer and earn and its icons*/}
        <div style={{boxShadow: '0px 0px 5px black'}}>
        <div className='refericons1'>

          {/*icon 1*/}
            <div style={{width:250,height:35,marginLeft:200,backgroundColor:'white',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                <p style={{paddingLeft:45,paddingTop:5}}>Your Friend Sign up</p>
            </div>
            <div style={{marginTop:-20,marginLeft:10}} >
              <img style={{width:90,height:90,borderRadius:50}}src={Img3} alt='Img3'/>
            </div>
            {/*u get 2*/}
            <h4 style={{width:200,marginTop:-20,marginLeft:100,fontSize:20}}>You get Rs 2</h4>

            {/*icon2*/}
            <div style={{marginLeft:503,marginTop:-100}}>
              <img style={{width:90,height:90,borderRadius:50}}src={Img4} alt='Img4'/>
            </div>
            {/*you get 5*/}
            <h4 style={{width:200,marginTop:-20,marginLeft:390,fontSize:20}}>You get Rs 5</h4>
        </div>
        <br></br>
        <br></br>

        {/*secound row of the refer and earn*/}
        <div className='refericons1' style={{marginTop:-50}}>
            <div style={{width:250,height:55,marginLeft:200,backgroundColor:'white',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                <p style={{paddingLeft:45,paddingTop:5,width:200}}>When Your friend completes first apply</p>
            </div>
            {/*icon of secound row*/}
            <div style={{marginTop:-20,marginLeft:10}}>
            <img style={{width:90,height:90,borderRadius:50}}src={Img3} alt='Img3'/> 
            </div>
            <p style={{width:400,paddingLeft:120,fontWeight:1000,marginTop:-60}}>You get Addtional amount of Rs20</p>
        </div>
        </div>
        </div>
        {/* button to open in whatapp*/}
        <button className='whatapp1'>SE WHOS's ON APP</button>
        <br></br>
        <p style={{paddingLeft:380,fontWeight:1000}}>REFER VIA</p>
        {/*refered apps*/}
        <div style={{width:540,height:75,marginLeft:180,backgroundColor:'#009999',borderRadius:10,boxShadow: '0px 0px 5px black'}}>
         <img style={{width:50,height:50,marginLeft:30}}    src={team31} alt=""/>
            <p style={{fontWeight:1000,marginTop:0,marginLeft:20,color:'white'}}>Whatsapp</p>
            {/*twiter*/}
            <div style={{marginTop:-88,marginLeft:180,}}>
            <img style={{width:50,height:50}}    src={team33} alt=""/>
              <p style={{fontWeight:1000,marginLeft:-10,marginTop:0,color:'white'}}>Twitter</p>
            </div>
            {/*instagram*/}
            <div style={{marginTop:-90,marginLeft:320,}}>
            <img style={{width:50,height:50}}    src={team32} alt=""/>
              <p style={{fontWeight:1000,marginLeft:-10,marginTop:0,color:'white'}}>Instagram</p>
            </div>
            {/*facebook*/}
            <div style={{marginTop:-90,marginLeft:450,}}>
            <img style={{width:70,height:50}}    src={team34} alt=""/>
              <p style={{fontWeight:1000,marginLeft:-10,marginTop:0,color:'white'}}>LinkDen</p>
            </div>
        </div>
        {/*referals and earn*/}
        <div style={{border:'1px solid black',width:540,height:100,marginTop:30,boxShadow: '0px 0px 5px black',marginLeft:180}}>
          <p style={{fontSize:20, fontWeight:'bold', paddingLeft:30,paddingTop:15}}>REFERRAL CODE</p>
          <p style={{fontSize:15, fontWeight:'bold',paddingLeft:30}}>Surya3845</p>
          {/*copy*/}
          <div style={{display:'flex',marginTop:-60,marginLeft:430}}>
            <div style={{marginTop:-20}}>
              <Ic35/>
              <p>Copy</p>
            </div>
            <div style={{marginLeft:20,marginTop:-20}}>
              <Ic36/>
              <p>Share</p>
            </div>
          </div>
        </div>
        </div>
      </div>



      {/*help and support responces*/}
      <div className={`help ${activeTab === 'help' ? 'active' : ''}`} id="help">
        {/*help and support margin*/}
        <div className='support'>
            <h1 style={{paddingLeft:140}}>Help and Support</h1>
        </div>
        <p style={{paddingLeft:180,fontSize:20,paddingTop:40}}>Contact Options</p>
        <div style={{marginLeft:80,marginTop:130,border:'1px solid black',width:150,height:150,borderRadius:10}}>
            <br></br>
            <br></br>
            <div style={{paddingLeft:60,color:'green'}}>
                <Ic10/>
            </div>
            <p style={{paddingLeft:30}}>Call Available 24/7</p>
        </div>
        <div style={{marginLeft:300,marginTop:-150,border:'1px solid black',width:150,height:150,borderRadius:10}}>
            <div style={{paddingLeft:60,paddingTop:50}}>
                <Ic11/>
            </div>
            <p style={{paddingLeft:50}}>Chat</p>
        </div>
      </div>

      {/*Settings*/}

      <div className={`settings ${activeTab === 'settings' ? 'active' : ''}`} id="help">
      <Ic28 style={{color:'#004080',fontSize:20,marginTop:30}}/>
      <p style={{color:'#004080',fontSize:20,fontWeight:'bold',marginTop:-25,paddingLeft:40}}>Settings</p>
      <div className='setting1' style={{ boxShadow: '0px 0px 5px black' }}>
      <form onSubmit={handleSubmit}>
        <p style={{ paddingLeft: 50, paddingTop: 50, fontSize: 20 }}>
          Change Password
          <span>
            <input
              className='fold6'
              style={{
                width: 250,
                height: 40,
                marginLeft: 20,
                borderRadius: 5,
                border: '1px solid black'
              }}
              type='password'
              placeholder='Enter Old Password'
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </span>
        </p>
        <input
          className='fold6'
          style={{
            width: 250,
            height: 40,
            marginLeft: 235,
            borderRadius: 5,
            border: '1px solid black'
          }}
          type='password'
          placeholder='Enter New Password'
          value={confirmPassword}
          onChange={handleNewPasswordChange}
        />
        {passwordError && (
          <p style={{ color: 'red', marginLeft: 235 }}>{passwordError}</p>
        )}




<input
          className='fold6'
          style={{
            width: 250,
            height: 40,
            marginLeft: 235,
            borderRadius: 5,
            border: '1px solid black'
          }}
          type='password'
          placeholder='Confirm New Password'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {passwordError && (
          <p style={{ color: 'red', marginLeft: 235 }}>{passwordError}</p>
        )}



<button
          className='sbtn'
          style={{
            float: 'right',
            marginTop: 40,
            marginLeft:185,
            width: 150,
            background:'#ff0066',
            boxShadow: '0px 0px 5px black',
            height: 50,
            color:'white',
            fontSize:'20px'
          }}
          type='submit'
        >
          Submit
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p style={{ paddingLeft: 70, paddingTop: 30, fontSize: 20 }}>
          Delete Account
          <span>
            <button
              onClick={handleClick}
              className='delete'
              style={{
                marginLeft: 60,
                height: 45,
                width: 180,
                fontSize: 20
              }}
            >
              Delete
            </button>
          </span>
        </p>
      </form>
    </div>
      </div>

      {/*Change Password*/}
      <div className={`Ktabcontent ${activeTab === 'change' ? 'active' : ''}`} id="help">
        <h3 >Change password</h3>
      </div>
    </div>
    <Fotter/>
    </div>
  );
};

export default App;
