import React from 'react'
import '../css/Helpchart.css';
import lady from '../images/lady2.png';
import TextsmsIcon from '@mui/icons-material/Textsms';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';



function Helpchart() {
  return (
    <div style={{height:'auto',width:1200}}>
        <div style={{backgroundColor:'#181765',width:500,height:100,marginLeft:100,borderRadius:10}}>
            <h1 style={{fontSize:20,color:'white',paddingLeft:30,paddingTop:20}}>Hey ,Good Morning <span style={{fontSize:20,textDecoration:'none', color:'darkorange'}}>Bhargav</span></h1>
            <h1 style={{fontSize:20,color:'white',paddingLeft:30,marginTop:10}}>Welcome <span style={{fontSize:20}}>to Dashboard</span></h1>
        </div>
        <div>
            <h1 className="adi-help-support">Help & Support</h1>

            <div className="adi-fail-support">
            <label style={{color:'white',paddingRight:650,fontSize:15,fontWeight:'bold'}}>Failed Applications List</label>
            <label style={{color:'white',fontSize:15,fontWeight:'bold',paddingLeft:20}}>Andhra Pradesh</label>
            </div>
            
            {/*----------------------table----------------------*/}

        <div  className="table-container">
        <table className="adi-table1">
        <thead>
        <tr className="atr1" style={{width:100, background:'darkorange'}}>
            <th style={{width:70}} className='tr'>S.No</th>
            <th style={{paddingLeft:80, color:'white'}} className='atr1'>Profile</th>
            <th style={{paddingLeft:30, color:'white'}}           className='atr1'>Failed Applications List</th>
            <th style={{paddingLeft:80, color:'white'}}           className='atr1'>Issue?</th>
            <th style={{paddingLeft:30, color:'white'}}                className='atr1'>Forward for Telecallers</th>
        </tr>
        </thead>
        <tbody style={{overflowY:'auto',overflowX:'hidden'}}>
        <tr className='ato'   >
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>1</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td style={{paddingLeft:60,fontSize:18, fontWeight:'600'}} className='adi-table-box1'>SSC GD</td>
            <td style={{paddingLeft:40,fontSize:18, fontWeight:'600'}} className='adi-table-box1'> Payment Failure</td>
            <td className='adi-end-box'>  <Link to="/suryachat">  <TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/> </Link> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>
        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>2</td>
            <td  style={{paddingLeft:25,fontWeight:'600px'}} className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />9573194319</td>
            <td  style={{paddingLeft:60,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'>SSC GGL</td>
            <td style={{paddingLeft:40,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'>OTR Incompleted</td>
            <td className='adi-end-box'>  <Link to="/suryachat">  <TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/> </Link> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>

        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>3</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />6303063268</td>
            <td style={{paddingLeft:60,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'>UPSC</td>
            <td style={{paddingLeft:40,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'> Upload Failure</td>
            <td className='adi-end-box'>  <Link to="/suryachat">  <TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/> </Link> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>

        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>4</td>
            <td style={{paddingLeft:25, fontWeight:'600px'}} className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" /> 9121043738</td>
            <td style={{paddingLeft:60,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'>Medical Officer</td>
            <td  style={{paddingLeft:40,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'> Document Invisible</td>
            <td className='adi-end-box'>  <Link to="/suryachat">  <TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/> </Link> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>


        <tr>
            <td  style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>5</td>
            <td  style={{paddingLeft:25}} className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8247720677</td>
            <td style={{paddingLeft:60,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'>Management Trainer</td>
            <td  style={{paddingLeft:40,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'>Document Invisible</td>
            <td className='adi-end-box'>  <Link to="/suryachat">  <TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/> </Link> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>


        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>6</td>
            <td  style={{paddingLeft:25}} className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8823974547</td>
            <td style={{paddingLeft:60,fontSize:18, fontWeight:'600px'}} className='adi-table-box1'>SSC GD</td>
            <td style={{paddingLeft:40,fontSize:18, fontWeight:'600px'}}className='adi-table-box1'> Payment Failure</td>
            <td className='adi-end-box'>  <Link to="/suryachat">  <TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/> </Link> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>
        </tbody>
    </table>
    </div>

    <h1 className="adi-chat">Chat&Call Back Requests</h1> 

    {/*------------------second Table -----------------------------*/}

        <div className='adi-table-container'>
        <table className='adi-table2'>

        <thead>
        <tr className="atr1" style={{background:'darkorange'}}>
            <th style={{width:70}} className='tr'>S.No</th>
            <th style={{paddingLeft:120, color:'white'}} className='atr1'>Call</th>
            <th style={{paddingLeft:120, color:'white'}} className='atr1'>Chat</th>
            <th  style={{paddingLeft:70, color:'white'}} className='atr1'>Forward to Telecallers</th>
        </tr>
        </thead>
        <tbody className='asp'>
        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>1</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td className='adi-end-box'>  <Link to="/suryachat">  <TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/> </Link> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>
        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>2</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td className='adi-end-box'><TextsmsIcon style={{fontSize:30,marginLeft:100, color:'#008000'}}/>  <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>
        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>3</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td className='adi-end-box'><TextsmsIcon style={{fontSize:30,marginLeft:100, color:'#008000'}}/>  <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>
        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>4</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td className='adi-end-box'><TextsmsIcon style={{fontSize:30,marginLeft:100, color:'#008000'}}/>  <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>
        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>5</td>
            <td style={{paddingLeft:55,gap:20}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td style={{paddingLeft:55}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td className='adi-end-box'><TextsmsIcon style={{fontSize:30,marginLeft:100, color:'#008000'}}/> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>

        </tbody>
        </table>
        </div>



        </div>

    </div>
  )
}

export default Helpchart;
