import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import SignUp from './pages/Signup.jsx';
import SignIn from './pages/SignIn.jsx';
import ViewAll from './pages/viewall.jsx';
import ViewAll1 from './pages/Viewall1.jsx';
import ViewAll2 from './pages/viewall2.jsx';
import Forgot from './pages/Forgot.jsx';
import Home1 from './pages/home1.jsx';
import Notification from './pages/notification.jsx';
import Notification1 from './pages/Notifications1.jsx';
import MyACCOUNT from './pages/Myaccount.jsx';
import GOVT from './pages/Govt.jsx';
import Login from './pages/login.jsx';
import ADMITCARD from './pages/Admitcard.jsx';
import Otr from './pages/OTR.jsx';
import Prview from './pages/PreviewForm.jsx';
import Payement from './pages/Payment.jsx';
import MedicalFrom from './pages/Medicalform.jsx';
import PQP from './pages/PQP.jsx';
import PAYEMENT1 from './pages/Payement1.jsx';
import TIMER from './pages/timer.jsx';
import TRANCSTIONS from './pages/tranctions.jsx';
import DASH from './Admin/Dash.jsx'; 
import SETTING from './Admin/Settings.jsx'; 
import Profile1 from './Admin/Profile1.jsx'; 
import EmDash from './Employee/EmDash.jsx'; 
import MbDash from './MainDash/mdash.jsx';
import MbNotification from './Admin/MbNotifications.jsx';
import MBChat from './Admin/MbChat.jsx';
import MbLogin from './MainDash/MbLogin.jsx';
import MbSignup from './MainDash/Mbsignup.jsx';
import MbForgot from './MainDash/MbForgot.jsx';
import Empstep from './Employee/empstep.jsx';
import AdminSign from './Admin/adminsignin.jsx';
import AdminSignUp from './Admin/adminsignup.jsx';
import Emchat from './Employee/Emchat.jsx';
import Emsetting from './Employee/EmSettings.jsx';
import EmNotification from './Employee/EmNotification.jsx';
import EmProfile from './Employee/EmProfile.jsx';
import Suryachat from './MainDash/Suryachat.jsx';
import SuryaSetting from './MainDash/SuryaSettings.jsx';
import SuryaNotification from './MainDash/SuryaNotifications.jsx';
import SuryaProfile from './MainDash/SuryaProfile.jsx';



function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/viewall" element={<ViewAll/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/home1" element={<Home1/>} />
        <Route path="/notification" element={<Notification/>} />
          <Route path="/notification1" element={<Notification1/>} />
        <Route path="/myaccount" element={<MyACCOUNT/>} />
        <Route path="/govt" element={<GOVT/>} />
        <Route path="/viewall1" element={<ViewAll1/>} />
        <Route path="/viewall2" element={<ViewAll2/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Admitcard" element={<ADMITCARD/>} />
        <Route path="/otr" element={<Otr/>} />
        <Route path="/otr" element={<Otr/>} />
        <Route path="/prview" element={<Prview/>} />
        <Route path="/payment" element={<Payement/>} />
        <Route path="/medicalfrom" element={<MedicalFrom/>} />
        <Route path="/pqp" element={<PQP/>} />
        <Route path="/payement1" element={<PAYEMENT1/>} />
        <Route path="/timer" element={<TIMER/>} />
        <Route path="/transction" element={<TRANCSTIONS/>} />
          <Route path="/dash" element={<DASH/>} />
          <Route path="/settings" element={<SETTING/>} />
          <Route path="/Profile1" element={<Profile1/>} />
          <Route path="/emdash" element={<EmDash/>} />
          <Route path="/mbdash" element={<MbDash/>} />
          <Route path="/mbnotification" element={<MbNotification/>} />
          <Route path="/mbchat" element={<MBChat/>} />
          <Route path="/mblogin" element={<MbLogin/>} />
          <Route path="/mbsignup" element={<MbSignup/>} />
          <Route path="/mbforgot" element={<MbForgot/>} />
          <Route path="/mbstep" element={<Empstep/>} />
          <Route path="/adiminsign" element={<AdminSign/>} />
          <Route path="/adiminsignup" element={<AdminSignUp/>} />
          <Route path="/emchat" element={<Emchat/>} />
          <Route path="/emsetting" element={<Emsetting/>} />
          <Route path="/emnotification" element={<EmNotification/>} />
          <Route path="/emprofile" element={<EmProfile/>} />
          <Route path="/suryachat" element={<Suryachat/>} />
          <Route path="/suryasetting" element={<SuryaSetting/>} />
          <Route path="/suryanotification" element={<SuryaNotification/>} />
          <Route path="/suryaprofile" element={<SuryaProfile/>} />
      </Routes>
    </Router>
  );
}

export default App;



