import * as React from 'react';// Make sure to use this hook correctly in your component
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Ic1 from '@mui/icons-material/Send';
import Img1 from '../images/refer2.jpeg';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react'; // These are React Hooks, ensure they are used correctly
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';



import team1 from '../images/Mbprofile1.png';
import team2 from '../images/mbfrom.png';


const data1 = [
  { value: 70 },
  { value: 20 },
];
const data2 = [
  { value: 100 },
  { value: 100 },
];
const data3 = [
  { value: 30 },
  { value: 70 },
];
const data4 = [
  { value: 30 },
  { value: 40 },
];


/*piechart moment changing*/
const size = {
  width: 300,
  height: 250,
  marginLeft:50,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 25,
  fontWeight: 1000,
}));
/*inside chart content*/ 
function PieCenterLabel({ children, color = 'white' }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2} style={{ fill: color }}>
      {children}
    </StyledText>
  );
}


const TableWrapper = styled('div')(({ theme }) => ({
  height: '500px', // Adjust as needed
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100%',
}));




/*pie chart1*/
function PieChartWithCenterLabel1() {




  


 

  return (
    <div style={{ backgroundColor: '#ff6666', width:250, marginLeft:40, marginTop: 30, height:370, borderRadius: 20,boxShadow: '0px 0px 5px black'}}>
      <div style={{paddingLeft:20}}>
        <h5 style={{color:'white',paddingTop:10,paddingLeft:35}}>total applications</h5>
      <PieChart
      style={{marginLeft:50}}
        series={[
          {
            data: data1,
            innerRadius: 70,
            outerRadius: 90,
            startAngle: 0,
            endAngle: 360,
          },
        ]}
        {...size}
      >
        <PieCenterLabel>70</PieCenterLabel>
      </PieChart>
      </div>
      <br></br>
      <div style={{ marginTop: 30, marginLeft: 50, display:'flex' }}>
       
       
        <div style={{marginLeft:-20,marginTop:-50,background:'linear-gradient(to bottom,white,yellow)',border:'1px solid black',width:60,height:60,borderRadius:50,boxShadow: '0px 0px 5px black'}}>
        <p style={{marginleft:10,marginTop:-30, color:'black',fontSize:15, fontWeight:'bold'}}>Completed</p>
          <p style={{padding:10}}>1000</p>
        </div>
        <div style={{marginLeft:80,marginTop:-50,background:'linear-gradient(to bottom,white,red)',border:'1px solid black',width:60,height:60,borderRadius:50,boxShadow: '0px 0px 5px black'}}>
        <p style={{marginleft:10,marginTop:-30, color:'black',fontSize:15, fontWeight:'bold'}}>Pending</p>
          <p style={{padding:10}}>1000</p>
        </div>

      </div>
     
    </div>
  );
}

/*pie chart 2*/
function PieChartWithCenterLabel2() {
  return (
    <div style={{ backgroundColor: '#1f7a7a', width: 250, marginLeft:330, marginTop: -370, height: 370, borderRadius: 20,boxShadow: '0px 0px 5px black'}}>
      <div style={{paddingLeft:20}}>
      <h5 style={{color:'white',paddingTop:10,paddingLeft:30}}>Genaral applications</h5>
      <PieChart
        series={[
          {
            data: data2,
            innerRadius: 70,
            outerRadius: 90,
            startAngle: 0,
            endAngle: 360,
          },
        ]}
        {...size}
      >
        <PieCenterLabel>50</PieCenterLabel>
      </PieChart>
      </div>
      <br></br>
      <div style={{ marginTop: 30, marginLeft: 50, display:'flex' }}>
       
       
        <div style={{marginLeft:-20,marginTop:-50,background:'linear-gradient(to bottom,white,yellow)',border:'1px solid black',width:60,height:60,borderRadius:50,boxShadow: '0px 0px 5px black'}}>
        <p style={{marginleft:10,marginTop:-30, color:'white',fontSize:15, fontWeight:'bold'}}>Completed</p>
          <p style={{padding:10}}>1000</p>
        </div>
        <div style={{marginLeft:60,marginTop:-50,background:'linear-gradient(to bottom,white,red)',border:'1px solid black',width:60,height:60,borderRadius:50,boxShadow: '0px 0px 5px black'}}>
        <p style={{marginleft:10,marginTop:-30, color:'white',fontSize:15, fontWeight:'bold'}}>Pending</p>
          <p style={{padding:10}}>1000</p>
        </div>

      </div>
    </div>
  );
  
}

/*pie chart 3*/
function PieChartWithCenterLabel3() {
  return (
    <div style={{ backgroundColor: '#ff00ff', width: 250, marginLeft:620, marginTop: -370, height: 370, borderRadius: 20,boxShadow: '0px 0px 5px black'}}>
      <div style={{paddingLeft:20}}>
      <h5 style={{color:'white',paddingTop:10,paddingLeft:35}}>Tatkil applications</h5>
      <PieChart
        series={[
          {
            data: data3,
            innerRadius: 70,
            outerRadius: 90,
            startAngle: 0,
            endAngle: 360,
          },
        ]}
        {...size}
      >
        <PieCenterLabel>20</PieCenterLabel>
      </PieChart>
      </div>
      <br></br>
      <div style={{ marginTop: 30, marginLeft: 50, display:'flex' }}>
       
       
        <div style={{marginLeft:-20,marginTop:-50,background:'linear-gradient(to bottom,white,yellow)',border:'1px solid black',width:60,height:60,borderRadius:50,boxShadow: '0px 0px 5px black'}}>
        <p style={{marginleft:10,marginTop:-30, color:'white',fontSize:15, fontWeight:'bold'}}>Completed</p>
          <p style={{padding:10}}>1000</p>
        </div>
        <div style={{marginLeft:80,marginTop:-50,background:'linear-gradient(to bottom,white,red)',border:'1px solid black',width:60,height:60,borderRadius:50,boxShadow: '0px 0px 5px black'}}>
        <p style={{marginleft:10,marginTop:-30, color:'white',fontSize:15, fontWeight:'bold'}}>Pending</p>
          <p style={{padding:10}}>1000</p>
        </div>

      </div>
    </div>
  );
  
}

/*pie chart 4*/
function PieChartWithCenterLabel4() {
  return (
    <div style={{ backgroundColor: '#660066', width: 250, marginLeft:900, marginTop: -370, height: 370, borderRadius: 20,boxShadow: '0px 0px 5px black'}}>
      <div style={{paddingLeft:20}}>
      <h5 style={{color:'white',paddingTop:10,paddingLeft:35}}>Failed applications</h5>
      <PieChart
        series={[
          {
            data: data4,
            innerRadius: 70,
            outerRadius: 90,
            startAngle: 0,
            endAngle: 360,
          },
        ]}
        {...size}
      >
        <PieCenterLabel>2K</PieCenterLabel>
      </PieChart>
      </div>
      <br></br>
      <div style={{ marginTop: 30, marginLeft: 50, display:'flex' }}>
       
       
        <div style={{marginLeft:-20,marginTop:-50,background:'linear-gradient(to bottom,white,yellow)',border:'1px solid black',width:60,height:60,borderRadius:50,boxShadow: '0px 0px 5px black'}}>
        <p style={{marginleft:10,marginTop:-30,color:'white',fontSize:15, fontWeight:'bold'}}>Completed</p>
          <p style={{padding:10}}>1000</p>
        </div>
        <div style={{marginLeft:80,marginTop:-50,background:'linear-gradient(to bottom,white,red)',border:'1px solid black',width:60,height:60,borderRadius:50,boxShadow: '0px 0px 5px black'}}>
        <p style={{marginleft:10,marginTop:-30, color:'white',fontSize:15, fontWeight:'bold'}}>Pending</p>
          <p style={{padding:10}}>1000</p>
        </div>

      </div>
    </div>
  );
  
}
/*piechart 5*/



/*graph code starts*/
const P1 = () => {




  


  const  handleDeactivate = () => {
   
  
    Swal.fire({
      showConfirmButton: false,
      background: '#003366',
      borderRadius:100,
      color: 'white',
      width: '500px',
      iconColor: '#00ff00',
      customClass: {
        popup: 'custom-swal-popup'
      },
      html: `
        <img src="${team1}" style="border-radius:50px;, height:50; width:60;margin-left:-400;">
        <div style="width: 400px; height:400px; border: 1px solid white; margin-left: 40px;">
          <img src="${team2}" style="border-radius:50px;, height:50; width:60;margin-left:-300;"> <p style="color:'white";margin-top:-600;> Form</p>
        <p  style="font-size:20;margin-left:-150">Forward Applications</p>
        <h1 style="font-size:20;margin-left:-200;margin-top:10;">Name :           Roopa</h1>
         <h1 style="font-size:20;margin-left:-100;margin-top:20;">SPN ID : AP123XXXXXXX</h1>
          <h1 style="font-size:20;margin-left:-50;margin-top:15;">POST NAME : SSC CGL-211 Posts</h1>
           <h1 style="font-size:20;margin-left:-100;margin-top:15;">Application Number: 55</h1>
   <a href="/emdash">
        <button style="width: 150px; font-size: 20px; font-weight: bold; color: white; height: 40px; border-radius: 50px; margin-left: 200px; background-color: #ff0066;">
          Forward
        </button>
      </a>
        </div>
      `
    }).then(() => {
      // Optionally, you can add code to execute after the alert is closed
    });
  }    











  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { x: 0, y: 0 },
      { x: 1, y: 20 },
      { x: 2, y: 0 },
      { x: 3, y: 40 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 60 },
      { x: 7, y: 0 },
      { x: 8, y: 20 },
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 150 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([height, 0]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveBasis);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .attr('d', line);

    
     

    




    

  }, []);

  return (
    <div style={{ backgroundColor: '#edf0f0', height: 1600 }}>
      <br />
      {/* Top nav section */}
      <div style={{display:'flex'}}>
        {/*top 1 section*/}
      <div style={{ width:500, height: 180, color:'white', marginLeft: 100, borderRadius: 10,background:'linear-gradient(to bottom,#043f63,#0771b3)',boxShadow: '0px 0px 5px black' }}>
        <h2 style={{ paddingTop: 40,marginLeft:50 ,width:400, fontSize:25,fontWeight:'bold',lineHeight:2}}>Hey,good Morning <span style={{color:'red'}}>Roopa </span> 
               Welcome to Dashboard</h2>
      </div>
      {/*top sections*/}
      <div style={{ width: 400, height: 180,color:'white', marginLeft: 30, borderRadius: 10,background:'linear-gradient(to bottom,#043f63,#0771b3)',boxShadow: '0px 0px 5px black'}}>
        <h2 style={{ paddingTop:30,paddingLeft:30 ,width:400, fontSize:25, fontWeight:'bold',lineHeight:2}}>Total Forwarded Application</h2>
        <h1 style={{paddingLeft:150,fontSize:30, color:'yellow'}}>500</h1>
      </div>
      </div>
      <br />

      {/* Top calendar section */}
      <div style={{ width:1100, height: 60, backgroundColor: '#0f6073', marginLeft: 50, borderRadius: 10,boxShadow: '0px 0px 5px black'}}>
        <p style={{fontSize:25,color:'white',paddingLeft:40,paddingTop:10, fontWeight:'bold'}}>Application status</p>
        <div style={{ marginLeft: 660,marginTop:-55}}>
        <input type="date" style={{ width:180, color: 'white', backgroundColor: '#0f6073', border: '1px solid white',boxShadow: '0px 0px 5px black',height:40,borderRadius:10}} />
        <h1 style={{fontSize:20, fontWeight:'bold', color:'white',marginTop:-35,marginLeft:250}}>Andhra Pradesh</h1>
        </div>
      </div>

      {/* all piechart calling */}
      <PieChartWithCenterLabel1 />
      
      <PieChartWithCenterLabel2 />
      <PieChartWithCenterLabel3 />
      <PieChartWithCenterLabel4 />

      <br></br>
      <br></br>
      <div>
        
      </div>
      {/* calendar section  and search button*/}
      
      <br></br>
      <br></br>

    
      {/* ending part employee progress */}
      <div style={{ marginLeft: 60, display: 'flex', marginTop: 30 }}>
        <br></br>
        {/* employee progress left side */}
        <div>
          <div style={{ width: 1150, height: 50, backgroundColor: '#045b78', color: 'white', fontSize: 25,boxShadow: '0px 0px 5px black',borderRadius:10}}>
            <p style={{paddingLeft:30,paddingTop:8, fontSize:20,fontWeight:'bold'}}>User Applications</p>
            <div style={{marginLeft:920,marginTop:-47}}>
            <input type="date" style={{ width:180, color: 'white', backgroundColor: '#0f6073', border: '1px solid white',boxShadow: '0px 0px 5px black',height:35,borderRadius:10}} />
            </div>
          </div>
          <br></br>
          <br></br>
          {/*table*/}
          <div >
            {/*tabel at starting*/}
            <div
            style={{width:1150,height:60,backgroundColor:'#067056',color:'white',borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow: '0px 0px 5px black', paddingTop:-10}}>
              <br></br>
              <label style={{paddingLeft:80,marginTop:-20,fontWeight:'bold',fontSize:20}}>S.No</label>
              <label style={{paddingLeft:65,marginTop:-20,fontWeight:'bold',fontSize:20}}>User Applications</label>
              <label style={{paddingLeft:65,marginTop:-20,fontWeight:'bold',fontSize:20}}>Post Name</label>
              <label style={{paddingLeft:95,marginTop:-20,fontWeight:'bold',fontSize:20}}>Active Employees</label>
              <label style={{paddingLeft:85,paddingTop:-20,fontWeight:'bold',fontSize:20}}>Sent Applications</label>
            </div>
            {/*tabel inside*/}
            <div 
            style={{width:1150,height:500,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
              
            {/*table main content*/}
            
            <TableWrapper>
  <table style={{ width: '100%', tableLayout: 'fixed'}}>
    <tbody>
      {/* Example rows */}
      {Array.from({ length: 10 }, (_, index) => (
        <tr  key={index}>
          <td style={{width:170,height:50}}>
            <div style={{ paddingLeft: 70, marginTop: 50}}>
              <p style={{width:70}}   >{index + 1}.</p>
            </div>
          </td>
          <td style={{width:200}}>API123XXXXX</td>
          <td>SSC GD -255 posts</td>
          <td>
            <img style={{ width: 50, height: 50, borderRadius: 30 }} src={Img1} alt='Img1' />
            <FiberManualRecordIcon  style={{color:'green',marginLeft:-20,marginTop:35}}/>
            <div style={{ paddingLeft: 70, marginTop:-30 }}>
              <p>Kavya 200</p>
            </div>
          </td>
          <td>
  <Ic1 style={{ fontSize: 30, color: '#006699', marginLeft: 80 }} onClick={handleDeactivate} />
</td>

        </tr>
      ))}
    </tbody>
  </table>
</TableWrapper>


            </div>
            
            
          </div>
        </div>
        <br></br>

       
      </div>

      {/* Below code updated with graph section */}
      

    </div>
  );
};

export default P1;
