import React, { useState, useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { AppBar, Toolbar, Typography } from '@mui/material';


import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';



import team from '../images/mblogo1.png';
import team4 from '../images/india.png';

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';








import team1 from '../images/carsol7.jpg'; 
import team2 from '../images/caesor1.jpg';
import team3 from '../images/carsor.jpg';
import team5 from '../images/carsor2.jpg';
import team6 from '../images/mbabout.jpg';
import team7 from '../images/Rectangle230.png';
import team8 from '../images/Rectangle231.png';
import team9 from '../images/Rectangle232.png';
import team10 from '../images/Rectangle233.png';
import team12 from '../images/ca.jpg';
import team30 from '../images/mbfooter.png';
import team31 from '../images/ic (1).png';
import team32 from '../images/ic (2).png';
import team33 from '../images/ic (3).png';
import team34 from '../images/ic (4).png';




import Faq1 from '../FaqSection/faq1.jsx';

import Faq2 from '../FaqSection/faq2.jsx';
import Faq3 from '../FaqSection/faq3.jsx';
import Faq4 from '../FaqSection/faq4.jsx';
import Faq5 from '../FaqSection/faq5.jsx';
import Faq6 from '../FaqSection/faq6.jsx';







import team13 from '../images/left11.png'; 
import team14 from '../images/right1.png';
import team15 from '../images/SSC.png'; 
import team16 from '../images/NCS.png';
import team17 from '../images/SBI.png';
import team18 from '../images/image26.png';
import team19 from '../images/image27.png';
import team20 from '../images/image28.png';
import team21 from '../images/image29.png';
import team22 from '../images/image30.png';
import team23 from '../images/image31.png';
import team24 from '../images/image32.png';
import team28 from '../images/bank.jpg';
import team40 from '../images/mbcon3.jpg';


















function Home() {



  const faqSectionRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#faq' && faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  

  

  

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  









  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('SSC');

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className='home' style={{ background: '#e6f9ff' }}>
      <div className='meo'>
        <AppBar position="fixed">
          <Toolbar style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', color: '#34495E', height: 80 }}>
            <Typography variant="h6" noWrap component="div" className="image-container" style={{ paddingLeft: -260 }}>
              <img style={{ height: 150 }} src={team} alt="Team" />
            </Typography>
            <div className="nav" style={{ display: 'flex', color: 'white' }}>
              <Link to="/" className="what2">About Us</Link>
              <Link to="/#faq" className="nav1">FAQ</Link>
              <Link to="/contact" className="nav1">Contact Us</Link>
            </div>
            <Link to="/login" className="what2">
              <button
                style={{
                  background: 'linear-gradient(to left, #99ffcc 0%, #00ccff 100%)',
                  boxShadow: '0px 0px 10px black',
                  width: '130px'
                }}
                className="link-button"
                onClick={() => { /* Handle button click */ }}
              >
                Login
              </button>
            </Link>
            <img style={{ width: 60, height: 60, marginLeft: 50 }} src={team4} alt="" />

            <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn"><ArrowDropDownCircleIcon style={{fontSize:30,marginLeft:20}}/></button>
      {isOpen && (
        <div id="myDropdown" className="dropdown-content">
          <button onClick={(e) => e.preventDefault()}>Andhra Pradesh</button>
          <button onClick={(e) => e.preventDefault()}>Telangna</button>
          <button onClick={(e) => e.preventDefault()}>Delhi</button>
          <button onClick={(e) => e.preventDefault()}>Tamil nadu</button>
          <button onClick={(e) => e.preventDefault()}>Maharashtra</button>
        </div>
      )}
    </div>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        <Carousel id="myCarousel" activeIndex={currentIndex} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              style={{ height: 750}}
              className="d-block w-100"
              src={team1}
              alt="Slide 1"
            />
            <Carousel.Caption>
              <p style={{ marginTop: -530,  marginLeft: -50, color: 'black', width:850, lineHeight: 1.8, fontSize: 38, textAlign: 'justify',fontWeight:'bold'}}>
                Complete Your Government Job Application  Within Two Minutes.
              </p>
              <p style={{ marginLeft: -50, color: 'black', width: 450, lineHeight: 1.8, fontSize:20, textAlign: 'justify', marginTop:10}}>
                To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability. Consistent effort and a positive mindset will propel you towards success.
              </p>
              <button style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', width: 200, height: 50, float: 'left', marginTop:60, borderRadius: 10, boxShadow: '0px 0px 10px black', marginLeft: -50 }}>
                <a style={{ textDecoration: 'none', color: 'white', fontSize: 20, fontWeight: 'bold' }} href='/login'>
                  Get Started
                </a>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 750 }}
              className="d-block w-100"
              src={team3}
              alt="Slide 2"
            />
            <Carousel.Caption>
              <h3 style={{ marginTop: -500, fontSize: 40, fontWeight: 'bold', color: '#990099', marginLeft: 480 }}>Admit Card Delivery</h3>
              <h2 style={{ color: 'black', marginLeft: 575, width: 500, marginTop: 20, textAlign: 'justify' }}>Get Your ADMIT CARD delivered Within a Day</h2>
              <p style={{ marginLeft: 580, color: 'black', width: 500, fontSize: 18, lineHeight: 1.8, marginTop: 30, textAlign: 'justify' }}>
                To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability. Consistent effort and a positive mindset will propel you towards success.
              </p>
              <button style={{ background: 'linear-gradient(to left, #990099 30%, #152D43 100%)', width: 200, height: 50, marginRight: -290, marginTop: 40, borderRadius: 10, boxShadow: '0px 0px 10px black' }}>
                <a style={{ textDecoration: 'none', color: 'white', fontSize: 20, fontWeight: 'bold' }} href='/login'>
                  Get Started
                </a>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 750 }}
              className="d-block w-100"
              src={team2}
              alt="Slide 3"
            />
            <Carousel.Caption>
              <h3 style={{ marginTop: -500, fontSize: 40, fontWeight: 'bold', marginLeft: -700, color: 'darkblue' }}>Government Jobs</h3>
              <h2 style={{ color: 'black', marginLeft: 15, width: 550, marginTop: 10, lineHeight: 1.4, textAlign: 'justify' }}>Complete Your Government Job Application From Within Two Minutes</h2>
              <p style={{ marginLeft: 10, color: 'gray', width: 450, fontSize: 18, lineHeight: 1.8, marginTop: 30, textAlign: 'justify' }}>
                To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability. Consistent effort and a positive mindset will propel you towards success.
              </p>
              <button style={{ background: 'linear-gradient(to left, #0000cc 30%, #152D43 100%)', width: 200, height: 50, marginRight: 850, marginTop: 40, borderRadius: 10, boxShadow: '0px 0px 10px black' }}>
                <a style={{ textDecoration: 'none', color: 'white', fontSize: 20, fontWeight: 'bold' }} href='/login'>
                  Get Started
                </a>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 750 }}
              className="d-block w-100"
              src={team12}
              alt="Slide 4"
            />
            <Carousel.Caption>
              <h3 style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 390, color: 'gold', width: 750, marginTop: -500 }}>Refer and Earn</h3>
              <p style={{ marginLeft: 628, color: 'white', marginTop: 10, fontSize: 22, width: 450, fontWeight: 'bold', textAlign: 'justify' }}>Refer to your Friends and get one Government Exam Registration for Free</p>
              <p style={{ marginLeft: 628, color: 'white', width: 450, fontSize: 18, lineHeight: 1.8, marginTop: 30, textAlign: 'justify' }}>
                To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability. Consistent effort and a positive mindset will propel you towards success.
              </p>
              <button style={{ background: 'linear-gradient(to left, #ffff66 0%, #ffcc00 70%)', width: 200, height: 50, marginRight: -400, marginTop: 40, borderRadius: 10, boxShadow: '0px 0px 10px black' }}>
                <a style={{ textDecoration: 'none', color: 'black', fontSize: 20, fontWeight: 'bold' }} href='/login'>
                  Get Started
                </a>
              </button>
            </Carousel.Caption>
          </Carousel.Item>




          <Carousel.Item>
        <img
             style={{height:750}}
          className="d-block w-100"
          src={team5}
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h1 style={{marginTop:-500,background: 'linear-gradient(to left,  #00ff99 30%, #009900 100%, #00cc00  100%,#00ff99 100%)',width:600,color:'white', borderRadius:20,marginLeft:450, fontSize:30, height:80}}>One Time Registration(OTR) for Examinations</h1>
        <h3 style={{fontSize:30,fontWeight:'bold',marginLeft:390,color:'black',width:750,marginTop:10}}>One Time Registration(OTR) forExaminations</h3>
          <p style={{marginLeft:298, color:'gray',marginTop:10}}>Complete Your Government Job Application WithIn Two Minutes</p>

          <p style={{marginLeft:450, color:'black',width:500,fontSize:18,lineHeight:1.8,marginTop:30,textAlign:'justify'}}>To achive your goals set specific targets, create a plan with actionable steps.and stay commited through perserverance and adoptability.Consistent effort and a positive mindset will prper you towrds success.</p>

<button style={{background: 'linear-gradient(to left,  #00ff99 30%, #009900 100%, #00cc00  100%,#00ff99 100%)',width:200, height:50,marginRight:-60, marginTop:40,borderRadius:10,boxShadow: '0px 0px 10px black'}}   ><a style={{textDecoration:'none',color:'white', fontSize:20,fontWeight:'bold'}}         href='/login' >Get Started</a>   </button>
        </Carousel.Caption>
      </Carousel.Item>

        </Carousel>
      </div>




{/* Notifications*/}



<div className='' style={{height:200,background:'#e6f9ff',boxShadow: '0px 0px 10px black',paddingTop:35,borderRadius:20,width:1400,marginLeft:58,paddingLeft:15}}>
<button style={{background: 'linear-gradient(to left, #006666 30%, #152D43 100%)',width:200, height:50,marginRight:-60, marginTop:40,borderRadius:10,boxShadow: '0px 0px 10px black', marginLeft:100}}   ><a style={{textDecoration:'none',color:'white', fontSize:20,fontWeight:'bold'}}         href='/login' >Syllabus</a>  </button>
<button style={{background: 'linear-gradient(to left, #006666 30%, #152D43 100%)',width:200, height:50,marginRight:-60, marginTop:40,borderRadius:10,boxShadow: '0px 0px 10px black', marginLeft:100}}   ><a style={{textDecoration:'none',color:'white', fontSize:20,fontWeight:'bold'}}         href='/login' >Admit card</a>   </button>
<button style={{background: 'linear-gradient(to left, #006666 30%, #152D43 100%)',width:200, height:50,marginRight:-60, marginTop:40,borderRadius:10,boxShadow: '0px 0px 10px black', marginLeft:100}}   ><a style={{textDecoration:'none',color:'white', fontSize:20,fontWeight:'bold'}}         href='/login' >PQP</a>   </button>
<button style={{background: 'linear-gradient(to left, #006666 30%, #152D43 100%)',width:200, height:50,marginRight:-60, marginTop:40,borderRadius:10,boxShadow: '0px 0px 10px black', marginLeft:100}}   ><a style={{textDecoration:'none',color:'white', fontSize:20,fontWeight:'bold'}}         href='/login' >Answer Key</a>   </button>
<button style={{background: 'linear-gradient(to left, #006666 30%, #152D43 100%)',width:200, height:50,marginRight:-60, marginTop:40,borderRadius:10,boxShadow: '0px 0px 10px black', marginLeft:100}}   ><a style={{textDecoration:'none',color:'white', fontSize:20,fontWeight:'bold'}}         href='/login' >Results</a>   </button>
</div>







{/* Notification Jobs*/}


<div style={{display:'flex',marginLeft:80, marginTop:80}}>
<div className="noti" style={{ width: '700px', height: '700px', border: '2px solid black', borderRadius: '5px', position: 'relative' }}>
  <button style={{ position: 'relative', background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', width: '100%', height: '65px', marginTop: '0px', borderRadius: '5px', boxShadow: '0px 0px 5px black' }}>
    <a style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold', float: 'right', marginTop: 7, marginRight: 30 }} href='/viewall2'>View All</a>
    <h1 style={{ paddingTop: 10, color: 'white', fontSize: 25, marginLeft: -340 }}>Notifications</h1>
    <NotificationsNoneOutlinedIcon style={{ color: 'white', fontSize: 35, marginTop: -40, float: 'left' }} />
  </button>
  <div className="scroll-container" style={{ height: '550px', overflow: 'hidden', position: 'relative' }}>
  <div className="scroll-content" style={{ height: '630px', position: 'absolute', animation: 'scroll-up 20s linear infinite' }}>
    <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '30px', marginTop: '40px' }}>SSC NOTIFICATIONS</h1>

    {Array(2).fill(0).map((_, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '20px 0', marginTop: 40 }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <p style={{ background: 'darkorange', color: 'white', width: '60px', height: '30px', borderRadius: '20px', paddingLeft: '3px', paddingTop: '2px' }}>New</p>
          <h3 style={{ color: 'darkblue', fontSize: '18px', marginTop: '14px' }}>May 20th 2024</h3>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', width: 350 }}>
          <p style={{ textAlign: 'justify', width: 380 }}>SSA/ UDC Grade Limited Departmental Competitive Examination, 2023 & 2024: Uploading of Tentative Answer Key(s) along with Candidates' Response Sheet(s).</p>
        </div>
        <div>
          <button style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', width: '100px', height: '50px', borderRadius: '30px', boxShadow: '0px 0px 5px black',marginLeft:50}}>
            <a style={{ textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: 'bold' }} href='/login'>View</a>
          </button>
        </div>
      </div>
    ))}

    <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '30px', marginTop: '40px' }}>BANK NOTIFICATIONS</h1>

    {Array(2).fill(0).map((_, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '20px 0', marginTop: 40 }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <p style={{ background: 'darkorange', color: 'white', width: '60px', height: '30px', borderRadius: '20px', paddingLeft: '3px', paddingTop: '2px' }}>New</p>
          <h3 style={{ color: 'darkblue', fontSize: '18px', marginTop: '14px' }}>June 10th 2024</h3>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', width: 350 }}>
          <p style={{ textAlign: 'justify', width: 380 }}>SSA/ UDC Grade Limited Departmental Competitive Examination, 2023 & 2024: Uploading of Tentative Answer Key(s) along with Candidates' Response Sheet(s).</p>
        </div>
        <div>
          <button style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', width: '100px', height: '50px', borderRadius: '30px', boxShadow: '0px 0px 5px black',marginLeft:50}}>
            <a style={{ textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: 'bold' }} href='/login'>View</a>
          </button>
        </div>
      </div>
    ))}

    <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '30px', marginTop: '40px' }}>RAILWAY NOTIFICATIONS</h1>

    {Array(2).fill(0).map((_, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '20px 0', marginTop: 40 }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <p style={{ background: 'darkorange', color: 'white', width: '60px', height: '30px', borderRadius: '20px', paddingLeft: '3px', paddingTop: '2px' }}>New</p>
          <h3 style={{ color: 'darkblue', fontSize: '18px', marginTop: '14px' }}>April 3th 2024</h3>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', width: 350 }}>
          <p style={{ textAlign: 'justify', width: 380 }}>SSA/ UDC Grade Limited Departmental Competitive Examination, 2023 & 2024: Uploading of Tentative Answer Key(s) along with Candidates' Response Sheet(s).</p>
        </div>
        <div>
          <button style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', width: '100px', height: '50px', borderRadius: '30px', boxShadow: '0px 0px 5px black',marginLeft:50 }}>
            <a style={{ textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: 'bold' }} href='/login'>View</a>
          </button>
        </div>
      </div>
    ))}

    <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '30px', marginTop: '40px' }}>UPSC NOTIFICATIONS</h1>

    {Array(2).fill(0).map((_, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '20px 0', marginTop: 40 }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <p style={{ background: 'darkorange', color: 'white', width: '60px', height: '30px', borderRadius: '20px', paddingLeft: '3px', paddingTop: '2px' }}>New</p>
          <h3 style={{ color: 'darkblue', fontSize: '18px', marginTop: '14px' }}>March 10th 2024</h3>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', width: 350 }}>
          <p style={{ textAlign: 'justify', width: 380 }}>SSA/ UDC Grade Limited Departmental Competitive Examination, 2023 & 2024: Uploading of Tentative Answer Key(s) along with Candidates' Response Sheet(s).</p>
        </div>
        <div>
          <button style={{ background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', width: '100px', height: '50px', borderRadius: '30px', boxShadow: '0px 0px 5px black',marginLeft:50}}>
            <a style={{ textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: 'bold' }} href='/login'>View</a>
          </button>
        </div>
      </div>
   
  
   ))}
  </div>
</div>
</div>





















{/*Upcoming Jobs*/}


<div className="noti" style={{ width: '600px', height: '700px', border: '2px solid black', borderRadius: '5px', position: 'relative',marginLeft:50}}>
  <button style={{ position: 'relative', background: 'linear-gradient(to left, #006666 30%, #152D43 100%)', width: '100%', height: '65px', marginTop: '0px', borderRadius: '5px', boxShadow: '0px 0px 5px black' }}>
    <a style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold', float: 'right', marginTop: 7, marginRight: 30 }} href='/viewall'>View All</a>
    <h1 style={{ paddingTop: 10, color: 'white', fontSize: 25, marginLeft: -120 }}> Upcoming Notifications</h1>
    <NotificationsNoneOutlinedIcon style={{ color: 'white', fontSize: 35, marginTop: -40, float: 'left' }} />
  </button>
  <div className="scroll-container" style={{ height: '550px', overflow: 'hidden', position: 'relative' }}>
  <div className="scroll-content" style={{ height: '630px', position: 'absolute', animation: 'scroll-up 20s linear infinite' }}>
    <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '30px', marginTop: '40px',marginLeft:100}}>SSC NOTIFICATIONS</h1>

    {Array(2).fill(0).map((_, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '20px 0', marginTop: 40 }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <p style={{ background: 'darkorange', color: 'white', width: '60px', height: '30px', borderRadius: '20px', paddingLeft: '3px', paddingTop: '2px' }}>New</p>
          <h3 style={{ color: 'darkblue', fontSize: '18px', marginTop: '14px' }}>May 20th 2024</h3>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', width: 350 }}>
          <p style={{ textAlign: 'justify', width: 380 }}>SSA/ UDC Grade Limited Departmental Competitive Examination, 2023 & 2024: Uploading of Tentative Answer Key(s) along with Candidates' Response Sheet(s).</p>
        </div>
      </div>
    ))}

    <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '30px', marginTop: '40px',marginLeft:100}}>BANK NOTIFICATIONS</h1>

    {Array(2).fill(0).map((_, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '20px 0', marginTop: 40 }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <p style={{ background: 'darkorange', color: 'white', width: '60px', height: '30px', borderRadius: '20px', paddingLeft: '3px', paddingTop: '2px' }}>New</p>
          <h3 style={{ color: 'darkblue', fontSize: '18px', marginTop: '14px' }}>June 10th 2024</h3>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', width: 350 }}>
          <p style={{ textAlign: 'justify', width: 380 }}>SSA/ UDC Grade Limited Departmental Competitive Examination, 2023 & 2024: Uploading of Tentative Answer Key(s) along with Candidates' Response Sheet(s).</p>
        </div>
      </div>
    ))}

    <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '30px', marginTop: '40px',marginLeft:100}}>RAILWAY NOTIFICATIONS</h1>

    {Array(2).fill(0).map((_, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '20px 0', marginTop: 40 }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <p style={{ background: 'darkorange', color: 'white', width: '60px', height: '30px', borderRadius: '20px', paddingLeft: '3px', paddingTop: '2px' }}>New</p>
          <h3 style={{ color: 'darkblue', fontSize: '18px', marginTop: '14px' }}>April 3th 2024</h3>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', width: 350 }}>
          <p style={{ textAlign: 'justify', width: 380 }}>SSA/ UDC Grade Limited Departmental Competitive Examination, 2023 & 2024: Uploading of Tentative Answer Key(s) along with Candidates' Response Sheet(s).</p>
        </div>
      </div>
    ))}

    <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '30px', marginTop: '40px',marginLeft:100}}>UPSC NOTIFICATIONS</h1>

    {Array(2).fill(0).map((_, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '20px 0', marginTop: 40 }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <p style={{ background: 'darkorange', color: 'white', width: '60px', height: '30px', borderRadius: '20px', paddingLeft: '3px', paddingTop: '2px' }}>New</p>
          <h3 style={{ color: 'darkblue', fontSize: '18px', marginTop: '14px' }}>March 10th 2024</h3>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', width: 350 }}>
          <p style={{ textAlign: 'justify', width: 380 }}>SSA/ UDC Grade Limited Departmental Competitive Examination, 2023 & 2024: Uploading of Tentative Answer Key(s) along with Candidates' Response Sheet(s).</p>
        </div>
      </div>
    ))}
  </div>
</div>

</div>




</div>





















{/* About Us*/}


<div  className='about'>
<div style={{display:'flex', marginLeft:100}}>
          <div>
      <img style={{paddingLeft:530, marginTop:100}}       src={team13}  alt=''/>
      </div>
      <div>
        <h1 style={{color:'#003366',marginLeft:-160, paddingTop:100}}        className=''>About Us</h1>
        <img style={{paddingLeft:10, marginTop:-70}}       src={team14}  alt=''/>
        </div>
        </div>






<div className='about' style={{marginTop:70}}>
  <div style={{backgroundImage: `url(${team6})`,height:550}}>
  <button style={{background: 'linear-gradient(to left,  #ccffff 30%, #ffffff 100%, #00cc00  100%,#00ff99 100%)',width:200, height:50,borderRadius:10,boxShadow: '0px 0px 10px black',marginTop:250, justifyContent:'center',marginLeft:640}}   ><a style={{textDecoration:'none',color:'black', fontSize:20,fontWeight:'bold'}}         href='/about' >ABOUT US</a>   </button>
  </div>








  <p style={{marginLeft:150,width:1200,lineHeight:2,fontSize:22,marginTop:50}}>
            Maawaabro IT Solutions Pvt Ltd Is A Leading IT Solution Provider
            Based In Guntur, Andhra Pradesh, India. Where Our Passion For Public
            Sector Job Seekers Shines Through In Our Dedicated Services. Our
            Platform Is Carefully Crafted To Be Your Top Destination For
            Accessing Government Job Opportunities With Ease. We Take Pride In
            Providing Timely Job Alerts, Simplifying The Application Process,
            And Offering Extensive Support To Our Applicants. With Our In-Depth
            Knowledge Of Government Positions, Our Team Is Committed To Being A
            Reliable Ally For Individuals Seeking To Make A Meaningful Impact
            Through Public Service.
          </p>


          <h1 style={{fontSize:25,fontWeight:'bold',marginLeft:150, marginTop:50,color:'#006699'}}>VISION :</h1>


          <p style={{ width: 1000, justifyContent: "center", marginLeft: 150,lineHeight:2,fontSize:22,marginTop:20}}>
          Maawaabro IT Solutions Pvt Ltd envisions leveraging technology <br></br> to
          revolutionize job search, ensuring tailored opportunities for all <br></br>and
          driving professional fulfillment and societal progress.
        </p>
    


<div style={{display:'flex'}}>

<div>
        <h1 style={{fontSize:25,fontWeight:'bold',marginLeft:150, marginTop:50,color:' #006699'}}>MISSION :</h1>


<p style={{ width: 1000, justifyContent: "center", marginLeft: 150 ,fontSize:22,lineHeight:2, marginTop:20}}>
          Maawaabro IT Solutions Pvt Ltd aims to empower job seekers and
          employers by bridging<br></br> talent and opportunity. Our platform offers
          insights and matches based on industry trends,<br></br> salary benchmarks, and
          cultural fit. Powered by Al and analytics, we provide a comprehensive<br></br>
          career ecosystem for mutual growth and success.
        </p>
        </div>

<div style={{marginTop:-130}}>
  <img style={{width:150,height:150}}          src={team7} alt=""/>
  <img style={{width:150,height:150,marginLeft:10}}               src={team8} alt=""/>
  <img style={{width:150,height:150,borderRadius:20,marginTop:10}}          src={team9} alt=""/>
  <img style={{width:150,height:150,borderRadius:20,marginLeft:10,marginTop:10}}          src={team10} alt=""/>
</div>



        </div>


</div>



{/* goals*/}

<div style={{display:'flex'}}>
<div style={{marginTop:50, marginLeft:150}}>
<img style={{width:150,height:150,marginLeft:10}}               src={team8} alt=""/>
<img style={{width:150,height:150,borderRadius:20,marginLeft:10}}          src={team10} alt=""/>
  <img style={{width:150,height:150,marginTop:10,marginLeft:10}}          src={team7} alt=""/>
  <img style={{width:150,height:150,borderRadius:20,marginTop:10,marginLeft:10}}          src={team9} alt=""/>
</div>
<div style={{}}>
<h1 style={{fontSize:25,fontWeight:'bold',paddingLeft:130, marginTop:50,color:'#006699'}}>FUTURE GOALS :</h1>
<p style={{ width: 1000, justifyContent: "center", paddingLeft: 130,fontSize:22,lineHeight:2, marginTop:20}}>
          Future Goals Maawaabro IT Solutions Pvt Ltd aims to: <br></br>Innovate by
          investing in research and development for cutting-edge Al technology.<br></br>
          Expand globally in the employment services Industry strategically.
          Educate job seekers <br></br>and collaborate with Institutions, industry
          leaders, and policymakers for a supportive<br></br> employment landscape.
        </p>
</div>
</div>
             
</div>       




{/* faq section*/}



<div ref={faqSectionRef}>
      <div className='text-center mt-10 ' dir='ltr'>

        <div style={{display:'flex', marginLeft:100}}>
          <div>
      <img style={{paddingLeft:400, marginTop:100}}       src={team13}  alt=''/>
      </div>
      <div>
        <h1 style={{color:'#003366',marginLeft:-170, paddingTop:100}}        className=''>Frequently Asked Questions </h1>
        <img style={{paddingLeft:320, marginTop:-70}}       src={team14}  alt=''/>
        </div>
        </div>





        <input          style={{width:800, height:50,marginTop:50}}         type="text" placeholder="Search.."/>

        <SearchIcon style={{marginLeft:-100, fontSize:20, background:'#006699',height:49,width:100, marginTop:-5, color:'white'}}/>  









        <div>
          <div className="tab" style={{marginTop:50, marginLeft:200}}>
            <button style={{ width: 120, background: 'linear-gradient(to left,  #006699 60%, #152D43 100%, #0B496F 100%, #152D43 100%)', borderRadius: 10, color: 'white' }} className={`tablinks ${activeTab === 'SSC' ? 'active' : ''}`} onClick={() => openCity('SSC')}>SSC</button>
            <button style={{ width: 120, background: 'linear-gradient(to left,  #006699 60%, #152D43 100%, #0B496F 100%, #152D43 100%)', borderRadius: 10, color: 'white' }} className={`tablinks ${activeTab === 'BANK' ? 'active' : ''}`} onClick={() => openCity('BANK')}>BANK</button>
            <button style={{ width: 120, background: 'linear-gradient(to left,  #006699 60%, #152D43 100%, #0B496F 100%, #152D43 100%)', borderRadius: 10, color: 'white' }} className={`tablinks ${activeTab === 'UPSC' ? 'active' : ''}`} onClick={() => openCity('UPSC')}>UPSC</button>
            <button style={{ width: 120, background: 'linear-gradient(to left,  #006699 60%, #152D43 100%, #0B496F 100%, #152D43 100%)', borderRadius: 10, color: 'white' }} className={`tablinks ${activeTab === 'RRB' ? 'active' : ''}`} onClick={() => openCity('RRB')}>RRB</button>
            <button style={{ width: 120, background: 'linear-gradient(to left,  #006699 60%, #152D43 100%, #0B496F 100%, #152D43 100%)', borderRadius: 10, color: 'white' }} className={`tablinks ${activeTab === 'RAILWAYS' ? 'active' : ''}`} onClick={() => openCity('RAILWAYS')}>RAILWAYS</button>
            <button style={{ width: 120, background: 'linear-gradient(to left,  #006699 60%, #152D43 100%, #0B496F 100%, #152D43 100%)', borderRadius: 10, color: 'white' }} className={`tablinks ${activeTab === 'OTHERS' ? 'active' : ''}`} onClick={() => openCity('OTHERS')}>OTHERS</button>
            {/* Add buttons for other categories */}
          </div>

          <div id="SSC" className={`tabcontent ${activeTab === 'SSC' ? 'active' : ''}`}>
            <Faq1 category="SSC" />
          </div>
          <div id="BANK" className={`tabcontent ${activeTab === 'BANK' ? 'active' : ''}`}>
            <Faq2 category="BANK" />
          </div>
          <div id="UPSC" className={`tabcontent ${activeTab === 'UPSC' ? 'active' : ''}`}>
            <Faq3 category="UPSC" />
          </div>
          <div id="RRB" className={`tabcontent ${activeTab === 'RRB' ? 'active' : ''}`}>
            <Faq4 category="RRB" />
          </div>
          <div id="RAILWAYS" className={`tabcontent ${activeTab === 'RAILWAYS' ? 'active' : ''}`}>
            <Faq5 category="RAILWAYS" />
          </div>
          <div id="OTHERS" className={`tabcontent ${activeTab === 'OTHERS' ? 'active' : ''}`}>
            <Faq6 category="UPSC" />
          </div>
          {/* Add similar divs for other categories */}
        </div>
      </div>
    </div>




{/* marque jobs section*/}

<div>
      {/* Other content */}
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="logos" style={{ display: 'flex', marginTop: 40 }}>
            <img style={{ marginLeft: 140, width: 100, height: 50 }} src={team15} alt='' />
            <img style={{ marginLeft: 100, width: 100, height: 50 }} src={team16} alt='' />
            <img style={{ marginLeft: 100, width: 100, height: 50}} src={team17} alt='' />
            <img style={{ marginLeft: 100, height: 80,width:90}} src={team18} alt='' />
            <img style={{ marginLeft: 100, width: 100, height: 100}} src={team19} alt='' />
            <img style={{ marginLeft: 100, width: 100, height: 100 }} src={team20} alt='' />
            <img style={{ marginLeft: 100, width: 150, height: 150 }} src={team21} alt='' />
            <img style={{ marginLeft: 100, width: 100, height: 100}} src={team22} alt='' />
            <img style={{ marginLeft: 100, height: 100}} src={team23} alt='' />
            <img style={{ marginLeft: 100, width: 60, height: 70, marginTop: 5 }} src={team24} alt='' />
            <img style={{ marginLeft: 100, height: 80}} src={team28} alt='' />
          </div>
        </div>
      </div>
      {/* Other content */}
    </div>






{/* Contact Section*/}




<div style={{display:'flex', marginLeft:550}}>
          <div>
      <img style={{marginLeft:100, marginTop:100}}       src={team13}  alt=''/>
      </div>
      <div>
        <h1 style={{color:'#003366',marginLeft:-160, paddingTop:100}}        className=''>Contact Us</h1>
        <img style={{paddingLeft:30, marginTop:-80}}       src={team14}  alt=''/>
        </div>
        </div>


        <div style={{backgroundImage: `url(${team40})`,height:550,marginTop:100,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          </div>
        
        



<div style={{background:'#CCFFFF', marginTop:-330,width:850,marginLeft:350,height:160,borderRadius:30,boxShadow: '0px 0px 10px black'}}>
  <div>
  <button style={{background: 'linear-gradient(to left,   #006699 100%, #00cc00  10%,#00ff99 100%)',width:200, height:50,borderRadius:10,boxShadow: '0px 0px 10px black',marginTop:50, justifyContent:'center',marginLeft:590}}   ><a style={{textDecoration:'none',color:'white', fontSize:20,fontWeight:'bold'}}         href='/contact' >Contact Us</a>   </button>
  </div>
  <div>
    <h1 style={{fontSize:20,paddingLeft:80,marginTop:-60,lineHeight:1.7}}>Kindly Provide Information About Your Business<br/>We Are Ready To Support You With Your Solutions</h1>
  </div>
</div>


















      {/* Footer Section*/}


<div className='fotter'            style={{backgroundImage: `url(${team30})`,height:870,marginTop:260}}>
  <div style={{display:'flex',marginLeft:50}}>
    <div>
    <img style={{height:450,width:500,marginLeft:-100}}        src={team} alt="Team" />
    </div>
<div style={{paddingTop:140, marginLeft:80,lineHeight:2}}>
  <h1 style={{color:'darkorange', textDecoration:'underline', textDecorationColor:'darkorange',fontSize:25,fontFamily:'revert-layer', fontStyle:'normal'}}>COMPANY</h1>
  <li style={{color:'white',fontSize:20}}>Home</li>
  <li style={{color:'white',fontSize:20}}>About Us</li>
  <li style={{color:'white',fontSize:20}}>Services</li>
  <li style={{color:'white',fontSize:20}}>Faq</li>
  <li style={{color:'white',fontSize:20}}>Contact Us</li>
</div>
<div style={{paddingTop:140, marginLeft:80,lineHeight:2}}>
<h1 style={{color:'darkorange', textDecoration:'underline', textDecorationColor:'darkorange',fontSize:25,fontFamily:'revert-layer', fontStyle:'normal',marginLeft:40}}>TERMS</h1>
  <li style={{color:'white',fontSize:20}}>Terms And Conditions</li>
  <li style={{color:'white',fontSize:20}}>Terms And Acctable Usage</li>
  <li style={{color:'white',fontSize:20}}>Privacy Policy</li>
  <li style={{color:'white',fontSize:20}}>Cooks Policy</li>
</div>
<div style={{paddingTop:140, marginLeft:80,lineHeight:2}}>
<h1 style={{color:'darkorange', textDecoration:'underline', textDecorationColor:'darkorange',fontSize:25,fontFamily:'revert-layer', fontStyle:'normal'}}>CONTACT US</h1>
 <Typography style={{color:'white',lineHeight:2,fontSize:20}}><CallIcon   style={{color:'darkorange'}}/>  Phone: +918639023948</Typography>
 <Typography style={{color:'white',lineHeight:2,fontSize:20}}><EmailIcon   style={{color:'darkorange'}}/>  m@maawaabroitsolutions.com</Typography>
<Typography style={{color:'white',lineHeight:2,fontSize:20,width:400}}><PlaceIcon   style={{color:'darkorange'}}/>  Address: 5/4, near Park, Sali Pet, Arundalpet, Guntur, Andhra Pradesh 522002.</Typography>
</div>
  </div>


<div style={{display:'flex',marginLeft:100}}>
<div style={{marginTop:-50}}>
  <p style={{color:'white',width:450,fontSize:20,lineHeight:2}}>Government jobs are a top choice for Indian youth due to their security, good salaries, perks, and the chance to serve the nation. They are accessible to candidates with qualifications ranging from 8th-grade education to doctoral degrees, providing opportunities for all.</p>


<div>
  <img style={{width:100,height:100}}            src={team32} alt=''/>
  <img style={{width:70,height:70}}             src={team33} alt=''/>
  <img style={{width:110,height:80}}              src={team34} alt=''/>
  <img style={{width:100,height:80,marginTop:-16}}                src={team31} alt=''/>
</div>





</div>
<div style={{marginLeft:200}}>
 <h1 style={{color:'darkorange'}}>Stay Connected</h1>
 <p style={{color:'white', fontSize:18, width:400,lineHeight:2}}>Sign up for our newsletter and be the first
 to hear about  Offers, updates, and tips</p>
 <input          style={{width:500, height:50,marginTop:30}}         type="text" placeholder="Your Email Address..."/>

        <EmailIcon style={{marginLeft:-50, fontSize:20, background:'darkorange',height:49,width:70, marginTop:-5, color:'white'}}/>  

</div>
</div>



<hr style={{color:'white',borderWidth:2}}   />



<h1 style={{color:'darkorange',fontSize:22, textAlign:'center',paddingTop:10}}>@2024. All Rights Reserved</h1>

</div>



       
















    </div>
  );
}

export default Home;
