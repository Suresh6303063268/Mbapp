import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Clock from '@mui/icons-material/AccessTimeOutlined';

const FiveMinuteTimer = () => {
  const initialTime = 180; // 3 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    let intervalId;

    if (timeLeft === 0) {
      clearInterval(intervalId);
      Swal.fire({
        icon: 'success',
        title: 'Sucussfully Completed',
        text: 'Your session has expired.',
        html: `<div style="width: 380px; line-height: 2; text-align: center; padding-left: 30px; white-space: normal;">
        <a href="/otr"><button style="background:#ff0066;color:white;width:100; borderraduis:30">Track</button></a>
      </div>`,
        showConfirmButton: false,
        background: '#006699',
        color: 'white',
        width: '500px',
        height:'auto',
        iconColor: '#00ff00',// Close popup after 2 seconds
      });
    } else {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const calculateStrokeDashoffset = () => {
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const progress = timeLeft / initialTime;
    return circumference * (1 - progress);
  };

  const timerStyle = {
    position: 'absolute',
    color: 'red',
    fontSize: '1rem',
    marginTop: '-100px',
    marginLeft: '35px'
  };

  return (
    <div style={{ border: '1px solid black', width: 800, height: 600, marginTop: 80, marginLeft: 80, borderRadius: 10, boxShadow: '0px 0px 5px black' }}>
      <p style={{ paddingLeft: 300, marginTop: -60, fontWeight: 700, fontSize: 25, textDecoration: 'underline' }}>Remittance Details</p>
      <p style={{ paddingLeft: 70, marginTop: 140, fontWeight: 700, fontSize: 25 }}>Complete Your Transaction within next </p>

      <div style={{ color: 'white', marginLeft: 600, marginTop: -100, background: 'linear-gradient(to left,blue,#d163f2)', width: 150, height: 150, borderRadius: 80 }}>
        <div style={{ paddingLeft: 60, paddingTop: 25 }}>
          <Clock style={{ width: 30, fontSize: 30 }} />
          <br />
          <br />
          {formatTime(timeLeft)}
          <p style={{ marginTop: -24, marginLeft: -10 }}>0</p>
          <p style={{ marginTop: -10 }}>Mins</p>
        </div>
      </div>
      <br />

      <p style={{ fontSize: 25, paddingLeft: 40, paddingTop: 40, textDecoration: 'underline', fontWeight: 'bold' }}>Remittance Information Form</p>
      <hr style={{ width: 800, borderWidth: 2 }} />
      <div style={{ marginLeft: 40 }}>
        <div style={{ display: 'flex' }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700 }}>SBI Reference Number:</p>
            <p>CPAC12XXXXX</p>
          </div>

          <div style={{ paddingLeft: 150, paddingTop: 5 }}>
            <p style={{ fontSize: 20, fontWeight: 700 }}>Merchant Reference Number:</p>
            <p>502466789992</p>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700 }}>Amount to Be Remitted</p>
            <p>Rs 110/-</p>
          </div>

          <div style={{ paddingLeft: 150, paddingTop: 5 }}>
            <p style={{ fontSize: 20, fontWeight: 700 }}>Transaction Status</p>
            <p>Collect Request Initiated Successfully</p>
          </div>
        </div>
        <p style={{ marginTop: 30 }}>Please Note that this is only a remittance form, not an acknowledgement of remittance.</p>
        <br />
      </div>

      <div>
        <div style={{ marginLeft: 330 }}>
          <svg width="100" height="100" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="#ccc"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="black"
              strokeWidth="10"
              fill="none"
              strokeDasharray="565.48"
              strokeDashoffset={calculateStrokeDashoffset()}
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
            />
          </svg>

          <div style={timerStyle}>
            <br />
            {formatTime(timeLeft)}
            <p style={{ marginTop: -24, marginLeft: -10 }}>0</p>
            <p style={{ marginTop: -10 }}>Mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveMinuteTimer;
