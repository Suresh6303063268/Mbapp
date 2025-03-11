import React from 'react'
import '../css/Helpchart.css';
import lady from '../images/lady2.png';
import TextsmsIcon from '@mui/icons-material/Textsms';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';



function Helpchart() {
  return (
    <div style={{height:'auto'}}>
        <div style={{backgroundColor:'#181765',width:500,height:100,marginLeft:100,borderRadius:10}}>
            <h1 style={{fontSize:20,color:'white',paddingLeft:30,paddingTop:20}}>Hey ,Good Morning <span style={{fontSize:20,textDecoration:'none', color:'darkorange'}}>Bhargav</span></h1>
            <h1 style={{fontSize:20,color:'white',paddingLeft:30,marginTop:10}}>Welcome <span style={{fontSize:20}}>to Dashboard</span></h1>
        </div>
        <div>
            <h1 className="adi-help-support">Customer & Enquery</h1>

          
            <h1 className="adi-chat">Chat&Call Back Requests</h1> 
            {/*----------------------table----------------------*/}

        <div  className="table-container">
        <table className="adi-table1">
        <thead>
        <tr className="atr1" style={{width:100, background:'darkorange'}}>
            <th style={{width:70}} className='tr'>S.No</th>
            <th style={{paddingLeft:80, color:'white'}} className='atr1'>CALL</th>
            <th style={{paddingLeft:80, color:'white'}}           className='atr1'>CHAT</th>
            <th style={{paddingLeft:30, color:'white'}}                className='atr1'>Forward for Telecallers</th>
        </tr>
        </thead>
        <tbody style={{overflowY:'auto',overflowX:'hidden'}}>
        <tr className='ato'   >
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>1</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8897488408</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />AP125XXXXX</td>
            <td className='adi-end-box'>      <Link to="/emchat"><TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/></Link>  <CallIcon style={{fontSize:30, marginLeft:10,color:'#009933'}}/> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>
        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>2</td>
            <td  style={{paddingLeft:25,fontWeight:'600px'}} className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />9573194319</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />AP125XXXXX</td>
            <td className='adi-end-box'>      <Link to="/emchat"><TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/></Link>  <CallIcon style={{fontSize:30, marginLeft:10,color:'#009933'}}/> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>

        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>3</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />6303063268</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />AP125XXXXX</td>
            <td className='adi-end-box'>      <Link to="/emchat"><TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/></Link>  <CallIcon style={{fontSize:30, marginLeft:10,color:'#009933'}}/> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>

        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>4</td>
            <td style={{paddingLeft:25, fontWeight:'600px'}} className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" /> 9121043738</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />AP125XXXXX</td>
            <td className='adi-end-box'>      <Link to="/emchat"><TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/></Link>  <CallIcon style={{fontSize:30, marginLeft:10,color:'#009933'}}/> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>


        <tr>
            <td  style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>5</td>
            <td  style={{paddingLeft:25}} className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8247720677</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />AP125XXXXX</td>
            <td className='adi-end-box'>      <Link to="/emchat"><TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/></Link>  <CallIcon style={{fontSize:30, marginLeft:10,color:'#009933'}}/> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>


        <tr>
            <td style={{paddingLeft:20,fontSize:20}} className='adi-table-box'>6</td>
            <td  style={{paddingLeft:25}} className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />8823974547</td>
            <td style={{paddingLeft:25}}className='adi-table-box1'><img style={{ width: 60, height: 60, borderRadius: 60 }} src={lady} alt="Korian" />AP125XXXXX</td>
            <td className='adi-end-box'>      <Link to="/emchat"><TextsmsIcon style={{fontSize:30,marginLeft:50, color:'#008000'}}/></Link>  <CallIcon style={{fontSize:30, marginLeft:10,color:'#009933'}}/> <TelegramIcon style={{fontSize:30, marginLeft:10,color:'#006680'}}/></td>
        </tr>
        </tbody>
    </table>
    </div>



    {/*------------------second Table -----------------------------*/}

       



        </div>

    </div>
  )
}

export default Helpchart;
