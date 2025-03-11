import React, { useState } from 'react';
import '../css/Admitdelivery.css';


import Practice from './Practice.jsx';


// Adjust the path based on your file structure

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Admitdelivery = () => {
  const [selectedState, setSelectedState] = useState('Andhra Pradesh'); // Default selected state
  const [tableData, setTableData] = useState([
    { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
    { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
    { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
    { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
  ]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = () => {
    switch (selectedState) {
      case 'Andhra Pradesh':
        setTableData([
          { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
          { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
          { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
          { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
        ]);
        setDataForAndhraPradesh();
        break;

      case 'Tamil Nadu':
        setTableData([
          { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
          { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
          { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
          { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
        ]);
        setDataForTamilNadu();
        break;



        case 'Assam':
          setTableData([
            { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
            { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
            { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
            { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
          ]);
          setDataForTamilNadu();
          break;

          case 'Arunachal Pradesh':
            setTableData([
              { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
              { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
              { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
              { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
            ]);
            setDataForTamilNadu();
            break;



            case 'Bihar':
              setTableData([
                { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
              ]);
              setDataForTamilNadu();
              break;

              case 'Chhattisgarh':
                setTableData([
                  { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                  { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                  { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                  { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                ]);
                setDataForTamilNadu();
                break;

                case 'Goa':
                  setTableData([
                    { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                    { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                    { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                    { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                  ]);
                  setDataForTamilNadu();
                  break;




                  case 'Gujarat':
                    setTableData([
                      { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                      { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                      { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                      { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                    ]);
                    setDataForTamilNadu();
                    break;


                    case 'Haryana':
                      setTableData([
                        { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                        { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                        { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                        { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                      ]);
                      setDataForTamilNadu();
                      break;




                      case 'Himachal Pradesh':
                        setTableData([
                          { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                          { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                          { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                          { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                        ]);
                        setDataForTamilNadu();
                        break;




                        case 'Uttar Pradesh':
                          setTableData([
                            { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                            { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                            { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                            { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                          ]);
                          setDataForTamilNadu();
                          break;




                          case 'Jammu & Kashmir':
                            setTableData([
                              { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                              { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                              { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                              { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                            ]);
                            setDataForTamilNadu();
                            break;



                            case 'Jharkhand':
                              setTableData([
                                { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                              ]);
                              setDataForTamilNadu();
                              break;


                              case 'Karnataka':
                                setTableData([
                                  { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                  { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                  { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                  { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                ]);
                                setDataForTamilNadu();
                                break;


                                case 'Madhya Pradesh':
                                  setTableData([
                                    { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                    { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                    { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                    { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                  ]);
                                  setDataForTamilNadu();
                                  break;




                                  case 'Maharashtra':
                                    setTableData([
                                      { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                      { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                      { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                      { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                    ]);
                                    setDataForTamilNadu();
                                    break;


                                    case 'Meghalaya':
                                      setTableData([
                                        { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                        { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                        { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                        { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                      ]);
                                      setDataForTamilNadu();
                                      break;


                                      case 'Manipur':
                                        setTableData([
                                          { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                          { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                          { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                          { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                        ]);
                                        setDataForTamilNadu();
                                        break;





                                        case 'Mizoram':
                                          setTableData([
                                            { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                            { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                            { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                            { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                          ]);
                                          setDataForTamilNadu();
                                          break;



                                          case 'Nagaland':
                                            setTableData([
                                              { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                              { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                              { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                              { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                            ]);
                                            setDataForTamilNadu();
                                            break;



                                            case 'Odisha':
                                              setTableData([
                                                { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                                { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                                { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                                { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                              ]);
                                              setDataForTamilNadu();
                                              break;




                                              case 'Punjab':
                                                setTableData([
                                                  { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                                  { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                                  { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                                  { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                                ]);
                                                setDataForTamilNadu();
                                                break;




                                                case 'Rajasthan':
                                                  setTableData([
                                                    { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                                    { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                                    { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                                    { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                                  ]);
                                                  setDataForTamilNadu();
                                                  break;



                                                  case 'Sikkim':
                                                    setTableData([
                                                      { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                                      { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                                      { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                                      { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                                    ]);
                                                    setDataForTamilNadu();
                                                    break;




                                                  


                                                      case 'Telangana':
                                                        setTableData([
                                                          { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                                          { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                                          { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                                          { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                                        ]);
                                                        setDataForTamilNadu();
                                                        break;




                                                        case 'Tripura':
                                                          setTableData([
                                                            { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                                            { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                                            { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                                            { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                                          ]);
                                                          setDataForTamilNadu();
                                                          break;


                                                          case 'Uttarakhandy':
                                                            setTableData([
                                                              { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                                              { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                                              { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                                              { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                                            ]);
                                                            setDataForTamilNadu();
                                                            break;


                                                            case 'West Bengal':
                                                              setTableData([
                                                                { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
                                                                { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
                                                                { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
                                                                { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
                                                              ]);
                                                              setDataForTamilNadu();
                                                              break;




      case 'Kerala':
        setTableData([
          { received: 2000, delivered: 1600, pending: 400, centerName: 'Akshaya CSC Center', contact: '8897488408' },
    { received: 2000, delivered: 1700, pending: 600, centerName: 'Surya CSC Center', contact: '6303063268' },
    { received: 2000, delivered: 1800, pending: 300, centerName: 'Roopa CSC Center', contact: '9666032325' },
    { received: 2000, delivered: 1900, pending: 100, centerName: 'Bhargav CSC Center', contact: '9746882321' },
        ]);
        setDataForKerala();
        break;

      default:
        setTableData([]);
        setDefaultData();
    }
  };

  // Function to set data for Andhra Pradesh
  const setDataForAndhraPradesh = () => {
    setData({
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26', '27', '28',
        '29', '30', '31'],
      datasets: [
        {
          label: 'Andhra Pradesh',
          data: [100000, 8000001, 1022020, 1001429, 153439, 115000, 2000, 2500, 1200998, 3442331, 900211, 6700022, 7990222, 866690, 5000000, 120000, 100000, 8000001, 1022020, 1001429, 153439, 115000, 2000, 2500, 1200998, 3442331, 900211, 6700022, 7990222, 866690, 5000000],
          backgroundColor: ['#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e',
            '#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e','#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e',
            '#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96'
          ],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  // Function to set data for Tamil Nadu
  const setDataForTamilNadu = () => {
    setData({
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26', '27', '28',
        '29', '30', '31'],
        datasets: [
          {
            label: 'Andhra Pradesh',
            data: [100000, 8000001, 1022020, 1001429, 153439, 115000, 2000, 2500, 1200998, 3442331, 900211, 6700022, 7990222, 866690, 5000000, 120000, 100000, 8000001, 1022020, 1001429, 153439, 115000, 2000, 2500, 1200998, 3442331, 900211, 6700022, 7990222, 866690, 5000000],
            backgroundColor: ['#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e',
              '#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e','#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e',
              '#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96'
            ],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
    });
  };

  // Function to set data for Kerala
  const setDataForKerala = () => {
    setData({
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26', '27', '28',
        '29', '30', '31'],
        datasets: [
          {
            label: 'Andhra Pradesh',
            data: [100000, 8000001, 1022020, 1001429, 153439, 115000, 2000, 2500, 1200998, 3442331, 900211, 6700022, 7990222, 866690, 5000000, 120000, 100000, 8000001, 1022020, 1001429, 153439, 115000, 2000, 2500, 1200998, 3442331, 900211, 6700022, 7990222, 866690, 5000000],
            backgroundColor: ['#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e',
              '#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e','#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e',
              '#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96'
            ],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
    });
  };



































  // Function to set default data
  const setDefaultData = () => {
    setData({
      labels: [],
      datasets: [],
    });
  };

  // Initial data (can be adjusted based on your requirements)
  const [data, setData] = useState({
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '11', '12', '13', '14', '15', '16', '17', '18', '19',
      '20', '21', '22', '23', '24', '25', '26', '27', '28',
      '29', '30', '31'],
    datasets: [
      {
        label: 'Initial Data',
        data: [100000, 8000001, 1022020, 1001429, 153439, 115000, 2000, 250220, 1200998, 3442331, 900211, 6700022, 7990222, 866690, 5000000, 120000,100000, 8000001, 1022020, 1001429, 153439, 115000, 2000, 2500, 1200998, 3442331, 900211, 6700022, 7990222, 866690, 5000000],
        backgroundColor: ['#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e',
          '#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e','#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96', '#4c2c2e',
            '#4287f5', '#ec30ec', '#e8f032', '#f4a737', '#f7213c', '#25e9f7', '#9f9b96'
        ],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div style={{width:1200,background:'lightpink'}}>
      {/* Your existing JSX */}
      <h1 style={{ color: 'red',textAlign:'center', fontSize: 25, fontWeight:'bold'}}>Admit Card Delivery Details</h1>
      <label style={{ fontSize: 20, paddingLeft:270, fontWeight:'600px',paddingTop:20}}>Select State</label>
      <select style={{ marginLeft: 20, width: 250, height: 40, borderRadius: 10, fontSize: 15, paddingLeft: 50,marginTop:20}} value={selectedState} onChange={handleStateChange}>
        {/* Options for state selection */}
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
        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Manipur">Manipur</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
      </select>

      <button style={{ color: 'white', backgroundColor: '#EF199A', width: 120, height: 45, border: 'none', borderRadius: 6, fontWeight: 'bold', marginLeft: 460, marginTop: 20 }} onClick={handleSubmit}>
        Submit
      </button>

      <div style={{ width: 1130, height:40, marginLeft:0, color: 'red', backgroundColor: '#C0C0C0', marginTop: 40, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        {selectedState}
      </div>

      <Practice state={selectedState} data={data} options={options} />

      {/* Table displaying state-wise data */}
      <div className='atab' style={{ overflowX: 'hidden', overflowY: 'auto', height: '400px'}}>
  <table className='table1' style={{width:1200}}>
    <thead>
      <tr className='tr1' style={{ background: 'darkorange' }}>
        <th className='tr'>Admit Card Received</th>
        <th className='tr1'>Admit Card Delivered</th>
        <th className='tr1'>Admit Card Pending</th>
        <th className='tr1'>Csc Center Name</th>
        <th className='tr1'>Contact Number</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((item, index) => (
        <tr key={index}>
          <td className='adi1-box1'>{item.received}</td>
          <td className='adi-box1'>{item.delivered}</td>
          <td className='adi-box1'>{item.pending}</td>
          <td className='adi-box2'>{item.centerName}</td>
          <td className='adi-box2'>{item.contact}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Bar chart displaying state-wise data */}
      <div className='adi-barchart'>
      <h1 style={{fontSize:18,fontWeight:'bold',width:600, color:'darkgreen',textAlign:'center',paddingTop:10}}   >Admit Card Delivery Details</h1>
      <div style={{ height: '430px', width: '1500px', marginLeft: '-330px', display: 'flex',marginTop:30}}>
  <Bar 
    className="custom-bar" 
    data={data} 
    options={options} 
  />
</div>

      </div>
    </div>
  );
};

export default Admitdelivery;
