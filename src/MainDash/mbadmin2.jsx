import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const initialData = {
  labels: ['1000', '100K', '150K', '200K', '450K', '240K', '268K', '150K'],
  datasets: [
    {
      label: 'General Data',
      data: [30, 8, 10, 19, 15, 1, 21, 25],
      backgroundColor: ['#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#42BA13', '#4c2c2e'],
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      barPercentage: 0.6, // Adjust this value to change the width of the bars
      categoryPercentage: 0.8, // Adjust this value to change the width of the bars
    },
  ],
};

const BarChart = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedButton, setSelectedButton] = useState('General');
  const [selectedState, setSelectedState] = useState('Andhra Pradesh');
  const [chartData, setChartData] = useState(initialData);

  const handleDateChange = (event) => {
    const selectedDateString = event.target.value;
    setSelectedDate(selectedDateString);
    updateChartData(selectedButton, selectedState);
  };

  const handleGeneralButtonClick = () => {
    setSelectedButton('General');
    updateChartData('General', selectedState);
  };

  const handleThakhalButtonClick = () => {
    setSelectedButton('Thakhal');
    updateChartData('Thakhal', selectedState);
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    updateChartData(selectedButton, selectedState);
  };

  const updateChartData = (selectedButton, selectedState) => {
    let updatedData = initialData;

    if (selectedButton === 'Thakhal') {
      if (selectedState === 'Andhra Pradesh') {
        updatedData = {
          labels: ['1000', '100K', '150K', '200K', '450K', '240K', '268K', '150K'],
          datasets: [
            {
              label: 'Thakhal Data',
              data: [10, 15, 5, 25, 20, 10, 30, 12],
              backgroundColor: ['#f7c244', '#f7786b', '#4bc0c8', '#a178e0', '#f4424b', '#78c850', '#4990d1', '#ff9900'],
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              barPercentage: 0.6,
              categoryPercentage: 0.8,
            },
          ],
        };
      } else if (selectedState === 'Telangana') {
        updatedData = {
          labels: ['1000', '100K', '150K', '200K', '450K', '240K', '268K', '150K'],
          datasets: [
            {
              label: 'Thakhal Data',
              data: [8, 12, 15, 18, 22, 17, 10, 5],
              backgroundColor: ['#f7c244', '#f7786b', '#4bc0c8', '#a178e0', '#f4424b', '#78c850', '#4990d1', '#ff9900'],
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              barPercentage: 0.6,
              categoryPercentage: 0.8,
            },
          ],
        };
      }
    }

    setChartData(updatedData);
  };

  const handleBarClick = (event, chartElements) => {
    if (chartElements.length > 0) {
      const index = chartElements[0].index;
      const datasetIndex = chartElements[0].datasetIndex;
      const day = chartData.datasets[datasetIndex].data[index];
      console.log(`Clicked on bar ${index} with value ${day}`);
    }
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
          title: (tooltipItem) => {
            const monthIndex = tooltipItem[0].dataIndex;
            const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
            return `Month: ${monthLabels[monthIndex]}`;
          },
        },
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          maxRotation: 90,
          minRotation: 45,
        },
        padding: 10,
      },
    },
    onClick: handleBarClick,
  };

  return (
    <div>
      <div style={{ display: 'flex', marginTop: 50, border: '2px solid black', boxShadow: '0px 0px 5px black',background:'#00ccff',height:60}}>
        <button style={{ backgroundColor: 'red', color: 'white', marginLeft: 50, width: 200, height: 40, border: 'none', borderRadius: 10, boxShadow: '0px 0px 5px black', fontWeight: 'bold',marginTop:8}} onClick={handleGeneralButtonClick}>General Applications</button>
        <button style={{ backgroundColor: 'green', color: 'white', marginLeft:250, width: 200, height: 40, border: 'none', borderRadius: 10, boxShadow: '0px 0px 5px black',marginTop:8}} onClick={handleThakhalButtonClick}>Tathkal Applications</button>
        <select style={{ width:200, height:40, borderRadius: 10, marginLeft:260,boxShadow: '0px 0px 5px black',marginTop:8,background:'#660066',color:'white'}} value={selectedState} onChange={handleStateChange}>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Telangana">Telangana</option>
          <option value="Kerala">Kerala</option>
          <option value="Tamilnadu">Tamilnadu</option>
          <option value="Delhi">Delhi</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Bihar">Bihar</option>
          <option value="Assam">Assam</option>
          <option value="Manipur">Manipur</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
        </select>
      </div>


      <div style={{ marginBottom: '20px' }}>
        <input style={{ marginTop: 20, marginLeft: 50 }} type="date" onChange={handleDateChange} />
        {selectedDate && <p>Selected Date: {selectedDate}</p>}
      </div>

      <div style={{ display: 'flex', boxShadow: '0px 0px 5px black', width: '90%', margin: '30px auto', background: 'white' }}>
        <div style={{ height: '500px', width: '100%', padding: '20px' }}>
          <Bar data={chartData} options={options} />
        </div>

        <div style={{ display: 'grid', marginLeft:30, justifyContent: 'space-between', marginTop: 30 }}>
          {['#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#42BA13', '#4c2c2e'].map((color, index) => (
            <div style={{ display: 'flex' }} key={index}>
              <button style={{ width: 100, height: 30, backgroundColor: color, border: 'none', borderRadius: 5, marginTop: 10, boxShadow: '0px 0px 5px black' }}></button>
              <h1 style={{ color: color, fontSize: 20, paddingLeft: 20, paddingTop: 12, fontWeight: 'bold' }}>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'][index]}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
