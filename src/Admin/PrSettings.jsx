import React, { useState } from 'react';
import '../css/settings.css';

function Notification() {
  // Notification type states
  const [notificationTypes, setNotificationTypes] = useState({
    email: false,
    browser: false,
    app: false,
  });

  // Account activity states
  const [accountActivities, setAccountActivities] = useState({
    account1: false,
    account2: false,
    account3: false,
  });

  // New browser used states
  const [newBrowsers, setNewBrowsers] = useState({
    browser1: false,
    browser2: false,
    browser3: false,
  });

  // New device linked states
  const [newDevices, setNewDevices] = useState({
    link1: false,
    link2: false,
    link3: false,
  });

  // Handle changes for notification types
  const handleNotificationTypeChange = (type) => {
    setNotificationTypes({
      ...notificationTypes,
      [type]: !notificationTypes[type],
    });
  };

  // Handle changes for account activities
  const handleAccountActivityChange = (activity) => {
    setAccountActivities({
      ...accountActivities,
      [activity]: !accountActivities[activity],
    });
  };

  // Handle changes for new browsers used
  const handleNewBrowserChange = (browser) => {
    setNewBrowsers({
      ...newBrowsers,
      [browser]: !newBrowsers[browser],
    });
  };

  // Handle changes for new devices linked
  const handleNewDeviceChange = (device) => {
    setNewDevices({
      ...newDevices,
      [device]: !newDevices[device],
    });
  };

  return (
    <div style={{width:500}}>
      
      <div className='adi' style={{ width:900, height: 600, border: '1px solid grey', backgroundColor: '', marginTop:50, marginLeft:100, boxShadow: '0px 0px 5px black' }}>
        <h1 style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', paddingTop: 30 }}>Notifications Settings</h1>
        <p style={{ fontSize: 20, paddingLeft: 140, paddingTop: 20 }}>We need permissions from your browser to show notifications. Request permissions</p>

        <div style={{ paddingLeft: 100 }}>
          <label style={{ fontSize: 20, color: 'black' }}>Type</label>
          <label style={{ paddingLeft: 350, fontSize: 20, color: 'black' }}>Email</label>
          <label style={{ paddingLeft: 80, fontSize: 20, color: 'black' }}>Browser</label>
          <label style={{ paddingLeft: 80, fontSize: 20, color: 'black' }}>App</label>
        </div>

        {/* Notification Types */}
        <div style={{ paddingLeft: 100, marginTop: 15 }}>
          <label style={{ fontSize: 20, color: 'black', fontWeight: 300 }}>New For You</label>
          <span className="custom-checkbox">
            <input
              type="checkbox"
              id="email-checkbox"
              checked={notificationTypes.email}
              onChange={() => handleNotificationTypeChange('email')}
            />
            <label style={{ marginLeft: 300, paddingBottom: 15 }} htmlFor="email-checkbox" className={notificationTypes.email ? 'checked' : ''}></label>
          </span>

          <span className="custom-checkbox">
            <input
              type="checkbox"
              id="browser-checkbox"
              checked={notificationTypes.browser}
              onChange={() => handleNotificationTypeChange('browser')}
            />
            <label style={{ marginLeft: 115, paddingBottom: 15 }} htmlFor="browser-checkbox" className={notificationTypes.browser ? 'checked' : ''}></label>
          </span>

          <span className="custom-checkbox">
            <input
              type="checkbox"
              id="app-checkbox"
              checked={notificationTypes.app}
              onChange={() => handleNotificationTypeChange('app')}
            />
            <label style={{ marginLeft: 120, paddingBottom: 15 }} htmlFor="app-checkbox" className={notificationTypes.app ? 'checked' : ''}></label>
          </span>
        </div>

        {/* Account Activities */}
        <div style={{ paddingLeft: 100, marginTop: 15 }}>
          <label style={{ fontSize: 20, color: 'black', fontWeight: 300 }}>Account Activity</label>
          <span className="custom-checkbox-account">
            <input
              type="checkbox"
              id="account1-checkbox"
              checked={accountActivities.account1}
              onChange={() => handleAccountActivityChange('account1')}
            />
            <label style={{ marginLeft: 275, paddingBottom: 15 }} htmlFor="account1-checkbox" className={accountActivities.account1 ? 'checked' : ''}></label>
          </span>

          <span className="custom-checkbox-account">
            <input
              type="checkbox"
              id="account2-checkbox"
              checked={accountActivities.account2}
              onChange={() => handleAccountActivityChange('account2')}
            />
            <label style={{ marginLeft: 115, paddingBottom: 15 }} htmlFor="account2-checkbox" className={accountActivities.account2 ? 'checked' : ''}></label>
          </span>

          <span className="custom-checkbox-account">
            <input
              type="checkbox"
              id="account3-checkbox"
              checked={accountActivities.account3}
              onChange={() => handleAccountActivityChange('account3')}
            />
            <label style={{ marginLeft: 120, paddingBottom: 15 }} htmlFor="account3-checkbox" className={accountActivities.account3 ? 'checked' : ''}></label>
          </span>
        </div>

        {/* New Browsers Used */}
        <div style={{ paddingLeft: 100, marginTop: 15 }}>
          <label style={{ fontSize: 20, color: 'black', fontWeight: 300 }}>A new browser used to sign in</label>
          <span className="custom-checkbox-browser">
            <input
              type="checkbox"
              id="browser1-checkbox"
              checked={newBrowsers.browser1}
              onChange={() => handleNewBrowserChange('browser1')}
            />
            <label style={{ marginLeft: 150, paddingBottom: 15 }} htmlFor="browser1-checkbox" className={newBrowsers.browser1 ? 'checked' : ''}></label>
          </span>

          <span className="custom-checkbox-browser">
            <input
              type="checkbox"
              id="browser2-checkbox"
              checked={newBrowsers.browser2}
              onChange={() => handleNewBrowserChange('browser2')}
            />
            <label style={{ marginLeft: 115, paddingBottom: 15 }} htmlFor="browser2-checkbox" className={newBrowsers.browser2 ? 'checked' : ''}></label>
          </span>

          <span className="custom-checkbox-browser">
            <input
              type="checkbox"
              id="browser3-checkbox"
              checked={newBrowsers.browser3}
              onChange={() => handleNewBrowserChange('browser3')}
            />
            <label style={{ marginLeft: 120, paddingBottom: 15 }} htmlFor="browser3-checkbox" className={newBrowsers.browser3 ? 'checked' : ''}></label>
          </span>
        </div>

        {/* New Device Linked */}
        <div style={{ paddingLeft: 100, marginTop: 15 }}>
          <label style={{ fontSize: 20, color: 'black', fontWeight: 300 }}>A new device is linked</label>
          <span className="custom-checkbox-link">
            <input
              type="checkbox"
              id="link1-checkbox"
              checked={newDevices.link1}
              onChange={() => handleNewDeviceChange('link1')}
            />
            <label style={{ marginLeft: 220, paddingBottom: 15 }} htmlFor="link1-checkbox" className={newDevices.link1 ? 'checked' : ''}></label>
          </span>

          <span className="custom-checkbox-link">
            <input
              type="checkbox"
              id="link2-checkbox"
              checked={newDevices.link2}
              onChange={() => handleNewDeviceChange('link2')}
            />
            <label style={{ marginLeft: 115, paddingBottom: 15 }} htmlFor="link2-checkbox" className={newDevices.link2 ? 'checked' : ''}></label>
          </span>

          <span className="custom-checkbox-link">
            <input
              type="checkbox"
              id="link3-checkbox"
              checked={newDevices.link3}
              onChange={() => handleNewDeviceChange('link3')}
            />
            <label style={{ marginLeft: 120, paddingBottom: 15 }} htmlFor="link3-checkbox" className={newDevices.link3 ? 'checked' : ''}></label>
          </span>
        </div>

        <div>
          <p style={{ fontSize: 20, paddingLeft: 100 }}>When should we send you notifications?</p>
          <select style={{ width: 550, height: 50, marginLeft: 100, marginTop: 10, paddingLeft: 10, fontSize: 15 }}>
            <option>Only when I'm online</option>
          </select>
          <br />
          <button style={{ backgroundColor: 'blue', color: 'white', width: 150, height: 40, borderRadius: 5, marginLeft: 100, marginTop: 40, border: 'none', fontSize: 16, boxShadow: '0px 0px 5px black' }}>Save Changes</button>
          <button style={{ width: 100, height: 40, borderRadius: 5, border: 'none', backgroundColor: '#CECECE', fontSize: 16, boxShadow: '0px 0px 5px black', marginLeft: 100 }}>Discard</button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
