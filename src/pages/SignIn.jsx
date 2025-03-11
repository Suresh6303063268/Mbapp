import React, { useState } from 'react';
import Signup from './Signup.jsx';
import Login from './login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css';
import '../css/signin.css';
















const SignUp = () => {


  





  


  

  

  

  

  const [activeTab, setActiveTab] = useState('London');

  const openCity = (event, cityName) => {
    setActiveTab(cityName);
  };




  


  




  
  

  

  // eslint-disable-next-line no-unused-vars
  
  return (
    <div>
    


        <div className='main'    style={{background: 'linear-gradient(to right, #006699 0%, #006666 100%)',height:1450,border:'none'}}>






      <div style={{border:'none', paddingTop:150,paddingLeft:200}}>
      <div style={{marginLeft:512, border:'none',background: 'linear-gradient(to left, #152D43 0%, #3572A9 0%)',width:500,height:60}}               className="tab">
        <button style={{textDecoration:'underline',width:180,borderRadius:5,height:70,color:'white',fontSize:20,fontWeight:'bold'}}         className={activeTab === 'London' ? 'tablinks active' : 'tablinks'} onClick={(e) => openCity(e, 'London')}>LOGIN</button>
        <button  style={{textDecoration:'underline',width:180,borderRadius:5,height:70,color:'white',fontSize:20,fontWeight:'bold',paddingTop:-10}}                        className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'} onClick={(e) => openCity(e, 'Paris')}>SIGNUP</button>
      </div>

      <div style={{border:'none',marginTop:-10}}            id="London" className={activeTab === 'London' ? 'tabcontent active' : 'tabcontent'}>
       <Login/>




















      </div>



{/* SignUp page */}


      <div style={{border:'none'}}                       id="Paris" className={activeTab === 'Paris' ? 'tabcontent active' : 'tabcontent'}>
     


        
<Signup/>










      </div>

    </div>






      


   


    </div>






{/* Footer Section*/}



  







    </div>
  );
};

export default SignUp;
