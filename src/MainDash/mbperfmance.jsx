import React, { useState } from 'react';
import IMG1 from '../images/Mbprofile1.png';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import Typography from '@mui/material/Typography';
import '../css/mbpermance.css';
const Tab = () => {
  const [activeTab, setActiveTab] = useState('Ntab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };


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
    value: 88,
  };
  const settings7 = {
    width: 50,
    height: 50,
    value: 35,
  };



  //------------------
  const settingsa1 = {
    width: 250,
    height: 250,
    value: 100, // Corrected to a numerical value without %
    innerRadius:50,
    outerRadius:75,
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
    value: 35, // Corrected to a numerical value without %
    innerRadius: 50,
    outerRadius: 75,
  };

  return (

    
    <div className="Ntab-container" style={{ display: 'flex' , }}>
      
      <div className="Ntab-buttons" style={{ display: 'flex', flexDirection: 'column',}}>
      
      <div style={{ borderBottom: '1px solid grey', boxShadow: '0px 0px 5px black', height: 50, background: '#ff0066', marginLeft:10,marginTop:30,borderTopLeftRadius:10,borderTopRightRadius:10}}>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:50, color: 'white', paddingTop: 10 }}>Admin</label>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:70, color: 'white' }}>Active</label>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:50, color: 'white' }}>Contact</label>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:50, color: 'white' }}>Messages</label>
    <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:30, color: 'white' }}>Performance</label>
  </div>

       <div className="Ncontainer-tab-admin" style={{background:'white',boxShadow: '0px 0px 5px black',border:'none',marginLeft:10,marginTop:0,width:700, borderBottomRightRadius:10,borderbottomLeftRadius:10}}>

       
          <div style={{display:'flex'}}>
        <div style={{marginLeft:15,marginTop:10, display:'flex'}}>
            <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
            </div>

            <div style={{ marginTop: 20 }}>
              <label className="Nadi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10,color:'black'}}>Akhi</label>
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:80,color:'black'}}>Yes</label>
            </div>
            <div style={{ marginTop: 25 }}>
            <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
            </div>
            <div style={{ marginTop: 25 }}>
            <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
            </div>
            <div style={{ marginTop: 21 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5,color:'black'}}>Chat</label>
            </div>

            {/*----------- piechartdiv------ */}
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 25, marginLeft: 60 }}>
                  <Typography variant="h3" style={{  fontSize: '20px' }}>
                    {settings.value}%
                  </Typography>
                </div>
                <div style={{ fontSize: 50, marginTop: 10, marginLeft:2 }}>
               
          
        
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
                    
                    className={activeTab === 'Ntab1' ? 'active' : ''}
                    onClick={() => handleTabClick('Ntab1')}
                    style={{ padding: '10px', cursor: 'pointer', marginBottom: '5px' }}
                  />
                  
                </div>
              </div>
            </div>
            </div>
       {/*----------------Second_________________*/}
       
          <div style={{display:'flex'}}>
        <div style={{marginLeft:15,marginTop:10, display:'flex'}}>
            <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
            </div>

            <div style={{ marginTop: 20 }}>
              <label className="Nadi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10,color:'black'}}>Ramya</label>
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:60,color:'black'}}>Yes</label>
            </div>
            <div style={{ marginTop: 25 }}>
            <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
            </div>
            <div style={{ marginTop: 25 }}>
            <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
            </div>
            <div style={{ marginTop: 21 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5,color:'black'}}>Chat</label>
            </div>

            {/*----------- piechartdiv------ */}
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 25, marginLeft: 60 }}>
                  <Typography variant="h3" style={{  fontSize: '20px' }}>
                    {settings2.value}%
                  </Typography>
                </div>
                <div style={{ fontSize: 50, marginTop: 10, marginLeft:10 }}>
               
          
        
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
                    
                  
                    className={activeTab === 'Ntab2' ? 'active' : ''}
                    onClick={() => handleTabClick('Ntab2')}
                    style={{ padding: '10px', cursor: 'pointer', marginBottom: '5px', }}
                 
                 />
                  
                </div>
              </div>
            </div>
            </div>
      
       

{/*--------------Third------------------------------*/}
          <div style={{display:'flex'}}>
            <div style={{marginLeft:15,marginTop:10, display:'flex'}}>
            <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
            </div>

            <div style={{ marginTop: 20 }}>
              <label className="Nadi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10,color:'black'}}>Rani</label>
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:80,color:'black'}}>Yes</label>
            </div>
            <div style={{ marginTop: 25 }}>
            <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
            </div>
            <div style={{ marginTop: 25 }}>
            <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
            </div>
            <div style={{ marginTop: 21 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5,color:'black'}}>Chat</label>
            </div>

            {/*----------- piechartdiv------ */}
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 25, marginLeft:65 }}>
                  <Typography variant="h3" style={{  fontSize: '20px' }}>
                    {settings3.value}%
                  </Typography>
                </div>
                <div style={{ fontSize: 50, marginTop: 10,marginLeft:5}}>
               
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
                    
                  
                    className={activeTab === 'Ntab3' ? 'active' : ''}
                    onClick={() => handleTabClick('Ntab3')}
                    style={{ padding: '10px', cursor: 'pointer', marginBottom: '5px', }}
                 
                 /> 
                </div>
              </div>
            </div>
            </div>

{/*------------------four-------------------*/}


<div style={{display:'flex'}}>
            <div style={{marginLeft:15,marginTop:10, display:'flex'}}>
            <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
            </div>

            <div style={{ marginTop: 20 }}>
              <label className="Nadi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10,color:'black'}}>Kavya</label>
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:70,color:'black'}}>No</label>
            </div>
            <div style={{ marginTop: 25 }}>
            <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
            </div>
            <div style={{ marginTop: 25 }}>
            <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
            </div>
            <div style={{ marginTop: 21 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5,color:'black'}}>Chat</label>
            </div>

            {/*----------- piechartdiv------ */}
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 25, marginLeft:70 }}>
                  <Typography variant="h3" style={{  fontSize: '20px' }}>
                    {settings4.value}%
                  </Typography>
                </div>
                <div style={{ fontSize: 50, marginTop: 10, marginLeft:2 }}>
               
                  <Gauge

                    {...settings4}
                    cornerRadius="30%"
                    sx={(theme) => ({
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: 'pink',
                      },
                      [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                      },
                      [`& .${gaugeClasses.valueText}`]: {
                        display: 'none',
                      },
                    })}
                    
                  
                    className={activeTab === 'Ntab4' ? 'active' : ''}
                    onClick={() => handleTabClick('Ntab4')}
                    style={{ padding: '10px', cursor: 'pointer', marginBottom: '5px', }}
                 
                 /> 
                </div>
              </div>
            </div>
            </div>

{/*-----------------------------Five-------------------*/}
<div style={{display:'flex'}}>
            <div style={{marginLeft:15,marginTop:10, display:'flex'}}>
            <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
            </div>

            <div style={{ marginTop: 20 }}>
              <label className="Nadi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10,color:'black'}}>Revathi</label>
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:50,color:'black'}}>Yes</label>
            </div>
            <div style={{ marginTop: 25 }}>
            <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
            </div>
            <div style={{ marginTop: 25 }}>
            <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
            </div>
            <div style={{ marginTop: 21 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5,color:'black'}}>Chat</label>
            </div>

            {/*----------- piechartdiv------ */}
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 25, marginLeft:70 }}>
                  <Typography variant="h3" style={{  fontSize: '20px' }}>
                    {settings5.value}%
                  </Typography>
                </div>
                <div style={{ fontSize: 50, marginTop: 10, marginLeft:2 }}>
               
                  <Gauge

                    {...settings5}
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
                    
                  
                    className={activeTab === 'Ntab5' ? 'active' : ''}
                    onClick={() => handleTabClick('Ntab5')}
                    style={{ padding: '10px', cursor: 'pointer', marginBottom: '5px', }}
                 
                 /> 
                </div>
              </div>
            </div>
            </div>


{/*----------------six-------------------------------------*/}
<div style={{display:'flex'}}>
            <div style={{marginLeft:15,marginTop:10, display:'flex'}}>
            <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
            </div>

            <div style={{ marginTop: 20 }}>
              <label className="Nadi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10,color:'black'}}>Rada</label>
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft:70,color:'black'}}>Yes</label>
            </div>
            <div style={{ marginTop: 25 }}>
            <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
            </div>
            <div style={{ marginTop: 25 }}>
            <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
            </div>
            <div style={{ marginTop: 21 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5,color:'black'}}>Chat</label>
            </div>

            {/*----------- piechartdiv------ */}
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 25, marginLeft:70 }}>
                  <Typography variant="h3" style={{  fontSize: '20px' }}>
                    {settings6.value}%
                  </Typography>
                </div>
                <div style={{ fontSize: 50, marginTop: 10, marginLeft:2 }}>
               
                  <Gauge

                    {...settings6}
                    cornerRadius="30%"
                    sx={(theme) => ({
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: 'black',
                      },
                      [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                      },
                      [`& .${gaugeClasses.valueText}`]: {
                        display: 'none',
                      },
                    })}
                    
                  
                    className={activeTab === 'Ntab6' ? 'active' : ''}
                    onClick={() => handleTabClick('Ntab6')}
                    style={{ padding: '10px', cursor: 'pointer', marginBottom: '5px', }}
                 
                 /> 
                </div>
              </div>
            </div>
            </div>

{/*----------------Seven--------------------------------------*/}
<div style={{display:'flex'}}>
            <div style={{marginLeft:15,marginTop:10, display:'flex'}}>
            <img style={{ width: 50, height: 50, borderRadius: 50 }} src={IMG1} alt='' />
            </div>

            <div style={{ marginTop: 20 }}>
              <label className="Nadi-label" style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10,color:'black'}}>Akhila</label>
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 60,color:'black'}}>Yes</label>
            </div>
            <div style={{ marginTop: 25 }}>
            <PhoneIcon style={{ marginLeft: 80, color: 'darkgreen', fontSize: 30 }} />
            </div>
            <div style={{ marginTop: 25 }}>
            <SmsIcon style={{ color: 'darkblue', marginLeft: 80 }} />
            </div>
            <div style={{ marginTop: 21 }}>
              <label style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 5,color:'black'}}>Chart</label>
            </div>

            {/*----------- piechartdiv------ */}
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 25, marginLeft: 60 }}>
                  <Typography variant="h3" style={{  fontSize: '20px' }}>
                    {settings7.value}%
                  </Typography>
                </div>
                <div style={{ fontSize: 50, marginTop: 10, marginLeft:2 }}>
               
                  <Gauge

                    {...settings7}
                    cornerRadius="30%"
                    sx={(theme) => ({
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: 'skyblue',
                      },
                      [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                      },
                      [`& .${gaugeClasses.valueText}`]: {
                        display: 'none',
                      },
                    })}
                    
                  
                    className={activeTab === 'Ntab7' ? 'active' : ''}
                    onClick={() => handleTabClick('Ntab7')}
                    style={{ padding: '10px', cursor: 'pointer', marginBottom: '5px', }}
                 
                 /> 
                </div>
              </div>
            </div>
            </div>

      </div>
      </div>

{/*------------------------------------ side tabs start -----------------------------*/}

      <div className="Ntab-content" style={{ padding: '10px', marginLeft: '0px',flex: 1 }}>

        {activeTab === 'Ntab1' && 
        <div style={{marginTop:20}}>
          <div style={{padding:30,}}>

      <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 0px 5px black', width:420,marginTop:-30,borderTopLeftRadius:10,borderTopRightRadius:10}}>

      <div style={{ width:100 }}>
              <div style={{marginTop:50,marginLeft:-30}}>
              <Gauge
              {...settingsa1}
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
  <div style={{display:'grid',marginLeft:80}}>
    <div style={{padding:10,width:200,backgroundColor:'#B02694',textAlign:'center',borderRadius:20,margin:10,marginRight:15,boxShadow: '0px 0px 5px black'}}>
      <h1 style={{fontSize:15,color:'white'}}>Received Applicatons</h1>
      <h1 style={{fontSize:15,color:'white'}}>2000</h1>
    </div>

    <div style={{padding:10,margin:5,marginBottom:15,backgroundColor:'#87B026',textAlign:'center',borderRadius:20,marginRight:15,boxShadow: '0px 0px 5px black'}}>
      <h1 style={{fontSize:15,color:'white'}}>Completed Applicatons</h1>
      <h1 style={{fontSize:15,color:'white'}}>1700</h1>
    </div>

    <div style={{padding:10,marginBottom:15,backgroundColor:'#E4080A',textAlign:'center',borderRadius:20,marginRight:15,boxShadow: '0px 0px 5px black'}}>
      <h1 style={{fontSize:15,color:'white'}}>Pendind Applicatons</h1>
      <h1 style={{fontSize:15,color:'white'}} >300</h1>
    </div>
  </div>





</div>

<div style={{width:420,height:100,boxShadow: '0px 0px 5px black',marginLeft:0,marginRight:0,background:'#f2f2f2',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:40}}>
  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:50,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/>
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,paddingTop:-60,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,marginTop:-20,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>326543</label>
  <label style={{paddingLeft:20,fontSize:15,marginTop:-20,color:'black'}}>2mints</label>
  <label style={{paddingLeft:20,fontSize:15,paddingTop:-60,color:'black'}}>Active</label>
  </div>
</div>

<div style={{width:420,height:100,marginTop:30,boxShadow: '0px 0px 5px black',marginLeft:0,background:'#f2f2f2', borderTopLeftRadius:10,borderTopRightRadius:10}}>
  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:50,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/> 
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>326543</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>2mints</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>Active</label>
  </div>
</div>
</div>

        </div>
        }

  {/*---------------------------------secondTab-------------------*/}      
                {activeTab === 'Ntab2' && 
              <div style={{marginTop:20}}>
              <div style={{padding:30}}>

              <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 0px 5px black',width:420,marginTop:-30}}>

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

              <div style={{width:420,height:100,boxShadow: '0px 0px 5px black',marginLeft:0,marginRight:0,background:'#f2f2f2',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:40}}>
  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:50,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/>
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,paddingTop:-60,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,marginTop:-20,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,paddingTop:-60,color:'black'}}>Active</label>
  </div>
</div>

<div style={{width:420,height:100,marginTop:30,boxShadow: '0px 0px 5px black',marginLeft:0,background:'#f2f2f2', borderTopLeftRadius:10,borderTopRightRadius:10}}>
  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:50,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/> 
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,color:'black'}}>Active</label>
  </div>
</div>
              </div>

              </div>
        }

        {/*----------------------Third------------------------*/}
        {activeTab === 'Ntab3' && 
        
              <div style={{marginTop:20}}>
              <div style={{padding:30}}>

              <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 0px 5px black',width:420,marginTop:-30}}>

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

              <div style={{width:420,height:100,boxShadow: '0px 0px 5px black',marginLeft:0,marginRight:0,background:'#f2f2f2',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:40}}>
  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/>
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,paddingTop:-60,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,marginTop:-20,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,paddingTop:-60,color:'black'}}>Active</label>
  </div>
</div>

<div style={{width:420,height:100,marginTop:30,boxShadow: '0px 0px 5px black',marginLeft:0,background:'#f2f2f2', borderTopLeftRadius:10,borderTopRightRadius:10}}>
  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/> 
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,color:'black'}}>Active</label>
  </div>
</div>
              </div>

              </div>
        }
  {/*---------------------four------------------------*/}
        {activeTab === 'Ntab4' && 
        
             <div style={{marginTop:20}}>
              <div style={{padding:30}}>

              <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 0px 5px black',width:420,marginTop:-30}}>

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

              <div style={{width:420,height:100,boxShadow: '0px 0px 5px black',marginLeft:0,marginRight:0,background:'#f2f2f2',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:40}}>
  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/>
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,paddingTop:-60,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,marginTop:-20,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,paddingTop:-60,color:'black'}}>Active</label>
  </div>
</div>
<div style={{width:420,height:100,marginTop:30,boxShadow: '0px 0px 5px black',marginLeft:0,background:'#f2f2f2', borderTopLeftRadius:10,borderTopRightRadius:10}}>
  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/> 
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,color:'black'}}>Active</label>
  </div>
</div>
              </div>

              </div>
        }
    {/*----------------------five------------------------*/}

        {activeTab === 'Ntab5' && 
        <div style={{marginTop:20}}>
        <div style={{padding:30}}>

        <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 0px 5px black',width:420,marginTop:-30}}>

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

        <div style={{width:420,height:100,boxShadow: '0px 0px 5px black',marginLeft:0,marginRight:0,background:'#f2f2f2',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:40}}>
  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/>
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,paddingTop:-60,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,marginTop:-20,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,paddingTop:-60,color:'black'}}>Active</label>
  </div>
</div>

<div style={{width:420,height:100,marginTop:30,boxShadow: '0px 0px 5px black',marginLeft:0,background:'#f2f2f2', borderTopLeftRadius:10,borderTopRightRadius:10}}>
  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/> 
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,color:'black'}}>Active</label>
  </div>
</div>
        </div>
        </div>
        }

    {/*--------------------------six_________________*/}
        {activeTab === 'Ntab6' &&
        <div style={{marginTop:20}}>
        <div style={{padding:30}}>

        <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 0px 5px black',width:420,marginTop:-30}}>

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
          fill: 'black',
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

        <div style={{width:420,height:100,boxShadow: '0px 0px 5px black',marginLeft:0,marginRight:0,background:'#f2f2f2',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:40}}>
  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/>
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,paddingTop:-60,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,marginTop:-20,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,paddingTop:-60,color:'black'}}>Active</label>
  </div>
</div>

<div style={{width:420,height:100,marginTop:30,boxShadow: '0px 0px 5px black',marginLeft:0,background:'#f2f2f2', borderTopLeftRadius:10,borderTopRightRadius:10}}>
  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/> 
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,color:'black'}}>Active</label>
  </div>
</div>
        </div>

        </div>

        }
        {/*-----------------seven-----------------*/}
        {activeTab === 'Ntab7' && 
        <div style={{marginTop:20}}>
        <div style={{padding:30}}>

        <div style={{display: 'flex',backgroundColor:'#E9EEF4',borderRadius:10,boxShadow: '0px 0px 5px black',width:420,marginTop:-30}}>

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

        <div style={{width:420,height:100,boxShadow: '0px 0px 5px black',marginLeft:0,marginRight:0,background:'#f2f2f2',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:40}}>
  <h1 style={{fontSize:15}}>Sign in Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/>
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,paddingTop:-60,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,marginTop:-20,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,marginTop:-20,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,paddingTop:-60,color:'black'}}>Active</label>
  </div>
</div>

<div style={{width:420,height:100,marginTop:30,boxShadow: '0px 0px 5px black',marginLeft:0,background:'#f2f2f2', borderTopLeftRadius:10,borderTopRightRadius:10}}>
  <h1  style={{fontSize:15}}>Sign Out Sessions</h1>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>States</label>
  <label  style={{paddingLeft:40,fontSize:15,color:'black'}}>Device</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>IP Address</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>Time</label>
  <label style={{paddingLeft:15,fontSize:15,color:'black'}}>Status</label>
  <hr/> 
  <div style={{marginTop:-15}}>
  <label style={{paddingLeft:2,fontSize:15,color:'black'}}>AndhraPradesh</label>
  <label style={{paddingLeft:20,fontSize:15,color:'black'}}>Windows</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>326543</label>
  <label style={{paddingLeft:30,fontSize:15,color:'black'}}>2mints</label>
  <label style={{paddingLeft:10,fontSize:15,color:'black'}}>Active</label>
  </div>
</div>
        </div>

        </div>
        }

      </div>
       {/*------------------------endside divv-----------------------*/}
    </div>
  );
};

export default Tab;
