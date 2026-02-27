import { useState } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer
} from 'recharts';
import { Download } from 'lucide-react';
import { salesData } from '../../data/mockData';
import './SalesChart.css';

const FILTERS = ['12 Months', '6 Months', '30 Days', '7 Days'];

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
    if (active && payload && payload.length) {
        return (
            <div className="chart-tooltip">
                <p className="chart-tooltip__month">{label} 2021</p>
                <p className="chart-tooltip__value">${payload[0].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
}

export default function SalesChart() {
    const [activeFilter, setActiveFilter] = useState('12 Months');

    const filteredData = (() => {
        switch (activeFilter) {
            case '6 Months': return salesData.slice(6);
            case '30 Days': return salesData.slice(9);
            case '7 Days': return salesData.slice(10);
            default: return salesData;
        }
    })();

    return (
        <div className="sales-chart">
            <div className="sales-chart__header">
                <h2 className="sales-chart__title">Sales Report</h2>
                <div className="sales-chart__controls">
                    <div className="filter-group">
                        {FILTERS.map(f => (
                            <button
                                key={f}
                                className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <button className="export-btn">
                        <Download size={14} />
                        <span>Export PDF</span>
                    </button>
                </div>
            </div>

            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={filteredData} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorSecondary" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#a5b4fc" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#a5b4fc" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12, fill: '#71717a', fontFamily: 'Plus Jakarta Sans' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis hide />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4f46e5', strokeWidth: 1, strokeDasharray: '4 4' }} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#4f46e5"
                            strokeWidth={2.5}
                            fill="url(#colorSales)"
                            dot={false}
                            activeDot={{ r: 5, fill: '#4f46e5', strokeWidth: 0 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
