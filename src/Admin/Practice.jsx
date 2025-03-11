import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChartComponent = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [admitReceived, setAdmitReceived] = useState(2000623);
  const [admitDelivered, setAdmitDelivered] = useState(1123423);

  const data = [
    { name: 'Admit Cards Received', value: admitReceived },
    { name: 'Admit Cards Delivered', value: admitDelivered},
  ];


  

  const COLORS = ['#0088FE', '#00C49F']; // Colors for the pie chart segments

  const handlePieClick = (data, index) => {
    setSelectedState(data[index].name); // Set the selected state name
    if (data[index].name === 'Admit Cards Received') {
      setAdmitReceived(data[index].value);
      setAdmitDelivered(admitDelivered); // Maintain the other value
    } else if (data[index].name === 'Admit Cards Delivered') {
      setAdmitReceived(admitReceived); // Maintain the other value
      setAdmitDelivered(data[index].value);
    }
  };

  return (
    <div style={{width:1200,background:'lightgreen'}}>
      <div style={{ display: 'flex', width: 1000, height: 500, marginLeft: 100, borderRadius: 10 }}>
        <div style={{ marginLeft:30, marginTop: 40 }}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={170}
              cy={150}
              innerRadius={100}
              outerRadius={150}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              onClick={handlePieClick} // Handle click on pie chart segment
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div style={{ display: 'flex', marginTop: 30,marginLeft:10}}>
          <div style={{ backgroundColor: 'blue', width: 250, height: 120, color: 'white', border: 'none', borderRadius: 10,marginTop:120, textAlign: 'center', paddingTop: 30,boxShadow: '0px 0px 5px black',fontSize:20,fontWeight:'bold'}}>
            Admit cards received <br /> {admitReceived}
          </div>
          <br />
          <div style={{ backgroundColor: '#00C49F', width: 250, height: 120, color: 'white', border: 'none', borderRadius: 10, marginTop:120, textAlign: 'center', paddingTop: 30,boxShadow: '0px 0px 5px black', fontSize:20,fontWeight:'bold',marginLeft:20}}>
            Admit cards delivered <br /> {admitDelivered}
          </div>
        </div>
      </div>

      {selectedState && (
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          Selected state: <strong>{selectedState}</strong>
        </div>
      )}
    </div>
  );
};

export default PieChartComponent;
