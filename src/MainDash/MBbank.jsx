import React from 'react';
import Ic2 from '@mui/icons-material/AccountBalanceWallet';
import TimelineIcon from '@mui/icons-material/Timeline';
import Ic3 from '@mui/icons-material/TouchApp';
import Ic4 from '@mui/icons-material/Balance';
import Ic5 from '@mui/icons-material/Wallet';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Cell,ResponsiveContainer, BarChart, Bar} from 'recharts';
import MBRfi from './ruff.jsx';

const p6 = () => {



/*data for the 2 line charts*/
  const data = [
    {
      "name": "1st June",
      "failed": 0,
      "successfull": 0
    },
    {
      "name": "2nd June",
      "failed": 0,
      "successfull": 0
    },
    {
      "name": "3rd June",
      "failed": 0,
      "successfull": 2
    },
    {
      "name": "4th June",
      "failed": 1.5,
      "successfull": 2
    },
    {
      "name": "5th June",
      "failed": 1.5,
      "successfull": 2
    },
    {
      "name": "6th June",
      "failed": 2,
      "successfull": 2.5
    },
    {
      "name": "7th June",
      "failed": 2.3,
      "successfull": 3.5
    },
    {
      "name": "8th June",
      "failed": 2.3,
      "successfull": 3.5
    },
    {
      "name": "9th June",
      "failed": 2.8,
      "successfull": 3.5
    },
    {
      "name": "10th June",
      "failed": 3,
      "successfull": 3
    },
    {
      "name": "11th June",
      "failed": 3.2,
      "successfull": 3
    },
    {
      "name": "13th June",
      "failed": 3.2,
      "successfull": 3.5
    },
    {
      "name": "14th June",
      "failed": 3,
      "successfull": 3.5
    },
    {
      "name": "15th June",
      "failed": 3.2,
      "successfull": 3.5
    },
    {
      "name": "16th June",
      "failed": 3.5,
      "successfull": 3.5
    },
    {
      "name": "17th June",
      "failed": 3.8,
      "successfull": 3
    },
    {
      "name": "18th June",
      "failed": 3.8,
      "successfull": 3
    },
    {
      "name": "19th June",
      "failed": 4,
      "successfull": 3
    },
    {
      "name": "20th June",
      "failed": 4.5,
      "successfull": 3
    },
    {
      "name": "21st June",
      "failed": 5,
      "successfull": 3.5
    },
    {
      "name": "22nd June",
      "failed": 5.5,
      "successfull": 4
    },
    {
      "name": "23rd June",
      "failed": 5.5,
      "successfull": 4.5
    },
    {
      "name": "24th June",
      "failed": 5.5,
      "successfull": 5
    },
    {
      "name": "25th June",
      "failed": 6,
      "successfull": 5
    },
    {
      "name": "26th June",
      "failed": 6.5,
      "successfull": 5.5
    },
    {
      "name": "27th June",
      "failed": 7,
      "successfull": 6
    },
    {
      "name": "28th June",
      "failed": 7.5,
      "successfull": 6.5
    },
    {
      "name": "29th June",
      "failed": 8,
      "successfull": 7
    },
    {
      "name": "30th June",
      "failed": 8.5,
      "successfull": 7.5
    },
    {
      "name": "31st June",
      "failed": 8.5,
      "successfull": 8
    }
  ];


/*data1 bar graph*/

  const data1 = [
    { name: '1', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '2', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '3', 'Application Billing': 4000, 'Admit Card Billing': 2000 },
    { name: '4', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '5', 'Application Billing': 7000, 'Admit Card Billing': 5000 },
    { name: '6', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '7', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '8', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '9', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '10', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '11', 'Application Billing': 4000, 'Admit Card Billing': 2000 },
    { name: '12', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '13', 'Application Billing': 7000, 'Admit Card Billing': 5000 },
    { name: '14', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '15', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '16', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '17', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '18', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '19', 'Application Billing': 4000, 'Admit Card Billing': 2000 },
    { name: '20', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '21', 'Application Billing': 7000, 'Admit Card Billing': 5000 },
    { name: '22', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '23', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '24', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '25', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '26', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '27', 'Application Billing': 4000, 'Admit Card Billing': 2000 },
    { name: '28', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    { name: '29', 'Application Billing': 7000, 'Admit Card Billing': 5000 },
    { name: '30', 'Application Billing': 6000, 'Admit Card Billing': 4000 },
    { name: '31', 'Application Billing': 5000, 'Admit Card Billing': 3000 },
    

  ];


/*data 2 pie chart*/

const data2= [
  { name: 'Development', value: 40, color: '#82ca9d'},  // Green
  { name: 'Govt. Tax', value: 12, color: '#8884d8' },    // Blue
  { name: 'Rent', value: 30, color: '#ff8042' },         // Red
  { name: 'RND', value: 8, color: '#a4de6c' },           // Purple
  { name: 'Salaries', value: 10, color: '#413ea0' },     // Dark Blue
];


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  
  
}

  return (  

    <div style={{backgroundColor:'#ffccff', height:2400,width:1200,boxShadow: '0px 0px 5px black',borderTopLeftRadius:10,borderTopRightRadius:10}}>
      <h1 style={{ 
        fontSize: 30, 
        textAlign: 'center', 
        height: 50, 
        color: 'white', 
        marginBottom: 60, 
        backgroundColor: '#0B496F', 
        borderRadius: 7 ,
        fontWeight:'bold',
      }}>
        Account
      </h1>

      <div style={{display:'flex',marginLeft:30,marginTop:-20}}>
      <div style={{ display: 'flex',marginLeft:-5,width:250,height:260,background: 'linear-gradient(to right,#00F5A0,#00D9F5 )',boxShadow: '0px 0px 5px black',padding: 50 , borderRadius:20}}>
        <div style={{marginLeft:-30,marginTop:-30}}>
        <Ic2 style={{fontSize:50,marginLeft:70}}/>
        </div>
        <p style={{width:250,fontSize:20,textAlign:'center',marginLeft:-140,fontWeight:'bold',marginTop:40}}>Available Balance</p>
        <p style={{fontSize:25,marginLeft:-200,marginTop:80}}>₹ 1,35,000</p>
      <div style={{marginTop:130,marginLeft:-80}}>
      <TimelineIcon style={{fontSize:50}}/>
      </div>
        
      </div >
      <div style={{ display: 'flex',width:250,marginLeft:50,height:260,padding: 50,boxShadow: '0px 0px 5px black', background: 'linear-gradient(to right, #FF512F, #F09819)',color:'white', borderRadius:20 }}>
      <div style={{marginLeft:50,marginTop:-30}}>
      <Ic3 style={{fontSize:50}}/>
      </div>
        <p style={{width:250,fontSize:20,marginLeft:-100,marginTop:40,fontWeight:'bold'}}>Hold/Lien Amount</p>
            
        <p style={{fontSize:25,marginLeft:-210,marginTop:80}}>₹ 0.00</p>
        <div style={{marginTop:120,fontSize:20,marginLeft:-60}}>
      <TimelineIcon style={{fontSize:50,marginTop:10}}/>
      </div>
      </div>
      
      <div style={{ display: 'flex', padding: 50,width:250,height:260,fontSize:20,marginLeft:50,boxShadow: '0px 0px 5px black',  background: 'linear-gradient(to right, #614385, #516395)',color:'white', borderRadius:20}}>
      <div  style={{marginLeft:50,marginTop:-30}}>
      <Ic4 style={{fontSize:50}}/>
      </div>
        <p style={{width:250,fontSize:20,marginLeft:-100,fontWeight:'bold',marginTop:40}}>Bank Transactions</p>
        <p style={{fontSize:25,marginLeft:-210,marginTop:80}}>₹ 0.00</p>
        <div style={{marginTop:120,fontSize:20,marginLeft:-60}}>
      <TimelineIcon style={{fontSize:50,marginTop:10}}/>
      </div>
      </div>
      <div style={{ display: 'flex',width:250, padding: 50,height:260,marginLeft:40,boxShadow: '0px 0px 5px black',fontSize:20,background: 'linear-gradient(to right, #FFE999, #8AFF61)', borderRadius:20 }}>
      <div style={{marginLeft:50,marginTop:-30}}>
        <Ic5 style={{fontSize:50}}/>
        </div>
        <p style={{width:250,fontSize:20,marginLeft:-110,fontWeight:'bold',marginTop:40}}>Wallet Transactions</p>
        <p style={{fontSize:25,marginLeft:-200,marginTop:80}}>₹ 0.00</p>
        <div style={{marginTop:120,fontSize:20,marginLeft:-60}}>
      <TimelineIcon style={{fontSize:50,marginTop:10}}/>
      </div>
      </div>
    </div>
    <br></br>
    <div style={{width:1200,boxShadow: '0px 0px 5px black',backgroundColor: '#0B496F',borderTopLeftRadius:10,borderTopRightRadius:10,height: 50,marginTop:30}}>
      <h1 style={{ 
        fontSize:25, 
        textAlign: 'center', 
        color: 'white', 
        fontWeight:'bold',
        paddingTop:10,
      }} >Transactions</h1>
    </div>





{/*2nd box starts , 2 line graphs starts*/}
    <div style={{marginLeft:45,marginTop:50,height:630,borderRadius:20, backgroundColor:'white',width:1100,boxShadow: '0px 0px 5px black'}}>
        <p style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'#ff0066',paddingTop:10}}>
            Transactions
        </p>
        <input style={{width:180,height:40,border:'none',background:'#ff0066',boxShadow: '0px 0px 5px black',borderRadius:10,color:'white',paddingLeft:10,marginLeft:40,float:'left'}} type='date'/>
        <div style={{marginLeft:900,display:'grid'}}>
        <select style={{width:180,height:40,marginTop:10,border:'none',background:'#00264d',boxShadow: '0px 0px 5px black',borderRadius:10,color:'white',paddingLeft:10,marginLeft:-20}}>    
        <option value="Andhra Pradesh">Andhra Pradesh</option>
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
        <div style={{width:800,height:800,marginTop:40}}>
        <LineChart
      width={1000}
      height={400}
      marginTop={40}
      data={data}
      margin={{
        top:5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="successfull" stroke="#16826C" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="failed" stroke="#FF0000" activeDot={{ r: 8 }} />
    </LineChart>
    </div>
    </div>
{/*2nd box graph ends*/}

<div style={{display:'flex'}}>


{/*1st box*/}
     
    <div style={{boxShadow: '0px 0px 5px black',marginTop:50,borderTopLeftRadius:10,borderTopRightRadius:10,border:'none',width:700}}>
        <h1 style={{ fontSize:25, textAlign: 'center', width:700, height:55,color: 'white',marginTop:0, backgroundColor: '#0B496F', borderTopLeftRadius:10,borderTopRightRadius:10,boxShadow: '0px 0px 5px black',fontWeight:'bold',paddingTop:10}}>Applications & Admit Card Billing</h1>
    <div style={{border:'1px solid grey',backgroundColor:'white',width:700,marginLeft:1,marginTop:-7}}>
    <div style={{marginLeft:90,display:'flex',justifyContent:'center',justifyItems:'center'}}>
    <input style={{width:180,height:40,border:'none',background:'#ff0066',boxShadow: '0px 0px 5px black',borderRadius:10,color:'white',paddingLeft:10,marginLeft:-160,float:'left',marginTop:20}} type='date'/>
    <select style={{width:180,height:40,border:'none',background:'#00264d',boxShadow: '0px 0px 5px black',borderRadius:10,color:'white',paddingLeft:10,float:'right',marginLeft:130,marginTop:20}}>       
        <option value="Andhra Pradesh">Andhra Pradesh</option>
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
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={data1} margin={{ top: 20, right: 30, left:0, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" />
        <Bar dataKey="Application Billing" fill="#413ea0" />
        <Bar dataKey="Admit Card Billing" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </div>
    </div>










    {/*2nd box*/}
    <div style={{ width: 400, height:550, marginLeft: 50, marginTop: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10, boxShadow: '0px 0px 5px black', border: 'none' }}>
      <div style={{ width: '100%', height: 60, backgroundColor: '#0B496F', borderTopLeftRadius: 10, borderTopRightRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Spends Analysis</h2>
      </div>
      <div style={{ backgroundColor: 'white', marginTop: -10, height:500, padding: '0 20px',boxShadow: '0px 0px 2px black'}}>
        <div style={{ marginTop:10, display: 'flex'}}>
          <ResponsiveContainer width="80%" height={400} top={150} left={160}>
            <PieChart style={{marginLeft:30,width:350}}>
              <Pie
              style={{display:'flex'}}
                data={data2}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend style={{lineHeight:2}}         layout="vertical" formatter={(value, entry) => <span style={{lineHeight:1.8,paddingTop:40}}>{entry.payload.name}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </div>


<MBRfi/>

   </div> 
  );
}

export default p6;
