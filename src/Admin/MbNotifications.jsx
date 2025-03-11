import React from 'react';
import Dash1 from './Dash1.jsx';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function Sample() {
  return (
    <div>
      <Dash1/>
    <div style={{justifyContent:'center', marginLeft:200,marginTop:130}}>
      <div style={{ display: 'flex',backgroundColor:'darkorange',color:'black',boxShadow: '0px 0px 5px black', width: 1000, height: 50, borderRadius: 10, marginTop: 25, marginLeft: 20, justifyContent: 'center' }}>
        <h1 style={{ marginTop: 5, fontSize:25, fontWeight:'bold',color:'white'}}>Notifications</h1>
      </div>

      <div style={{ marginLeft: 40, backgroundColor: 'white', width:950, marginTop:50, height:450, overflowY: 'scroll', borderRadius: 10, padding: 10,boxShadow: '0px 0px 5px black'}}>
        <div style={{ padding: 10, borderRadius: 10 }}>
          <label style={{fontSize:20, fontWeight:'bold', color:'black'}}> 02-07-2024</label>
          <label style={{ paddingLeft: 50, fontSize: 20, fontWeight: 'bold',color:'black'}}>SSS job application forwarded successfully to AP123XXXX</label>
          <div style={{ float: 'right', marginRight:50 ,}}>
            <CheckOutlinedIcon style={{ color: 'green', width: 30, height: 30, borderRadius: 30,boxShadow:'1px 2px 4px black',backgroundColor:'white'}} />
          </div>
          <hr style={{ width: '100%', marginLeft: 0 }} />
        </div>

        <div style={{  padding: 10, borderRadius: 10 }}>
          <label style={{fontSize:20, fontWeight:'bold',color:'black'}}> 25-06-2024</label>
          <label style={{ paddingLeft: 50, fontSize: 20, fontWeight: 'bold',color:'black'}}>SSS job application forwarded successfully to AP123XXXX</label>
          <div style={{ float: 'right', marginRight:50  }}>
            <CheckOutlinedIcon style={{ backgroundColor: 'white', boxShadow:'1px 2px 4px black', color: 'green', width: 30, height: 30, borderRadius: 30 }} />
          </div>
          <hr style={{ width: '100%', marginLeft: 0 }} />
        </div>

        <div style={{ padding: 10, borderRadius: 10 }}>
          <label style={{fontSize:20, fontWeight:'bold',color:'black'}}>12-06-2024</label>
          <label style={{ paddingLeft: 50, fontSize: 20, fontWeight: 'bold',color:'black' }}>SSS job application forwarded successfully to AP123XXXX</label>
          <div style={{ float: 'right', marginRight:50  }}>
            <ClearOutlinedIcon style={{ backgroundColor: 'white',boxShadow:'1px 2px 4px black', color: 'red', width: 30, height: 30, borderRadius: 30 }} />
          </div>
          <hr style={{ width: '100%', marginLeft: 0 }} />
        </div>

        <div style={{ padding: 10, borderRadius: 10 }}>
          <label style={{fontSize:20, fontWeight:'bold',color:'black'}}>01-06-2024</label>
          <label style={{ paddingLeft: 50, fontSize: 20, fontWeight: 'bold',color:'black'}}>SSS job application forwarded successfully to AP123XXXX</label>
          <div style={{ float: 'right', marginRight:50  }}>
            <ClearOutlinedIcon style={{ backgroundColor: 'white',boxShadow:'1px 2px 4px black', color: 'red', width: 30, height: 30, borderRadius: 30 }} />
          </div>
          <hr style={{ width: '100%', marginLeft: 0 }} />
        </div>

        <div style={{ padding: 10, borderRadius: 10 }}>
          <label style={{fontSize:20, fontWeight:'bold',color:'black'}}>28-05-2024</label>
          <label style={{ paddingLeft: 50, fontSize: 20, fontWeight: 'bold',color:'black'}}>SSS job application forwarded successfully to AP123XXXX</label>
          <div style={{ float: 'right', marginRight:50  }}>
            <CheckOutlinedIcon style={{ backgroundColor: 'white',boxShadow:'1px 2px 4px black', color: 'green', width: 30, height: 30, borderRadius: 30 }} />
          </div>
          <hr style={{ width: '100%', marginLeft: 0 }} />
        </div>

        <div style={{ padding: 10, borderRadius: 10 }}>
          <label style={{fontSize:20, fontWeight:'bold',color:'black'}}>18-05-2024</label>
          <label style={{ paddingLeft: 50, fontSize: 20, fontWeight: 'bold',color:'black'}}>SSS job application forwarded successfully to AP123XXXX</label>
          <div style={{ float: 'right', marginRight:50  }}>
            <CheckOutlinedIcon style={{ backgroundColor: 'white',boxShadow:'1px 2px 4px black', color: 'green', width: 30, height: 30, borderRadius: 30 }} />
          </div>
          <hr style={{ width: '100%', marginLeft: 0 }} />
        </div>

        <div style={{ padding: 10, borderRadius: 10 }}>
          <label style={{fontSize:20, fontWeight:'bold',color:'black'}}>05-05-2024</label>
          <label style={{ paddingLeft: 50, fontSize: 20, fontWeight: 'bold',color:'black'}}>SSS job application forwarded successfully to AP123XXXX</label>
          <div style={{ float: 'right', marginRight:50  }}>
            <ClearOutlinedIcon style={{ backgroundColor: 'white',boxShadow:'1px 2px 4px black', color: 'red', width: 30, height: 30, borderRadius: 30 }} />
          </div>
          <hr style={{ width: '100%', marginLeft: 0 }} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Sample;
