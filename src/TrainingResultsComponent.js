// TrainingResultsComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TrainingResultsComponent = () => {
  const data = [
    { name: 'FastPitch', MOS: 3.804 },
    { name: 'Ground Truth', MOS: 3.878 },
  ];

  return (
    <BarChart
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
      <Bar dataKey="MOS" fill="#8884d8" />
    </BarChart>
  );
};

export default TrainingResultsComponent;