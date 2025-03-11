import React, { useState } from 'react';
import { PieChart, Pie, Cell, Label, Tooltip } from 'recharts';
import MBadmin1 from './mbperfmance.jsx';
import MBadmin2 from './mbadmin2.jsx';

const COLORS = ['#F1C40A', '#5549AC', 'green'];


const EmployeeData = () => {
  const [selectedState, setSelectedState] = useState('Andhra Pradesh');
  const [selectedDate, setSelectedDate] = useState('');

  // Dummy data for different states (replace with actual data as per your requirement)
  const stateData = {
    'Andhra Pradesh': {
      totalEmployees: 3000,
      activeEmployees: 1500,
      inactiveEmployees: 1000,
      pendingEmployees: 500,
    },
    'Arunachal Pradesh': {
      totalEmployees: 2500,
      activeEmployees: 1200,
      inactiveEmployees: 800,
      pendingEmployees: 500,
    },
    'Assam': {
      totalEmployees: 2800,
      activeEmployees: 1300,
      inactiveEmployees: 900,
      pendingEmployees: 600,
    },
    'Bihar': {
      totalEmployees: 3200,
      activeEmployees: 1600,
      inactiveEmployees: 1100,
      pendingEmployees: 500,
    },
    'Chhattisgarh': {
      totalEmployees: 2700,
      activeEmployees: 1400,
      inactiveEmployees: 900,
      pendingEmployees: 400,
    },
    'Goa': {
      totalEmployees: 1500,
      activeEmployees: 800,
      inactiveEmployees: 500,
      pendingEmployees: 200,
    },
    'Gujarat': {
      totalEmployees: 3500,
      activeEmployees: 1800,
      inactiveEmployees: 1200,
      pendingEmployees: 500,
    },
    'Haryana': {
      totalEmployees: 2600,
      activeEmployees: 1400,
      inactiveEmployees: 800,
      pendingEmployees: 400,
    },
    'Himachal Pradesh': {
      totalEmployees: 2000,
      activeEmployees: 1000,
      inactiveEmployees: 700,
      pendingEmployees: 300,
    },
    'Uttar Pradesh': {
      totalEmployees: 4000,
      activeEmployees: 2000,
      inactiveEmployees: 1500,
      pendingEmployees: 500,
    },
    'Jammu and Kashmir': {
      totalEmployees: 1800,
      activeEmployees: 900,
      inactiveEmployees: 600,
      pendingEmployees: 300,
    },
    'Jharkhand': {
      totalEmployees: 2300,
      activeEmployees: 1200,
      inactiveEmployees: 700,
      pendingEmployees: 400,
    },
    'Karnataka': {
      totalEmployees: 3800,
      activeEmployees: 1900,
      inactiveEmployees: 1300,
      pendingEmployees: 600,
    },
    'Kerala': {
      totalEmployees: 3000,
      activeEmployees: 1500,
      inactiveEmployees: 1000,
      pendingEmployees: 500,
    },
    'Madhya Pradesh': {
      totalEmployees: 3300,
      activeEmployees: 1700,
      inactiveEmployees: 1100,
      pendingEmployees: 500,
    },
    'Maharashtra': {
      totalEmployees: 4200,
      activeEmployees: 2100,
      inactiveEmployees: 1400,
      pendingEmployees: 700,
    },
    'Meghalaya': {
      totalEmployees: 1700,
      activeEmployees: 800,
      inactiveEmployees: 600,
      pendingEmployees: 300,
    },
    'Manipur': {
      totalEmployees: 1500,
      activeEmployees: 700,
      inactiveEmployees: 500,
      pendingEmployees: 300,
    },
    'Mizoram': {
      totalEmployees: 1400,
      activeEmployees: 600,
      inactiveEmployees: 400,
      pendingEmployees: 200,
    },
    'Nagaland': {
      totalEmployees: 1600,
      activeEmployees: 800,
      inactiveEmployees: 500,
      pendingEmployees: 300,
    },
    'Orissa': {
      totalEmployees: 2900,
      activeEmployees: 1400,
      inactiveEmployees: 1000,
      pendingEmployees: 500,
    },
    'Punjab': {
      totalEmployees: 2700,
      activeEmployees: 1300,
      inactiveEmployees: 900,
      pendingEmployees: 500,
    },
    'Rajasthan': {
      totalEmployees: 3500,
      activeEmployees: 1800,
      inactiveEmployees: 1200,
      pendingEmployees: 500,
    },
    'Sikkim': {
      totalEmployees: 1200,
      activeEmployees: 600,
      inactiveEmployees: 300,
      pendingEmployees: 300,
    },
    'Tamil Nadu': {
      totalEmployees: 3900,
      activeEmployees: 2000,
      inactiveEmployees: 1300,
      pendingEmployees: 600,
    },
    'Telangana': {
      totalEmployees: 2800,
      activeEmployees: 1400,
      inactiveEmployees: 900,
      pendingEmployees: 500,
    },
    'Tripura': {
      totalEmployees: 1300,
      activeEmployees: 700,
      inactiveEmployees: 400,
      pendingEmployees: 200,
    },
    'Uttarakhand': {
      totalEmployees: 1800,
      activeEmployees: 900,
      inactiveEmployees: 600,
      pendingEmployees: 300,
    },
    'West Bengal': {
      totalEmployees: 3600,
      activeEmployees: 1900,
      inactiveEmployees: 1200,
      pendingEmployees: 500,
    },
  };

  // Function to handle state change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  // Function to handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Here you can fetch data or perform calculations based on the selected date
  };

  // Fetch data for the selected state
  const { totalEmployees, activeEmployees, inactiveEmployees, pendingEmployees } = stateData[selectedState];


  return (
    <div style={{background:'#e6fff7',width:1200,height:'auto'}}>
<button style={{fontSize:25,fontWeight:'bold',paddingLeft:0,color:'black',background:'#48D1CC',boxShadow: '0px 0px 5px black',width:280,height:50,marginLeft:200,borderRadius:10,marginTop:20}}>Welcome <span style={{color:'red',fontSize:25,fontWeight:'bold'}}>Suresh</span></button>
      <div style={{width:1100,marginLeft:40,marginTop:50,boxShadow: '0px 0px 2px black',border:'none',height:700,background:'#b9f2ff'}}>
       <div style={{marginLeft:800,marginTop:10,paddingTop:50}}>

        <select style={{height:50,background:'#ff6600',boxShadow: '0px 0px 5px black',width:250,color:'white',borderRadius:10,paddingLeft:20}}          value={selectedState} onChange={handleStateChange}>
        <option value="Andhra Pradesh" style={{fontSize:20,fontWeight:'bold',paddingLeft:20}}>Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
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
          <option value="West Bengal">West Bengal</option>

        </select>
       </div>

      <div style={{display:'flex',width:1000,marginLeft:10,marginTop:30}}>  

        
       <div style={{marginTop:-70}}>
       <input style={{height:50,boxShadow: '0px 0px 5px black',marginLeft:30,background:'#FF0066',color:'white', width:250,borderRadius:10,border:'none',paddingLeft:20}}     type="date" value={selectedDate} onChange={handleDateChange} />
        </div> 
        


      <div style={{marginLeft:-250}}>
      <div style={{marginTop:50}}>
      <PieChart width={400} height={400}>
          <Pie
            data={[
              { name: 'Active', value: activeEmployees },
              { name: 'Inactive', value: inactiveEmployees },
              { name: 'Pending', value: pendingEmployees },
            ]}
            cx={180}
            cy={180}
            innerRadius={100}
            outerRadius={130}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {COLORS.map((color, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
            <Label value={`Total Employees: ${totalEmployees}`} position="center" fontSize={16} fontWeight={800}   fill="#333" />
          </Pie>
          <Tooltip />
        </PieChart>
      
    </div>

    </div>

    {/*------------Active Inactive divs--------*/}

    
    <div style={{display:'flex', marginTop:70,marginLeft:100}}>
      <div style={{width:200,height:200,borderRadius:20,backgroundColor:'#ffaa00',marginRight:20,boxShadow: '0px 0px 5px black'}}>
        <h1 style={{color:'white',fontSize:25,padding:50,marginTop:10,marginLeft:10}}>Active</h1>

        <div style={{marginTop:-30}}>
        <h1 style={{fontSize:25,color:'white',paddingLeft:65}}>{activeEmployees}</h1>

        </div>
      

      </div>
      <div style={{width:200,height:200,borderRadius:20,backgroundColor:'#6600cc',marginLeft:50,boxShadow: '0px 0px 5px black'}}>
      <h1 style={{paddingBottom:20,color:'white',fontSize:25,marginTop:60,textAlign:'center'}}>InActive</h1>

        <div style={{marginTop:10}}>
        <h1 style={{fontSize:25,paddingBottom:25,color:'white',paddingTop:-100,paddingLeft:65}}>{inactiveEmployees}</h1>
        </div>
      
       
      </div>
    </div>
          
    






    </div>


<div style={{display:'grid',marginLeft:550}}>

      
      <div style={{marginTop:-50}}>
      <h1 style={{fontSize:20,fontWeight:'bold'}}>Received Applications <span style={{paddingLeft:125,textDecoration:'none'}}> 2000</span></h1>
      </div>
      <div style={{marginTop:-100}}>
      <h1 style={{fontSize:20,fontWeight:'bold'}}>Completed Applications <span style={{paddingLeft:100,textDecoration:'none'}}> 1500</span></h1>
      </div>
     <div style={{marginTop:-150}}>
     <h1 style={{fontSize:20,fontWeight:'bold'}}>Pending Applications <span style={{paddingLeft:125,textDecoration:'none'}}> 500</span></h1>
     </div>

    </div>

</div>




<div>
  <div style={{marginLeft:10,marginTop:20,display:'flex',background:'#103414',boxShadow: '0px 0px 5px black',height:50,width:1150,borderRadius:10}}>
    <h1 style={{width:300,fontSize:20,color:'white',paddingLeft:20,textAlign:'center',paddingTop:10}}>Admine Profiles</h1>
    <h1 style={{fontSize:20,paddingLeft:100,color:'white',paddingTop:10}}>Andhra Pradesh</h1>
    <h1 style={{width:400,fontSize:20,color:'white',marginLeft:200,textAlign:'center',paddingTop:10}}>Admin Performance</h1>
  </div>
</div>


<div>
<MBadmin1/>
</div>
<MBadmin2/>
{/*------maindiv------*/} 
    </div>
  );
};

export default EmployeeData;
