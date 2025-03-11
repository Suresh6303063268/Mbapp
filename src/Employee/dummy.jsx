import React from 'react'

function dummy() {
  return (
    <div>
        <div className="containerjob2" >
              <div style={{width:950, marginLeft:20, height:430, border:'1px solid gray', borderRadius:20, marginTop:40,paddingTop:30,boxShadow: '0px 0px 5px black'}}  className='containerjob3'  >
                <h1  style={{textDecoration:'underline', fontSize:20, marginLeft:10,fontWeight:'bold',paddingLeft:20, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Medical & Health Department</h1>
                <h1 style={{color: 'rgba(11, 73, 111, 1)', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', fontSize:16, paddingLeft:32, paddingTop:10}}>Arogya Mitras & Team Leaders- 19 POSTS</h1>
                <p style={{width:900, lineHeight:2, fontSize:16, paddingLeft:30, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor,
                 Associate Professor  Vacancy. Eligible Candidates
                  who are interested in the Vacancy details & 
                 completed all eligibility criteria  can read the notification  & Apply Online.</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <h1  style={{fontSize:16, fontWeight:'bold', paddingLeft:30, letterSpacing:1.2,paddingTop:12,fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}} >Qualification :</h1>
                  <p style={{fontSize:15, fontWeight:'normal', paddingLeft:10, marginTop:12, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>B.Sc (Nursing)/M.Sc(Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
                </div>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', paddingTop:5, letterSpacing:1.2, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }} >Post Date : <span style={{paddingLeft:65, fontWeight:'lighter' ,textDecoration:'none'}}>3rd Mar, 2024</span></h1>
                <h1 style={{fontSize:15, paddingLeft:30, fontWeight:'bold', letterSpacing:1.2, paddingTop:15, fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>Last Date : <span style={{paddingLeft:65, fontWeight:'lighter', textDecoration:'none'}}>1st June, 2024</span></h1>
                <div className='containerEnd'>
                  <ShareIcon style={{marginTop:-20, marginLeft: 15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <FavoriteBorderIcon style={{marginTop:-20, marginLeft:-15, width: 50, height: 25, paddingLeft: 15,paddingTop: 45}}/>
                  <Link to="/medicalfrom" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:670,
        marginTop: 30,
        borderRadius: 10,
        border: 'none',
       background: 'rgba(11, 73, 111, 1)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
        </span>
       Get Details
      </button>
    </Link>
    <div style={{marginTop:-40}}>         
    <Link to="/notification1" style={{ marginRight: 20 }}>
      <button style={{
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        paddingBottom: 20,
        marginRight: 1,
        marginLeft:570,
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(90deg, #EC008C 0%, #FC6767 100%)',
        color: 'white',
        paddingTop: 7,
      }}>
        <span style={{ paddingRight: 3, paddingBottom: -5, height: 20, paddingTop: 1 }}>
          <FileDownloadIcon />
        </span>
        Notification
      </button>
    </Link>
    </div>
                  
                </div>
              </div>
              
            </div>
    </div>
  )
}

export default dummy
