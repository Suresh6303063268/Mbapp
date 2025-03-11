import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts';
import { styled } from '@mui/material/styles';
import '../css/back.css';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const data1 = [{ value: 30 }, { value: 70 }];
const data2 = [{ value: 10 }, { value: 80 }];
const data3 = [{ value: 30 }, { value: 70 }];
const data4 = [{ value: 30 }, { value: 70 }];
const data5 = [{ value: 20 }, { value: 80 }];

const size = {
  width: 300,
  height: 250,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 25,
  fontWeight: 1000,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function PieChartWithCenterLabel({ data, label, backgroundColor, marginLeft, marginTop }) {
  return (
    <div style={{ backgroundColor, width: 200, marginLeft, marginTop, height: 280, borderRadius: 20 }}>
      <PieChart
        series={[
          {
            data,
            innerRadius: 70,
            outerRadius: 90,
            startAngle: 0,
            endAngle: 360,
          },
        ]}
        {...size}
      >
        <PieCenterLabel>{label}</PieCenterLabel>
      </PieChart>
      <div style={{ marginTop: -30, marginLeft: 40 }}>
        <p style={{ fontWeight: 500 }}>{label}</p>
      </div>
    </div>
  );
}

const P1 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { x: 0, y: 0 },
      { x: 1, y: 20 },
      { x: 2, y: 0 },
      { x: 3, y: 40 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 60 },
      { x: 7, y: 0 },
      { x: 8, y: 20 },
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 150 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([height, 0]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveBasis);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .attr('d', line);
  }, []);

  return (
    <div style={{height: 1400, width: 700 }}>
      <br />
      <div style={{ width:1000, height: 60, backgroundColor: 'white', marginLeft:50, borderRadius: 10,boxShadow: '0px 0px 5px black'  }}>
        <h1 style={{ paddingTop: 10, fontSize:25,fontWeight:'bold', textAlign:'center',color:'#006699'}}>Data Entry Operator Status</h1>
      </div>
      <br />

      <div style={{ width:1000, height: 60, backgroundColor: '#0f6073', marginLeft: 50, borderRadius: 10 }}>
        <input type="date" style={{ width: 150, marginTop: 20, marginLeft: 20, color: 'white', backgroundColor: '#0f6073', border: '1px solid white',height:40}} />
      </div>

      <PieChartWithCenterLabel data={data1} label="70" backgroundColor="white" marginLeft={100} marginTop={30} />
      <PieChartWithCenterLabel data={data2} label="50" backgroundColor="white" marginLeft={400} marginTop={-280} />
      <PieChartWithCenterLabel data={data3} label="20" backgroundColor="white" marginLeft={700} marginTop={-280} />
      <PieChartWithCenterLabel data={data4} label="2K" backgroundColor="white" marginLeft={800} marginTop={-280} />

      <br />
      <br />

      <div style={{ width: 950, height: 70, backgroundColor: 'white', marginLeft: 50, borderRadius: 10 }}>
        <h1 style={{ paddingTop: 20, paddingLeft: 400 }}>Number of Applications</h1>
      </div>
      <br />
      <br />

      <div style={{ marginLeft: 60, display: 'flex', marginTop: 30 }}>
        <div>
          <button style={{ width: 200, height: 50, backgroundColor: '#045b78', color: 'white', fontSize: 25, border: 'none' }}>Employee Progress</button>
        </div>
        <div>
          <button style={{ width: 300, height: 50, marginLeft: 30, backgroundColor: '#045b78', fontSize: 20, color: 'white', border: 'none' }}>Employee Ranks</button>
        </div>
      </div>

      <div style={{ marginLeft: 50 }}>
        <svg ref={svgRef} />
      </div>
    </div>
  );
};

export default P1;
