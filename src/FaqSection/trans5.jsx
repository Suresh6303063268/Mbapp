import React from 'react';

import '../css/trans.css';
function Payment() {
  return (
    <div>
      <h1 style={{fontSize:25,fontWeight:'bold',color:'#00a3cc',marginTop:30}}>Transaction History</h1>
      <div style={{display:'flex',backgroundColor:'#E2E2E2',width:800,marginLeft:300,boxShadow: '0px 0px 5px black',marginTop:30}}>
        <p style={{paddingLeft:70,fontSize:20,fontWeight:'bold',paddingTop:10}}>June 2024</p>
        <p style={{paddingLeft:550,fontWeight:'bold',paddingTop:10}}>₹3,120</p>
      </div>

      <div style={{marginTop:'40px',marginLeft:300,display:'grid'}}>



        <div style={{display:'flex'}}>
        <button className="adi-button1">Jio</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Jio Prepaid Recharges</p>
        <p style={{fontSize:16,paddingLeft:20}}>22 June 2024 at 2:15pm</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:320,paddingTop:40}}>₹1,000</p>
        </div>
        
        <div style={{display:'flex'}}>
        <button className="adi-button2">S</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Suresh Ampavilli</p>
        <p style={{fontSize:16,paddingLeft:20}}>21 June 2024 at 1:16pm</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:360,paddingTop:40}}>₹10000</p>
        </div>



        <div style={{display:'flex'}}>
        <button className="adi-button3">A</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Asi Roopa</p>
        <p style={{fontSize:16,paddingLeft:20}}>12 June 2024 at 1:12am</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:360,paddingTop:40}}>₹3000</p>
        </div>



        <div style={{display:'flex'}}>
        <button className="adi-button4">A</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Akila</p>
        <p style={{fontSize:16,paddingLeft:20}}>11 June 2024 at 10:12am</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:350,paddingTop:40}}>₹5200</p>
        </div>



        <div style={{display:'flex'}}>
        <button className="adi-button5">B</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Bhrgav</p>
        <p style={{fontSize:16,paddingLeft:20}}>11 June 2024 at 10:12am</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:350,paddingTop:40}}>₹730</p>
        </div>


        <div style={{display:'flex'}}>
        <button className="adi-button6">F</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Fathima</p>
        <p style={{fontSize:16,paddingLeft:20}}>19 June 2024 at 7:12am</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:360,paddingTop:40}}>₹480</p>
        </div>


        <div style={{display:'flex'}}>
        <button className="adi-button7">K</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Karthik</p>
        <p style={{fontSize:16,paddingLeft:20}}>11 June 2024 at 10:12am</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:350,paddingTop:40}}>₹8900</p>
        </div>



        <div style={{display:'flex'}}>
        <button className="adi-button8">R</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Revathi</p>
        <p style={{fontSize:16,paddingLeft:20}}>19 June 2024 at 3:pm</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:370,paddingTop:40}}>₹4500</p>
        </div>


        <div style={{display:'flex'}}>
        <button className="adi-button9">R</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Rani</p>
        <p style={{fontSize:16,paddingLeft:20}}>16 June 2024 at 4:12pm</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:360,paddingTop:40}}>₹70</p>
        </div>

        <div style={{display:'flex'}}>
        <button className="adi-button10">P</button>
        <div style={{marginLeft:100,marginTop:15}}>
        <p style={{fontSize:20,fontWeight:'bold',paddingLeft:20,paddingTop:10}}>Priya</p>
        <p style={{fontSize:16,paddingLeft:20}}>11 June 2024 at 10:12am</p>
        </div>
        <p style={{fontWeight:'bold',paddingLeft:350,paddingTop:40}}>₹100</p>
        </div>






      </div>
    </div>
  )
}

export default Payment
