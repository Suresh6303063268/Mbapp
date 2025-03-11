import React, { useState, useEffect } from 'react';
import '../css/mbchat.css'; // Import your CSS file
import Img1 from '../images/ps1.jpeg';
import Img2 from '../images/ps3.jpeg';
import Img3 from '../images/refer1.jpeg';
import Dash1 from './Dash1.jsx';
import Img4 from '../images/mbchat1.jpg';
import Img5 from '../images/mbchat2.jpg';
import Img6 from '../images/mbchat3.jpg';
import Img7 from '../images/mbchat4.jpg';
import Img8 from '../images/mbchat5.jpg';
import Img9 from '../images/mbchat6.jpg';
import Img10 from '../images/mbchat7.jpg';
import Ic1 from '@mui/icons-material/CropOriginal';
import Ic2 from '@mui/icons-material/SendSharp';
import Ic3 from '@mui/icons-material/SummarizeSharp';
import SearchIcon from '@mui/icons-material/Search';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState('London'); // Default active tab

  // Function to handle tab click
  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  useEffect(() => {
    // On component mount, click the default tab (London)
    document.getElementById('defaultOpen').click();
  }, []);

  const openFiles = () => {
    // Logic to open files on the laptop goes here
    console.log('Opening files on the laptop...');
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.click();
  };

  return (
    <div>
      <Dash1 />
      <div style={{ backgroundColor: '#dbd9da', height: 900, marginTop: 80 }}>
        {/* Left top tabs and online ones */}
        <div className="Ltab"   style={{boxShadow: '0px 0px 5px black'}}>
          <p style={{ paddingLeft: 20, color: 'darkblue', fontSize:25, marginTop: 10,fontWeight:'bold'}}>Messages</p>
          <div style={{ position: 'relative', display: 'inline-block',marginLeft:70}}>
  <input
    className='fold5'
    style={{
      width: 300,
      height: 50,
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 10,
      border: '1px solid #c9ced1',
      color: 'white',
      boxShadow: '0px 0px 5px black',
      background: 'darkblue',
      paddingRight: '40px' // Make space for the icon
    }}
    type='search'
    placeholder='Search'
  />
  <SearchIcon
    style={{
      fontSize: 30,
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'white'
    }}
  />
</div>

          <br />
          <br />
          <img
            src={Img1}
            alt='Img1'
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20 }}
            className={activeTab === 'London' ? 'tablinks active' : 'tablinks'}
            onClick={() => openCity('London')}
            id="defaultOpen"
          />
          <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20,color:'#33cccc'}}/>
          <img
            src={Img2}
            alt='Img2'
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 10 }}
            className={activeTab === 'deva' ? 'tablinks active' : 'tablinks'}
            onClick={() => openCity('deva')}
          />
              <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20,color:'#33cccc'}}/>
          <img
            src={Img3}
            alt='Img3'
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 10 }}
            className={activeTab === 'raki' ? 'tablinks active' : 'tablinks'}
            onClick={() => openCity('raki')}
          />
              <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20,color:'#33cccc'}}/>
           <img
            src={Img1}
            alt='Img3'
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 10 }}
            className={activeTab === 'mani' ? 'tablinks active' : 'tablinks'}
            onClick={() => openCity('mani')}
          />
              <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20,color:'#33cccc'}}/>
           <img
            src={Img2}
            alt='Img3'
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 10 }}
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={() => openCity('Paris')}
          />
              <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20,color:'#33cccc'}}/>
           <img
            src={Img1}
            alt='Img3'
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 10 }}
            className={activeTab === 'Priy' ? 'tablinks active' : 'tablinks'}
            onClick={() => openCity('Priy')}
          />
              <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20,color:'#33cccc'}}/>
           <img
            src={Img3}
            alt='Img3'
            style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 10, background:'green'}}
            className={activeTab === 'siva' ? 'tablinks active' : 'tablinks'}
            onClick={() => openCity('siva')}
          />
              <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20,color:'#33cccc'}}/>
          <hr />
          {/* New messages and left tabs buttons */}
          <div style={{ marginLeft: 20 }}>
            <label style={{ color: 'darkblue', fontSize:20,fontWeight:'bold'}}>New Messages(7)</label>
            <label style={{ color: 'darkblue', paddingLeft: 100,fontSize:20,fontWeight:'bold'}}>Groups(1)</label>
          </div>
          {/* 1st user */}
          <br />
            <div style={{ height: '500px', overflowX: 'hidden', overflowY: 'auto' }}>
          <div className={activeTab === 'London' ? 'Ltablinks active' : 'Ltablinks'} onClick={() => openCity('London')} id="defaultOpen">
            <img src={Img1} alt='Img1' style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20,marginTop:15}} />
            <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20, color:'#33cccc'}}/>
            <p style={{ marginLeft:120, marginTop: -50, width: 150,fontWeight:'bold', color:'black',lineHeight:1.5}}>AP123XXXXX <br/>how are you?</p>
            <div style={{ width: 40, height: 40, backgroundColor: '#0d9ae0', color: 'white', borderRadius: 50, marginLeft:370, marginTop: -70 }}>
              <p style={{ padding:9,marginLeft:-3}}>100</p>
              <p style={{color:'black',marginTop:-20,paddingLeft:6}}>7:35</p>
            </div>
          </div>
          {/* 2nd user */}
          {/* 3rd user */}
          <br />
          <div className={activeTab === 'Paris' ? 'Ltablinks active' : 'Ltablinks'} onClick={() => openCity('Paris')} id="defaultOpen">
            <img src={Img2} alt='Img1' style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20,marginTop:15}} />
            <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20, color:'#33cccc'}}/>
            <p style={{ marginLeft:120, marginTop: -50, width: 150,fontWeight:'bold', color:'black',lineHeight:1.5}}>AP123XXXXX <br/>how are you?</p>
            <div style={{ width: 40, height: 40, backgroundColor: '#0d9ae0', color: 'white', borderRadius: 50, marginLeft:370, marginTop: -70 }}>
            <p style={{ padding:9,marginLeft:-3}}>100</p>
            <p style={{color:'black',marginTop:-20,paddingLeft:6}}>7:35</p>
            </div>
          </div>
          <br />
          <div className={activeTab === 'Priy' ? 'Ltablinks active' : 'Ltablinks'} onClick={() => openCity('Priy')} id="defaultOpen">
            <img src={Img2} alt='Img1' style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20,marginTop:15}} />
            <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20, color:'#33cccc'}}/>
            <p style={{ marginLeft:120, marginTop: -50, width: 150,fontWeight:'bold', color:'black',lineHeight:1.5}}>AP123XXXXX <br/>how are you?</p>
            <div style={{ width: 40, height: 40, backgroundColor: '#0d9ae0', color: 'white', borderRadius: 50, marginLeft:370, marginTop: -70 }}>
            <p style={{ padding:9,marginLeft:-3}}>100</p>
            <p style={{color:'black',marginTop:-20,paddingLeft:6}}>7:35</p>
            </div>
          </div>
          <br />
          <div className={activeTab === 'siva' ? 'Ltablinks active' : 'Ltablinks'} onClick={() => openCity('siva')} id="defaultOpen">
            <img src={Img2} alt='Img1' style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20,marginTop:15}} />
            <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20, color:'#33cccc'}}/>
            <p style={{ marginLeft:120, marginTop: -50, width: 150,fontWeight:'bold', color:'black',lineHeight:1.5}}>AP123XXXXX <br/>how are you?</p>
            <div style={{ width: 40, height: 40, backgroundColor: '#0d9ae0', color: 'white', borderRadius: 50, marginLeft:370, marginTop: -70 }}>
            <p style={{ padding:9,marginLeft:-3}}>100</p>
            <p style={{color:'black',marginTop:-20,paddingLeft:6}}>7:35</p>
            </div>
          </div>
          <br />
          <div className={activeTab === 'mani' ? 'Ltablinks active' : 'Ltablinks'} onClick={() => openCity('mani')} id="defaultOpen">
            <img src={Img2} alt='Img1' style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20,marginTop:15}} />
            <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20, color:'#33cccc'}}/>
            <p style={{ marginLeft:120, marginTop: -50, width: 150,fontWeight:'bold', color:'black',lineHeight:1.5}}>AP123XXXXX <br/>how are you?</p>
            <div style={{ width: 40, height: 40, backgroundColor: '#0d9ae0', color: 'white', borderRadius: 50, marginLeft:370, marginTop: -70 }}>
            <p style={{ padding:9,marginLeft:-3}}>100</p>
            <p style={{color:'black',marginTop:-20,paddingLeft:6}}>7:35</p>
            </div>
          </div>
          <br />
          <div className={activeTab === 'raki' ? 'Ltablinks active' : 'Ltablinks'} onClick={() => openCity('raki')} id="defaultOpen">
            <img src={Img2} alt='Img1' style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20,marginTop:15}} />
            <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20, color:'#33cccc'}}/>
            <p style={{ marginLeft:120, marginTop: -50, width: 150,fontWeight:'bold', color:'black',lineHeight:1.5}}>AP123XXXXX <br/>how are you?</p>
            <div style={{ width: 40, height: 40, backgroundColor: '#0d9ae0', color: 'white', borderRadius: 50, marginLeft:370, marginTop: -70 }}>
            <p style={{ padding:9,marginLeft:-3}}>100</p>
            <p style={{color:'black',marginTop:-20,paddingLeft:6}}>7:35</p>
            </div>
          </div>
          <br />
          <div className={activeTab === 'deva' ? 'Ltablinks active' : 'Ltablinks'} onClick={() => openCity('deva')}>
            <img src={Img3} alt='Img3' style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20 }} />
            <FiberManualRecordIcon  style={{marginTop:40,marginLeft:-20,fontSize:20,color:'#33cccc'}}/>
            <p style={{ marginLeft:120, marginTop: -50, width: 150,fontWeight:'bold',color:'black',lineHeight:1.5}}>AP123XXXXX <br/>how are you?</p>
            <div style={{ width: 40, height: 40, backgroundColor: '#0d9ae0', color: 'white', borderRadius: 50, marginLeft:370, marginTop: -70 }}>
            <p style={{ padding:9,marginLeft:-3}}>100</p>
            <p style={{color:'black',marginTop:-20,paddingLeft:6}}>7:35</p>
            </div>
          </div>
        </div>





        </div>

        {/* All tab responses */}
        <div>
          {/* Response 1 starting */}
          <div style={{marginLeft:0,boxShadow: '0px 0px 5px black',width:600, height: 800}}     id="London" className={activeTab === 'London' ? 'Ltabcontent' : 'Ltabcontent hidden'}>
            {/* Background image */}
            <img style={{ width:600, height:800 }} src={Img6} alt='Img4' />
            {/* Content starting name */}
            <div style={{ marginTop: -780, marginLeft:10 }}>
              <button style={{ width:580,background: 'linear-gradient(to right, #66ccff 0%, #00ff99 100%)', border: 'none', borderRadius: 10, height: 70,   boxShadow: '0px 0px 5px black',}}>
                <img style={{ width:55, height:55, borderRadius: 50, marginLeft:-470, marginTop:7,boxShadow: '0px 0px 5px black',}} src={Img1} alt='Img1' />
                <p style={{ marginTop: -50, fontSize: 20, marginLeft: -280, color:'black',fontWeight:'bold'}}>Roopa</p>
                <p style={{ marginTop: -20, color: 'red', fontSize:15, marginLeft: -290,fontWeight:'bold'}}>Online</p>
              </button>
            </div>
            <button style={{ width: 520, height: 70, backgroundColor: 'white', marginTop: 620, marginLeft:40, border: 'none', borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
              <input
              className='fold5'
                style={{ marginLeft: -140, height:50, width:300, borderRadius: 20, marginTop:0, backgroundColor: '#0b5e85', border: 'none'}}
                type='text'
                placeholder='Type your message'
              />
              {/* Files */}
              <div style={{ marginLeft: 350,width: 40, height: 40 }}>
                <Ic1   onClick={openFiles} style={{ fontSize: 40, marginTop:-110, color:'green'}} />
              </div>
              {/* Documents */}
              <div style={{ marginLeft: 400, marginTop: -50, width: 40, height: 40 }}>
                <Ic3 onClick={openFiles} style={{ fontSize: 40, marginTop:-90, color:'#004d4d'}} />
              </div>
              {/* Send icon */}
              <div style={{ width: 50, height: 50, backgroundColor: '#0b5e85', color: 'white', marginLeft: 450, marginTop: -95, borderRadius: 50 }}>
                <Ic2 style={{ marginTop:10,fontSize:30,marginLeft:5}} />
              </div>
            </button>
            <div></div>

            {/* 3 box user details */}
            <div style={{ width:380, height: 800, marginLeft:600, marginTop: -780,boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top, #ff0066 0%, #66ffff 100%)'}}>
              {/* Border for name */}
              {/* Image for it */}
              <div>
              <img style={{ width: 100, height: 100, marginLeft:130, borderRadius: 50,marginTop:10,boxShadow: '0px 0px 5px black',}} src={Img1} alt='Img1' />
              <p style={{ paddingLeft:155, marginTop: -5, fontSize:20,fontWeight:'bold',color:'red'}}>Roopa</p>
              <p style={{ paddingLeft:135, marginTop: -15,fontSize:18,fontWeight:'bold',color:'white'}}>AP123XXXXX</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 100, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Share Files</p>
                <p style={{ paddingLeft:270, marginTop: -40, fontSize:18,fontWeight:'bold',color:'white'}}>View all</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 30, borderRadius: 10,boxShadow: '0px 0px 5px black'}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Shared Images</p>
              </div>
            </div>
          </div>
          <div style={{marginLeft:0,boxShadow: '0px 0px 5px black',width:600, height: 800}}     id="deva" className={activeTab === 'deva' ? 'Ltabcontent' : 'Ltabcontent hidden'}>
            {/* Background image */}
            <img style={{ width:600, height:800 }} src={Img4} alt='Img4' />
            {/* Content starting name */}
            <div style={{ marginTop: -780, marginLeft:10 }}>
              <button style={{ width:580,background: 'linear-gradient(to right, #66ccff 0%, #00ff99 100%)', border: 'none', borderRadius: 10, height: 70,   boxShadow: '0px 0px 5px black',}}>
                <img style={{ width: 50, height: 55, borderRadius: 55, marginLeft: -470, marginTop: 10 }} src={Img1} alt='Img1' />
                <p style={{ marginTop: -50, fontSize: 20, marginLeft: -280, color:'black',fontWeight:'bold'}}>Roopa</p>
                <p style={{ marginTop: -20, color: 'red', fontSize:15, marginLeft: -280,fontWeight:'bold'}}>Online</p>
              </button>
            </div>
            <button style={{ width: 520, height: 70, backgroundColor: 'white', marginTop:620, marginLeft:40, border: 'none', borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
              <input
              className='fold5'
                style={{ marginLeft: -140, height:50, width:300, borderRadius: 20, marginTop:0, backgroundColor: '#0b5e85', border: 'none', color:'white'}}
                type='text'
                placeholder='Type your message'
              />
              {/* Files */}
              <div style={{ marginLeft: 350,width: 40, height: 40 }}>
                <Ic1   onClick={openFiles} style={{ fontSize: 40, marginTop:-110, color:'green'}} />
              </div>
              {/* Documents */}
              <div style={{ marginLeft: 400, marginTop: -50, width: 40, height: 40 }}>
                <Ic3 onClick={openFiles} style={{ fontSize: 40, marginTop:-90, color:'#004d4d'}} />
              </div>
              {/* Send icon */}
              <div style={{ width: 50, height: 50, backgroundColor: '#0b5e85', color: 'white', marginLeft: 450, marginTop: -95, borderRadius: 50 }}>
                <Ic2 style={{ marginTop:10,fontSize:30,marginLeft:5}} />
              </div>
            </button>
            <div></div>

            {/* 3 box user details */}
            <div style={{ width:380, height: 800, marginLeft:600, marginTop: -780,boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top, #ff0066 0%, #66ffff 100%)'}}>
              {/* Border for name */}
              {/* Image for it */}
              <div>
              <img style={{ width: 100, height: 100, marginLeft:130, borderRadius: 50,marginTop:10,boxShadow: '0px 0px 5px black',}} src={Img1} alt='Img1' />
              <p style={{ paddingLeft:155, marginTop: -5, fontSize:20,fontWeight:'bold',color:'red'}}>Roopa</p>
              <p style={{ paddingLeft:135, marginTop: -15,fontSize:18,fontWeight:'bold',color:'white'}}>AP123XXXXX</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 100, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Share Files</p>
                <p style={{ paddingLeft:270, marginTop: -40, fontSize:18,fontWeight:'bold',color:'white'}}>View all</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 30, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Shared Images</p>
              </div>
            </div>
          </div>
{/* 3rd section*/}



<div style={{marginLeft:0,boxShadow: '0px 0px 5px black',width:600, height: 800}}     id="Paris" className={activeTab === 'Paris' ? 'Ltabcontent' : 'Ltabcontent hidden'}>
            {/* Background image */}
            <img style={{ width:600, height:800 }} src={Img5} alt='Img4' />
            {/* Content starting name */}
            <div style={{ marginTop: -780, marginLeft:10 }}>
              <button style={{ width:580,background: 'linear-gradient(to right, #66ccff 0%, #00ff99 100%)', border: 'none', borderRadius: 10, height: 70,   boxShadow: '0px 0px 5px black',}}>
                <img style={{ width: 50, height: 55, borderRadius: 55, marginLeft: -470, marginTop:8 }} src={Img1} alt='Img1' />
                <p style={{ marginTop: -50, fontSize: 20, marginLeft: -280, color:'black',fontWeight:'bold'}}>Roopa</p>
                <p style={{ marginTop: -20, color: 'red', fontSize:15, marginLeft: -280,fontWeight:'bold'}}>Online</p>
              </button>
            </div>
            <button style={{ width: 520, height: 70, backgroundColor: 'white', marginTop: 620, marginLeft: 40, border: 'none', borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
              <input
              className='fold5'
                style={{ marginLeft: -140, height:50, width:300, borderRadius: 20, marginTop:0, backgroundColor: '#0b5e85', border: 'none'}}
                type='text'
                placeholder='Type your message'
              />
              {/* Files */}
              <div style={{ marginLeft: 350,width: 40, height: 40 }}>
                <Ic1   onClick={openFiles} style={{ fontSize: 40, marginTop:-110, color:'green'}} />
              </div>
              {/* Documents */}
              <div style={{ marginLeft: 400, marginTop: -50, width: 40, height: 40 }}>
                <Ic3 onClick={openFiles} style={{ fontSize: 40, marginTop:-90, color:'#004d4d'}} />
              </div>
              {/* Send icon */}
              <div style={{ width: 50, height: 50, backgroundColor: '#0b5e85', color: 'white', marginLeft: 450, marginTop: -95, borderRadius: 50 }}>
                <Ic2 style={{ marginTop:10,fontSize:30,marginLeft:5}} />
              </div>
            </button>
            <div></div>

            {/* 3 box user details */}
            <div style={{ width:380, height: 800, marginLeft:600, marginTop: -780,boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top, #ff0066 0%, #66ffff 100%)'}}>
              {/* Border for name */}
              {/* Image for it */}
              <div>
              <img style={{ width: 100, height: 100, marginLeft:130, borderRadius: 50,marginTop:10,boxShadow: '0px 0px 5px black',}} src={Img1} alt='Img1' />
              <p style={{ paddingLeft:155, marginTop: -5, fontSize:20,fontWeight:'bold',color:'red'}}>Roopa</p>
              <p style={{ paddingLeft:135, marginTop: -15,fontSize:18,fontWeight:'bold',color:'white'}}>AP123XXXXX</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 100, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Share Files</p>
                <p style={{ paddingLeft:270, marginTop: -40, fontSize:18,fontWeight:'bold',color:'white'}}>View all</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 30, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Shared Images</p>
              </div>
            </div>
          </div>


{/*4th content*/}

<div style={{marginLeft:0,boxShadow: '0px 0px 5px black',width:600, height: 800}}     id="Priy" className={activeTab === 'Priy' ? 'Ltabcontent' : 'Ltabcontent hidden'}>
            {/* Background image */}
            <img style={{ width:600, height:800 }} src={Img7} alt='Img4' />
            {/* Content starting name */}
            <div style={{ marginTop: -780, marginLeft:10 }}>
              <button style={{ width:580,background: 'linear-gradient(to right, #66ccff 0%, #00ff99 100%)', border: 'none', borderRadius: 10, height: 70,   boxShadow: '0px 0px 5px black',}}>
                <img style={{ width: 55, height: 55, borderRadius: 50, marginLeft: -470, marginTop: 10 }} src={Img1} alt='Img1' />
                <p style={{ marginTop: -50, fontSize: 20, marginLeft: -280, color:'black',fontWeight:'bold'}}>Roopa</p>
                <p style={{ marginTop: -20, color: 'red', fontSize:15, marginLeft: -280,fontWeight:'bold'}}>Online</p>
              </button>
            </div>
            <button style={{ width: 520, height: 70, backgroundColor: 'white', marginTop: 620, marginLeft:40, border: 'none', borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
              <input
              className='fold5'
                style={{ marginLeft: -140, height:50, width:300, borderRadius: 20, marginTop:0, backgroundColor: '#0b5e85', border: 'none'}}
                type='text'
                placeholder='Type your message'
              />
              {/* Files */}
              <div style={{ marginLeft: 350,width: 40, height: 40 }}>
                <Ic1   onClick={openFiles} style={{ fontSize: 40, marginTop:-110, color:'green'}} />
              </div>
              {/* Documents */}
              <div style={{ marginLeft: 400, marginTop: -50, width: 40, height: 40 }}>
                <Ic3 onClick={openFiles} style={{ fontSize: 40, marginTop:-90, color:'#004d4d'}} />
              </div>
              {/* Send icon */}
              <div style={{ width: 50, height: 50, backgroundColor: '#0b5e85', color: 'white', marginLeft: 450, marginTop: -95, borderRadius: 50 }}>
                <Ic2 style={{ marginTop:10,fontSize:30,marginLeft:5}} />
              </div>
            </button>
            <div></div>

            {/* 3 box user details */}
            <div style={{ width:380, height: 800, marginLeft:600, marginTop: -780,boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top, #ff0066 0%, #66ffff 100%)'}}>
              {/* Border for name */}
              {/* Image for it */}
              <div>
              <img style={{ width: 100, height: 100, marginLeft:130, borderRadius: 50,marginTop:10,boxShadow: '0px 0px 5px black',}} src={Img1} alt='Img1' />
              <p style={{ paddingLeft:155, marginTop: -5, fontSize:20,fontWeight:'bold',color:'red'}}>Roopa</p>
              <p style={{ paddingLeft:135, marginTop: -15,fontSize:18,fontWeight:'bold',color:'white'}}>AP123XXXXX</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 100, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Share Files</p>
                <p style={{ paddingLeft:270, marginTop: -40, fontSize:18,fontWeight:'bold',color:'white'}}>View all</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 30, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Shared Images</p>
              </div>
            </div>
          </div>


{/*5th content*/}



<div style={{marginLeft:0,boxShadow: '0px 0px 5px black',width:600, height: 800}}     id="siva" className={activeTab === 'siva' ? 'Ltabcontent' : 'Ltabcontent hidden'}>
            {/* Background image */}
            <img style={{ width:600, height:800 }} src={Img8} alt='Img4' />
            {/* Content starting name */}
            <div style={{ marginTop: -780, marginLeft:10 }}>
              <button style={{ width:580,background: 'linear-gradient(to right, #66ccff 0%, #00ff99 100%)', border: 'none', borderRadius: 10, height: 70,   boxShadow: '0px 0px 5px black',}}>
                <img style={{ width: 55, height: 55, borderRadius: 50, marginLeft: -470, marginTop: 10 }} src={Img1} alt='Img1' />
                <p style={{ marginTop: -50, fontSize: 20, marginLeft: -280, color:'black',fontWeight:'bold'}}>Roopa</p>
                <p style={{ marginTop: -20, color: 'red', fontSize:15, marginLeft: -280,fontWeight:'bold'}}>Online</p>
              </button>
            </div>
            <button style={{ width: 520, height: 70, backgroundColor: 'white', marginTop: 620, marginLeft: 40, border: 'none', borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
              <input
              className='fold5'
                style={{ marginLeft: -140, height:50, width:300, borderRadius: 20, marginTop:0, backgroundColor: '#0b5e85', border: 'none'}}
                type='text'
                placeholder='Type your message'
              />
              {/* Files */}
              <div style={{ marginLeft: 350,width: 40, height: 40 }}>
                <Ic1   onClick={openFiles} style={{ fontSize: 40, marginTop:-110, color:'green'}} />
              </div>
              {/* Documents */}
              <div style={{ marginLeft: 400, marginTop: -50, width: 40, height: 40 }}>
                <Ic3 onClick={openFiles} style={{ fontSize: 40, marginTop:-90, color:'#004d4d'}} />
              </div>
              {/* Send icon */}
              <div style={{ width: 50, height: 50, backgroundColor: '#0b5e85', color: 'white', marginLeft: 450, marginTop: -95, borderRadius: 50 }}>
                <Ic2 style={{ marginTop:10,fontSize:30,marginLeft:5}} />
              </div>
            </button>
            <div></div>

            {/* 3 box user details */}
            <div style={{ width:380, height: 800, marginLeft:600, marginTop: -780,boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top, #ff0066 0%, #66ffff 100%)'}}>
              {/* Border for name */}
              {/* Image for it */}
              <div>
              <img style={{ width: 100, height: 100, marginLeft:130, borderRadius: 50,marginTop:10,boxShadow: '0px 0px 5px black',}} src={Img1} alt='Img1' />
              <p style={{ paddingLeft:155, marginTop: -5, fontSize:20,fontWeight:'bold',color:'red'}}>Roopa</p>
              <p style={{ paddingLeft:135, marginTop: -15,fontSize:18,fontWeight:'bold',color:'white'}}>AP123XXXXX</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 100, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Share Files</p>
                <p style={{ paddingLeft:270, marginTop: -40, fontSize:18,fontWeight:'bold',color:'white'}}>View all</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 30, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Shared Images</p>
              </div>
            </div>
          </div>


{/*6th content*/}


<div style={{marginLeft:0,boxShadow: '0px 0px 5px black',width:600, height: 800}}     id="mani" className={activeTab === 'mani' ? 'Ltabcontent' : 'Ltabcontent hidden'}>
            {/* Background image */}
            <img style={{ width:600, height:800 }} src={Img9} alt='Img4' />
            {/* Content starting name */}
            <div style={{ marginTop: -780, marginLeft:10 }}>
              <button style={{ width:580,background: 'linear-gradient(to right, #66ccff 0%, #00ff99 100%)', border: 'none', borderRadius: 10, height: 70,   boxShadow: '0px 0px 5px black',}}>
                <img style={{ width: 55, height: 55, borderRadius: 50, marginLeft: -470, marginTop: 10 }} src={Img1} alt='Img1' />
                <p style={{ marginTop: -50, fontSize: 20, marginLeft: -280, color:'black',fontWeight:'bold'}}>Roopa</p>
                <p style={{ marginTop: -20, color: 'red', fontSize:15, marginLeft: -280,fontWeight:'bold'}}>Online</p>
              </button>
            </div>
            <button style={{ width: 520, height: 70, backgroundColor: 'white', marginTop: 620, marginLeft:40, border: 'none', borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
              <input
              className='fold5'
                style={{ marginLeft: -140, height:50, width:300, borderRadius: 20, marginTop:0, backgroundColor: '#0b5e85', border: 'none'}}
                type='text'
                placeholder='Type your message'
              />
              {/* Files */}
              <div style={{ marginLeft: 350,width: 40, height: 40 }}>
                <Ic1   onClick={openFiles} style={{ fontSize: 40, marginTop:-110, color:'green'}} />
              </div>
              {/* Documents */}
              <div style={{ marginLeft: 400, marginTop: -50, width: 40, height: 40 }}>
                <Ic3 onClick={openFiles} style={{ fontSize: 40, marginTop:-90, color:'#004d4d'}} />
              </div>
              {/* Send icon */}
              <div style={{ width: 50, height: 50, backgroundColor: '#0b5e85', color: 'white', marginLeft: 450, marginTop: -95, borderRadius: 50 }}>
                <Ic2 style={{ marginTop:10,fontSize:30,marginLeft:5}} />
              </div>
            </button>
            <div></div>

            {/* 3 box user details */}
            <div style={{ width:380, height: 800, marginLeft:600, marginTop: -780,boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top, #ff0066 0%, #66ffff 100%)'}}>
              {/* Border for name */}
              {/* Image for it */}
              <div>
              <img style={{ width: 100, height: 100, marginLeft:130, borderRadius: 50,marginTop:10,boxShadow: '0px 0px 5px black',}} src={Img1} alt='Img1' />
              <p style={{ paddingLeft:155, marginTop: -5, fontSize:20,fontWeight:'bold',color:'red'}}>Roopa</p>
              <p style={{ paddingLeft:135, marginTop: -15,fontSize:18,fontWeight:'bold',color:'white'}}>AP123XXXXX</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 100, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Share Files</p>
                <p style={{ paddingLeft:270, marginTop: -40, fontSize:18,fontWeight:'bold',color:'white'}}>View all</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 30, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Shared Images</p>
              </div>
            </div>
          </div>



{/*7th content*/}

<div style={{marginLeft:0,boxShadow: '0px 0px 5px black',width:600, height: 800}}     id="raki" className={activeTab === 'raki' ? 'Ltabcontent' : 'Ltabcontent hidden'}>
            {/* Background image */}
            <img style={{ width:600, height:800 }} src={Img10} alt='Img4' />
            {/* Content starting name */}
            <div style={{ marginTop: -780, marginLeft:10 }}>
              <button style={{ width:580,background: 'linear-gradient(to right, #66ccff 0%, #00ff99 100%)', border: 'none', borderRadius: 10, height: 70,   boxShadow: '0px 0px 5px black',}}>
                <img style={{ width: 55, height: 55, borderRadius: 50, marginLeft: -470, marginTop: 10 }} src={Img1} alt='Img1' />
                <p style={{ marginTop: -50, fontSize: 20, marginLeft: -280, color:'black',fontWeight:'bold'}}>Roopa</p>
                <p style={{ marginTop: -20, color: 'red', fontSize:15, marginLeft: -280,fontWeight:'bold'}}>Online</p>
              </button>
            </div>
            <button style={{ width: 520, height: 70, backgroundColor: 'white', marginTop: 620, marginLeft:40, border: 'none', borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
              <input
              className='fold5'
                style={{ marginLeft: -140, height:50, width:300, borderRadius: 20, marginTop:0, backgroundColor: '#0b5e85', border: 'none'}}
                type='text'
                placeholder='Type your message'
              />
              {/* Files */}
              <div style={{ marginLeft: 350,width: 40, height: 40 }}>
                <Ic1   onClick={openFiles} style={{ fontSize: 40, marginTop:-110, color:'green'}} />
              </div>
              {/* Documents */}
              <div style={{ marginLeft: 400, marginTop: -50, width: 40, height: 40 }}>
                <Ic3 onClick={openFiles} style={{ fontSize: 40, marginTop:-90, color:'#004d4d'}} />
              </div>
              {/* Send icon */}
              <div style={{ width: 50, height: 50, backgroundColor: '#0b5e85', color: 'white', marginLeft: 450, marginTop: -95, borderRadius: 50 }}>
                <Ic2 style={{ marginTop:10,fontSize:30,marginLeft:5}} />
              </div>
            </button>
            <div></div>

            {/* 3 box user details */}
            <div style={{ width:380, height: 800, marginLeft:600, marginTop: -780,boxShadow: '0px 0px 5px black',background: 'linear-gradient(to top, #ff0066 0%, #66ffff 100%)'}}>
              {/* Border for name */}
              {/* Image for it */}
              <div>
              <img style={{ width: 100, height: 100, marginLeft:130, borderRadius: 50,marginTop:10,boxShadow: '0px 0px 5px black',}} src={Img1} alt='Img1' />
              <p style={{ paddingLeft:155, marginTop: -5, fontSize:20,fontWeight:'bold',color:'red'}}>Roopa</p>
              <p style={{ paddingLeft:135, marginTop: -15,fontSize:18,fontWeight:'bold',color:'white'}}>AP123XXXXX</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 100, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Share Files</p>
                <p style={{ paddingLeft:270, marginTop: -40, fontSize:18,fontWeight:'bold',color:'white'}}>View all</p>
              </div>
              <div style={{ border: '1px solid #d7dcde', width:350, marginLeft:15, height: 200, marginTop: 30, borderRadius: 10,boxShadow: '0px 0px 5px black',}}>
                <p style={{fontSize:18,fontWeight:'bold',paddingTop:10,color:'white',paddingLeft:20}}>Shared Images</p>
              </div>
            </div>
          </div>






{/* all sections closed*/}



        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
