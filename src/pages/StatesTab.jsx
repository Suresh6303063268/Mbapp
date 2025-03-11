import React, { useState } from 'react';
import '../css/statetab.css';

const StatesTab = () => {

    const [activeTab, setActiveTab] = useState('');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };
  return (
    
    <div>
  <h1 style={{textAlign:'center',fontWeight:'bold', color:'#ff0066', marginTop:350,fontSize:28}}>OUR BRANCHES</h1>
    
    <div style={{border:'1px solid gray', height:530, width:1100, marginLeft:195, marginTop:80, borderRadius:10,boxShadow: '0px 0px 10px black',paddingLeft:-30}}>
        
        <div style={{justifyContent:'space-around', marginLeft:-20,marginTop:40}}>
            <ul style={{display: 'flex', justifyContent:'space-around', listStyleType:'none'}} 
            className='b-ul'>
                <li className={activeTab === 'tab1' ? 'active' : ''}
            onClick={() => handleTabClick('tab1')} >Andhra Pradesh</li>
                <li style={{width:180}}       className={activeTab === 'tab2' ? 'active' : ''}
             onClick={() => handleTabClick('tab2')}>Arunachla Pradesh</li>
                <li  className={activeTab === 'tab3' ? 'active' : ''}
            onClick={() => handleTabClick('tab3')} >Assam</li>
                <li className={activeTab === 'tab4' ? 'active' : ''}
            onClick={() => handleTabClick('tab4')} >Bihar</li>
                <li className={activeTab === 'tab5' ? 'active' : ''}
            onClick={() => handleTabClick('tab5')} >Chattisgarh</li>
            </ul>
        </div>

{/*----------------------------------------second------------------------------------*/}
<div style={{justifyContent:'space-around', marginLeft:-20,marginTop:30}}>
            <ul style={{display: 'flex', justifyContent:'space-around', listStyleType:'none'}} 
            className='b-ul'>
                <li className={activeTab === 'tab6' ? 'active' : ''}
            onClick={() => handleTabClick('tab6')}>Goa</li>
                <li style={{width:180}}            className={activeTab === 'tab7' ? 'active' : ''}
            onClick={() => handleTabClick('tab7')}>Gujarat</li>
                <li style={{width:180}}       className={activeTab === 'tab8' ? 'active' : ''}
            onClick={() => handleTabClick('tab8')}>Himachal Pradesh</li>
                <li className={activeTab === 'tab9' ? 'active' : ''}
            onClick={() => handleTabClick('tab9')}>Jharkhand</li>
                <li className={activeTab === 'tab10' ? 'active' : ''}
            onClick={() => handleTabClick('tab10')}>Karnataka</li>
            </ul>
</div>


{/*----------------------------------------third------------------------------------*/}
<div style={{justifyContent:'space-around', marginLeft:-20,marginTop:30}}>
            <ul style={{display: 'flex', justifyContent:'space-around', listStyleType:'none'}} 
            className='b-ul'>
                <li className={activeTab === 'tab11' ? 'active' : ''}
            onClick={() => handleTabClick('tab11')}>Kerala</li>
                <li className={activeTab === 'tab12' ? 'active' : ''}
            onClick={() => handleTabClick('tab12')}>Madhya Pradesh</li>
                <li className={activeTab === 'tab13' ? 'active' : ''}
            onClick={() => handleTabClick('tab13')}>Maharastra</li>
                <li className={activeTab === 'tab14' ? 'active' : ''}
            onClick={() => handleTabClick('tab14')}>Manipur</li>
                <li className={activeTab === 'tab15' ? 'active' : ''}
            onClick={() => handleTabClick('tab15')}>Meghalaya</li>
            </ul>

</div>

{/*------------------------------------------fourth------------------------------------*/}
<div style={{justifyContent:'space-around', marginLeft:-20,marginTop:30}}>
            <ul style={{display: 'flex', justifyContent:'space-around', listStyleType:'none'}} 
            className='b-ul'>
                <li className={activeTab === 'tab16' ? 'active' : ''}
            onClick={() => handleTabClick('tab16')}>Mizoram</li>
                <li className={activeTab === 'tab17' ? 'active' : ''}
            onClick={() => handleTabClick('tab17')}>Nagaland</li>
                <li className={activeTab === 'tab18' ? 'active' : ''}
            onClick={() => handleTabClick('tab18')}>Odhisa</li>
                <li className={activeTab === 'tab19' ? 'active' : ''}
            onClick={() => handleTabClick('tab19')}>Punjab</li>
                <li className={activeTab === 'tab20' ? 'active' : ''}
            onClick={() => handleTabClick('tab20')}>Rajasthan</li>
            </ul>

</div>

{/*----------------------------------------fivth------------------------------------*/}

<div style={{justifyContent:'space-around', marginLeft:-20,marginTop:30}}>
            <ul style={{display: 'flex', justifyContent:'space-around', listStyleType:'none'}} 
            className='b-ul'>
                <li className={activeTab === 'tab21' ? 'active' : ''}
            onClick={() => handleTabClick('tab21')}>Sikkim</li>
                <li className={activeTab === 'tab22' ? 'active' : ''}
            onClick={() => handleTabClick('tab22')}>Tamil Nadu</li>
                <li className={activeTab === 'tab23' ? 'active' : ''}
            onClick={() => handleTabClick('tab23')}>Telangana</li>
                <li className={activeTab === 'tab24' ? 'active' : ''}
            onClick={() => handleTabClick('tab24')}>Tripura</li>
                <li className={activeTab === 'tab25' ? 'active' : ''}
            onClick={() => handleTabClick('tab25')}>Uttar Pradesh</li>
            </ul>
  
</div>

 {/*----------------------------------------sixth------------------------------------*/}
 <div style={{justifyContent:'space-around', marginLeft:-10,marginTop:30}}>
            <ul style={{display: 'flex', listStyleType:'none'}} 
            className='b-ul'>
                <li style={{marginLeft:10}}   className={activeTab === 'tab26' ? 'active' : ''}
            onClick={() => handleTabClick('tab26')}>Uttarakhand</li>
                <li style={{marginLeft:38,}}   className={activeTab === 'tab27' ? 'active' : ''}
            onClick={() => handleTabClick('tab27')}>West Bengal</li>
                 <li style={{marginLeft:35}}   className={activeTab === 'tab28' ? 'active' : ''}
            onClick={() => handleTabClick('tab28')}>Haryana</li>
             <li style={{marginLeft:40}}   className={activeTab === 'tab29' ? 'active' : ''}
            onClick={() => handleTabClick('tab29')}>Manipur</li>
            </ul>

</div>

{/*--------------------------------------------- Details Section---------------------------------------------*/}
{/*-----------------------------------------------1) Andhra pradesh --------------------------------------*/}
<div>
{activeTab === 'tab1' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
    <p style={{ paddingTop:25,fontSize:18}}>1. Guntur</p>
    <p style={{ lineHeight:2.3,marginLeft:90,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>Kiran456@mbitsol.com</p>
    <p style={{ lineHeight:2,marginTop:10, marginRight:30}}>11-41,Radham Bazar, Kanagala<br/>,Cherukupalli,Guntur- 522003</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between', alignItems:'flex-start',marginLeft:90,paddingTop:15}}>
    <p style={{ paddingTop:25,fontSize:18}}>2: Vizag</p>
    <p style={{ lineHeight:2,marginLeft:95,marginTop:10}}>+91 8859-256234 (or) <br />+ 91 943-628-8885</p>
    <p style={{ paddingTop:10,marginRight:-30}}>Ravi123@mbitsol.com</p>
    <p style={{ lineHeight:2,textAlign:'justify',marginRight:30}}>28-3,Waltair main Road,Krishna<br/> Nagar,Vishakapatnam- 530003</p>
</div>
<hr />
<div style={{display:'flex',marginTop:-10,justifyContent:'space-between', alignItems:'flex-start',marginLeft:90,paddingTop:15}}>
    <p style={{ paddingTop:25,fontSize:18}}>3: Tirupati</p>
    <p style={{ lineHeight:2,marginLeft:65,marginTop:10}}>+91 89562-562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>surya002@mbitsol.com</p>
    <p style={{ lineHeight:2,textAlign:'justify',marginRight:50}}>1-51,Vinaykatemple,Balaji<br/>Colony,Tirupati- 522003</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between', alignItems:'flex-start',marginLeft:90,paddingTop:15}}>
    <p style={{paddingTop:25,fontSize:18}}>4: Nellore</p>
    <p style={{lineHeight:2,marginLeft:95,marginTop:10}}>+91 84582 - 562345 (or) <br />+ 91 97562 - 878800</p>
    <p style={{paddingTop:10,marginRight:-30}}>prakash159@mbitsol.com</p>
    <p style={{marginRight:30,lineHeight:2,textAlign:'justify'}}>10-138,Srihari Nagar,Vrc center,<br />Nellore- 5224002</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between', alignItems:'flex-start',marginLeft:90,paddingTop:15}}>
    <p style={{paddingTop:25,fontSize:18}}>5: kurnool</p>
    <p style={{ lineHeight:2,marginLeft:75,marginTop:10}}>+91 81262 - 564545 / <br />+ 91 96560 - 881800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>adhi753@mbitsol.com</p>
    <p style={{marginRight:30,lineHeight:2}}>12-41,Ms Nagar,Maddud Nagar,<br />Kurnool- 518002</p>
</div>


</div>
)}
</div>



{/*--------------------------------------------2:)  Arunanchal Pradesh------------------------------------*/}

<div>
{activeTab === 'tab2' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
    <p style={{ paddingTop:25,fontSize:18}}>1: Tezu</p>
    <p style={{ lineHeight:2,marginLeft:90,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>hozi14@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}> 11-29,holi moly, holy mountain,<br />Tezu 589456.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
    <p style={{ paddingTop:25,fontSize:18}}>2: Anjaw</p>
    <p style={{ lineHeight:2,marginLeft:70,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-20}}>sudhell@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}> 11-71,capital fort, knagrooo,<br />Cheupalli,Anjaw 589456.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
    <p style={{paddingTop:25, fontSize:18}}>3: Lohit</p>
    <p style={{ lineHeight:2,marginLeft:90,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>nariyo123@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}> 11-41,sea shore, lion seema ,<br />Lohit 589456.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
    <p style={{ paddingTop:25,fontSize:18}}>4: Shiyomi</p>
    <p style={{ lineHeight:2,marginLeft:60,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>Tola789@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}> 11-41,Radham Bazar, vatiko ,<br />Cherpallo,Shiyomi 589456.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
    <p style={{ paddingTop:25,fontSize:18}}>5: Longding</p>
    <p style={{ lineHeight:2,marginLeft:70,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>cobra124@mbitsol.com</p>
    <p style={{ lineHeight:2,marginRight:30}}> 11-41,Radham Bazar, kalloo,<br />Cherukupalli,Longding 589456.</p>
</div>


</div>
)}
</div>



{/*------------------------------------------------3) Assam -------------------------*/}
<div>
{activeTab === 'tab3' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>1: Bohari</p>
    <p style={{marginLeft:90,marginTop:10, lineHeight:2}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}>11-41,ceneus town,Barpeta,<br />Bohari, 578994</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>2: Bokajan</p>
    <p style={{ lineHeight:2,marginLeft:70,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:40}}>11-41,Area commity, karbi<br /> Anglong,Bokajan- 548713</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>3: Bokharat</p>
    <p style={{ lineHeight:2,marginLeft:75,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}>11-41,area commite, Golaghat,<br />Bokharat - 5784147.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>4: Bongaigaon</p>
    <p style={{ lineHeight:2,marginLeft:50,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}>11-41,Municipal , Bongaigaon,<br />Bongaigaon 549781.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>5: Hojai</p>
    <p style={{ lineHeight:2,marginLeft:85,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}>11-41,Radham Bazar, Hojai,<br />Hojai- 522259.</p>
</div>

</div>
)}
</div>



{/*---------------------------------------------- 4) Bihar---------------------------------------- */}

<div>
{activeTab === 'tab4' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>1: Gaya</p>
    <p style={{ lineHeight:2,marginLeft:85,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}> 11-41,Holy river, Goya,<br />Gaya - 5789412.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>2: Katihar</p>
    <p style={{ lineHeight:2,marginLeft:85,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-50}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}> 11-41,Radham, chapthahartha,<br/>railway center,Katihar- 522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>3: Buxar</p>
    <p style={{ lineHeight:2,marginLeft:85,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}> 11-41, Bazar, gajgur,district,<br />Buxar-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>4: Patna</p>
    <p style={{ lineHeight:2,marginLeft:85,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2,marginRight:30}}> 11-41,Patna , Bagalpur,Patna,<br />Patna -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10,justifyContent:'space-between',alignItems:'center',marginLeft:90,paddingTop:15}}>
<p style={{ paddingTop:25,fontSize:18}}>5: Chapra</p>
    <p style={{ lineHeight:2,marginLeft:85,marginTop:10}}>+91 89562 - 562345 (or) <br />+ 91 96562 - 888800</p>
    <p style={{ paddingTop:10,marginRight:-30}}>support@mbitsol.com</p>
    <p style={{ lineHeight:2, marginRight:30}}> 11-41, Chapra, Chapra,Cherukupalli,<br />Chapra -  522259.</p>
</div>

</div>
)}
</div>


{/*--------------------------------------------------5) Chatishgarh------------------------------------*/}

<div>
{activeTab === 'tab5' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Raipur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:95, lineHeight:2}}> 11-41,seeraj Bazar,<br /> vishal nagar,<br />Raipur -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Bhilaspur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:85, lineHeight:2}}> 11-41,ratanpur,<br /> koti palace,<br />Bhilaspur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Korba</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:95, lineHeight:2}}> 11-41,singh Bazar,<br /> Ambikapur,<br />Korba -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Jagdhalpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:85, lineHeight:2}}> 11-41,Radham Bazar,<br /> railway,chowk,<br />Jagdhalpur -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Bhilai</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:85, lineHeight:2}}> 11-41,Civic center,<br />siddu tea fort,<br />Bhilai -  522259.</p>
</div>

</div>
)}
</div>




{/*-----------------------------------------------6) Goa-----------------------------------------------------*/}

<div>
{activeTab === 'tab6' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Quepem</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Quepem Bazar,<br /> Quepem,Cherukupalli,<br />Quepem-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Manaji</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Manaji Bazar,<br /> Manaji,Cherukupalli,<br />Manaji-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Makusa</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Makusa Bazar,<br /> Makusa,Cherukupalli,<br />Makusa-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Bonda</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Bonda Bazar,<br /> Bonda,Cherukupalli,<br />Bonda-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Bichori</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Bichori Bazar,<br /> Bichori,Cherukupalli,<br />Bichori-  522259.</p>
</div>

</div>
)}
</div>



{/*---------------------------------------------------7) Gujarat----------------------------------------*/}

<div>
{activeTab === 'tab7' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex',marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Surat</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Surat Bazar,<br /> Surat,Cherukupalli,<br />Surat-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Patan</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Patan Bazar,<br /> Patan,Cherukupalli,<br />Patan -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Rajkot</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Rajkot Bazar,<br /> Rajkot,Cherukupalli,<br />Rajkot -  522259.</p>
    
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Ananand</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Ananand Bazar,<br /> Ananand,Cherukupalli,<br />Ananand-  522259.</p>
    
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Jamnagar</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Jamnagar Bazar,<br /> Jamnagar,Cherukupalli,<br />Jamnagar-  522259.</p>
    
</div>

</div>
)}
</div>



{/*-----------------------------------------8) Himachal Pradesh--------------------------------*/}

<div>
{activeTab === 'tab8' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Shimla</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Shimla Bazar,<br /> Shimla,Cherukupalli,<br />Shimla -  522259.</p>
</div>
<hr />
<div style={{display:'flex',marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Mandi</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Mandi Bazar,<br /> Mandi,Cherukupalli,<br />Mandi -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Kullu</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kullu Bazar,<br /> Kullu,Cherukupalli,<br />Kullu -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Chamba</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Chamba Bazar,<br /> Chamba,Cherukupalli,<br />Chamba -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Una</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Una Bazar,<br /> Una,Cherukupalli,<br />Una -  522259.</p>
</div>

</div>
)}
</div>


{/*------------------------------------------9) Jharkhand-------------------------------*/}

<div>
{activeTab === 'tab9' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Ranchi</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Ranchi Bazar,<br /> Ranchi,Cherukupalli,<br />Ranchi-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Bokaro</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Bokaro Bazar,<br /> Bokaro,Cherukupalli,<br />Bokaro -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Dhanbad</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Dhanbad Bazar,<br /> Dhanbad,Cherukupalli,<br />Dhanbad -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Chas</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Chas Bazar,<br /> Chas,Cherukupalli,<br />Chas -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Deeoghar</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Deeoghar Bazar,<br /> Deeoghar,Cherukupalli,<br />Deeoghar-  522259.</p>
</div>

</div>
)}
</div>




{/*---------------------------------------10) Karnataka-----------------------------------------*/}

<div>
{activeTab === 'tab10' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Banagalore</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Banagalore Bazar,<br /> Banagalore,Cherukupalli,<br />Banagalore-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Mysore</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Mysore Bazar,<br /> Mysore,Cherukupalli,<br />Mysore-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Dhargod</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Dhargod Bazar,<br /> Dhargod,Cherukupalli,<br />Dhargod -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Mangalore</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Mangalore Bazar,<br /> Mangalore,Cherukupalli,<br />Mangalore-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Deeoghar</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Radham Bazar,<br /> Kanagala,Cherukupalli,<br />Guntur,AP, India -  522259.</p>
</div>

</div>
)}
</div>



{/*------------------------------------------11) Kerala ------------------------ */}

<div>
{activeTab === 'tab11' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>


<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Kochi</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kochi Bazar,<br /> Kochi,Cherukupalli,<br />Kochi-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Kollam</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kollam Bazar,<br /> Kollam,Cherukupalli,<br />Kollam-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: kannur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,kannur Bazar,<br /> kannur,Cherukupalli,<br />kannur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Phrissur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Phrissur Bazar,<br /> Phrissur,Cherukupalli,<br />Phrissur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Kotaiyam</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kotaiyam Bazar,<br /> Kotaiyam,Cherukupalli,<br />Kotaiyam -  522259.</p>
</div>


</div>
)}
</div>



{/*---------------------------------------------12) MadhyaPradesh------------------------------*/}

<div>
{activeTab === 'tab12' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>


<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Bhopal</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Bhopal Bazar,<br /> Bhopal,Cherukupalli,<br />Bhopal -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Indoore</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Indoore Bazar,<br /> Indoore,Cherukupalli,<br />Indoore -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: jwalior</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,jwalior Bazar,<br /> jwalior,Cherukupalli,<br />jwalior -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Ujjain</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Ujjain Bazar,<br /> Ujjain,Cherukupalli,<br />Ujjain -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Jabalpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Jabalpur Bazar,<br /> Jabalpur,Cherukupalli,<br />Jabalpur -  522259.</p>
</div>


</div>
)}
</div>



{/*-----------------------------------13) Maharastra-----------------------------------*/}

<div>
{activeTab === 'tab13' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: mumbai</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,mumbai Bazar,<br /> mumbai,Cherukupalli,<br />mumbai -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Pune</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Pune Bazar,<br /> Pune,Cherukupalli,<br />Pune -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Nagpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Nagpur Bazar,<br /> Nagpur,Cherukupalli,<br />Nagpur -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Nasik</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Nasik Bazar,<br /> Nasik,Cherukupalli,<br />Nasik -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Sholapur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Sholapur Bazar,<br /> Sholapur,Cherukupalli,<br />Sholapur -  522259.</p>
</div>

</div>
)}
</div>




{/*-----------------------------------14) Manipur-----------------------------------*/}

<div>
{activeTab === 'tab14' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Sholapur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Sholapur Bazar,<br /> Sholapur,Cherukupalli,<br />Sholapur -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Sholapur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Sholapur Bazar,<br /> Sholapur,Cherukupalli,<br />Sholapur -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Sholapur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Sholapur Bazar,<br /> Sholapur,Cherukupalli,<br />Sholapur -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Sholapur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Sholapur Bazar,<br /> Sholapur,Cherukupalli,<br />Sholapur -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Sholapur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Sholapur Bazar,<br /> Sholapur,Cherukupalli,<br />Sholapur -  522259.</p>
</div>

</div>
)}
</div>




{/*--------------------------------------15) Meghalaya------------------------------------------*/}


<div>
{activeTab === 'tab15' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Shilong</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41, Shilong Bazar,<br /> Shilong,Cherukupalli,<br />Shilong -  522259.</p>
    
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Mairag</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Mairag Bazar,<br /> Mairag,Cherukupalli,<br />Mairag -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Nongstoin</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Nongstoin Bazar,<br /> Nongstoin,Cherukupalli,<br />Nongstoin -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Jowai</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Jowai Bazar,<br /> Jowai,Cherukupalli,<br />Jowai -  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Tura</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Tura Bazar,<br /> Tura,Cherukupalli,<br />Tura-  522259.</p>
</div>

</div>
)}
</div>




{/*-------------------------------------16) Mizoram-----------------------------------------*/}

<div>
{activeTab === 'tab16' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Aizawl</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Aizawl Bazar,<br /> Aizawl,Cherukupalli,<br />Aizawl-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Serchhip</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Serchhip Bazar,<br /> Serchhip,Cherukupalli,<br />Serchhip-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Siaha</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Siaha Bazar,<br /> Siaha,Cherukupalli,<br />Siaha-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Mamit</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Mamit Bazar,<br /> Mamit,Cherukupalli,<br />Mamit-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Darlawn</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Darlawn Bazar,<br /> Darlawn,Cherukupalli,<br />Darlawn-  522259.</p>
</div>

</div>
)}
</div>



{/*-----------------------------------17) Nagaland-------------------------------------------*/}

<div>
{activeTab === 'tab17' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Kohima</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kohima Bazar,<br /> Kohima,Cherukupalli,<br />Kohima-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Peren</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Peren Bazar,<br /> Peren,Cherukupalli,<br />Peren-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Wokha</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Wokha Bazar,<br /> Wokha,Cherukupalli,<br />Wokha-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Phek</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Phek Bazar,<br /> Phek,Cherukupalli,<br />Phek-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Jalukie</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Jalukie Bazar,<br /> Jalukie,Cherukupalli,<br />Jalukie-  522259.</p>
</div>

</div>
)}
</div>




{/*-----------------------------------18) Odhisha-------------------------------------*/}
<div>
{activeTab === 'tab18' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Cuttack</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Cuttack Bazar,<br /> Cuttack,Cherukupalli,<br />Cuttack-  522259.</p>
</div>
<hr />
<div style={{display:'flex',marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Puri</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Puri Bazar,<br /> Puri,Cherukupalli,<br />Puri-  522259.</p>
</div>
<hr />
<div style={{display:'flex',marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Balangir</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Balangir Bazar,<br /> Balangir,Cherukupalli,<br />Balangir-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Rourkela</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Rourkela Bazar,<br /> Rourkela,Cherukupalli,<br />Rourkela-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Bargarh</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Bargarh Bazar,<br /> Bargarh,Cherukupalli,<br />Bargarh-  522259.</p>
</div>

</div>
)}
</div>



{/*----------------------------------------19) Punjab-------------------------------------------*/}
<div>
{activeTab === 'tab19' && (
    <div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Hoshiarpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Hoshiarpur Bazar,<br /> Hoshiarpur,Cherukupalli,<br />Hoshiarpur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Amritsar</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Amritsar Bazar,<br /> Amritsar,Cherukupalli,<br />Amritsar-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Jalandhar</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Jalandhar Bazar,<br /> Jalandhar,Cherukupalli,<br />Jalandhar-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Bathindha</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Bathindha Bazar,<br /> Bathindha,Cherukupalli,<br />Bathindha-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Patiala</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Patiala Bazar,<br /> Patiala,Cherukupalli,<br />Patiala-  522259.</p>
</div>

</div>
)}
</div>




{/*-----------------------------------------20)Rajasthan----------------------------------------*/}
<div>
{activeTab === 'tab20' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex',marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Jaipur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Jaipur Bazar,<br /> Jaipur,Cherukupalli,<br />Jaipur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Udaipur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Udaipur Bazar,<br /> Udaipur,Cherukupalli,<br />Udaipur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Pali</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Pali Bazar,<br /> Pali,Cherukupalli,<br />Pali-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Jodhpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Jodhpur Bazar,<br /> Jodhpur,Cherukupalli,<br />Jodhpur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Kota</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kota Bazar,<br /> Kota,Cherukupalli,<br />Kota-  522259.</p>
</div>

</div>
)}
</div>




{/*---------------------------------21) Sihkhim----------------------------------------------*/}
<div>
{activeTab === 'tab21' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Gangtok</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Gangtok Bazar,<br /> Gangtok,Cherukupalli,<br />Gangtok-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Namchi</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Namchi Bazar,<br /> Namchi,Cherukupalli,<br />Namchi-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Kota</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kota Bazar,<br /> Kota,Cherukupalli,<br />Kota-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Kota</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kota Bazar,<br /> Kota,Cherukupalli,<br />Kota-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Kota</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kota Bazar,<br /> Kota,Cherukupalli,<br />Kota-  522259.</p>
</div>

</div>
)}
</div>



{/*--------------------------------------22)  TamilNadu-------------------------------*/}
<div>
{activeTab === 'tab22' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Chennai</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Chennai Bazar,<br /> Chennai,Cherukupalli,<br />Chennai-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Madurai</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Madurai Bazar,<br /> Madurai,Cherukupalli,<br />Madurai-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Coimbatore</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Coimbatore Bazar,<br /> Coimbatore,Cherukupalli,<br />Coimbatore-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Thanjavur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Thanjavur Bazar,<br /> Thanjavur,Cherukupalli,<br />Thanjavur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Sivaganga</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Sivaganga Bazar,<br /> Sivaganga,Cherukupalli,<br />Sivaganga-  522259.</p>
</div>

</div>
)}
</div>



{/*---------------------------------------23) Telangana-----------------------------------*/}
<div>
{activeTab === 'tab23' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Warangal</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Warangal Bazar,<br /> Warangal,Cherukupalli,<br />Warangal-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Adilabad</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Adilabad Bazar,<br /> Adilabad,Cherukupalli,<br />Adilabad-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Karimnagar</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Karimnagar Bazar,<br /> Karimnagar,Cherukupalli,<br />Karimnagar-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Medak</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Medak Bazar,<br /> Medak,Cherukupalli,<br />Medak-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Suryapet</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Suryapet Bazar,<br /> Suryapet,Cherukupalli,<br />Suryapet-  522259.</p>
</div>

</div>
)}
</div>



{/*-------------------------------------------24) Tripuara---------------------------------*/}
<div>
{activeTab === 'tab24' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Agartala</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Agartala Bazar,<br /> Agartala,Cherukupalli,<br />Agartala-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Belonia</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Belonia Bazar,<br /> Belonia,Cherukupalli,<br />Belonia-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Udaipur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Udaipur Bazar,<br /> Udaipur,Cherukupalli,<br />Udaipur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Kamalpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kamalpur Bazar,<br /> Kamalpur,Cherukupalli,<br />Kamalpur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Amarpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Amarpur Bazar,<br /> Amarpur,Cherukupalli,<br />Amarpur-  522259.</p>
</div>

</div>
)}
</div>





{/*---------------------------------------25) Uttar Pradesh----------------------------------*/}
<div>
{activeTab === 'tab25' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Lalitpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Lalitpur Bazar,<br /> Lalitpur,Cherukupalli,<br />Lalitpur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Lucknow</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Lucknow Bazar,<br /> Lucknow,Cherukupalli,<br />Lucknow-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Varanasi</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Varanasi Bazar,<br /> Varanasi,Cherukupalli,<br />Varanasi-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Agra</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Agra Bazar,<br /> Agra,Cherukupalli,<br />Agra-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Kanpur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kanpur Bazar,<br /> Kanpur,Cherukupalli,<br />Kanpur-  522259.</p>
</div>

</div>
)}
</div>



{/*-------------------------------------26)  Uttar khand---------------------------------*/}
<div>
{activeTab === 'tab26' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Nainital</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Nainital Bazar,<br /> Nainital,Cherukupalli,<br />Nainital-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Uttarkashi</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Uttarkashi Bazar,<br /> Uttarkashi,Cherukupalli,<br />Uttarkashi-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Rishikesh</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Rishikesh Bazar,<br /> Rishikesh,Cherukupalli,<br />Rishikesh-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Mussoorie</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Mussoorie Bazar,<br /> Mussoorie,Cherukupalli,<br />Mussoorie-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Ranikhet</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Ranikhet Bazar,<br /> Ranikhet,Cherukupalli,<br />Ranikhet-  522259.</p>
</div>

</div>
)}
</div>





{/*----------------------------------------27) West Bengal----------------------------------------------*/}

<div>
{activeTab === 'tab27' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Kolkata</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Kolkata Bazar,<br /> Kolkata,Cherukupalli,<br />Kolkata-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Malda</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Malda Bazar,<br /> Malda,Cherukupalli,<br />Malda-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Durgapur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Durgapur Bazar,<br /> Durgapur,Cherukupalli,<br />Durgapur-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Haldia</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Haldia Bazar,<br /> Haldia,Cherukupalli,<br />Haldia-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Howrah</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Howrah Bazar,<br /> Howrah,Cherukupalli,<br />Howrah-  522259.</p>
</div>

</div>
)}
</div>



{/*--------------------------------28) Haryana-----------------------------------------*/}
<div>
{activeTab === 'tab28' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Gurugram</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Gurugram Bazar,<br /> Gurugram,Cherukupalli,<br />Gurugram-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Karnal</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Karnal Bazar,<br /> Karnal,Cherukupalli,<br />Karnal-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Ambala</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Ambala Bazar,<br /> Ambala,Cherukupalli,<br />Ambala-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Palwal</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Palwal Bazar,<br /> Palwal,Cherukupalli,<br />Palwal-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Panipat</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Panipat Bazar,<br /> Panipat,Cherukupalli,<br />Panipat-  522259.</p>
</div>

</div>
)}
</div>




{/*---------------------------------------29) Manipur------------------------------------*/}
<div>
{activeTab === 'tab29' && (
<div style={{border:'1px solid black', height:700,marginTop:100, borderRadius:12}}>
<div style={{display: 'flex',color:'white', justifyContent:'space-around', background: 'rgba(11, 73, 111, 1)', borderTopLeftRadius:12, borderTopRightRadius:12,height:60}} >
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Branch Name</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold',marginLeft:-40}}>Phone Number</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Email Id</h1>
<h1 style={{fontSize:20, paddingTop:16, color:'white',fontWeight:'bold'}}>Address</h1>
</div>

<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>1: Imphal</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Imphal Bazar,<br /> Imphal,Cherukupalli,<br />Imphal-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>2: Moirang</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Moirang Bazar,<br /> Moirang,Cherukupalli,<br />Moirang-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>3: Andro</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Andro Bazar,<br /> Andro,Cherukupalli,<br />Andro-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>4: Lilong</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Lilong Bazar,<br /> Lilong,Cherukupalli,<br />Lilong-  522259.</p>
</div>
<hr />
<div style={{display:'flex', marginTop:-10}}>
    <p style={{paddingLeft:100, paddingTop:25,fontSize:18}}>5: Bishnupur</p>
    <p style={{paddingLeft:150, lineHeight:2}}>+91 89562 - 562345 / <br />+ 91 96562 - 888800</p>
    <p style={{paddingLeft:170, paddingTop:10}}>support@mbitsol.com</p>
    <p style={{paddingLeft:45, lineHeight:2}}> 11-41,Bishnupur Bazar,<br /> Bishnupur,Cherukupalli,<br />Bishnupur-  522259.</p>
</div>

</div>
)}
</div>





    </div>
    {/*-------------------------------- first div ends-------------------------------*/}



    {/*--------------------------------bottom section-------------------------------------*/}



    <div style={{border:'1px solid black', marginTop:780, width:1100, marginLeft:185,height:60,boxShadow: '0px 0px 5px black',paddingTop:15}}>


        <p style={{textAlign:'center',fontSize:20, fontWeight:600, fontFamily:'Poppins', 
        }}>Permanent Address : - 11-41,Radham Bazar, Kanagala,Cherukupalli,Guntur,AP, India -  522259.</p>
    </div>

      
    </div>
  )
}

export default StatesTab
