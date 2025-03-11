import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../images/Mbforgot1.png';

import '../css/Mbforgot.css';

const P1 = () => {
  
 
  const [name, setName] = useState('');

  const [errors, setErrors] = useState({});



  

  const handleSignIn = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Email id is required';
    }
   
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with sign-in logic
      console.log('Sign in successful');
      // Redirect to another page
    }
  };

  

  return (
    <div  style={{ display: 'flex', cursor: 'pointer',marginLeft:150}}>
      {/* body 1 side */}
      <div className='body5'>
        {/* margin for signin */}
        <div style={{ marginTop:100, marginLeft: 90,borderRadius:20,width:400,height:450,backgroundColor:'white'}}>
          <h2 style={{ paddingTop:100,paddingLeft:100,fontSize:20,fontWeight:'bold'}}>Forgot Password?</h2>
          <p style={{ paddingLeft:60}}>Enter your email to reset your password</p>
          <br />
          
          {/* input 1 */}
          <div>
            <input
            className='fold6'
              style={{ width: 300, height:45, borderRadius: 5,marginLeft:50,boxShadow:'0px 0px 5px black'}}
              type='text'
              placeholder='Please enter your email address'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
             {errors.name && <p style={{ color: 'red',marginLeft:50}}>{errors.name}</p>}
          </div>
         
   
        
          
          <br></br>
      
          {/* subit */}
          <button
            style={{ width: 300, height:40, borderRadius: 10, border: 'none', fontSize: 18, fontWeight: 1000,marginLeft:50,background:'#ff0066',color:'white',boxShadow:'0px 0px 5px black',marginTop:-20}}
            onClick={handleSignIn}
          >
            Submit
          </button>
          <br></br>
          <br></br>
          {/*back button*/}
          <Link to="/mblogin">      <button  style={{ width: 300, height:40, borderRadius: 10, border: 'none', fontSize: 18, fontWeight: 1000,marginLeft:50,background:'#00ccff',boxShadow:'0px 0px 5px black'}}>Back</button>  </Link>
         
          
        </div>
      </div>
      {/* body2 image on right side */}
      <div className='body4'>
        <img style={{ width: 350, height: 500, marginTop: 80, marginLeft: 120,borderRadius:80}} src={Img1} alt='Img1' />
      </div>
    </div>
  );
}

export default P1;
