import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'



import team34 from '../images/upsc.png';
import team35 from '../images/sscgd.png';

import Header1 from './header1.jsx';
import Fotter from './fotter.jsx';
import '../css/notification.css';
const scrollpage2 = () => {
  return (
    <div>

<Header1/>
  
   




    <div style={{marginTop:200,marginLeft:350}}>
    <button  style={{marginLeft:20, height:50, width:200, borderRadius:15, fontSize:18, fontWeight: 'bold', cursor: 'pointer'}} className='applied'>Applied Jobs</button>
      <button  style={{marginLeft:20, height:50, width:200, borderRadius:15, fontSize:18, fontWeight: 'bold', cursor: 'pointer'}} className='admit'>Admit Card Release</button>
      <button  style={{marginLeft:20, height:50, width:150, borderRadius:15, fontSize:18, fontWeight: 'bold', cursor: 'pointer'}} className='answer'>Answer Key</button>
      <button  style={{marginLeft:20, height:50, width:150, borderRadius:15, fontSize:18, fontWeight: 'bold', cursor: 'pointer'}} className='results'>Results</button>
    </div>




<div style={{background: 'whitesmoke', height: 120,borderRadius:10,width:1000, marginLeft:250, marginTop: 50, border: '2px solid #555', boxShadow: '0px 2px 4px #555'}}>

<div style={{display: 'flex'}}>
<img src={team34} alt='' style={{height: 100, width: 150, marginLeft:-10, marginTop: 10}}/>

<div style={{marginLeft:0}}>
<h1 style={{fontSize: 20, width: 600,paddingTop:15}}>Applied UPSC Application Successfully</h1>
<h2 style={{fontSize:15}}>2024-06-11,  16:05:35</h2>
<a href='https://www.narendramodi.in/' style={{fontSize:18, color:'blue'}}>Check Status Of Your Application</a>
</div>

<RiDeleteBinLine style={{fontSize: 35, marginLeft:190, marginTop: 40, cursor: 'pointer'}}/>
</div>

</div>



<div style={{background: 'whitesmoke', height: 120,borderRadius:10,width:1000, marginLeft:250, marginTop: 20, border: '2px solid #555', boxShadow: '0px 2px 4px #555'}}>

<div style={{display: 'flex'}}>
<img src={team34} alt='' style={{height: 100, width: 150, marginLeft:-10, marginTop: 10}}/>

<div style={{marginLeft:0,paddingTop:15}}>
<h1 style={{fontSize: 20, width: 600}}>Applied UPSC Application Successfully</h1>
<h2 style={{fontSize:15}}>2024-06-11,  16:05:35</h2>
<a href='https://www.narendramodi.in/' style={{fontSize:18, color:'blue', fontWeight: 'normal'}}>Check Status Of Your Application</a>
</div>

<RiDeleteBinLine style={{fontSize: 35, marginLeft:190, marginTop: 40, cursor: 'pointer'}}/>
</div>

</div>









<div style={{background: 'whitesmoke', height: 120,borderRadius:10,width:1000, marginLeft:250, marginTop: 20, border: '2px solid #555', boxShadow: '0px 2px 4px #555'}}>

<div style={{display: 'flex'}}>
<img src={team35} alt='' style={{height: 100, width: 150, marginLeft:-10, marginTop:10}}/>

<div style={{marginLeft:0}}>
<h1 style={{fontSize: 20, width: 600,paddingTop:15}}>Applied UPSC Application Successfully</h1>
<h2 style={{fontSize:15}}>2024-06-11,  16:05:35</h2>
<a href='https://www.narendramodi.in/' style={{fontSize:18, color:'blue'}}>Check Status Of Your Application</a>
</div>

<RiDeleteBinLine style={{fontSize: 35, marginLeft:190, marginTop: 40, cursor: 'pointer'}}/>
</div>

</div>






<div style={{background: 'whitesmoke', height: 120,borderRadius:10,width:1000, marginLeft:250, marginTop: 20, border: '2px solid #555', boxShadow: '0px 2px 4px #555'}}>

<div style={{display: 'flex'}}>
<FiLogIn style={{fontSize: 60, marginLeft: 20, marginTop:20, paddingLeft: 20}}/>

<div style={{marginLeft: '10px'}}>
<h1 style={{fontSize: 25, fontWeight: 'bold', paddingLeft:40, paddingTop:10}}>Login Details</h1>
<h2 style={{fontSize:15, paddingLeft:40}}>2024-06-11  16:05:35</h2>
<p style={{fontSize: 19, paddingLeft:40 , marginTop: -3, width:600}}>Your Account is logged in 2024-06-11  16:05:35</p>
</div>

<RiDeleteBinLine style={{fontSize: 35, marginLeft: 230, marginTop: 40}}/>
</div>

</div>








<Fotter/>





 
      
    </div>
  )
}

export default scrollpage2;