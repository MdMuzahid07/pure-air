import React from 'react';
import { Legend, Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {


    const data = [
      {
          "month": "Mar",
          "investment": 100000,
          "sell": 241,
          "revenue": 10401
      },
      {
          "month": "Apr",
          "investment": 200000,
          "sell": 423,
          "revenue": 24500
      },
      {
          "month": "May",
          "investment": 500000,
          "sell": 726,
          "revenue": 67010
      },
      {
          "month": "Jun",
          "investment": 500000,
          "sell": 529,
          "revenue": 40405
      },
      {
          "month": "Jul",
          "investment": 600000,
          "sell": 601,
          "revenue": 50900
      },
      {
          "month": "Aug",
          "investment": 700000,
          "sell": 670,
          "revenue": 61000
      }
  ];

      const pieData1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const pieData2 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ];

    return (
        <div className='chart-container py-20'>
            <div className="line-chart">
                <LineChart width={400} height={400} data = {data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className="pie-chart">
            <PieChart width={400} height={400}>
                <Pie data={pieData1} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={pieData2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;