import React from 'react';
import Piechart from '../page/page1.jsx'

function piechart() {
  return (
    <div>
      <div>
      <div style={{display:'flex',marginTop:50,marginLeft:100}}>

        <div style={{backgroundColor:'darkblue',width:450,height:120,marginLeft:100,borderRadius:30,boxShadow:'0px 0px 10px black'}}>
          <h1 style={{color:'white',fontSize:20,paddingLeft:100,paddingTop:8}}>Hey, Good Morning <span style={{fontSize:20,textDecoration:'underline',color:'red',fontWeight:'bold'}}>BUNTY</span></h1>
          <h1 style={{color:'white',fontSize:20,paddingLeft:100}}>Welcome <span style={{fontSize:15}}>To Dashboard</span></h1>
        </div>


        <div style={{backgroundColor:'#061d78',width:400,height:120,marginLeft:20,borderRadius:30,boxShadow:'0px 0px 10px black'}}>
          <h1 style={{color:'white',fontSize:20,paddingLeft:70,fontWeight:'bold',paddingTop:15}}>Total Received Applications</h1>
          <h1 style={{fontSize:30,color:'darkorange',paddingLeft:155,marginTop:-10}}>200</h1>
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
