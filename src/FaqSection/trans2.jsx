import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';



import team34 from '../images/upsc.png';
import team35 from '../images/sscgd.png';


import '../css/notification.css';
const scrollpage2 = () => {
  return (
    <div>


  
   

<div style={{marginLeft:670}}>
<Link to="/notification" style={{textDecoration:'none'}}>
      <button
      
        style={{
          background: 'linear-gradient(to left, #3399ff 0%, #00ffff 100%)',
          boxShadow: '0px 0px 10px black',
          width: '380px',
          height: '40px',
          border: 'none',
          color:'white',
          fontWeight:'bold',
          fontSize: '20px',
          marginLeft: '30px',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer',
        }}
        className=""
      >
       ALL ADMIT CARD RELEASE
      </button>
      </Link>

    </div>


    



<div style={{background: 'whitesmoke', height: 120,borderRadius:10,width:1150, marginLeft:140, marginTop: 50, border: '2px solid #555',boxShadow: '0px 0px 5px black'}}>
<Link to="/admitcard" style={{textDecoration:'none'}}>
<div style={{display: 'flex'}}>
<img src={team34} alt='' style={{height: 100, width: 150, marginLeft:-10, marginTop: 10}}/>

<div style={{marginLeft:0}}>
<h1 style={{fontSize: 20, width: 600,paddingTop:15,color:'black'}}>Applied UPSC Application Successfully</h1>
<h2 style={{fontSize:15,color:'black'}}>2024-06-11,  16:05:35</h2>
<a href='https://www.narendramodi.in/' style={{fontSize:18, color:'blue'}}>Check Status Of Your Application</a>
</div>


</div>
</Link>

</div>



<div style={{background: 'whitesmoke', height: 120,borderRadius:10,width:1150, marginLeft:140, marginTop: 20, border: '2px solid #555', boxShadow: '0px 2px 4px #555'}}>
<Link to="/admitcard" style={{textDecoration:'none'}}>
<div style={{display: 'flex'}}>
<img src={team34} alt='' style={{height: 100, width: 150, marginLeft:-10, marginTop: 10}}/>

<div style={{marginLeft:0,paddingTop:15}}>
<h1 style={{fontSize: 20, width: 600,color:'black'}}>Applied UPSC Application Successfully</h1>
<h2 style={{fontSize:15, color:'black'}}>2024-06-11,  16:05:35</h2>
<a href='https://www.narendramodi.in/' style={{fontSize:18, color:'blue', fontWeight: 'normal'}}>Check Status Of Your Application</a>
</div>

</div>
</Link>

</div>









<div style={{background: 'whitesmoke', height: 120,borderRadius:10,width:1150, marginLeft:140, marginTop: 20, border: '2px solid #555', boxShadow: '0px 2px 4px #555'}}>
<Link to="/admitcard" style={{textDecoration:'none'}}>
<div style={{display: 'flex'}}>
<img src={team35} alt='' style={{height: 100, width: 150, marginLeft:-10, marginTop:10}}/>

<div style={{marginLeft:0}}>
<h1 style={{fontSize: 20, width: 600,paddingTop:15,color:'black'}}>Applied UPSC Application Successfully</h1>
<h2 style={{fontSize:15, color:'black'}}>2024-06-11,  16:05:35</h2>
<a href='https://www.narendramodi.in/' style={{fontSize:18, color:'blue'}}>Check Status Of Your Application</a>
</div>


</div>
</Link>

</div>






<div style={{background: 'whitesmoke', height: 120,borderRadius:10,width:1150, marginLeft:140, marginTop: 20, border: '2px solid #555', boxShadow: '0px 2px 4px #555'}}>
<Link to="/admitcard" style={{textDecoration:'none'}}>
<div style={{display: 'flex'}}>
<FiLogIn style={{fontSize: 60, marginLeft: 20, marginTop:20, paddingLeft: 20, color:'black'}}/>

<div style={{marginLeft: '10px'}}>
<h1 style={{fontSize: 25, fontWeight: 'bold', paddingLeft:40, paddingTop:10,color:'black'}}>Login Details</h1>
<h2 style={{fontSize:15, paddingLeft:40, color:'black'}}>2024-06-11  16:05:35</h2>
<p style={{fontSize: 19, paddingLeft:40 , marginTop: -3, width:600}}>Your Account is logged in 2024-06-11  16:05:35</p>
</div>


</div>
</Link>

</div>














 
      
    </div>
  )
}

export default scrollpage2;