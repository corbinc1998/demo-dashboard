import { TimeSeries, AgentPerformance, ResolutionBreakdown } from '../data/mockData';

export interface DashboardData {
    callVolumeData: TimeSeries[];
    agentData: AgentPerformance[];
    resolutionData: ResolutionBreakdown[];
}




const API_URL = import.meta.env.VITE_API_URL;

export async function fetchDashboardData(): Promise <DashboardData> {
    try
    {
    const response = await fetch(API_URL);
    const result = await response.json();
    const data = JSON.parse(result.body);
    return data;
    } catch (error) {
        throw new Error("Failed to fetch dashboard data")
    }
}
