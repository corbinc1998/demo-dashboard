import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { callVolumeData } from '../../data/mockData';

export default function CallVolumeChart() {
  return (
    <LineChart width={500} height={200} data={callVolumeData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="calls" stroke="#8884d8" />
    </LineChart>
  );
}