// ArchitectureComponent.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ArchitectureComponent = () => {
  const data = [
    { name: 'Encoder', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Pitch Predictor', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Duration Predictor', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Decoder', uv: 2780, pv: 3908, amt: 2000 },
  ];

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default ArchitectureComponent;