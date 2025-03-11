import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Ic1 from '@mui/icons-material/AccountBalanceWallet';
import Image from '../images/mbdash4.png';
import '../css/Mbmain.css'; // Ensure this path is correct

const data = [
  { label: 'Group A', value: 100 },
  { label: 'Group B', value: 200 },
  { label: 'Group C', value: 250 },
];

const data1 = [
  { name: 'Jan', value: 2500 },
  { name: 'Feb', value: 5000 },
  { name: 'March', value: 3500 },
  { name: 'April', value: 2000 },
  { name: 'May', value: 5500 },
  { name: 'June', value: 2000 },
  { name: 'July', value: 1000 },
  { name: 'August', value: 3500 },
  { name: 'Sep', value: 2000 },
  { name: 'October', value: 1500 },
  { name: 'Nov', value: 3000 },
  { name: 'December', value: 3500 },
];

const data2 = [
  { name: 'Jan', value: 2700 },
  { name: 'Feb', value: 4800 },
  { name: 'March', value: 3400 },
  { name: 'April', value: 2200 },
  { name: 'May', value: 5300 },
  { name: 'June', value: 2100 },
  { name: 'July', value: 1200 },
  { name: 'August', value: 3600 },
  { name: 'Sep', value: 1900 },
  { name: 'October', value: 1600 },
  { name: 'Nov', value: 2900 },
  { name: 'December', value: 3400 },
];

const data3 = [
  { name: 'Jan', value: 2600 },
  { name: 'Feb', value: 4900 },
  { name: 'March', value: 3300 },
  { name: 'April', value: 2300 },
  { name: 'May', value: 5200 },
  { name: 'June', value: 2200 },
  { name: 'July', value: 1100 },
  { name: 'August', value: 3700 },
  { name: 'Sep', value: 1800 },
  { name: 'October', value: 1700 },
  { name: 'Nov', value: 2800 },
  { name: 'December', value: 3300 },
];

const options = [
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
  {id: "AP", value: "Andhra Pradesh"},
]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('gtr'); // Default active tab
  const [selectedDate, setSelectedDate] = useState('');



  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Here you can fetch data or perform calculations based on the selected date
  };


  return (
    <div className='mbaccount'>


<button className='mbbtn'>Welcome <span style={{color:'red',fontSize:25,fontWeight:'bold'}}>Roopa</span></button>
<img className='mbimg'    src={Image} alt=''/>
      {/* Box 1 */}
      <div className='mbgrap'>
       
        <div className='mbgrap-1'>
          <p className='mbtext'>Revenue Report</p>


          <select className='mbfrom'>
            {options.map((e) => (

        <option value={e.id}>{e.value}</option>
            ))}
          {/* <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Jammu and Kashmir">Jammu And Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Manipur">Manipur</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Orisaa">Orissa</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tami Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option> */}

        </select>

        <div  className='mbfrom-1' >
       <input className='mbfrom1'       type="date" value={selectedDate} onChange={handleDateChange} />
        </div> 

          {/* Pie Chart */}
          <div className='mbgrap1'>
            <Stack direction="row">
              <PieChart
                series={[
                  {
                    startAngle: -90,
                    endAngle: 90,
                    paddingAngle: 5,
                    innerRadius: 80,
                    outerRadius: 100,
                    data,
                  },
                ]}
                margin={{ right:-35 }}
                width={200}
                height={200}
                slotProps={{
                  legend: { hidden: true },
                }}
              />
            </Stack>
            <p className='mbgrp'>Income</p>
            <p className='mbgrap1'>588K</p>

            {/* Below Details */}
            <div className='mbgraptext'>
              <div>
                <button className='mbgrapbtn'></button>
                <p className='mbgraptext_1'>Daily Revenue</p>
              </div>
              <div>
                <button className='mbgrapbtn1'></button>
                <p className='mbgraptext_2'>Monthly Revenue</p>
              </div>
              <div className='mbgrpbt'>
                <button  className='mbgrapbtn2'></button>
                <p className='mbgraptext_3'>Yearly Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response 1 */}
      <div className='mbreport'>
        <div className="ktab">
          <button className={activeTab === 'gtr' ? 'Jtablinks active' : 'Jtablinks'} onClick={() => setActiveTab('gtr')} data-city="gtr">Income</button>
          <button className={activeTab === 'gtr1' ? 'Jtablinks active' : 'Jtablinks'} onClick={() => setActiveTab('gtr1')} data-city="gtr1">Expenses</button>
          <button className={activeTab === 'gtr2' ? 'Jtablinks active' : 'Jtablinks'} onClick={() => setActiveTab('gtr2')} data-city="gtr2">Profile</button>
        </div>

        <div id="gtr" className={activeTab === 'gtr' ? 'ktabcontent active' : 'ktabcontent'}>
          <input className='ktabreport'          type='date'/>
          <br /><br />
          <div className='ktabreport_1'>
            <Ic1 className='ktabicon'/>
            <br />
            <p className='ktabtext'>Total Balance</p>
          </div>
          <div className='ktabgrap'>
            <LineChart width={900} height={400} data={data1}>
              <Line type="monotone" dataKey="value" stroke="#d91490" />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
              <Tooltip />
            </LineChart>
          </div>
        </div>

        <div id="gtr1" className={activeTab === 'gtr1' ? 'ktabcontent active' : 'ktabcontent'}>
          <input className='ktabreport'type='date' />
          <br /><br />
          <div className='ktabreport_1'>
            <Ic1 className='ktabicon'/>
            <br />
            <p className='ktabtext'>Total Balance</p>
          </div>
          <div className='ktabgrap'>
            <LineChart width={900} height={400} data={data2}>
              <Line type="monotone" dataKey="value" stroke="#d91490" />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
              <Tooltip />
            </LineChart>
          </div>
        </div>

        <div id="gtr2" className={activeTab === 'gtr2' ? 'ktabcontent active' : 'ktabcontent'}>
          <input className='ktabreport' type='date'/>
          <br /><br />
          <div  className='ktabreport_1'>
            <Ic1 className='ktabicon'/>
            <br />
            <p className='ktabtext'>Total Balance</p>
          </div>
          <div className='ktabgrap'>
            <LineChart width={900} height={400} data={data3}>
              <Line type="monotone" dataKey="value" stroke="#d91490" />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
              <Tooltip />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
