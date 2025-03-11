import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import '../css/kathik.css';
import MBHover1 from './Mbhover1.jsx';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import Ic1 from '@mui/icons-material/Search';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const data1 = [
  { value: 30 },
  { value: 70 },
];
const data2 = [
  { value: 10 },
  { value: 80 },
];
const data3 = [
  { value: 30 },
  { value: 70 },
];
const data4 = [
  { value: 30 },
  { value: 70 },
];

/*piechart moment changing*/
const size = {
  width: 300,
  height: 250,
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


/*pie chart1*/
function PieChartWithCenterLabel1() {
  return (
    <div style={{ backgroundColor: 'blue',width: 230, marginLeft:50, marginTop: 30, height: 280, borderRadius:10,boxShadow: '0px 0px 5px black'}}>
      <div style={{paddingLeft:10}}>
      <PieChart
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
       <PieCenterLabel style={{color: 'blue', fontSize: '20px', fontWeight: 'bold'}}>70</PieCenterLabel>
      </PieChart>
      </div>
      <div style={{ marginTop: -30, marginLeft: 50 }}>
        <p style={{ fontWeight: 500, color:'white'}}>Total Employees</p>
      </div>
    </div>
  );
}

/*pie chart 2*/
function PieChartWithCenterLabel2() {
  return (
    <div style={{ backgroundColor: '#ff9999', width:230, marginLeft:350, marginTop: -280, height: 280, borderRadius:10,boxShadow: '0px 0px 5px black'}}>
      <div style={{paddingLeft:10}}>
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
        <PieCenterLabel style={{color:'white'}}     >50</PieCenterLabel>
      </PieChart>
      </div>
      <div style={{ marginTop: -30, marginLeft: 40 }}>
        <p style={{ fontWeight: 500,color:'white'}}>Active Employees</p>
      </div>
    </div>
  );
  
}

/*pie chart 3*/
function PieChartWithCenterLabel3() {
  return (
    <div style={{ backgroundColor: '#cc3399', width:230, marginLeft:650, marginTop: -280, height: 280, borderRadius:10,boxShadow: '0px 0px 5px black'}}>
      <div style={{paddingLeft:10}}>
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
        <PieCenterLabel style={{color:'white'}}   >20</PieCenterLabel>
      </PieChart>
      </div>
      <div style={{ marginTop: -30, marginLeft: 40 }}>
        <p style={{ fontWeight: 500, color:'white'}}>In-Active Employees</p>
      </div>
    </div>
  );
  
}

/*pie chart 4*/
function PieChartWithCenterLabel4() {
  return (
    <div style={{ backgroundColor: 'darkorange', width:230, marginLeft:900, marginTop: -280, height: 280, borderRadius:10,boxShadow: '0px 0px 5px black'}}>
      <div style={{paddingLeft:10}}>
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
        <PieCenterLabel style={{color:'white'}}  >2K</PieCenterLabel>
      </PieChart>
      </div>
      <div style={{ marginTop: -30, marginLeft: 40 }}>
        <p style={{ fontWeight: 500, color:'white'}}>Today Forwarded Employees</p>
      </div>
    </div>
  );
  
}


/*main code starts*/
const P1 = () => {
  /*border*/
  
  
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


  /*starting*/



  

    
  
  

/*ending of graph*/
  return (
    <div style={{ backgroundColor: '#edf0f0', height: 1400 }}>
      <br />
      {/* Top nav section */}
      <div style={{ width:1100, height: 60, backgroundColor: 'darkred', marginLeft:50, borderRadius: 10,boxShadow: '0px 0px 5px black',color:'white'}}>
        <h1 style={{textAlign:'center', paddingTop: 10, fontSize:25,fontWeight:'bold'}}>Data Entry Operator Status</h1>
      </div>
      <br />

      {/* Top calendar section */}
      <div style={{ width: 1100, height: 60, backgroundColor: '#0f6073', marginLeft: 50, borderRadius: 10,boxShadow: '0px 0px 5px black',display:'flex'}}>
        <div>  <input type="date" style={{ width:180, marginTop:10, marginLeft: 20, color: 'white', backgroundColor: '#0f6073', border: '1px solid white',height:40,boxShadow: '0px 0px 5px black',borderRadius:10}} /></div>
        <div> <h1 style={{color:'white', fontSize:20, fontWeight:'bold',paddingLeft:700,paddingTop:15}}  >Andhra Pradesh</h1></div>
       
      </div>

      {/* all piechart calling */}
      <PieChartWithCenterLabel1 />
      <PieChartWithCenterLabel2 />
      <PieChartWithCenterLabel3 />
      <PieChartWithCenterLabel4 />

      <br></br>
      <br></br>
      {/* calendar section  and search button*/}
      <div style={{ width: 1150, height: 60, backgroundColor: '#0f6073', marginLeft: 50, borderRadius: 10,boxShadow: '0px 0px 5px black'}}>
       
        <input type="search" placeholder='search Anything' style={{ width: 200, height:40, marginTop: 10, marginLeft:50, backgroundColor: '#0f6073', border: '1px solid white', borderRadius: 10,boxShadow: '0px 0px 5px black'}} />
        <div style={{marginLeft:60,marginTop:-35,color:'white',fontSize:30}}>
          <Ic1 style={{marginTop:-15,fontSize:30}} />
        </div>
        <div style={{marginTop:-40,marginLeft:900,boxShadow: '0px 0px 5px black',width:180,borderRadius:10}}>
        <input type="date" style={{ width: 180, color: 'white', backgroundColor: '#0f6073', border: '1px solid white',height:40,marginTop:-40}} />
        </div>
      </div>
      <br></br>
      <br></br>

      

            <MBHover1/>
            
            
            
          

          {/* ending part employee progress */}
          <div style={{ marginLeft: 60, display: 'flex', marginTop:-530 }}>
        <br></br>
        {/* employee progress left side */}
        <div>
          <button style={{ width: 800, height: 50, backgroundColor: '#045b78', color: 'white', fontSize: 25, border: 'none' }}>Employee Progress</button>
        </div>
        <br></br>

        

        {/* employee progress  right side and its data */}
        <div>
          <button style={{ width: 300, height: 50, marginLeft: 30, backgroundColor: '#045b78', fontSize: 20, color: 'white', border: 'none' }}>Employee Ranks</button>
          <div style={{marginLeft:30,marginTop:30, background:'#00ffff'}}>
            <br></br>
            <br></br>
            <label style={{color:'darkblue'}}>1.</label>
            <label style={{paddingLeft:100, color:'black'}}>200</label>
            <p style={{paddingLeft:100, fontSize:20,fontWeight:'bold'}}>Applications</p>
            <br></br>
            <br></br>
            <label style={{color:'darkblue'}}>2.</label>
            <label style={{paddingLeft:100, color:'black'}}>100</label>
            <p style={{paddingLeft:100, fontSize:20,fontWeight:'bold'}}>Applications</p>
            <br></br>
            <br></br>
            <label style={{color:'darkblue'}}>3.</label>
            <label style={{paddingLeft:100, color:'black', paddingTop:-80}}>50</label>
            <p style={{paddingLeft:100, fontSize:20,fontWeight:'bold',paddingTop:-80}}>Applications</p>
          </div>
        </div>
      </div>

      {/* Below code updated with graph section */}
      <div style={{ marginLeft: 50,marginTop:-520 }}>
        <svg ref={svgRef} />
      </div>

       
    </div>
    
  );
};

export default P1;
