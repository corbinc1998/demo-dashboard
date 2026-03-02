import { Pie, PieChart, Tooltip } from 'recharts';
import { resolutionData } from '../../data/mockData';

export default function CallResolutionChart() {
  return (
    <PieChart width={500} height={200}>
      <Pie
        data={resolutionData}
        dataKey="count"
        nameKey="category"
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}