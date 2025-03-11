import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Label, Tooltip } from 'recharts';

const COLORS = ['white', 'red'];

const EmployeeData = () => {
  const [selectedDate] = useState(new Date());
  const [employeeData, setEmployeeData] = useState({
    totalEmployees: 3000,
    activeEmployees: 1500,
    inactiveEmployees: 1500,
  });

  useEffect(() => {
    // Generate dummy data based on the selected date
    const dummyData = generateDummyData(selectedDate);
    setEmployeeData(dummyData);
  }, [selectedDate]);

  const generateDummyData = (date) => {
    // Logic to generate dummy data based on the date
    // For example, you could generate random numbers within a range
    // or use some logic based on the date (e.g., more active employees on weekdays)
    const totalEmployees = Math.floor(Math.random() * 3000) + 1000;
    const activeEmployees = Math.floor(Math.random() * totalEmployees);
    const inactiveEmployees = totalEmployees - activeEmployees;

    return {
      totalEmployees,
      activeEmployees,
      inactiveEmployees,
    };
  };

  return (
    <div style={{width:300}}>
      <div style={{ width:50, height: 500 }}>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Pie Chart Section */}
          <div style={{ marginLeft: '-60px', marginTop: '-100px' }}>
            <PieChart width={400} height={400}>
              <Pie
                data={[
                  { name: 'Active', value: employeeData.activeEmployees },
                  { name: 'Inactive', value: employeeData.inactiveEmployees },
                ]}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="darkred"
                paddingAngle={0}
                dataKey="value"
              >
                {[
                  { name: 'Active', value: employeeData.activeEmployees },
                  { name: 'Inactive', value: employeeData.inactiveEmployees },
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label
                style={{color:'white'}}
                  value={`Total: ${employeeData.totalEmployees}`}
                  position="center"
                  fontSize={20}
                  fill="white"
                />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* Progress Bars Section */}
          <div style={{ display: 'flex', marginLeft: "10px", width: '300px', marginTop: '10px' }}>
            <div style={{ marginTop: '-120px', marginLeft: '80px', display: 'flex' }}>
              <div style={{ display: 'flex', marginLeft: -60 }}>

                <div>
                  <p style={{ backgroundColor: '#164F66', width: 100, height: 30, textAlign: 'center', color: 'white', paddingTop: 5 }}>{`${Math.round((employeeData.activeEmployees / employeeData.totalEmployees) * 100)}% Active`}</p>
                </div>

                <br />
                <div style={{ marginBottom: 5 }}>
                  <p style={{ backgroundColor: '#164F66', width: 100, height: 30, textAlign: 'center', color: 'white', paddingTop: 5, marginLeft:40 }}>{`${Math.round((employeeData.inactiveEmployees / employeeData.totalEmployees) * 100)}% Inactive`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bars */}
          <div style={{ display: 'flex', width: "100px" }}>

            <div style={{ width:130,height:150, backgroundColor: '#0CB72E', borderRadius: '20px', marginTop: '-60px', marginLeft:20 }}>
              <div>
                <p style={{ fontSize: '20px', textAlign: 'center', color: 'white' }}>{`${Math.round((employeeData.activeEmployees / employeeData.totalEmployees) * 100)}%`}</p>
              </div>
              <div style={{ width: '100px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px', position: 'relative', marginLeft: '25px' }}>
                <div style={{ width: `${(employeeData.activeEmployees / employeeData.totalEmployees) * 100}%`, height: '100%', backgroundColor: '#0B0937', borderRadius: '4px', transition: 'width 0.3s ease-in-out', marginTop: '50px', marginLeft: '-20px' }}></div>
              </div>
            </div>

            <div style={{ width:130, height:150, backgroundColor: '#EF0A0A', borderRadius: '20px', marginTop: '-60px', marginLeft: 10 }}>
              <div style={{ marginBottom: 5 }}>
                <p style={{ fontSize: '20px', textAlign: 'center', color: 'white', paddingTop: 5 }}>{`${Math.round((employeeData.inactiveEmployees / employeeData.totalEmployees) * 100)}%`}</p>
              </div>
              <div style={{ width: '100px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px', position: 'relative', marginLeft: '25px' }}>
                <div style={{ width: `${(employeeData.inactiveEmployees / employeeData.totalEmployees) * 100}%`, height: '100%', backgroundColor: '#0B0937', borderRadius: '4px', transition: 'width 0.3s ease-in-out', marginTop: '50px', marginLeft: '-20px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeData;
