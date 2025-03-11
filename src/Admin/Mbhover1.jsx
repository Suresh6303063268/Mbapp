import React from 'react';
import { styled } from '@mui/material/styles';
import '../css/back.css';
import Img1 from '../images/refer2.jpeg';
import team1 from '../images/Mbprofile1.png';
import team2 from '../images/mbfrom.png';
import Report1 from './K2.jsx';
import Ic2 from '@mui/icons-material/Send';
import Ic3 from '@mui/icons-material/Message';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import 'sweetalert2/dist/sweetalert2.css';



const Container = styled('div')(({ theme }) => ({
  backgroundColor: '#edf0f0',
  height: 1400,
}));

const MainBox = styled('div')(({ theme }) => ({
  marginLeft: 50,
  border: '1px solid black',
  width: 1150,
  height: 720,
  borderRadius: 20,
}));

const Button = styled('button')(({ theme }) => ({
  width: 300,
  marginLeft: 15,
  height: 50,
  marginTop: 15,
  backgroundColor: '#058077',
  color: 'white',
  border: 'none',
  fontSize: 25,
}));

const AdminButton = styled(Button)({
  width: 300,
});

const EmployeeButton = styled(Button)({
  width: 800,
});

const BorderBox = styled('div')(({ theme }) => ({
  width: 300,
  height: 500,
  backgroundColor: 'white',
  marginTop: 10,
  marginLeft: 15,
  borderRadius: 15,
}));

const Image = styled('img')(({ theme }) => ({
  borderRadius: 50,
  height: 100,
  marginLeft: 100,
  marginTop: 30,
}));

const DarkBlueBackground = styled('div')(({ theme }) => ({
  width: 300,
  height: 500,
  color: 'white',
  backgroundColor: '#065d7a',
  borderRadius: 25,
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
}));

const Heading2 = styled('h2')(({ theme }) => ({
  paddingLeft: 90,
}));



const EmployeesBox = styled('div')(({ theme }) => ({
  marginLeft: 320,
  marginTop: -575,
}));

const EmployeesContainer = styled('div')(({ theme }) => ({
  width: 800,
  backgroundColor: 'white',
  height: 630,
  marginLeft: 15,
  marginTop: 10,
}));

const EmployeesHeader = styled('div')(({ theme }) => ({
  width: 800,
  backgroundColor: '#bbbebf',
  height: 80,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: 30,
  paddingRight: 30,
}));

const EmployeesHeading = styled('p')(({ theme }) => ({
  fontWeight: 'bold',
  flex: 1,
  textAlign: 'center',
}));

const TableWrapper = styled('div')(({ theme }) => ({
  height: '500px', // Adjust as needed
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100%',
}));

const Table = styled('table')(({ theme }) => ({
  width: '100%',
  borderCollapse: 'collapse',
}));

const TableRow = styled('tr')(({ theme }) => ({
  borderBottom: '1px solid #ddd',
}));

const TableCell = styled('td')(({ theme }) => ({
  padding: '10px',
  textAlign: 'center',
  width:100,
}));

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





  return (
    <Container>
      <MainBox>
        <AdminButton>Admin</AdminButton>
        <BorderBox>
          <Image src={Img1} alt='Img1' />
          <DarkBlueBackground>
            <br />
            <Heading2 style={{fontSize:20,fontWeight:'bold',marginLeft:-20}}>Total Employees</Heading2>
            <Report1/>
            <br />
            <br />
            
            {/* Include PieChartWithCenterLabel5 component here */}
          </DarkBlueBackground>
        </BorderBox>
        <EmployeesBox>
          <EmployeeButton>Employees</EmployeeButton>
          <EmployeesContainer>
            <EmployeesHeader>
              <EmployeesHeading style={{fontWeight:'bold', color:'red',paddingTop:10,marginLeft:0,lineHeight:2}} >Name&Profile</EmployeesHeading>
              <EmployeesHeading style={{fontWeight:'bold', color:'red',paddingTop:10,marginLeft:85,lineHeight:2}}>Active</EmployeesHeading>
              <EmployeesHeading  style={{fontWeight:'bold', color:'red',paddingTop:10,marginLeft:65,lineHeight:2}}>Forward Applications</EmployeesHeading>
              <EmployeesHeading  style={{fontWeight:'bold', color:'red',paddingTop:10,marginLeft:30,lineHeight:2}}>Total Applications</EmployeesHeading>
              <EmployeesHeading style={{fontWeight:'bold', color:'red',paddingTop:10,marginLeft:20,lineHeight:2}}>Completed Applications</EmployeesHeading>
              <EmployeesHeading style={{fontWeight:'bold', color:'red',paddingTop:10,marginLeft:10,lineHeight:2}}>Pending Applications</EmployeesHeading>
            </EmployeesHeader>
            <TableWrapper>
              <Table>
                <tbody>
                  {[...Array(14)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell style={{width:80}}>
                        <img
                          style={{ width: 50, height: 50, borderRadius: 30,marginLeft:-80}}
                          src={Img1}
                          alt='Img1'
                        />
                        <div style={{ paddingLeft:30, marginTop: -30 }}>
                          <p style={{fontSize:15,fontWeight:'bold'}}>Roopa</p>
                        </div>
                      </TableCell>
                      <TableCell style={{width:50,marginLeft:-30}}  >busy</TableCell>
                      <TableCell style={{width:80}}>     <Link to="/mbchat">  <Ic3 style={{color:'green',fontSize:30,marginLeft:0}} /> </Link>    <span><Ic2  style={{color:'#006699',fontSize:30,marginLeft:20}} onClick={handleDeactivate}   /></span></TableCell>
                      <TableCell style={{width:50}}>200</TableCell>
                      <TableCell style={{width:50}}>150</TableCell>
                      <TableCell style={{width:50}}>50</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>
          </EmployeesContainer>
        </EmployeesBox>
      </MainBox>
    </Container>
  );
};

export default P1;
