import * as React from 'react';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';

import team12 from '../images/blob.jpg';

export default function AccordionUsage() {
  return (
    <div style={{display:'flex',marginLeft:150,marginTop:50}}>
    <div style={{width:600}}          className='border-2 border-black rounded-md ml-5 mb-10 main'>
      <Accordion>
        <AccordionSummary style={{height:100}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2 className=''style={{fontSize:22, color:' #006699',width:550}}>1. What governement positions are most frequently sought after in India ? </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='bg-gray-200 py-5 px-3 rounded-[12px] shadow-md p1' style={{fontSize:18}}>The most common governememnt jobs in India are that of an army officer, navy officer, air
          force officer, clerk and probationary officer.</p>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2 className=''    style={{fontSize:22, color:'#006699',width:580,marginLeft:-40}}>2. What advantages come with working for the governement ? </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='bg-gray-200 py-5 px-3 rounded-[12px] shadow-md p2' style={{fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2 className='' style={{fontSize:22, color:' #006699',width:600,marginLeft:-82}}>3. What are the process for applying to a <br/>governement position in India ? </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='bg-gray-200 py-5 px-3 rounded-[12px] shadow-md p3' style={{fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2 className=''style={{fontSize:22, color:'#006699',width:550,marginLeft:-2}}>4. How does the interview process for governement positions typically unfold ?  </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='bg-gray-200 py-5 px-3 rounded-[12px] shadow-md p4'style={{fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>




      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2 className='' style={{fontSize:22, color:' #006699',width:550,marginLeft:-2}}>5. What steps can I take to enhance my prospects of securing a governement positions ?  </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='bg-gray-200 py-5 px-3 rounded-[12px] shadow-md p5' style={{fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2 className='' style={{fontSize:22, color:' #006699',width:550,marginLeft:-2}}>6. What kind of benifits do governement jobs have ? </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='bg-gray-200 py-5 px-3 rounded-[12px] shadow-md p6' style={{fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2 className='' style={{fontSize:22, color:' #006699',width:545,marginLeft:-2}}>7. How can I prepare for governement job interviews ? </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className='bg-gray-200 py-5 px-3 rounded-[12px] shadow-md p7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>

      </div>

<div>
    <img style={{width:600,height:557}}              src={team12}  alt=''/>
</div>
      



    </div>
  );
}