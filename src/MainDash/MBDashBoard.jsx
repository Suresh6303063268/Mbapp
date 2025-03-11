import React from 'react'
import Image from '../images/mbdash4.png';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { MdPendingActions } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";

import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import CanvasJSReact from '@canvasjs/react-charts';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { PieChart, Pie, Cell, Label, } from 'recharts';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';


import { AreaChart, Area, ResponsiveContainer } from 'recharts';


const dashboard1 = () => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    axisX: {
      valueFormatString: "MMM"
    },
    // axisY: {
    //   prefix: "₹"    },
    data: [{
      // yValueFormatString: "₹#,###",
      xValueFormatString: "MMMM",
      type: "spline",
      dataPoints: [
        { x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
					{ x: new Date(2017, 6), y: 40000 },
					{ x: new Date(2017, 7), y: 52500 },
					{ x: new Date(2017, 8), y: 32300 },
					{ x: new Date(2017, 9), y: 42000 },
					{ x: new Date(2017, 10), y: 37160 },
					{ x: new Date(2017, 11), y: 38400 }
      ]
    }]
  }
/*------------------------------ Tatkal and normal graph--------------------------*/
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];

/*------------------------------------- Applications graph ------------------------------*/







/*-------------------------------------------- Revenue report graph---------------------------*/
const data = [
  {
    "name": "Jan",
    "Earnings": 4000,
    "Expense": 2400
  },
  {
    "name": "Feb",
    "Earnings": 3000,
    "Expense": 1398
  },
  {
    "name": "Mar",
    "Earnings": 2000,
    "Expense": 9800
  },
  {
    "name": "Apr",
    "Earnings": 2780,
    "Expense": 3908
  },
  {
    "name": "May",
    "Earnings": 1890,
    "Expense": 4800
  },
  {
    "name": "June",
    "Earnings": 2390,
    "Expense": 3800
  },
  {
    "name": "July",
    "Earnings": 3490,
    "Expense": 4300
  }
]

/*--------------------------------------Income section -------------------------------*/ 
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];


const COLORS = ['#ED1D24', '#12C298'];

  const employeeData = {
    totalEmployees: '38%',
    name:'Daily',
    activeEmployees: 1500,
    inactiveEmployees: 1500,
  };


  


  const COLORS1 = ['#9370DB', '#FFD700', '#00FFFF']; 

    // Dummy data for active, inactive, and another category (example values)
    const activeEmployees = 1200;
    const inactiveEmployees = 800;
    const anotherCategoryEmployees = 600;



/*----------------------------------------------------Accounts section----------------------------------*/

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
  },
  dashboard: {
    width: '80%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    borderBottom: '1px solid #eee',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color:'#ff0066',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  select: {
    padding: '8px',
    marginRight: '8px',
    border: '1px solid #ccc none',
    borderRadius: '4px',
    background:'#006699',
    boxShadow: '0px 0px 5px black',
    color:'white',
  },
  input: {
    padding: '8px',
    marginRight: '8px',
    border: '1px solid #ccc none',
    borderRadius: '4px',
    width: '200px',
    background:'#ff0066',
    marginTop:25,
    boxShadow: '0px 0px 5px black',
    color:'white',
  },
  date: {
    display: 'flex',
    alignItems: 'center',
   

  },
  dateText: {
    fontSize: '16px',
    marginRight:'38px',
    color:'#006699',
  },
  content: {
    display: 'flex',
    padding: '16px',
  },
  chartContainer: {
    flex: 3,
    marginRight: '16px',
  },
  stats: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  stat: {
    backgroundColor: '#E3F5FF',
    padding: '16px',
    marginBottom: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },

stat1: {
    backgroundColor: '#E5ECF6',
    padding: '16px',
    marginBottom: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },

stat2: {
    backgroundColor: '#C6C7F8',
    padding: '16px',
    marginBottom: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },  






  lastStat: {
    marginBottom: 0,
  },
  statTitle: {
    margin: '0 0 8px 0',
    fontSize: '16px',
    fontWeight: 'normal',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  statChange: {
    fontSize: '12px',
    color: '#888',
  },
  chart: {
    width: '100%',
    height: '300px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  },
};



/*-----------------------------------Accounts section graph ----------------------------------------*/
const datta = [
  { name: 'Jan', thisYear: 4000, lastYear: 3000 },
  { name: 'Feb', thisYear: 3000, lastYear: 1398 },
  { name: 'Mar', thisYear: 2000, lastYear: 6500 },
  { name: 'Apr', thisYear: 2780, lastYear: 3908 },
  { name: 'May', thisYear: 1890, lastYear: 5800 },
  { name: 'Jun', thisYear: 2390, lastYear: 6000 },
  { name: 'Jul', thisYear: 3490, lastYear: 4300 },
];

  return (
    <div style={{width:1150,background:'#c2f0f0',marginTop:-30}}>
   <button style={{fontSize:25,fontWeight:'bold',paddingLeft:0,color:'white',background:'#6600cc',boxShadow: '0px 0px 5px black',width:300,height:50,marginLeft:80,borderRadius:10,marginTop:100}}>Welcome <span style={{color:'red',fontSize:25,fontWeight:'bold'}}>Roopa</span></button>
          <img src={Image} alt='' style={{ height:250, width:250, float: 'right', marginTop:10, marginRight:60, borderRadius:50,boxShadow: '0px 0px 5px #c2f0f0'}} />
    

      <div style={{ display: 'flex', width:700}}>
        {/*------------------------------------Total application section --------------------- */}
     
        <div style={{border: '0px solid ', boxShadow: '0px 0px 5px ', width:700, marginLeft: 40, height:70, marginTop:130,background:'#006699',borderTopLeftRadius:10,borderTopRightRadius:10}}>
          <h1 style={{letterSpacing: 1, fontSize:20, textDecoration: 'none', paddingLeft: 25,marginTop:20,fontWeight:'bold', color:'white'}}>TotalApplications</h1>
          <input type="datetime-local" id="" name="" style={{ float: 'right', marginTop:-40, marginRight:20,boxShadow: '0px 0px 5px black',height:40}}></input>
          <select style={{ float: 'left', marginTop:-40,marginLeft:270, width:200,height:40,boxShadow: '0px 0px 5px black',borderRadius:30}}>
            <option style={{width:150,height:40,boxShadow: '0px 0px 5px black'}}      value="1">All</option>
            <option value="2">Pending</option>
            <option value="3">Approved</option>
            <option value="4">Rejected</option>
          </select>

{/*------------------------------------------------- Total Application Graph --------------------------- */}
          <div style={{ marginTop:25, display: 'flex', width:700,height:400,boxShadow: '0px 0px 5px black',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <CanvasJSChart options={options} style={{ width: 600,height:400 }} />
          </div>
        </div>
        

{/*-----------------------------------------------Regular section---------------------------------*/}
        <div style={{ display: 'grid', marginLeft: 90,marginTop:100}}>
          <div style={{ borderRadius: 10, height:250, border: '1px solid black', boxShadow: '0px 0px 5px', width:250, marginTop:30, background:'white'}}>
            <div style={{ height: 100, width: 300, marginTop: 10, marginLeft: 10 }}>
              {/* <CalendarMonthIcon style={{ color: '#00008B', fontSize: 50, paddingLeft: 25 }} /> */}
              <input type="datetime-local" id="" name="" style={{marginTop:-55, marginLeft:-10,boxShadow: '0px 0px 5px black',height:40,background:'#006699',color:'white',width:248, borderTopLeftRadius:10,borderTopRightRadius:10,border:'none'}}></input>
              <h1 style={{paddingLeft:65, fontSize: 20,fontWeight:'bold',paddingTop:10}}>Regular </h1>
              <h2 style={{fontWeight:'500px', fontSize:25, paddingLeft:80, paddingTop:20,color:'red'}}>425K</h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ChartContainer
                width={500}
                height={200}
                color={'gray'}
                series={[{ data: uData.slice(0, 5), label: 'uv', type: 'bar' }]}
                xAxis={[{ scaleType: 'band', data: xLabels.slice(0, 5) }]}>
                <BarPlot />
              </ChartContainer>
            </div>
          </div>
{/*------------------------------------------------Tatkal Section-----------------------------------------------*/}

          <div style={{ marginLeft:-10 }}>
          <div style={{ borderRadius: 10, height:250, border: '1px solid black', boxShadow: '0px 0px 5px', width:248, marginTop:30,background:'white'}}>
            <div style={{ height: 100, width: 300, marginTop: 10, marginLeft: 10 }}>
              {/* <CalendarMonthIcon style={{ color: '#FF0000', fontSize: 50, paddingLeft: 25 }} /> */}
              <input type="datetime-local" id="" name="" style={{marginTop:-25, marginLeft:-10,boxShadow: '0px 0px 5px black',height:40,width:240,background:'#006699',color:'white', borderTopLeftRadius:10,borderTopRightRadius:10,border:'none'}}></input>
              <h1 style={{paddingLeft:80, fontSize: 20,fontWeight:'bold',paddingTop:10}}>Tatkal </h1>
              <h2 style={{fontSize: 25, fontWeight:'500px',paddingLeft:80, paddingTop:10,color:'darkorange'}}>100K</h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ChartContainer
                width={500}
                height={200}
                color={'#C0C0C0'}
                series={[{ data: uData.slice(0, 5), label: 'uv', type: 'bar' }]}
                xAxis={[{ scaleType: 'band', data: xLabels.slice(0, 5) }]}>
                <BarPlot />
              </ChartContainer>
            </div>
          </div>
        </div>



        </div>
      </div>



{/*-------------------------------------------Applications---------------------------*/}

<section style={{ display: 'flex', marginTop: 100, borderRadius:10, boxShadow: '0px 0px 5px black', margin:50,width:1040,background:'white',marginLeft:40}}>

<div style={{display:'grid', marginLeft:45}}>

<div style={{marginLeft:35}}>
  <h3 style={{fontWeight:'bold',fontsize:20,paddingTop:20,color:'#ff0066'}}>Applications</h3>
  <h4 style={{fontWeight:500, color:'#ccc', fontsize:19,paddingTop:10}}>42.8k Applications</h4>
</div>

<div style={{marginLeft:35}}>
  <h3 style={{fontWeight:600, color:'#ff0066'}}>8,258</h3>
  <h4 style={{fontWeight:500, color:'#ccc', fontSize:20,paddingTop:10}}>Total Applications</h4>
</div>


<div style={{display:'flex', marginTop:20, marginLeft:20}}>
<CiMobile2 style={{color:'white', fontSize:35, marginRight:20, backgroundColor:'darkblue', borderRadius:10,padding:5}}/>
<h3 style={{fontWeight:600, fontSize:20, paddingLeft:50}}>Completed</h3>
<h4 style={{fontWeight:500, fontsize:20,paddingLeft:50}}>82.5k</h4>
</div>

<div style={{display:'flex', marginTop:20, marginLeft:20}}>
<MdPendingActions style={{color:'white', fontSize:35, marginRight:20,  borderRadius:10, padding:5, background:'darkgreen'}}/>
<h3 style={{fontWeight:600, fontSize:20, paddingLeft:50}}>Completed</h3>
<h4 style={{fontWeight:500, fontsize:20,paddingLeft:50}}>82.5k</h4>
</div>



</div>

<div style={{ width:'100%', height:400 ,marginLeft:250}}>
  <PieChart width={500} height={500}>
    <Pie
      data={[
        { name: 'Active', value: employeeData.activeEmployees },
        { name: 'Inactive', value: employeeData.inactiveEmployees },
      ]}
      cx={200}
      cy={200}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={0}
      dataKey="value"
    >
      {COLORS.map((color, index) => (
        <Cell key={`cell-${index}`} fill={color} />
      ))}
      <Label
        value={`Daily: ${employeeData.totalEmployees}`}
        position="center"
        fontSize={20}
        fill="#333"
      />
    </Pie>
    <Tooltip />
  </PieChart>
</div>
</section>


{/*-----------------------------------------------Revenue report section --------------------------------*/}

<section style={{display: 'flex'}}>
  
  <div style={{borderRadius:10, boxShadow: '0px 0px 5px black', margin:20,width:650, height:450, background:'white',marginLeft:50}}>
  <h4 style={{color:'#ff0066',fontWeight:'bold', paddingLeft:15,fontsize:20,paddingTop:5}}>Revenue Report</h4>
  <BarChart width={600} height={400} data={data} borderRadius={20}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Expense" fill="#FFD700" />
  <Bar dataKey="Earnings" fill="#7B68EE" />
</BarChart>
  </div>

{/*-----------------------------------------selecting  year------------------------------*/}
  <div style={{boxShadow: '0px 0px 5px black',background:'white',height:350,marginLeft:80,marginTop:70,borderRadius:10}}>
  <select style={{width:300, height: 50,borderTopLeftRadius:10,borderTopRightRadius:10,background:'#ff0066',boxShadow: '0px 0px 5px black',color:'white'}}>
        <option style={{background:'#ff0066', color:'white'}}   value="">Select Year</option>
        {[...Array(10).keys()].map(year => (
          <option key={year} value={year + new Date().getFullYear() - 4}>
            {year + new Date().getFullYear() - 4}
          </option>
        ))}
      </select>
      <h4 style={{fontWeight:500,marginLeft:80,marginTop:20}}>₹ 25,852</h4>
      <div style={{marginLeft:1,marginTop:-40}}>
      <ChartContainer
      width={300}
      height={250}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#8884d8',
          strokeWidth: 2,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#8884d8',
          scale: '0.6',
          fill: '#fff',
          strokeWidth: 2,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
      </div>

      <button style={{paddingTop:-10,color:'white', backgroundColor:'#ff0066',width:150, boxShadow: '0px 0px 5px black',height:40,marginRight:80,marginTop:-30,fontsize:20,fontWeight:'bold',borderRadius:10,float:'right',
      fontSize:25,marginLeft:20}}>Income</button>
  </div>


{/*-------------------------------------------Income ----------------------------*/}
<div>

<div style={{display:'flex',marginTop:520,marginLeft:-970,flexDirection:'column'}}>

<div style={{borderRadius:10, boxShadow: '0px 0px 5px black',marginLeft:-30, width:300, height:300,background:'white'}}>
<div style={{marginLeft:10}}>
  <h4 style={{color:'#ff0066', fontWeight:600,paddingTop:10}}>Income</h4>
  <h5 style={{fontsize:20}}>2,65k</h5>
 <div style={{marginLeft:-40, marginTop:-40}}>
 <ChartContainer
                width={340}
                height={300}
                color={'#C0C0C0'}
                series={[{ data: uData.slice(0, 5), label: 'uv', type: 'bar' }]}
                xAxis={[{ scaleType: 'band', data: xLabels.slice(0, 5) }]}>
                <BarPlot />
              </ChartContainer>
 </div>
</div>
</div>



{/*-------------------------------Expense section----------------------------------*/}
<div style={{borderRadius:10, boxShadow: '0px 0px 5px black',marginLeft:-30, width:300,height:300,background:'white',marginTop:50}}>
<div style={{marginLeft:10}}>
  <h4 style={{color:'#ff0066', fontWeight:600,paddingTop:10}}>Expense</h4>
  <h5 style={{fontsize:20}}>6,25k</h5>
 <div style={{marginLeft:-40}}>
      <Stack direction="row" sx={{ width:250 ,marginLeft:5}}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[5, 4, 2, 5, 7, 2, 6,1,10,3,4,1,5]} height={200} />
      </Box>
      </Stack>
 </div>
</div>
</div>


</div>

{/*-------------------------------------------Profits section-------------------------------*/}
<div style={{borderRadius:10,width:600, height:450,marginLeft:-600,background:'white',marginTop:-600,boxShadow: '0px 0px 5px black'}}>
<div style={{ marginLeft:-20, marginTop:50}}>
<h3 style={{fontWeight:'bold', fontsize:25, paddingLeft:45,color:'#ff0066',paddingTop:30}}>Profits</h3>
<h4 style={{color:'black',fontWeight:400,paddingTop:100,paddingLeft:70}}>This Month</h4>
<h5 style={{fontWeight:400,paddingTop:30,paddingLeft:70}}>₹ 4,055.56</h5>
<p style={{color:'#A4A9B1',paddingTop:30,paddingLeft:70}}>68.2% more earnings than last month.</p>

<div>

<div style={{ marginLeft:250, marginTop:-300 }}>
        <PieChart width={400} height={400}>
          <Pie
            data={[
              { name: 'Active', value: activeEmployees },
              { name: 'Inactive', value: inactiveEmployees },
              { name: 'Another Category', value: anotherCategoryEmployees },
            ]}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {COLORS1.map((color, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

</div>


</div>

</div>

</div>

</section>




{/*------------------------------------------------Accounts section -----------------------------*/}

<section style={{marginTop:60,marginLeft:-20}}>

<div style={styles.body}>
      <div style={styles.dashboard}>
        <div style={styles.header}>
          <div style={styles.title}>Accounts</div>
          <div style={styles.controls}>
            <select style={styles.select}>
              <option style={{background:'#ff0066'}}  >All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            
            <input type="text" placeholder="Search State" style={styles.input} />
          </div>
          <div style={styles.date}>
            <span style={styles.dateText}>2024-June</span>
            <input type="datetime-local" id="" name="" style={{ float: 'right', marginTop:7, marginRight:20,boxShadow: '0px 0px 5px black',height:40,background:'#66ffff ',color:'black'}}></input>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.chartContainer}>
            <div style={styles.chartHeader}>
              <div style={{fontsize:18,fontWeight:'bold',color:'#ff66ff'}}>Total Users</div>
              <div>
                <span style={{textDecoration:'none'}}>This year</span> <span style={{textDecoration:'none'}}>Last year</span>
              </div>
            </div>
            <ResponsiveContainer width='100%' height="80%">
              <AreaChart
                data={datta}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="thisYear" stroke="#8884d8" fill="#F0F8FF" />
                <Area type="monotone" dataKey="lastYear" stroke="black" fill="#D3D3D3" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={styles.stats}>
            <div style={styles.stat}>
              <h3 style={styles.statTitle}>Total Accounts</h3>
              <div style={styles.statValue}>7,265</div>
              <div style={styles.statChange}>+11.01%</div>
            </div>
            <div style={styles.stat1}>
              <h3 style={styles.statTitle}>New Accounts</h3>
              <div style={styles.statValue}>3,671</div>
              <div style={styles.statChange}>+0.03%</div>
            </div>
            <div style={styles.stat2}>
              <h3 style={styles.statTitle}>OTR Filled Accounts</h3>
              <div style={styles.statValue}>3,571</div>
              <div style={styles.statChange}>+0.03%</div>
            </div>
          </div>
        </div>
      </div>
    </div>

</section>






















    </div>
  )
}

export default dashboard1
