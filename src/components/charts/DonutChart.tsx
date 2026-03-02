import { Pie, PieChart, Tooltip } from 'recharts';
import { type ResolutionBreakdown } from '../../data/mockData';


interface ResolutionBreakdownProps
{
    inputData: ResolutionBreakdown[];
}

export default function CallResolutionChart({inputData}: ResolutionBreakdownProps) {
  return (
    <PieChart width={500} height={200}>
      <Pie
        data={inputData}
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