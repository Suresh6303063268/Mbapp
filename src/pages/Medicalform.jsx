import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import Header1 from './header1.jsx';
import Govt1 from './Govt1.jsx';
import Fotter from './fotter.jsx';

const JobNotification = () => {
  const [clickCount, setClickCount] = useState(0);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);
  const navigate = useNavigate();

  const handleApplyClick = () => {
    if (registrationCompleted) {
      // Directly navigate to payment section
      navigate('/payment');
    } else {
      const newCount = clickCount + 1;
      setClickCount(newCount);

      if (newCount === 1) {
        Swal.fire({
          icon: 'success',
          html: `<div style="width: 380px; line-height: 2; text-align: center; padding-left: 30px; white-space: normal;">
                  Fill Your 
                  <span style="color: yellow; text-decoration:underline;">OTR Form</span> and Apply Your Favourite Exam Within two Minutes.
                  <button id="otrButton" style="background:#ff0066;color:white;width:250px; border-radius:30px; margin-top: 10px;">Register OTR Form</button>
                </div>`,
          background: '#006699',
          color: 'white',
          width: '500px',
          iconColor: '#00ff00',
          showConfirmButton: false,
          didOpen: () => {
            const otrButton = document.getElementById('otrButton');
            if (otrButton) {
              otrButton.addEventListener('click', () => {
                Swal.close();
                setRegistrationCompleted(true); // Update state to mark registration as completed
                navigate('/otr');
              });
            }
          }
        });
      } else if (newCount === 2) {
        Swal.fire({
          icon: 'success',
          html: `<div style="width: 380px; line-height: 2; text-align: center; padding-left: 30px; white-space: normal;">
                  Complete Your Payment to Proceed Further.
                  <button id="paymentButton" style="background:#ff0066;color:white;width:250px; border-radius:30px; margin-top: 10px;">Go to Payment</button>
                </div>`,
          background: '#006699',
          color: 'white',
          width: '500px',
          iconColor: '#00ff00',
          showConfirmButton: false,
          didOpen: () => {
            const paymentButton = document.getElementById('paymentButton');
            if (paymentButton) {
              paymentButton.addEventListener('click', () => {
                Swal.close();
                navigate('/payment');
              });
            }
          }
        });
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    const BANK = '../images/Bank.png'; // Replace with your actual image path
    link.href = BANK;
    link.download = 'Bank.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Header1 />
      <Govt1 />
      <div style={{ fontFamily: 'Arial, sans-serif', marginLeft: 250, padding: '20px', border: '1px solid black', borderRadius: '10px', width: 1000, boxShadow: '0px 0px 5px black', marginTop: 100 }}>
        <h1 style={{ textAlign: 'center', color: '#333', paddingTop: 10 }}>Medical & Health Department</h1>
        <h2 style={{ color: '#007BFF', fontSize: 20, paddingTop: 10, textAlign: 'center' }}>Arogya Mitras & Team Leaders - 19 POSTS</h2>
        <p style={{ lineHeight: 3, fontSize: 18, marginTop: 20, width: 750, marginLeft: 100, textAlign: 'justify' }}>Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor, Associate Professor Vacancy. Eligible Candidates who are interested in the Vacancy details & completed all eligibility criteria can read the notification & Apply Online.</p>
        <div style={{ display: 'flex', paddingTop: 10, marginLeft: 100 }}>
          <h3 style={{ fontSize: 20, fontWeight: 'bold' }}>Qualification :</h3>
          <p style={{ paddingLeft: 40, paddingTop: 5 }}>B.Sc (Nursing)/M.Sc (Nursing)/B.Pharmacy/Pharmacy-D/B.Sc</p>
        </div>
        <div style={{ display: 'flex', paddingTop: 10, marginLeft: 100 }}>
          <h3 style={{ fontSize: 20, fontWeight: 'bold' }}>Post Date :</h3>
          <p style={{ paddingLeft: 70, paddingTop: 5 }}>3rd Mar, 2024</p>
        </div>
        <div style={{ display: 'flex', paddingTop: 10, marginLeft: 100 }}>
          <h3 style={{ fontSize: 20, fontWeight: 'bold' }}>Last Date :</h3>
          <p style={{ paddingLeft: 70, paddingTop: 5 }}>1st June, 2024</p>
        </div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 100 }}>Application Fee :</h3>
          <p style={{ marginLeft: 270, paddingTop: 5, fontSize: 15, fontWeight: '600px', lineHeight: 3 }}>
            &gt;&gt; For UR/EWS/OBC : Rs. 1,180/-<br />
            &gt;&gt; For SC/ST/PwBD/Women : Nil<br />
            &gt;&gt; Payment Mode: Demand Draft Or In The Form Of NEFT
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 100 }}>Important Dates :</h3>
          <p style={{ paddingLeft: 270, paddingTop: 5, fontSize: 16 }}>Date For Interview: 21-05-2024</p>
        </div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 100 }}>Age Limit (As On 21-05-2024): </h3>
          <p style={{ paddingLeft: 270, paddingTop: 5, fontSize: 16, lineHeight: 2 }}>Upper Age Limit: 45 Years<br />Age Relaxation Is Applicable As Per Rules</p>
        </div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 100 }}>Qualification :</h3>
          <p style={{ paddingLeft: 150, paddingTop: 0, lineHeight: 2.4 }}>Candidates Should Possess PG (MD/MS/DNB/MDS Or DM/MCH)/M.Sc/Ph.D (Concerned Specialty)<br />For More Details Refer Notification.</p>
        </div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 100 }}>Vacancy Details</h3>
          <table style={{ width: '800px', border: '1px solid black', borderCollapse: 'collapse', height: 300, marginLeft: 100, marginTop: 20 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid black', textAlign: 'left' }}>
                <th style={{ padding: '8px' }}>Post Name</th>
                <th style={{ padding: '8px' }}>Total</th>
                <th style={{ padding: '8px' }}>Age</th>
                <th style={{ padding: '8px' }}>Category</th>
                <th style={{ padding: '8px' }}>Qualification</th>
              </tr>
            </thead>
            <tbody style={{ border: '1px solid black' }}>
              <tr style={{ borderBottom: '1px solid black' }}>
                <td style={{ padding: '8px' }}>Sn. Doctor</td>
                <td style={{ padding: '8px' }}>02</td>
                <td style={{ padding: '8px' }}>52</td>
                <td style={{ padding: '8px' }}>ST/SC/OC</td>
                <td style={{ padding: '8px' }}>B.E/ B.Tech/ PG/ Ph.D (Relevant Engg)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid black' }}>
                <td style={{ padding: '8px' }}>jr. Doctor</td>
                <td style={{ padding: '8px' }}>02</td>
                <td style={{ padding: '8px' }}>42</td>
                <td style={{ padding: '8px' }}>ST/SC/BC</td>
                <td style={{ padding: '8px' }}>B.E/ B.Tech/ PG/ Ph.D</td>
              </tr>
              <tr style={{ borderBottom: '1px solid black' }}>
                <td style={{ padding: '8px' }}>sub. Doctor</td>
                <td style={{ padding: '8px' }}>02</td>
                <td style={{ padding: '8px' }}>32</td>
                <td style={{ padding: '8px' }}>ST/SC/BC</td>
                <td style={{ padding: '8px' }}>B.E/ B.Tech/ PG/ Ph.D</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
        <div style={{ marginTop: '20px' }}>
          <ShareIcon />
          <FavoriteBorderIcon style={{ paddingLeft: 20 }} />
          <button style={{ background: 'rgba(11, 73, 111, 1)', width: 100, marginRight: 20, height: 40, marginLeft: '', border: 'none', borderRadius: 10, color: 'white', float: 'inline-end', fontWeight: 'bold', marginTop: -8 }} onClick={handleApplyClick}>Apply Now</button>
          <span>
            <button style={{ width: 180, marginLeft: 550, backgroundColor: 'darkred', border: '1px solid ', borderRadius: 12, boxShadow: '0px 0px 5px black', height: 40, color: 'white' }} onClick={handleDownload}>
              <DownloadIcon className="icon1" icon={DownloadIcon} />
              Download PDF
            </button>
          </span>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default JobNotification;
