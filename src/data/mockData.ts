export interface TimeSeries {
    time: string;
    calls: number;
  }
  
  export interface AgentPerformance {
    name: string;
    callsResolved: number;
  }
  
  export interface ResolutionBreakdown {
    category: string;
    count: number;
  }
  
  export const callVolumeData: TimeSeries[] = [
    { time: "8:00 AM", calls: 12 },
    { time: "9:00 AM", calls: 34 },
    { time: "10:00 AM", calls: 67 },
    { time: "11:00 AM", calls: 82 },
    { time: "12:00 PM", calls: 54 },
    { time: "1:00 PM", calls: 71 },
    { time: "2:00 PM", calls: 89 },
    { time: "3:00 PM", calls: 76 },
    { time: "4:00 PM", calls: 43 },
    { time: "5:00 PM", calls: 18 },
  ];
  
  export const agentData: AgentPerformance[] = [
    { name: "Sarah", callsResolved: 45 },
    { name: "Mike", callsResolved: 38 },
    { name: "Priya", callsResolved: 52 },
    { name: "James", callsResolved: 29 },
    { name: "Olivia", callsResolved: 41 },
  ];
  
  export const resolutionData: ResolutionBreakdown[] = [
    { category: "Resolved", count: 340 },
    { category: "Escalated", count: 85 },
    { category: "Abandoned", count: 45 },
  ];
//   What each array does:
  
//   callVolumeData — feeds the line chart. Each object is one hour of the workday. Recharts plots time on the x-axis and calls on the y-axis, connecting the dots into a line. You can see the pattern — calls ramp up in the morning, peak around 2 PM, and drop off at end of day. That's realistic call center behavior.
//   agentData — feeds the bar chart. Each object is one agent. Recharts draws one bar per agent, with the bar height based on callsResolved. Quick visual of who's pulling their weight.
//   resolutionData — feeds the donut/pie chart. Each object is a slice. Recharts sizes each slice proportionally to count. At a glance you see most calls get resolved, some escalated, a few abandoned.
  
//   The export keyword is what makes these available to other files. Without it, Dashboard.tsx can't see them. Now you're ready to install Recharts and start building the actual charts