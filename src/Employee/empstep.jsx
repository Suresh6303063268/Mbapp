import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function EmpStep() {
  const steps = ['Personal Details', 'Professional Details', 'Additional Details'];
  const [activeStep, setActiveStep] = useState(0);
  const sectionsRef = useRef([]);

  // Function to handle scroll and update active step
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Calculate the scroll positions of each section
    const sectionTops = sectionsRef.current.map(section => {
      const { top } = section.getBoundingClientRect();
      return top + window.scrollY;
    });

    // Find the index of the section currently in view
    let activeIndex = sectionTops.findIndex(top => top > scrollPosition);

    // Adjust for the last section edge case
    if (activeIndex === -1) {
      activeIndex = sectionsRef.current.length - 1;
    } else if (activeIndex > 0 && scrollPosition < sectionTops[activeIndex]) {
      activeIndex--;
    }

    setActiveStep(activeIndex);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 200); // Debounce scroll handler

    // Add scroll event listener
    window.addEventListener('scroll', debouncedHandleScroll);

    // Clean up: remove scroll event listener
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  // Function to debounce scroll event
  const debounce = (func, delay) => {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // Function to render inputs based on step index
  const renderInputs = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <p>1. Aadhar Number</p>
            <input style={inputStyle} type='text' />

            <p>2. SSC Roll Number</p>
            <input style={inputStyle} type='text' />

            <p>3. Pan Card Number</p>
            <input style={inputStyle} type='text' />

            <p>4. Passport Number</p>
            <input style={inputStyle} type='text' />
          </>
        );
      case 1:
        return (
          <>
            <p>5. Password Number</p>
            <input style={inputStyle} type='text' />

            <p>6. Voter Card ID number</p>
            <input style={inputStyle} type='text' />

            <p>7. License Number</p>
            <input style={inputStyle} type='text' />
          </>
        );
      case 2:
        return (
          <>
            <p>8. Additional Field 1</p>
            <input style={inputStyle} type='text' />

            <p>9. Additional Field 2</p>
            <input style={inputStyle} type='text' />

            <p>10. Additional Field 3</p>
            <input style={inputStyle} type='text' />
          </>
        );
      default:
        return null;
    }
  };

  // Styling for input fields
  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '14px'
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 600, mt: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      
      <Box sx={{ width: '100%', maxWidth: 600, mt: 4, overflowY: 'auto', maxHeight: '600px' }}>
        {steps.map((step, index) => (
          <div
            key={index}
            ref={el => (sectionsRef.current[index] = el)}
            style={{ 
              height: '600px', 
              background: 'linear-gradient(to bottom ,#0075FF,#004699)', 
              margin: '20px 0', 
              borderRadius: '30px', 
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white'
            }}
          >
            <div style={{ width: '100%', maxWidth: 270 }}>
              {renderInputs(index)} {/* Render inputs based on current step index */}
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default EmpStep;
