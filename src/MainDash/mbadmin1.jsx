import React, { useState } from 'react';
import IMG1 from '../images/Mbprofile1.png';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const settings = {
  width: 50,
  height: 50,
  value: 100,
};
const settings2 = {
  width: 50,
  height: 50,
  value: 10,
};
const settings3 = {
  width: 50,
  height: 50,
  value: 60,
};
const settings4 = {
  width: 50,
  height: 50,
  value: 69,
};
const settings5 = {
  width: 50,
  height: 50,
  value: 54,
};const settings6 = {
  width: 50,
  height: 50,
  value: 80,
};
const settings7 = {
  width: 50,
  height: 50,
  value: 100,
};

const App = () => {
  const [showContent, setShowContent] = useState({
    h1Clicked: [false, false, false, false, false, false, false], // Array to track gauge clicks
  });

  const handleH1Click = (index) => {
    let updatedArray = [...showContent.h1Clicked]; // Copy current state array
    updatedArray.fill(false); // Reset all to false
    updatedArray[index] = true; // Set the clicked index to true
    setShowContent({
      ...showContent,
      h1Clicked: updatedArray,
    });
  };

  


  //----------perfomance
  const settings1 = {
    width: 250,
    height: 250,
    value: 100, // Corrected to a numerical value without %
    innerRadius: 70,
    outerRadius: 100,
  };
  const settingsa2 = {
    width: 200,
    height: 200,
    value: 10, // Corrected to a numerical value without %
    innerRadius: 50,
    outerRadius: 75,
  };
  const settingsb3 = {
    width: 200,
    height: 200,
    value: 60, // Corrected to a numerical value without %
    innerRadius: 50,
    outerRadius: 75,
  };
  const settingsc4 = {
    width: 200,
    height: 200,
    value: 69, // Corrected to a numerical value without %
    innerRadius: 50,
    outerRadius: 75,
  };
  const settingsd5 = {
    width: 200,
    height: 200,
    value: 54, // Corrected to a numerical value without %
    innerRadius: 50,
    outerRadius: 75,
  };
  const settingse6 = {
    width: 200,
    height: 200,
    value: 88, // Corrected to a numerical value without %
    innerRadius: 50,
    outerRadius: 75,
  };
  const settingsf7 = {
    width: 200,
    height: 200,
    value: 10, // Corrected to a numerical value without %
    innerRadius: 50,
    outerRadius: 75,
  };

  return (
    <div style={{ display: 'flex', marginTop: 20, marginLeft: 10 }}>
      {/* Admin div first */}
      <div style={{ width: 630, height: 550, border: '2px solid grey', borderRadius: 10, paddingLeft: 20 }}>

<div>
  <div style={{ borderBottom: '1px solid grey', boxShadow: '0px 0px 5px black', height: 50, background: '#ff0066', marginLeft: -20 }}>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 30, color: 'white', paddingTop: 10 }}>Admin</label>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 50, color: 'white' }}>Active</label>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 40, color: 'white' }}>Contact</label>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 50, color: 'white' }}>Messages</label>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20, color: 'white' }}>Performance</label>
  </div>

  {/* Scrollable Content */}
  <div className='scrollable-content' style={{ display: 'block', background: 'white', boxShadow: '0px 0px 5px black', marginLeft: '-20px', height: '500px', overflowY: 'auto' }}>

    {/* First Row */}
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 5, marginTop: 10 }}>
        <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
      </div>
      <div style={{ marginTop: 20 }}>
        <label className="adi-label" style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -20, color: 'black' }}>Roopa</label>
      </div>
      <div style={{ marginTop: 20 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 40, color: 'black' }}>Yes</label>
      </div>
      <div style={{ marginTop: 25 }}>
        <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
      </div>
      <div style={{ marginTop: 25 }}>
      <Link to="/suryachat">    <SmsIcon style={{ color: 'darkblue', marginLeft: 80,cursor:'pointer'}} /> </Link>
      </div>
      <div style={{ marginTop: 21 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'black' }}>Chat</label>
      </div>
      {/* Piechart */}
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: 25, marginLeft: 40 }}>
            <Typography variant="h3" style={{ marginRight: '', fontSize: '20px', fontWeight: 'bold' }}>
              {settings.value}%
            </Typography>
          </div>
          <div style={{ fontSize: 50, marginTop: 10, marginLeft: 2 }}>
            <Gauge
              {...settings}
              cornerRadius="30%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: 'red',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: theme.palette.text.disabled,
                },
                [`& .${gaugeClasses.valueText}`]: {
                  display: 'none',
                },
              })}
              onClick={() => handleH1Click(0)}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Second Row */}
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 5, marginTop: 10 }}>
        <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
      </div>
      <div style={{ marginTop: 20 }}>
        <label className="adi-label" style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -20, color: 'black' }}>Akila</label>
      </div>
      <div style={{ marginTop: 20 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 60, color: 'black' }}>No</label>
      </div>
      <div style={{ marginTop: 25 }}>
        <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
      </div>
      <div style={{ marginTop: 25 }}>
      <Link to="/suryachat">    <SmsIcon style={{ color: 'darkblue', marginLeft: 80,cursor:'pointer'}} /> </Link>
      </div>
      <div style={{ marginTop: 21 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5, color: 'black' }}>Chat</label>
      </div>
      {/* Piechart */}
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: 25, marginLeft: 50 }}>
            <Typography variant="h3" style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {settings.value}%
            </Typography>
          </div>
          <div style={{ fontSize: 50, marginTop: 10, marginLeft: 2 }}>
            <Gauge
              {...settings2}
              cornerRadius="30%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: 'green',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: theme.palette.text.disabled,
                },
                [`& .${gaugeClasses.valueText}`]: {
                  display: 'none',
                },
              })}
              onClick={() => handleH1Click(1)}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Third Row */}
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 5, marginTop: 10 }}>
        <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
      </div>
      <div style={{ marginTop: 20 }}>
        <label className="adi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'black' }}>Rani</label>
      </div>
      <div style={{ marginTop: 20 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 60, color: 'black' }}>Yes</label>
      </div>
      <div style={{ marginTop: 25 }}>
        <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
      </div>
      <div style={{ marginTop: 25 }}>
      <Link to="/suryachat">    <SmsIcon style={{ color: 'darkblue', marginLeft: 80,cursor:'pointer'}} /> </Link>
      </div>
      <div style={{ marginTop: 21 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5, color: 'black' }}>Chat</label>
      </div>
      {/* Piechart */}
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: 25, marginLeft: 50 }}>
            <Typography variant="h3" style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {settings.value}%
            </Typography>
          </div>
          <div style={{ fontSize: 50, marginTop: 10, marginLeft: 2 }}>
            <Gauge
              {...settings3}
              cornerRadius="30%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: 'yellow',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: theme.palette.text.disabled,
                },
                [`& .${gaugeClasses.valueText}`]: {
                  display: 'none',
                },
              })}
              onClick={() => handleH1Click(2)}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Row */}
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 5, marginTop: 10 }}>
        <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
      </div>
      <div style={{ marginTop: 20 }}>
        <label className="adi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'black' }}>Vani</label>
      </div>
      <div style={{ marginTop: 20 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 60, color: 'black' }}>Yes</label>
      </div>
      <div style={{ marginTop: 25 }}>
        <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
      </div>
      <div style={{ marginTop: 25 }}>
        <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
      </div>
      <div style={{ marginTop: 21 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5, color: 'black' }}>Chat</label>
      </div>
      {/* Piechart */}
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: 25, marginLeft: 50 }}>
            <Typography variant="h3" style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {settings.value}%
            </Typography>
          </div>
          <div style={{ fontSize: 50, marginTop: 10, marginLeft: 2 }}>
            <Gauge
              {...settings4}
              cornerRadius="30%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: 'blue',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: theme.palette.text.disabled,
                },
                [`& .${gaugeClasses.valueText}`]: {
                  display: 'none',
                },
              })}
              onClick={() => handleH1Click(3)}
            />
          </div>
        </div>
      </div>
    </div>


{/* 5th conent*/}


<div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 5, marginTop: 10 }}>
        <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
      </div>
      <div style={{ marginTop: 20 }}>
        <label className="adi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'black' }}>Vani</label>
      </div>
      <div style={{ marginTop: 20 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 60, color: 'black' }}>Yes</label>
      </div>
      <div style={{ marginTop: 25 }}>
        <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
      </div>
      <div style={{ marginTop: 25 }}>
        <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
      </div>
      <div style={{ marginTop: 21 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5, color: 'black' }}>Chat</label>
      </div>
      {/* Piechart */}
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: 25, marginLeft: 50 }}>
            <Typography variant="h3" style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {settings.value}%
            </Typography>
          </div>
          <div style={{ fontSize: 50, marginTop: 10, marginLeft: 2 }}>
            <Gauge
              {...settings4}
              cornerRadius="30%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: 'blue',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: theme.palette.text.disabled,
                },
                [`& .${gaugeClasses.valueText}`]: {
                  display: 'none',
                },
              })}
              onClick={() => handleH1Click(3)}
            />
          </div>
        </div>
      </div>
    </div>

{/*6th conent*/}
<div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 5, marginTop: 10 }}>
        <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
      </div>
      <div style={{ marginTop: 20 }}>
        <label className="adi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'black' }}>Vani</label>
      </div>
      <div style={{ marginTop: 20 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 60, color: 'black' }}>Yes</label>
      </div>
      <div style={{ marginTop: 25 }}>
        <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
      </div>
      <div style={{ marginTop: 25 }}>
        <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
      </div>
      <div style={{ marginTop: 21 }}>
        <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5, color: 'black' }}>Chat</label>
      </div>
      {/* Piechart */}
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: 25, marginLeft: 50 }}>
            <Typography variant="h3" style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {settings.value}%
            </Typography>
          </div>
          <div style={{ fontSize: 50, marginTop: 10, marginLeft: 2 }}>
            <Gauge
              {...settings4}
              cornerRadius="30%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: 'blue',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: theme.palette.text.disabled,
                },
                [`& .${gaugeClasses.valueText}`]: {
                  display: 'none',
                },
              })}
              onClick={() => handleH1Click(3)}
            />
          </div>
        </div>
      </div>
    </div>





  </div>
</div>
</div>




      {/* second div */}
      <div style={{ width:570, height: 550,boxShadow: '0px 0px 5px black'}}>

        {showContent.h1Clicked[0] && 

              <>

              <div style={{padding:30}}>

                <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.75)', width:560,marginTop:-30}}>

                  <div style={{ width: 500 }}>
                    <div style={{marginTop:50}}>
                      <Gauge
                        {...settings1}
                        cornerRadius="20%"
                        sx={(theme) => ({
                          [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 40,
                          },
                          [`& .${gaugeClasses.valueArc}`]: {
                            fill: 'red',
                          },
                          [`& .${gaugeClasses.referenceArc}`]: {
                            fill: theme.palette.text.disabled,
                          },
                        })}
                      />
                     
                    </div>
                  </div>
                  {/*----------sidemater------*/}
                  <div style={{display:'grid'}}>
                    <div style={{padding:10,width:200,backgroundColor:'#B02694',textAlign:'center',borderRadius:20,margin:10,marginRight:15}}>
                      <h1 style={{fontSize:15,color:'white'}}>Received Applicatons</h1>
                      <h1 style={{fontSize:15,color:'white'}}>2000</h1>
                    </div>

                    <div style={{padding:10,margin:5,marginBottom:15,backgroundColor:'#87B026',textAlign:'center',borderRadius:20,marginRight:15}}>
                      <h1 style={{fontSize:15,color:'white'}}>Completed Applicatons</h1>
                      <h1 style={{fontSize:15,color:'white'}}>1700</h1>
                    </div>

                    <div style={{padding:10,marginBottom:15,backgroundColor:'#E4080A',textAlign:'center',borderRadius:20,marginRight:15}}>
                      <h1 style={{fontSize:15,color:'white'}}>Pendind Applicatons</h1>
                      <h1 style={{fontSize:15,color:'white'}} >300</h1>
                    </div>
                  </div>





                </div>

                <div style={{width:560,height:100,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,marginRight:10}}>
                  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
                  <label style={{paddingLeft:2}}>States</label>
                  <label  style={{paddingLeft:90}}>Device</label>
                  <label style={{paddingLeft:70}}>IP Address</label>
                  <label style={{paddingLeft:50}}>Time</label>
                  <label style={{paddingLeft:65}}>Status</label>
                  <hr/>
                  <label style={{paddingLeft:2}}>AndhraPradesh</label>
                  <label style={{paddingLeft:20}}>Windows</label>
                  <label style={{paddingLeft:60}}>326543</label>
                  <label style={{paddingLeft:70}}>2mints</label>
                  <label style={{paddingLeft:50}}>Active</label>
                </div>
                
                <div style={{width:560,height:100,marginTop:10,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,}}>
                  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
                  <label style={{paddingLeft:2}}>States</label>
                  <label  style={{paddingLeft:90}}>Device</label>
                  <label style={{paddingLeft:70}}>IP Address</label>
                  <label style={{paddingLeft:70}}>Time</label>
                  <label style={{paddingLeft:50}}>Status</label>
                  <hr/>
                  <label style={{paddingLeft:2}}>AndhraPradesh</label>
                  <label style={{paddingLeft:20}}>Windows</label>
                  <label style={{paddingLeft:70}}>326543</label>
                  <label style={{paddingLeft:80}}>2mints</label>
                  <label style={{paddingLeft:50}}>Active</label>
                  
                </div>
              </div>
              </>

        }
        {/*-------------sendo---------*/}
        {showContent.h1Clicked[1] && 
         <>

         <div style={{padding:30}}>

           <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.75)', width:560,marginTop:-30}}>

             <div style={{ width: 500 }}>
               <div style={{marginTop:50}}>
                 <Gauge
                   {...settingsa2}
                   cornerRadius="20%"
                   sx={(theme) => ({
                     [`& .${gaugeClasses.valueText}`]: {
                       fontSize: 40,
                     },
                     [`& .${gaugeClasses.valueArc}`]: {
                       fill: 'green',
                     },
                     [`& .${gaugeClasses.referenceArc}`]: {
                       fill: theme.palette.text.disabled,
                     },
                   })}
                 />
                
               </div>
             </div>
             {/*----------sidemater------*/}
             <div style={{display:'grid'}}>
               <div style={{padding:10,width:200,backgroundColor:'#B02694',textAlign:'center',borderRadius:20,margin:10,marginRight:15}}>
                 <h1 style={{fontSize:15,color:'white'}}>Received Applicatons</h1>
                 <h1 style={{fontSize:15,color:'white'}}>2000</h1>
               </div>

               <div style={{padding:10,margin:5,marginBottom:15,backgroundColor:'#87B026',textAlign:'center',borderRadius:20,marginRight:15}}>
                 <h1 style={{fontSize:15,color:'white'}}>Completed Applicatons</h1>
                 <h1 style={{fontSize:15,color:'white'}}>1700</h1>
               </div>

               <div style={{padding:10,marginBottom:15,backgroundColor:'#E4080A',textAlign:'center',borderRadius:20,marginRight:15}}>
                 <h1 style={{fontSize:15,color:'white'}}>Pendind Applicatons</h1>
                 <h1 style={{fontSize:15,color:'white'}} >300</h1>
               </div>
             </div>





           </div>

           <div style={{width:560,height:100,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,marginRight:10}}>
             <h1 style={{fontSize:15}}>Sign in Sessions</h1>
             <label style={{paddingLeft:2}}>States</label>
             <label  style={{paddingLeft:90}}>Device</label>
             <label style={{paddingLeft:70}}>IP Address</label>
             <label style={{paddingLeft:50}}>Time</label>
             <label style={{paddingLeft:65}}>Status</label>
             <hr/>
             <label style={{paddingLeft:2}}>AndhraPradesh</label>
             <label style={{paddingLeft:20}}>Windows</label>
             <label style={{paddingLeft:60}}>326543</label>
             <label style={{paddingLeft:70}}>2mints</label>
             <label style={{paddingLeft:50}}>Active</label>
           </div>
           
           <div style={{width:560,height:100,marginTop:10,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,}}>
             <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
             <label style={{paddingLeft:2}}>States</label>
             <label  style={{paddingLeft:90}}>Device</label>
             <label style={{paddingLeft:70}}>IP Address</label>
             <label style={{paddingLeft:70}}>Time</label>
             <label style={{paddingLeft:50}}>Status</label>
             <hr/>
             <label style={{paddingLeft:2}}>AndhraPradesh</label>
             <label style={{paddingLeft:20}}>Windows</label>
             <label style={{paddingLeft:70}}>326543</label>
             <label style={{paddingLeft:80}}>2mints</label>
             <label style={{paddingLeft:50}}>Active</label>
             
           </div>
         </div>
         </>

        }
        {/*---------third---------*/}
        {showContent.h1Clicked[2] && 
       
       <>

       <div style={{padding:30}}>

         <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.75)', width:560,marginTop:-30}}>

           <div style={{ width: 500 }}>
             <div style={{marginTop:50}}>
               <Gauge
                 {...settingsb3}
                 cornerRadius="20%"
                 sx={(theme) => ({
                   [`& .${gaugeClasses.valueText}`]: {
                     fontSize: 40,
                   },
                   [`& .${gaugeClasses.valueArc}`]: {
                     fill: 'yellow',
                   },
                   [`& .${gaugeClasses.referenceArc}`]: {
                     fill: theme.palette.text.disabled,
                   },
                 })}
               />
              
             </div>
           </div>
           {/*----------sidemater------*/}
           <div style={{display:'grid'}}>
             <div style={{padding:10,width:200,backgroundColor:'#B02694',textAlign:'center',borderRadius:20,margin:10,marginRight:15}}>
               <h1 style={{fontSize:15,color:'white'}}>Received Applicatons</h1>
               <h1 style={{fontSize:15,color:'white'}}>2000</h1>
             </div>

             <div style={{padding:10,margin:5,marginBottom:15,backgroundColor:'#87B026',textAlign:'center',borderRadius:20,marginRight:15}}>
               <h1 style={{fontSize:15,color:'white'}}>Completed Applicatons</h1>
               <h1 style={{fontSize:15,color:'white'}}>1700</h1>
             </div>

             <div style={{padding:10,marginBottom:15,backgroundColor:'#E4080A',textAlign:'center',borderRadius:20,marginRight:15}}>
               <h1 style={{fontSize:15,color:'white'}}>Pendind Applicatons</h1>
               <h1 style={{fontSize:15,color:'white'}} >300</h1>
             </div>
           </div>





         </div>

         <div style={{width:560,height:100,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,marginRight:10}}>
           <h1 style={{fontSize:15}}>Sign in Sessions</h1>
           <label style={{paddingLeft:2}}>States</label>
           <label  style={{paddingLeft:90}}>Device</label>
           <label style={{paddingLeft:70}}>IP Address</label>
           <label style={{paddingLeft:50}}>Time</label>
           <label style={{paddingLeft:65}}>Status</label>
           <hr/>
           <label style={{paddingLeft:2}}>AndhraPradesh</label>
           <label style={{paddingLeft:20}}>Windows</label>
           <label style={{paddingLeft:60}}>326543</label>
           <label style={{paddingLeft:70}}>2mints</label>
           <label style={{paddingLeft:50}}>Active</label>
         </div>
         
         <div style={{width:560,height:100,marginTop:10,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,}}>
           <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
           <label style={{paddingLeft:2}}>States</label>
           <label  style={{paddingLeft:90}}>Device</label>
           <label style={{paddingLeft:70}}>IP Address</label>
           <label style={{paddingLeft:70}}>Time</label>
           <label style={{paddingLeft:50}}>Status</label>
           <hr/>
           <label style={{paddingLeft:2}}>AndhraPradesh</label>
           <label style={{paddingLeft:20}}>Windows</label>
           <label style={{paddingLeft:70}}>326543</label>
           <label style={{paddingLeft:80}}>2mints</label>
           <label style={{paddingLeft:50}}>Active</label>
           
         </div>
       </div>
       </>

         }

        {/*---------four----------*/}
        {showContent.h1Clicked[3] && 

<>

<div style={{padding:30}}>

  <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.75)', width:560,marginTop:-30}}>

    <div style={{ width: 500 }}>
      <div style={{marginTop:50}}>
        <Gauge
          {...settingsc4}
          cornerRadius="20%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 40,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: 'blue',
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />
       
      </div>
    </div>
    {/*----------sidemater------*/}
    <div style={{display:'grid'}}>
      <div style={{padding:10,width:200,backgroundColor:'#B02694',textAlign:'center',borderRadius:20,margin:10,marginRight:15}}>
        <h1 style={{fontSize:15,color:'white'}}>Received Applicatons</h1>
        <h1 style={{fontSize:15,color:'white'}}>2000</h1>
      </div>

      <div style={{padding:10,margin:5,marginBottom:15,backgroundColor:'#87B026',textAlign:'center',borderRadius:20,marginRight:15}}>
        <h1 style={{fontSize:15,color:'white'}}>Completed Applicatons</h1>
        <h1 style={{fontSize:15,color:'white'}}>1700</h1>
      </div>

      <div style={{padding:10,marginBottom:15,backgroundColor:'#E4080A',textAlign:'center',borderRadius:20,marginRight:15}}>
        <h1 style={{fontSize:15,color:'white'}}>Pendind Applicatons</h1>
        <h1 style={{fontSize:15,color:'white'}} >300</h1>
      </div>
    </div>





  </div>

  <div style={{width:560,height:100,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,marginRight:10}}>
    <h1 style={{fontSize:15}}>Sign in Sessions</h1>
    <label style={{paddingLeft:2}}>States</label>
    <label  style={{paddingLeft:90}}>Device</label>
    <label style={{paddingLeft:70}}>IP Address</label>
    <label style={{paddingLeft:50}}>Time</label>
    <label style={{paddingLeft:65}}>Status</label>
    <hr/>
    <label style={{paddingLeft:2}}>AndhraPradesh</label>
    <label style={{paddingLeft:20}}>Windows</label>
    <label style={{paddingLeft:60}}>326543</label>
    <label style={{paddingLeft:70}}>2mints</label>
    <label style={{paddingLeft:50}}>Active</label>
  </div>
  
  <div style={{width:560,height:100,marginTop:10,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,}}>
    <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
    <label style={{paddingLeft:2}}>States</label>
    <label  style={{paddingLeft:90}}>Device</label>
    <label style={{paddingLeft:70}}>IP Address</label>
    <label style={{paddingLeft:70}}>Time</label>
    <label style={{paddingLeft:50}}>Status</label>
    <hr/>
    <label style={{paddingLeft:2}}>AndhraPradesh</label>
    <label style={{paddingLeft:20}}>Windows</label>
    <label style={{paddingLeft:70}}>326543</label>
    <label style={{paddingLeft:80}}>2mints</label>
    <label style={{paddingLeft:50}}>Active</label>
    
  </div>
</div>
</>

                }
        {/*---------------five---------*/}
        {showContent.h1Clicked[4] && 
        
        <>

        <div style={{padding:30}}>

          <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.75)', width:560,marginTop:-30}}>

            <div style={{ width: 500 }}>
              <div style={{marginTop:50}}>
                <Gauge
                  {...settingsd5}
                  cornerRadius="20%"
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 40,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: 'pink',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: theme.palette.text.disabled,
                    },
                  })}
                />
               
              </div>
            </div>
            {/*----------sidemater------*/}
            <div style={{display:'grid'}}>
              <div style={{padding:10,width:200,backgroundColor:'#B02694',textAlign:'center',borderRadius:20,margin:10,marginRight:15}}>
                <h1 style={{fontSize:15,color:'white'}}>Received Applicatons</h1>
                <h1 style={{fontSize:15,color:'white'}}>2000</h1>
              </div>

              <div style={{padding:10,margin:5,marginBottom:15,backgroundColor:'#87B026',textAlign:'center',borderRadius:20,marginRight:15}}>
                <h1 style={{fontSize:15,color:'white'}}>Completed Applicatons</h1>
                <h1 style={{fontSize:15,color:'white'}}>1700</h1>
              </div>

              <div style={{padding:10,marginBottom:15,backgroundColor:'#E4080A',textAlign:'center',borderRadius:20,marginRight:15}}>
                <h1 style={{fontSize:15,color:'white'}}>Pendind Applicatons</h1>
                <h1 style={{fontSize:15,color:'white'}} >300</h1>
              </div>
            </div>





          </div>

          <div style={{width:560,height:100,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,marginRight:10}}>
            <h1 style={{fontSize:15}}>Sign in Sessions</h1>
            <label style={{paddingLeft:2}}>States</label>
            <label  style={{paddingLeft:90}}>Device</label>
            <label style={{paddingLeft:70}}>IP Address</label>
            <label style={{paddingLeft:50}}>Time</label>
            <label style={{paddingLeft:65}}>Status</label>
            <hr/>
            <label style={{paddingLeft:2}}>AndhraPradesh</label>
            <label style={{paddingLeft:20}}>Windows</label>
            <label style={{paddingLeft:60}}>326543</label>
            <label style={{paddingLeft:70}}>2mints</label>
            <label style={{paddingLeft:50}}>Active</label>
          </div>
          
          <div style={{width:560,height:100,marginTop:10,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,}}>
            <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
            <label style={{paddingLeft:2}}>States</label>
            <label  style={{paddingLeft:90}}>Device</label>
            <label style={{paddingLeft:70}}>IP Address</label>
            <label style={{paddingLeft:70}}>Time</label>
            <label style={{paddingLeft:50}}>Status</label>
            <hr/>
            <label style={{paddingLeft:2}}>AndhraPradesh</label>
            <label style={{paddingLeft:20}}>Windows</label>
            <label style={{paddingLeft:70}}>326543</label>
            <label style={{paddingLeft:80}}>2mints</label>
            <label style={{paddingLeft:50}}>Active</label>
            
          </div>
        </div>
        </>

        }
        {/*------------six-----------*/}
        {showContent.h1Clicked[5] && 
         <>

         <div style={{padding:30}}>

           <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.75)', width:560,marginTop:-30}}>

             <div style={{ width: 500 }}>
               <div style={{marginTop:50}}>
                 <Gauge
                   {...settingse6}
                   cornerRadius="20%"
                   sx={(theme) => ({
                     [`& .${gaugeClasses.valueText}`]: {
                       fontSize: 40,
                     },
                     [`& .${gaugeClasses.valueArc}`]: {
                       fill: 'red',
                     },
                     [`& .${gaugeClasses.referenceArc}`]: {
                       fill: theme.palette.text.disabled,
                     },
                   })}
                 />
                
               </div>
             </div>
             {/*----------sidemater------*/}
             <div style={{display:'grid'}}>
               <div style={{padding:10,width:200,backgroundColor:'#B02694',textAlign:'center',borderRadius:20,margin:10,marginRight:15}}>
                 <h1 style={{fontSize:15,color:'white'}}>Received Applicatons</h1>
                 <h1 style={{fontSize:15,color:'white'}}>2000</h1>
               </div>

               <div style={{padding:10,margin:5,marginBottom:15,backgroundColor:'#87B026',textAlign:'center',borderRadius:20,marginRight:15}}>
                 <h1 style={{fontSize:15,color:'white'}}>Completed Applicatons</h1>
                 <h1 style={{fontSize:15,color:'white'}}>1700</h1>
               </div>

               <div style={{padding:10,marginBottom:15,backgroundColor:'#E4080A',textAlign:'center',borderRadius:20,marginRight:15}}>
                 <h1 style={{fontSize:15,color:'white'}}>Pendind Applicatons</h1>
                 <h1 style={{fontSize:15,color:'white'}} >300</h1>
               </div>
             </div>





           </div>

           <div style={{width:560,height:100,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,marginRight:10}}>
             <h1 style={{fontSize:15}}>Sign in Sessions</h1>
             <label style={{paddingLeft:2}}>States</label>
             <label  style={{paddingLeft:90}}>Device</label>
             <label style={{paddingLeft:70}}>IP Address</label>
             <label style={{paddingLeft:50}}>Time</label>
             <label style={{paddingLeft:65}}>Status</label>
             <hr/>
             <label style={{paddingLeft:2}}>AndhraPradesh</label>
             <label style={{paddingLeft:20}}>Windows</label>
             <label style={{paddingLeft:60}}>326543</label>
             <label style={{paddingLeft:70}}>2mints</label>
             <label style={{paddingLeft:50}}>Active</label>
           </div>
           
           <div style={{width:560,height:100,marginTop:10,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,}}>
             <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
             <label style={{paddingLeft:2}}>States</label>
             <label  style={{paddingLeft:90}}>Device</label>
             <label style={{paddingLeft:70}}>IP Address</label>
             <label style={{paddingLeft:70}}>Time</label>
             <label style={{paddingLeft:50}}>Status</label>
             <hr/>
             <label style={{paddingLeft:2}}>AndhraPradesh</label>
             <label style={{paddingLeft:20}}>Windows</label>
             <label style={{paddingLeft:70}}>326543</label>
             <label style={{paddingLeft:80}}>2mints</label>
             <label style={{paddingLeft:50}}>Active</label>
             
           </div>
         </div>
         </>

        
        }

        {/*---------seven----------*/}
        {showContent.h1Clicked[6] && 
        
        <>

              <div style={{padding:30}}>

                <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.75)', width:560,marginTop:-30}}>

                  <div style={{ width: 500 }}>
                    <div style={{marginTop:50}}>
                      <Gauge
                        {...settingsf7}
                        cornerRadius="20%"
                        sx={(theme) => ({
                          [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 40,
                          },
                          [`& .${gaugeClasses.valueArc}`]: {
                            fill: 'skyblue',
                          },
                          [`& .${gaugeClasses.referenceArc}`]: {
                            fill: theme.palette.text.disabled,
                          },
                        })}
                      />
                     
                    </div>
                  </div>
                  {/*----------sidemater------*/}
                  <div style={{display:'grid'}}>
                    <div style={{padding:10,width:200,backgroundColor:'#B02694',textAlign:'center',borderRadius:20,margin:10,marginRight:15}}>
                      <h1 style={{fontSize:15,color:'white'}}>Received Applicatons</h1>
                      <h1 style={{fontSize:15,color:'white'}}>2000</h1>
                    </div>

                    <div style={{padding:10,margin:5,marginBottom:15,backgroundColor:'#87B026',textAlign:'center',borderRadius:20,marginRight:15}}>
                      <h1 style={{fontSize:15,color:'white'}}>Completed Applicatons</h1>
                      <h1 style={{fontSize:15,color:'white'}}>1700</h1>
                    </div>

                    <div style={{padding:10,marginBottom:15,backgroundColor:'#E4080A',textAlign:'center',borderRadius:20,marginRight:15}}>
                      <h1 style={{fontSize:15,color:'white'}}>Pendind Applicatons</h1>
                      <h1 style={{fontSize:15,color:'white'}} >300</h1>
                    </div>
                  </div>





                </div>

                <div style={{width:560,height:100,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,marginRight:10}}>
                  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
                  <label style={{paddingLeft:2}}>States</label>
                  <label  style={{paddingLeft:90}}>Device</label>
                  <label style={{paddingLeft:70}}>IP Address</label>
                  <label style={{paddingLeft:50}}>Time</label>
                  <label style={{paddingLeft:65}}>Status</label>
                  <hr/>
                  <label style={{paddingLeft:2}}>AndhraPradesh</label>
                  <label style={{paddingLeft:20}}>Windows</label>
                  <label style={{paddingLeft:60}}>326543</label>
                  <label style={{paddingLeft:70}}>2mints</label>
                  <label style={{paddingLeft:50}}>Active</label>
                </div>
                
                <div style={{width:560,height:100,marginTop:10,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginLeft:10,}}>
                  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
                  <label style={{paddingLeft:2}}>States</label>
                  <label  style={{paddingLeft:90}}>Device</label>
                  <label style={{paddingLeft:70}}>IP Address</label>
                  <label style={{paddingLeft:70}}>Time</label>
                  <label style={{paddingLeft:50}}>Status</label>
                  <hr/>
                  <label style={{paddingLeft:2}}>AndhraPradesh</label>
                  <label style={{paddingLeft:20}}>Windows</label>
                  <label style={{paddingLeft:70}}>326543</label>
                  <label style={{paddingLeft:80}}>2mints</label>
                  <label style={{paddingLeft:50}}>Active</label>
                  
                </div>
              </div>
              </>

        }
      </div>
    </div>
  );
};

export default App;
