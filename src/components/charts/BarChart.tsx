import { Bar, CartesianGrid,  BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { type AgentPerformance } from '../../data/mockData';


interface AgentChartProps {
    inputData: AgentPerformance[];
  }

export default function AgentChart({ inputData }: AgentChartProps)  {
    return (
<BarChart
style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
data={inputData}
margin={{
    top: 5,
    right: 0,
    left: 0,
    bottom: 5,
  }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name"/>
<YAxis dataKey="callsResolved"/>
<Tooltip/>
<Bar dataKey="callsResolved" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
</BarChart>

    );
  }