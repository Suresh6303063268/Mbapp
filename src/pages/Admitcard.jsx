import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlockIcon from '@mui/icons-material/Block';
import '../css/admit.css';
import Header1 from './header1.jsx';
import Fotter from './fotter.jsx';

function Admitcard() {
  const [currentAddress, setCurrentAddress] = useState('');
  const [spnInputFilled, setSpnInputFilled] = useState(false); // State for SPN input

  const handleCurrentAddress = (event) => {
    setCurrentAddress(event.target.value);
  };

  

  const handleSpnInputChange = (event) => {
    // Update SPN input filled state based on condition
    setSpnInputFilled(event.target.value !== '');
  };

 

  return (
<div>
    <Header1/>
    <h1 className="adi-heading">Admit Card Delivery</h1>
    <div className="adi-container" style={{border:'2px soild red',width:730,boxShadow: '0px 0px 1px black',height:800}}>
      <form className="adi-container1">


        <div style={{ display: 'flex' }}>
          <label className="adi-label-name" htmlFor="spinId">Name</label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input style={{height:50,width:350,boxShadow: '0px 0px 5px black',marginLeft:70,marginTop:17}}           className="fold4" type="text" id="spinId" placeholder='Enter Your Name' onChange={handleSpnInputChange} />
            <BlockIcon className='adi-block-icon1' style={{ color: spnInputFilled ? 'red' : 'inherit' }} />
          </div>
          <br />
        </div>



        <div style={{ display: 'flex', alignItems: 'center' }}>
  <label
    style={{ marginLeft:60, width:300 }} // Adjusted marginLeft to 20 for better alignment
    className="adi-label-post"
    htmlFor="spinId"
  >
    Post Name
  </label>
  <div style={{ display: 'flex', alignItems: 'center'}}>
    <input
      style={{
        height: 50,
        width: 350,
        boxShadow: '0px 0px 5px black',
        marginLeft:20, // Adjusted marginLeft to 20 for better alignment
        marginTop: 17,
        padding: '0 10px', // Added padding for input text
      }}
      className="fold4"
      type="text"
      id="spinId"
      placeholder="Post Name"
      onChange={handleSpnInputChange}
    />
    <BlockIcon className="adi-block-icon2" style={{ color: spnInputFilled ? 'red' : 'inherit' }} />
  </div>
</div>









<div style={{ display: 'flex', alignItems: 'center' }}>
  <label
    style={{ marginLeft:60, width:300 }} // Adjusted marginLeft to 20 for better alignment
    className="adi-label-post"
    htmlFor="spinId"
  >
    Spin ID
  </label>
  <div style={{ display: 'flex', alignItems: 'center'}}>
    <input
      style={{
        height: 50,
        width: 350,
        boxShadow: '0px 0px 5px black',
        marginLeft:20, // Adjusted marginLeft to 20 for better alignment
        marginTop: 17,
        padding: '0 10px', // Added padding for input text
      }}
      className="fold4"
      type="text"
      id="spinId"
      placeholder="Spin Id"
      onChange={handleSpnInputChange}
    />
    <BlockIcon className="adi-block-icon2" style={{ color: spnInputFilled ? 'red' : 'inherit' }} />
  </div>
</div>





<div style={{ display: 'flex', alignItems: 'center' }}>
  <label
    style={{ marginLeft:10, width:300 }} // Adjusted marginLeft to 20 for better alignment
    className="adi-label-post"
    htmlFor="spinId"
  >
 CurrentAddress
  </label>
  <div style={{ display: 'flex', alignItems: 'center',marginLeft:-80}}>
  <textarea
              className='adi-textarea-address'
              id="currentAddress"
              name="currentAddress"
              placeholder="Enter Your Current Location"
              value={currentAddress}
              onChange={handleCurrentAddress}
            />
    <BlockIcon className="adi-block-icon2" style={{ color: spnInputFilled ? 'red' : 'inherit' }} />
  </div>
</div>




<div style={{ display: 'flex', alignItems: 'center' }}>
  <label
    style={{ marginLeft:20, width:300 }} // Adjusted marginLeft to 20 for better alignment
    className="adi-label-post"
    htmlFor="spinId"
  >
  MobileNumber
  </label>
  <div style={{ display: 'flex', alignItems: 'center'}}>
    <input
      style={{
        height: 50,
        width: 350,
        boxShadow: '0px 0px 5px black',
        marginLeft:20, // Adjusted marginLeft to 20 for better alignment
        marginTop: 17,
        padding: '0 10px', // Added padding for input text
      }}
      className="fold4"
      type="text"
      id="spinId"
      placeholder="Post Name"
      onChange={handleSpnInputChange}
    />
    <BlockIcon className="adi-block-icon2" style={{ color: spnInputFilled ? 'red' : 'inherit' }} />
  </div>
</div>






















       

       

        <label  style={{ color: 'rgb(6, 70, 90)',marginLeft:-30 }}       className='adi-label-delivery' htmlFor="name">Delivery Fee</label>
        <input
      style={{
        height: 50,
        width: 150,
        boxShadow: '0px 0px 5px black',
        marginLeft:250, // Adjusted marginLeft to 20 for better alignment
        marginTop:-50,
        padding: '0 10px', // Added padding for input text
      }}
      className="fold4"
      type="text"
      id="spinId"
      placeholder="RS"
      onChange={handleSpnInputChange}
    />
    <Link to="/payement1" style={{ marginRight: 20 }}>                    <button style={{marginLeft:550,marginTop:0,width:150}}         className='adi-button-next'>NEXT</button></Link> 
      </form>
    </div>
    <Fotter/>
    </div>
  );
}

export default Admitcard;
