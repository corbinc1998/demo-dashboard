import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricCard } from './Dashboard';

describe('MetricCard', () => {
  it('renders the title and value', () => {
    render(<MetricCard title="Active Calls" value={42} />);
    expect(screen.getByText('Active Calls')).toBeDefined();
    expect(screen.getByText('42')).toBeDefined();
  });

  it('renders the subtitle when provided', () => {
    render(<MetricCard title="Active Calls" value={42} subtitle="test subtitle" />);
    expect(screen.getByText('test subtitle')).toBeDefined();
  });

  it('does not render subtitle when not provided', () => {
    render(<MetricCard title="Active Calls" value={42} />);
    expect(screen.queryByText('test subtitle')).toBeNull();
  });
});