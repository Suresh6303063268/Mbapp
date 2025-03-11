import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header1 from './header1.jsx';
import Fotter from './fotter.jsx';
import Govt1 from './Govt1.jsx';
import TIMER from './timer.jsx';

import '../css/back.css';
import Img1 from '../images/sbi2.png';
import Img2 from '../images/card.png'
import Img3 from '../images/upi.png';
import Ic1 from '@mui/icons-material/AccountBalanceWalletOutlined';
import Ic2 from '@mui/icons-material/ChevronRightTwoTone';

const steps = ['Payment', 'Confrom Payment','Applied jobs'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [ setIsFormCompleted] = React.useState(false);
  const [setShowHello] = React.useState(false);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsFormCompleted(false);
    setShowHello(false);
  };

  /*vpa and Qr code javascript*/
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  

  
  


  

  
  const next = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  
  const getStepContent = (step) => {
    switch (step) {
      

      

      case 0:
        return (
          <Box>
            <div style={{ border: '1px solid black', width:840, marginLeft:30, height:1400, borderRadius: 10, marginTop:50,boxShadow: '0px 0px 5px black'}}>
            <p style={{ paddingTop:25, fontWeight:700,fontSize:30, textAlign:'center'}}>Payement Details</p>
              <div style={{ marginLeft: 30 }}>
              <p style={{ paddingTop: 20,fontWeight:550,fontSize:20,paddingLeft:120}}>Post Name :</p>
                <p style={{ paddingLeft:250, marginTop: -42,fontWeight:400,fontSize:18}}>Arogya Mitras & Team Leaders-19 POSTS</p>
                <p style={{ paddingTop: 20,fontWeight:550,fontSize:20,paddingLeft:120}}>Your SPN ID :</p>
                <div style={{ marginTop: -43, marginLeft:270 }}>
                  <button style={{ width: 150, height: 30, borderRadius: 10, border: 'none', backgroundColor: '#939599', fontWeight: 1000 }}>ABX123XXXX</button>
                </div>
                <p style={{ paddingTop:30, fontWeight:550,fontSize:20,paddingLeft:120}}>Application Fee :</p>
                <p style={{ paddingLeft:300, marginTop: -40 }}>Rs100/-</p>
                <p style={{ paddingTop: 20, fontWeight:550,fontSize:20,paddingLeft:120}}>Service Fee :</p>
                <p style={{ paddingLeft:300, marginTop: -40 }}>Rs100/-</p>
                <button style={{ marginLeft: 125,marginTop: 10, height:40, backgroundColor: '#f0306d', color: 'white', border: 'none',width:150,boxShadow: '0px 0px 5px black'}}>Application Fee:</button>
                <button style={{ marginLeft: 100, marginTop:35, height:40,color: 'white',backgroundColor: '#f2a049', border: 'none', width:100,boxShadow: '0px 0px 5px black'}}>Rs110/-</button>
                <br></br>
                <br></br>
{/*wallet*/}
<p style={{ paddingTop:30, fontWeight:550,fontSize:20,paddingLeft:120}}>Payment Mode:</p>
                <div style={{ marginLeft: 130 }}>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="toggleInput"
                   
                      />
                      <p style={{paddingLeft:50,marginTop:-30, color:'black',fontweight:600}}>Wallet</p>
                    </label>
                  </div>
            
                    <div style={{marginLeft:10, border: '1px solid black', width: 500, height:60,borderRadius:10}}>
                      <Ic1 style={{fontSize:40,marginTop:10,marginLeft:10}}/>
                      
                      <p style={{paddingLeft:120,marginTop:-45,fontWeight:1000}}>Pay through Wallet</p>
                      <p style={{paddingLeft:120,marginTop:-15}}>Bank Charges</p>
                      {/*arrow icons*/}
                      <div style={{marginLeft:430,marginTop:-65}}>
                      <Ic2 style={{fontSize:40,padding:5}}/>
                      </div>
                     
                    </div>
                  
        {/*net banking*/}
                  <br></br>
                  <div style={{marginTop:0}}>
                    <label>
                      <input
                        type="radio"
                        name="toggleInput"
                      
                      />
                      <p style={{paddingLeft:50,marginTop:-30, color:'black'}}>Net Banking</p>
                    </label>
                  </div>
                 
                    <div>
        {/*net banking with icons*/}
                    <div style={{marginLeft:10, border: '1px solid black', width: 500, height:60,borderRadius:10,marginTop:-10}}>
                      <img style={{width:70,height:45,padding:10,marginTop:10}}src={Img1} alt='Img1'/>
                      <p style={{paddingLeft:120,marginTop:-50,fontWeight:1000}}>SBI Net Banking</p>
                      <p style={{paddingLeft:120,marginTop:-15,fontSize:15}}>Bank charge:0.0</p>
                                            {/*arrow icons*/}
                                            <div style={{marginLeft:430,marginTop:-65}}>
                      <Ic2 style={{fontSize:40,padding:5,marginTop:5}}/>
                      </div>
                      
                    </div>
                    <br></br>
                    <div style={{marginLeft:10, border: '1px solid black', width: 500, height:60,borderRadius:10}}>
                    <img style={{width:70,height:45,padding:10,marginTop:10}}src={Img1} alt='Img1'/>
                      <p style={{paddingLeft:120,marginTop:-50,fontWeight:1000}}>SBI Net Banking</p>
                      <p style={{paddingLeft:120,marginTop:-15,fontSize:15}}>Bank charge:0.0</p>
                   {/*arrow icons*/}
                      <div style={{marginLeft:430,marginTop:-65}}>
                      <Ic2 style={{fontSize:40,padding:5,marginTop:5}}/>
                      </div>
                    </div>
                    </div>
                    

      {/*card payments*/}
               
                <div style={{ marginTop:20 }}>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="toggleInput"
                       
                      />
                      <p style={{paddingLeft:30,marginTop:-30,color:'black'}}>Card Payment</p>
                    </label>
                  </div>
                 
                    <div>

                    <div style={{marginLeft:10, border: '1px solid black', width: 500, height:60,borderRadius:10}}>
                    <img style={{width:70,height:55,padding:5,paddingLeft:10,marginTop:3}}src={Img2} alt='Img2'/>
                      <p style={{paddingLeft:120,marginTop:-53,fontWeight:1000}}>State Bank debit Cards</p>
                      <p style={{paddingLeft:120,marginTop:-15,fontSize:15}}>Bank charges</p>
                      {/*arrow*/}
                      <div style={{marginLeft:430,marginTop:-65}}>
                      <Ic2 style={{fontSize:40,padding:5,marginTop:5}}/>
                      </div>
                    </div>
                    <br></br>
                    <div style={{marginLeft:10, border: '1px solid black', width: 500, height:60,borderRadius:10}}>
                      <img style={{width:70,height:55,padding:5,paddingLeft:10,marginTop:2}}src={Img2} alt='Img2'/>
                      <p style={{paddingLeft:120,marginTop:-50,fontWeight:1000}}>State Bank debit Cards</p>
                      <p style={{paddingLeft:120,marginTop:-15,fontSize:15}}>Bank charges</p>
                      {/*arrow icons*/}
                      <div style={{marginLeft:430,marginTop:-65}}>
                      <Ic2 style={{fontSize:40,padding:5,marginTop:5}}/>
                      </div>
                    </div>
                    <br></br>
                    <div style={{marginLeft:10, border: '1px solid black', width: 500, height:60,borderRadius:10}}>
                    <img style={{width:70,height:55,padding:5,paddingLeft:10,marginTop:2}}src={Img2} alt='Img2'/>
                      <p style={{paddingLeft:120,marginTop:-51,fontWeight:1000}}>State Bank debit Cards</p>
                      <p style={{paddingLeft:120,marginTop:-15,fontSize:15}}>Bank charges</p>
                   {/*arrow icons*/}
                      <div style={{marginLeft:430,marginTop:-65}}>
                      <Ic2 style={{fontSize:40,padding:5,marginTop:5}}/>
                      </div>
                    </div>  
                    
                    </div>
              
  {/* other payments modes*/}
                  <div style={{marginTop:10}}>
                    <label>
                      <input
                        type="radio"
                      />
                      <p style={{paddingLeft:30,marginTop:-30,color:'black'}}>Other Payments Modes</p>
                    </label>
                  </div>
                 
                    <div style={{marginLeft:10, border: '1.5px solid black', width: 500, height:60,borderRadius:10}}>
                      <img style={{width:70,height:55,padding:5,paddingLeft:10,marginTop:2}}src={Img3} alt='Img3'/>
                      <p style={{paddingLeft:120,marginTop:-51,fontWeight:1000}}>State Bank debit Cards</p>
                      <p style={{paddingLeft:120,marginTop:-15,fontSize:15}}>Bank charges</p>
                      {/*arrow icons*/}
                      <div style={{marginLeft:430,marginTop:-65}}>
                      <Ic2 style={{fontSize:40,padding:5,marginTop:5}}/>
                      </div>
                       {/*sumbit*/}
            
                    </div>
                
                </div>
                </div>
                
              </div>
              
              
            </div>
            <Button
                      style={{ backgroundColor: '#00a3cc',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginTop:40,marginLeft:50}}
                      onClick={handleBack}
                    >
               Back
                    </Button>
            <Button style={{ backgroundColor:'rgb(3, 62, 95)',color:'white', width:150, height: 40, border: 'none', borderRadius: 10,marginLeft:690,marginTop:-65 }} onClick={next}>
              Confrom
            </Button>
          </Box>
        );

      case 1:
        return (
          <Box>
            <div style={{border:'1px solid black',width: 800, marginLeft:50, height: 500, borderRadius: 10, marginTop:50,boxShadow: '0px 0px 5px black'}}>
              <p style={{ paddingTop:25, fontWeight:700,fontSize:30, textAlign:'center'}}>Confrom Payment Details</p>
              <div style={{ marginLeft:60,marginTop:-30}}>
                <p style={{ paddingTop: 80, fontWeight:550,paddingLeft:100}}>Post Name :</p>
                <p style={{ paddingLeft:200, marginTop: -38 }}>Arogya Mitras & Team Leaders-<span style={{color:'darkblue',fontSize:15}}> 19 POSTS</span></p>
                <p style={{ paddingTop: 20, fontWeight:550,paddingLeft:100}}>Total Amount :</p>
                <p style={{ paddingLeft:230, marginTop: -38 }}>Rs 110/-</p>
                <p style={{ paddingTop: 20, fontWeight:550,paddingLeft:100}}>Select :</p>
                <div style={{ paddingLeft:180, marginTop: -38 }}>
                <div>
        <input
          type="radio"
          id="yes"
          name="option"
          value="yes"
          checked={selectedOption === 'yes'}
          onChange={handleOptionChange}
        />
        <label htmlFor="yes" style={{color:'black',fontSize:15,fontweight:100,paddingLeft:-50}}>VPA</label>
      </div>
      <div style={{marginLeft:100,marginTop:-33}}> 
        <input
          type="radio"
          id="no"
          name="option"
          value="no"
          checked={selectedOption === 'no'}
          onChange={handleOptionChange}
        />
        <label htmlFor="no" style={{color:'black',fontSize:15}}>QR Code</label>
      </div>
      <div style={{marginLeft:20}}>
        {selectedOption === 'yes' && <p>UPI</p>}
        {selectedOption === 'no' && <p>QR Code</p>}
      </div>
                </div>
              </div>
              <Button
                      style={{ backgroundColor: '#00a3cc',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginTop:20,marginLeft:50,boxShadow: '0px 0px 10px black'}}
                      onClick={handleBack}
                    >
               Back
                    </Button>
                    <Button style={{ backgroundColor:'rgb(3, 62, 95)',color:'white', width: 150, height: 40, border: 'none', borderRadius: 10,marginLeft:150,marginTop:30,boxShadow: '0px 0px 10px black'}} onClick={next}>
                Confrom
            </Button>
            <div style={{marginTop:-40}}>
             <Link to="/home1" style={{ marginRight: 20}}>
              <button
                style={{
                  background: 'linear-gradient(to left,  #ff0066 0%, #ff0066 100%)',
                  boxShadow: '0px 0px 10px black',
                  width: '80px',
                  height: '40px',
                  color:'white',
                  border: 'none',
                  fontSize:'15px',
                  marginLeft:'650px',
                  marginTop:'0px',
                  borderRadius: '5px'
                }}
                className="link-button"
              >     Reset
              </button>
            </Link>
            </div>
            <div style={{marginTop:80}}>
            <p style={{marginLeft:160,marginTop:-35}}><span style={{color:'darkblue'}}>Click Here</span>         to abort this transaction and return to the SCC</p>
            </div>
            </div>
            <br></br>
            <br></br>
             {/*sumbit*/}
          </Box>
        );

        case 2:
            return (
                <TIMER/>
            )
            default:
      return null;
    }
  };

  return (
    <div>
      <Header1/>

<Govt1/>

      <Box sx={{ width: '60%', marginLeft: 30, marginTop:20}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button
                
                onClick={handleSkip}
                sx={{ mr: 1 }}
              >
                
              </Button>
            )}
            <div >
            
            </div>
            
          </Box>
        </React.Fragment>
      )}
    </Box>
    <Fotter/>
    </div>
  );
}
