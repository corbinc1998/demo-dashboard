import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { type TimeSeries } from '../../data/mockData';

interface TimeSeriesProps{
  inputData: TimeSeries[];
}

export default function CallVolumeChart({inputData}: TimeSeriesProps) {
  return (
    <LineChart width={500} height={200} data={inputData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="calls" stroke="#8884d8" />
    </LineChart>
  );
}