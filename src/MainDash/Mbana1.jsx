import React from 'react';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,LabelList} from 'recharts';

const DistanceData = () => {
  const data = [
    { name: 'Jan', Visitors: 40 },
    { name: 'Feb', Visitors: 30 },
    { name: 'Mar', Visitors: 20 },
    { name: 'Apr', Visitors: 27 },
    { name: 'May', Visitors: 18 },
    { name: 'Jun', Visitors: 23 },
    { name: 'Jul', Visitors: 34 },
    { name: 'Aug', Visitors: 45 },
    { name: 'Sep', Visitors: 32 },
    { name: 'Oct', Visitors: 27 },
    { name: 'Nov', Visitors: 20 },
    { name: 'Dec', Visitors: 25 },
  ];

  return (
    <div style={{background:'#b3ffb3'}}>
      <h1 style={{color:'#D109AF',textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:40}}>Total Visitors in Last 8 Months</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',background:'white',width:1000,marginLeft:100,boxShadow:'0px 0px 5px black',height:600,marginTop:10}}>
      <BarChart
        width={900}
        height={550}
        background={'white'}
        data={data}
        margin={{ top:30, right: 30, left:0, bottom: 20 }} // Increased bottom margin to accommodate X-axis labels
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Visitors', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Visitors" fill="#8884d8">
          <LabelList dataKey="Visitors" position="top" />
        </Bar>
      </BarChart>
    </div>

    </div>
      );
};

export default DistanceData;
