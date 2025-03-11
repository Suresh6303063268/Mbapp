import React from 'react'
import Typography from '@mui/material/Typography';


import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contact.css';





import team30 from '../images/mbfooter.png';
import team from '../images/mblogo1.png';
import team31 from '../images/ic (1).png';
import team32 from '../images/ic (2).png';
import team33 from '../images/ic (3).png';
import team34 from '../images/ic (4).png';









function fotter() {
  return (
    <div className='fotter'            style={{backgroundImage: `url(${team30})`,height:870,marginTop:150}}>
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



       

  
  )
}

export default fotter
