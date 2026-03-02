import { type ReactNode } from "react";
import "./Dashboard.css";

import CallVolumeChart from "./charts/CallLineChart";
import AgentData from "./charts/BarChart";
import CallResolutionChart from "./charts/DonutChart";

// console.log(Object.values(callVolumeData))
interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  children?: ReactNode;
}

export function MetricCard({ title, value, subtitle, children }: MetricCardProps) {
  return (
    <div className="metric-card">
      <span className="metric-title">{title}</span>
      <span className="metric-value">{value}</span>
      {subtitle && <span className="metric-subtitle">{subtitle}</span>}
      {children}
    </div>
  );
}

interface ChartCardProps {
  title: string;
  children: ReactNode;
  size?: "half" | "full";
}

export function ChartCard({ title, children, size = "half" }: ChartCardProps) {
  return (
    <div className={`chart-card ${size === "full" ? "chart-card--full" : ""}`}>
      <h3 className="chart-card__title">{title}</h3>
      <div className="chart-card__body">{children}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Call Center Dashboard</h1>
          <p className="dashboard__subtitle">Real-time agent and call metrics</p>
        </div>
      </header>

      {/* Top-level KPI cards */}
      <section className="dashboard__metrics">
        <MetricCard title="Active Calls" value={42} subtitle="+8% from last hour" />
        <MetricCard title="Avg Wait Time" value="1m 23s" subtitle="Target: < 2m" />
        <MetricCard title="Agents Online" value={18} subtitle="3 on break" />
        <MetricCard title="SLA Compliance" value="94.2%" subtitle="Goal: 95%" />
      </section>

      {/* Chart area — swap placeholder divs for Recharts later */}
      <section className="dashboard__charts">
        <ChartCard title="Call Volume (24hr)">
          <div className="chart-placeholder"><CallVolumeChart/></div>
        </ChartCard>
        <ChartCard title="Agent Performance">
          <div className="chart-placeholder"><AgentData/></div>
        </ChartCard>
        <ChartCard title="Call Resolution Breakdown" size="full">
          <div className="chart-placeholder"><CallResolutionChart/></div>
        </ChartCard>
      </section>
    </div>
  );
}