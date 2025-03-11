import React  from 'react';
import Img1 from '../images/Empframe.png';
import Img2 from '../images/mbframe.png';
import Img3 from '../images/Empframe2.png';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Ic1 from '@mui/icons-material/ArrowBack';
import '../css/empotr.css';
const P1 = () => {

  




    /*stpper heading details*/
    const steps = ['Personal Details', 'Professional Details', 'Additional Details'];
    const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
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
  };
  
  return (
    <div style={{width:900}}>
    <div style={{display:'flex'}}>
       
{/*left box*/}
      <div >
    {/*otr form heaading text*/}
        <div style={{width:840,height:50,backgroundColor:'#0b496F',color:'white'}}>
            <p style={{paddingLeft:360,fontWeight:'bold',paddingTop:10,fontSize:20}}>OTR Form</p>
        </div>
    {/*image border*/}
        <img style={{width:840}}            src={Img1} alt='Img1'/>
        
    {/* otr form 2nd heading */}
        <div style={{width:400,height:50,backgroundColor:'#0b496F',marginTop:30,marginLeft:10,color:'white',borderRadius:10}}>
            <p style={{paddingLeft:140,paddingTop:10,fontWeight:'bold',fontSize:20}}>OTR Form</p>
        </div>
{/* down 2 boxs starting  and making them side by side*/}
        <div style={{display:'flex'}}>
{/*stepper starting*/}
        <div>
            <Box sx={{ width: '110%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
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

      
{/*stepper inside data*/}
      <Box sx={{ mt: 2 }}>
              {/* Display different messages based on active step */}
              {activeStep === 0 && 
          <Typography>
    {/*border for stepper*/}
                <div style={{height:800,background:'linear-gradient(to bottom ,#0075FF,#004699)',marginLeft:20,borderRadius:30,width:400}}>
        {/*step1 starts*/}
                    <div style={{marginLeft:45,color:'white',paddingTop:-30}}>
                        {/*input1*/}
                        <p style={{paddingTop:40}}>1.Aadhar Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>
                     
                        <p style={{paddingTop:10}}>2.SSC Roll Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>3.Pan Card Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>4.Passport Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>5.Password Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>6.Voter Card Id number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>7.License Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>
                    </div>
                </div>
             </Typography>}
    {/*stepper 2 starting border*/}
              {activeStep === 1 && <Typography>
                <div style={{height:800,background:'linear-gradient(to bottom ,#0075FF,#004699)',marginLeft:20,borderRadius:30,width:400}}>
            {/*step2 starts*/}
                    <div style={{marginLeft:50,color:'white'}}>
                        {/*input1*/}
                        <p style={{paddingTop:40}}>8.Aadhar Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>
                     
                        <p style={{paddingTop:10}}>9.SSC Roll Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>10.Pan Card Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>11.Passport Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>12.Password Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>13.Voter Card Id number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>14.License Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>
                    </div>
                </div>
                </Typography>}
    {/*stepper3 border starting*/}
              {activeStep === 2 && <Typography>
                <div style={{height:800,background:'linear-gradient(to bottom ,#0075FF,#004699)',marginLeft:20,borderRadius:30,width:400}}>
            {/*step3 starts*/}
                    <div style={{marginLeft:50,color:'white'}}>
                        {/*inputs*/}
                        <p style={{paddingTop:40}}>15.Aadhar Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>
                     
                        <p style={{paddingTop:10}}>16.SSC Roll Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>17.Pan Card Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>18.Passport Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>19.Password Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>20.Voter Card Id number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>

                        <p style={{paddingTop:10}}>21.License Number</p>
                        <input style={{width:270,borderRadius:10,border:'none',height:40}}type='text'/>
                    </div>
                </div>
                </Typography>}
            </Box>
      <Box sx={{ mt: 2 }}>
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
           
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
            
          </React.Fragment>
        )}
      </Box>
    </Box>
        </div>
{/*stepper completed*/}

{/*view starting*/}
        <div style={{width:390,height:50,backgroundColor:'#0b496F',marginTop:-50,marginLeft:30,color:'white',borderRadius:10}}>
            <p style={{paddingLeft:180,paddingTop:10,fontSize:20,fontWeight:'bold'}}>View</p>
            <div style={{border:'1px solid black',width:390,height:800,marginTop:75,borderRadius:20}}>

            </div>
        </div>
    </div>
      </div>




{/*right box*/}
      <div style={{marginLeft:30}} >
        <img  style={{width:280,marginLeft:-10,height:205}}src={Img2} alt='Img2'/>
        {/*back*/}
        <div style={{marginLeft:30,marginTop:-250}}>
            <Ic1/>
        </div>
        {/*user icon*/}
        <img  style={{width:70,borderRadius:50,marginLeft:80,height:70,marginTop:-110}}src={Img3} alt='Img3'/>
        <button style={{width:150,height:30,borderRadius:10,border:'none',marginLeft:-100,backgroundColor:'#08d19f',marginTop:110}}>
            <p>AP123XXXXX</p>
        </button>
        <p style={{paddingLeft:100}}>Karthik</p>
        <p style={{paddingLeft:-60,paddingTop:20,color:'white'}}>karthikmurali128@gmail.com</p>

        {/*completed percenatage*/}
        <div className="progress">
  <div
    className="progress-bar progress-bar-striped active"
    role="progressbar"
    aria-valuenow={40}
    aria-valuemin={0}
    aria-valuemax={80}
    style={{ width: '60%' }}
  >
    60%
  </div>
</div>

        <br></br>
        {/*aadhar ,pan,10 */}
        <div style={{marginLeft:-10,marginTop:30,height:500,width:280,borderRadius:10,boxShadow: '0px 0px 5px black',border:'none'}}>
            <button style={{height:50,width:279,border:'none',backgroundColor:'#048585',color:'white',marginLeft:0,marginTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}><p style={{fontSize:20,fontWeight:'bold',paddingTop:7}}>Digi Locker</p></button>
            <div style={{borderRadius:10,height:50,width:250,marginTop:40,marginLeft:15,backgroundColor:'#0b496F', boxShadow: '0px 0px 5px black',border:'none'}}>
                <p style={{paddingLeft:80,paddingTop:17,color:'white'}}>Aadhaar Card</p>
            </div>
            <div style={{borderRadius:10,height:50,width:250,marginTop:40,marginLeft:15,backgroundColor:'#0b496F', boxShadow: '0px 0px 5px black',border:'none'}}>
                <p style={{paddingLeft:80,paddingTop:17,color:'white'}}>PAN Card</p>
            </div>
            <div style={{borderRadius:10,height:50,width:250,marginTop:40,marginLeft:15,backgroundColor:'#0b496F', boxShadow: '0px 0px 5px black',border:'none'}}>
                <p style={{paddingLeft:80,paddingTop:17,color:'white'}}>10th Class</p></div>
            </div>
      </div>

      
    </div>
    </div>
  )
}

export default P1
