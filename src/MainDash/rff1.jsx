import React, { useState } from 'react';

const HoverableDropdown = ({ stateFilter, setStateFilter, durationFilter, setDurationFilter, statusFilter, setStatusFilter }) => {
  const [activeTab, setActiveTab] = useState('fathima');

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="dropdown">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', marginLeft: 700 }}>
        <button
          style={{
            boxShadow: '0px 0px 5px black',
            width: 150,
            color: 'white',
            borderRadius: 20,
            fontSize: 20,
            fontWeight: 'bold',
            height: 40,
            background: '#660066',
            marginRight: '20px'
          }}
        >
          Filter
        </button>
        <button
          style={{
            boxShadow: '0px 0px 5px black',
            width: 150,
            color: 'white',
            borderRadius: 20,
            fontSize: 20,
            fontWeight: 'bold',
            height: 40,
            background: '#ff0066'
          }}
        >
          Download
        </button>
      </div>
      <div className="dropdown-content">
        <div className="Gtab">
          <button
            className={`Gtablinks ${activeTab === 'fathima' ? 'active' : ''}`}
            onClick={() => openCity('fathima')}
            id="defaultOpen"
          >
            States
          </button>
          <button
            className={`Gtablinks ${activeTab === 'kathi' ? 'active' : ''}`}
            onClick={() => openCity('kathi')}
          >
            Duration
          </button>
          <button
            className={`Gtablinks ${activeTab === 'navi' ? 'active' : ''}`}
            onClick={() => openCity('navi')}
          >
            Payment Status
          </button>
        </div>

        <div id="fathima" className={`Gtabcontent ${activeTab === 'fathima' ? 'active' : ''}`}>
          <div className="select-container">
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
            >
              <option value="">Select State</option>
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
              <option value="Orissa">Orissa</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
        </div>

        <div id="kathi" className={`Gtabcontent ${activeTab === 'kathi' ? 'active' : ''}`}>
          <div className="radio-container">
            <input
              type='radio'
              value="0-6 months"
              checked={durationFilter === "0-6 months"}
              onChange={(e) => setDurationFilter(e.target.value)}
            />
            <p>0-6 months</p>
          </div>
          <div className="radio-container">
            <input
              type='radio'
              value="6-12 months"
              checked={durationFilter === "6-12 months"}
              onChange={(e) => setDurationFilter(e.target.value)}
            />
            <p>6-12 months</p>
          </div>
        </div>

        <div id="navi" className={`Gtabcontent ${activeTab === 'navi' ? 'active' : ''}`}>
          <div className="checkbox-container">
            <input
              type='checkbox'
              value="Success"
              checked={statusFilter === "Success"}
              onChange={(e) => setStatusFilter(e.target.checked ? "Success" : "")}
            />
            <p>Success</p>
          </div>
          <div className="checkbox-container">
            <input
              type='checkbox'
              value="Failed"
              checked={statusFilter === "Failed"}
              onChange={(e) => setStatusFilter(e.target.checked ? "Failed" : "")}
            />
            <p>Failed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverableDropdown;
