import React from 'react'
import '../css/Mbanltics.css';
import Image from '../images/mbdash4.png';
import LaunchIcon from '@mui/icons-material/Launch';
import ShareIcon from '@mui/icons-material/Share';
import SearchIcon from '@mui/icons-material/Search';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import Barchart from './Mbana1.jsx';

function Slider() {
  return (
    <div style={{background:'#cceeff'}}>
    <div style={{width:1180}}>

<button style={{fontSize:25,fontWeight:'bold',paddingLeft:0,color:'white',background:'#6600cc',boxShadow: '0px 0px 5px black',width:300,height:50,marginLeft:80,borderRadius:10,marginTop:100}}>Welcome <span style={{color:'red',fontSize:25,fontWeight:'bold'}}>Roopa</span></button>
<img src={Image} alt='' style={{ height:250, width:250, float: 'right', marginTop:10, marginRight:60, borderRadius:50,boxShadow: '0px 0px 5px #c2f0f0'}} />
    
      <div className='adi-container1'>
        <h1 className='adi-heading'>Traffic Analysis</h1>
        <div style={{display:'flex',marginLeft:10}}>
          <div className='adi-div1'>
            <p  style={{paddingLeft:0,marginTop:20,fontSize:18,fontWeight:'bold',textAlign:'center'}}>Daily Visitors</p>
            <p style={{paddingLeft:0,paddingBottom:10,fontSize:16,fontWeight:'bold',textAlign:'center'}}>100</p>
          </div>
          <div className='adi-div2'>
            <p  style={{paddingLeft:0,marginTop:60,fontSize:18,textAlign:'center',fontWeight:'bold'}}>Monthly Visitors</p>
            <p style={{paddingLeft:0,paddingBottom:10,fontSize:16,fontWeight:'bold',textAlign:'center'}}>150</p>
          </div>
          <div className='adi-div3'>
            <p  style={{paddingLeft:0,marginTop:60,fontSize:18,fontWeight:'bold',textAlign:'center'}}>Pages Per Visit</p>
            <p style={{paddingLeft:0,paddingBottom:10,fontSize:16,fontWeight:'bold',textAlign:'center'}}>3</p>
          </div>
          <div className='adi-div4'>
            <p  style={{paddingLeft:0,marginTop:60,fontSize:18,fontWeight:'bold',textAlign:'center'}}>Visit Duration</p>
            <p style={{paddingLeft:0,paddingBottom:10,fontSize:16,fontWeight:'bold',textAlign:'center'}}>10 min</p>
          </div>
          <div className='adi-div5'>
            <p  style={{paddingLeft:0,marginTop:60,fontSize:18,fontWeight:'bold',textAlign:'center'}}>Bounce Rate</p>
            <p style={{paddingLeft:0,paddingBottom:0,fontSize:16,fontWeight:'bold',textAlign:'center'}}>54%</p>
          </div>
        </div>
      </div>

      {/*------------------------Tracffic Source---------------------------------*/}

  
      <div style={{display:'flex'}}>

      <div  className="adi-traffic-div">
      <div>
      <h1 className='adi-traffic-source'>Traffic Source</h1>
      <div className='adi-button1'>
        < LaunchIcon style={{color:'red',marginTop:5,paddingLeft:5}}/>
        <p style={{paddingLeft:20,marginTop:5,fontSize:18,color:'white',fontWeight:'bold'}}>Direct</p>
        <p style={{paddingLeft:130,marginTop:5,fontSize:18}}>75%</p>
        </div>
        <div className='adi-button1'>
          <ShareIcon style={{color:'red',marginTop:5,paddingLeft:5}}/>
          <p style={{paddingLeft:18,marginTop:5,fontSize:18}}>Referral</p>
          <p style={{paddingLeft:120,marginTop:5,fontSize:18}}>40%</p>
        </div>

        <div className='adi-button1'>
          <SearchIcon style={{color:'red',marginTop:5,paddingLeft:5,fontSize:25}}/>
          <p style={{paddingLeft:18,marginTop:5,fontSize:18}}>Search</p>
          <p style={{paddingLeft:125,marginTop:5,fontSize:18}}>38%</p>
        </div>


        <div className='adi-button1'>
          <ShareIcon  style={{color:'red',marginTop:5,paddingLeft:5,fontSize:23}}/>
          <p style={{paddingLeft:18,marginTop:5,fontSize:18}}>Social</p>
          <p style={{paddingLeft:130,marginTop:5,fontSize:18}}>18%</p>
        </div>


        <div className='adi-button1'>
          <CardTravelIcon style={{color:'red',marginTop:5,paddingLeft:5,fontSize:23}}/>
          <p style={{paddingLeft:18,marginTop:5,fontSize:18}}>Paid</p>
          <p style={{paddingLeft:150,marginTop:5,fontSize:18}}>1%</p>
        </div>
      </div>



    <div>
      <h1 className='adi-traffic-source'>Desktop/ Mobile</h1>

      <div className='adi-button1'>
          <PersonalVideoIcon style={{color:'#ff0066',marginTop:5,paddingLeft:5,fontSize:23}}/>
          <p style={{paddingLeft:18,marginTop:5,fontSize:18}}>Desktop</p>
          <p style={{paddingLeft:120,marginTop:5,fontSize:18}}>81%</p>
        </div>

          <div className='adi-button1'>
          <StayCurrentPortraitIcon style={{color:'#ff0066',marginTop:5,paddingLeft:5,fontSize:23}}/>
          <p style={{paddingLeft:18,marginTop:5,fontSize:18}}>Mobile</p>
          <p style={{paddingLeft:130,marginTop:5,fontSize:18}}>29%</p>
        </div>
    </div>  
      </div>
      

{/*-------visitors By States ------------------------------*/}

        <div style={{marginTop:-20}}>
        <h1 className='adi-states'>Visitors by States</h1>
        <div>

        <div style={{marginLeft:20,background:'orange',width:450}}>
          <div style={{display:'flex',paddingLeft:10,marginLeft:90}}>
            <h1 style={{fontSize:18,fontWeight:'bold',paddingTop:5}}>States</h1>
            <h1 style={{fontSize:18,paddingLeft:140,fontWeight:'bold',paddingTop:5}}>Users</h1>
          </div>

          {/*-----statesnames div------*/}

          <div className='adi-state-scroll' style={{width:450}}>
          <p style={{paddingLeft:100}}>Andhra pradesh <span style={{paddingLeft:80}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Telangana <span style={{paddingLeft:120}}> 80%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Kerala <span style={{paddingLeft:150}}>38%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Tamila nadu <span style={{paddingLeft:110}}> 51%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Karnataka <span style={{paddingLeft:125}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Bihar <span style={{paddingLeft:160}}> 50%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Maharashtra <span style={{paddingLeft:110}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Madhya Pradesh<span style={{paddingLeft:80}}> 29%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Assam <span style={{paddingLeft:150}}> 33%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Himachal Pradesh<span style={{paddingLeft:70}}> 22%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Mizoram <span style={{paddingLeft:135}}> 19%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Odisha<span style={{paddingLeft:150}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Arunachal Pradesh <span style={{paddingLeft:70}}> 77%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Chhattisgarh <span style={{paddingLeft:110}}> 21%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Haryana <span style={{paddingLeft:140}}>33%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Jharkhand <span style={{paddingLeft:130}}> 19%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Meghalaya <span style={{paddingLeft:125}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Nagaland <span style={{paddingLeft:135}}> 65%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Gujarath <span style={{paddingLeft:140}}> 29%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Manipur <span style={{paddingLeft:140}}>10%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Goa <span style={{paddingLeft:177}}> 53%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Jammu and Kashmir <span style={{paddingLeft:60}}>22%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Panjab <span style={{paddingLeft:155}}> 39%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Chandigarh <span style={{paddingLeft:120}}> 5%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Andaman and Nicobar <span style={{paddingLeft:40}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Rajasthan <span style={{paddingLeft:135}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Uttar Pradesh <span style={{paddingLeft:110}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          <p style={{paddingLeft:100}}>Sikkim <span style={{paddingLeft:155}}> 59%</span></p>
          <hr style={{marginLeft:100}}/>
          </div>
          </div>
        </div>
        </div>
      </div>
    {/*-------------Barchart page ------------*/}
    < Barchart/>
    </div>
    </div>
  )
}

export default Slider














































































































































// import React, { useRef } from 'react';
// import '../Components/Slider.css'; // Import your CSS file
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const Tabs = () => {
//   const tabsBoxRef = useRef(null);

//   const scrollLeft = () => {
//     if (tabsBoxRef.current) {
//       tabsBoxRef.current.scrollBy({ left: -200, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (tabsBoxRef.current) {
//       tabsBoxRef.current.scrollBy({ left: 200, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="icon" onClick={scrollLeft}>
//         <ArrowBackIosIcon className='i'/>
//       </div>
//       <ul className="tabs-box" ref={tabsBoxRef}>
//         <li className="tab">Coding</li>
//         <li className="tab active">JavaScript</li>
//         <li className="tab">Podcasts</li>
//         <li className="tab">Databases</li>
//         <li className="tab">Web Development</li>
//         <li className="tab">Unboxing</li>
//         <li className="tab">History</li>
//         <li className="tab">Programming</li>
//         <li className="tab">Gadgets</li>
//         <li className="tab">Algorithms</li>
//         <li className="tab">Comedy</li>
//         <li className="tab">Gaming</li>
//         <li className="tab">Share Market</li>
//         <li className="tab">Smartphones</li>
//         <li className="tab">Data Structure</li>
//       </ul>
//       <div className="icon" onClick={scrollRight}>
//         <ArrowForwardIosIcon className='i'/>
//       </div>
//     </div>
//   );
// };

// export default Tabs;
