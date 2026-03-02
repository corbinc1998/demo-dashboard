const callVolumeData = [
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
  
 const agentData = [
    { name: "Sarah", callsResolved: 45 },
    { name: "Mike", callsResolved: 38 },
    { name: "Priya", callsResolved: 52 },
    { name: "James", callsResolved: 29 },
    { name: "Olivia", callsResolved: 41 },
  ];
 const resolutionData = [
    { category: "Resolved", count: 340 },
    { category: "Escalated", count: 85 },
    { category: "Abandoned", count: 45 },
  ];
export const handler = async (event) => {
    const CORS_HEADERS = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173', // Or '*' for all origins (use with caution)
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      };
console.log(`Event: ${JSON.stringify(event,null, 2)} ` );
// 
const response = {
    statusCode : 200,
    headers: CORS_HEADERS,
    body: JSON.stringify({
        callVolumeData,
        agentData,
        resolutionData
      })
};
return response;
};