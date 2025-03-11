import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Label, Tooltip } from 'recharts';
import Clock from '@mui/icons-material/AccessTimeOutlined';

const ApplicationData = () => {
  const initialTime = 8 * 60 * 60; // 8 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const generalData = {
    totalData: [{ name: 'Total', value: 100 }],
    completedData: [{ name: 'Completed', value: 70 }, { name: 'Remaining', value: 30 }],
    pendingData: [{ name: 'Pending', value: 30 }, { name: 'Remaining', value: 70 }],
    totalApplications: 100,
    completedApplications: 70,
    pendingApplications: 30,
  };

  const tatkalData = {
    totalData: [{ name: 'Total', value: 50 }],
    completedData: [{ name: 'Completed', value: 40 }, { name: 'Remaining', value: 10 }],
    pendingData: [{ name: 'Pending', value: 10 }, { name: 'Remaining', value: 40 }],
    totalApplications: 50,
    completedApplications: 40,
    pendingApplications: 10,
  };

  const [applicationData1, setApplicationData1] = useState(generalData);

  const handleGeneralClick = () => setApplicationData1(generalData);
  const handleTatkalClick = () => setApplicationData1(tatkalData);

  return (
    <>
      <div style={{ display: 'flex'}}>
        <div style={{ marginLeft:0, width:600, height:430, marginTop: 50, boxShadow: '0px 0px 5px black', borderRadius: 20,background:'MediumSeaGreen'}}>
          <div style={{ marginLeft:130, marginTop: 50,color:'white',fontSize:20,fontWeight:'bold'}}>
            {formatTime(timeLeft)}
          </div>

          <div style={{ marginTop: 50, marginLeft: 120 }}>
            <div style={{ color: 'white', background: 'linear-gradient(to bottom, #989c99, #4f5250)', width: 180, height: 180, borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: -50, marginTop: -30, boxShadow: '0px 0px 5px black' }}>
              <Clock style={{ width: 50, height: 50, color: 'red' }} />
              <br />
              {formatTime(timeLeft)}
              <p style={{ margin: 0, color: 'red', fontSize: 18, fontWeight: 'bold' }}>Hours</p>
            </div>
          </div>
          <p style={{ paddingLeft:70,fontSize: 20, fontWeight: 'bold',color:'white'}}>Employee Activity</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <button style={{ width:150, height:45, backgroundColor: '#cc3399', borderRadius: 15, marginRight: 10, boxShadow: '0px 0px 2px black', fontSize: 20, fontWeight: 'bold', color: 'white',border:'none'}}>Free</button>
            <button style={{ width:150, height:45, backgroundColor: '#00ffff', borderRadius: 15, boxShadow: '0px 0px 2px black', fontSize: 20, fontWeight: 'bold', color: 'black',border:'none'}}>Busy</button>
          </div>
        </div>

        <div style={{ padding: '20px', backgroundColor: 'GhostWhite', marginLeft: 50, marginTop: '35px', borderRadius: 20, boxShadow: '0px 0px 5px black', width:900, height: 500 }}>
          <div>
            <div style={{ display: 'flex', marginLeft: 160, marginTop: 20 }}>
              <button
                onClick={handleGeneralClick}
                style={{
                  backgroundColor: '#2980B9',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  marginRight: '10px',
                  width: '200px',
                  fontSize: 20,
                  fontWeight: 'bold',
                  height: '50px',
                  boxShadow: '0px 0px 5px black',
                }}
              >
                General
              </button>
              <button
                onClick={handleTatkalClick}
                style={{
                  backgroundColor: 'white',
                  color: '#2980B9',
                  border: '2px solid #2980B9',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  fontSize: 20,
                  fontWeight: 'bold',
                  width: '200px',
                  marginLeft: 50,
                  height: '50px',
                }}
              >
                Tatkal
              </button>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: -10, width: 200 }}>
  <PieChart width={200} height={300}>
    <Pie
      data={applicationData1.totalData}
      cx={100}
      cy={150}
      innerRadius={70}
      outerRadius={90}
      fill="#82ca9d"
      dataKey="value"
      startAngle={90}
      endAngle={-270}
    >
      <Label
        value="Total Applications"
        position="center"
        style={{ fontSize: 16, fontWeight: 'bold', textAnchor: 'middle' }}
        fill="#333"
      />
      <Label
        value={`${applicationData1.totalApplications}`}
        position="center"
        offset={-20}
        dy={30}
        style={{ fontSize: 16, fontWeight: 'bold', textAnchor: 'middle' }}
        fill="#333"
      />
      {applicationData1.totalData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill="yellow" />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
</div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft:40, width: 300 }}>
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <div
      style={{
        width: '180px',
        height: '180px',
        backgroundColor: '#F8F8F8',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'center',
        marginTop: '20px',
        marginLeft:'-10px',
        boxShadow: '0px 0px 5px black',
      }}
    >
        <div style={{ marginTop:'-15px', marginLeft:'-15px' }}>
      <PieChart width={180} height={180} top={-40}>
        <Pie
          data={applicationData1.completedData}
          cx={90}
          cy={90}
          innerRadius={55}
          outerRadius={70}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          <Label
            style={{ fontSize: 20, fontWeight: 'bold', textAnchor: 'middle' }}
            value="Completed"
            position="centerBottom"
            fill="#333"
          />
          <Label
            style={{ fontSize: 20, fontWeight: 'bold', textAnchor: 'middle' }}
            value={`${applicationData1.completedApplications}`}
            position="centerTop"
            dy={20}
            fill="#333"
          />
          {applicationData1.completedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? 'red' : '#129414'} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      </div>
    </div>

    <div
      style={{
        width: '180px',
        height: '180px',
        backgroundColor: '#F8F8F8',
        borderRadius: '10px',
        padding: '10px',
        marginLeft:'30px',
        marginTop:'20px',
        textAlign: 'center',
        boxShadow: '0px 0px 5px black',
      }}
    >
      <div style={{ marginTop:'-15px', marginLeft:'-15px' }}>
      <PieChart width={180} height={180}>
        <Pie
          data={applicationData1.pendingData}
          cx={90}
          cy={90}
          innerRadius={55}
          outerRadius={70}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          <Label
            style={{ fontSize: 20, fontWeight: 'bold', textAnchor: 'middle' }}
            value="Pending"
            position="centerBottom"
            fill="#333"
          />
          <Label
            style={{ fontSize: 20, fontWeight: 'bold', textAnchor: 'middle' }}
            value={`${applicationData1.pendingApplications}`}
            position="centerTop"
            dy={20}
            fill="#333"
          />
          {applicationData1.pendingData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? '#081196' : '#5d92e8'} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationData;
