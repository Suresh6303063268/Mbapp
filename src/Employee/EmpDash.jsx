import React from 'react';
import Piechart from '../Employee/Empdash1.jsx';

function piechart() {
  return (
    <div style={{width:900}}>
      <div>
      <div style={{display:'flex',marginTop:50,marginLeft:50}}>

        <div style={{backgroundColor:'darkblue',width:450,height:120,marginLeft:50,borderRadius:10,boxShadow:'0px 0px 10px black'}}>
          <h1 style={{color:'white',fontSize:20,paddingLeft:70,paddingTop:30}}>Hey, Good Morning <span style={{fontSize:20,textDecoration:'underline',color:'red',fontWeight:'bold'}}>Surya</span></h1>
          <h1 style={{color:'white',fontSize:20,paddingLeft:70}}>Welcome <span style={{fontSize:15}}>To Dashboard</span></h1>
        </div>


        <div style={{backgroundColor:'#061d78',width:400,height:120,marginLeft:20,borderRadius:10,boxShadow:'0px 0px 10px black'}}>
          <h1 style={{color:'white',fontSize:20,paddingLeft:70,fontWeight:'bold',paddingTop:30}}>Total Received Applications</h1>
          <h1 style={{fontSize:25,color:'darkorange',paddingLeft:155,marginTop:10}}>200</h1>
        </div>

      </div>
      {/*---------------piechart --------------*/}
      <div style={{marginLeft:100}}>
      <div>
        <Piechart/>
      </div>
      </div>
      
      
      
    </div>

    </div>
      )
}

export default piechart
