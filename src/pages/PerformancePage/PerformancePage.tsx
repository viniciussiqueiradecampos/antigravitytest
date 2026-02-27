import { useState } from 'react';
import { TrendingUp, TrendingDown, Users, Eye, MousePointerClick, Target } from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Legend, BarChart, Bar
} from 'recharts';
import { performanceKPIs, sessionData, topCountries, topPages, deviceData } from '../../data/mockData';
import './PerformancePage.css';

const periods = ['Today', 'Last 7 Days', 'Last 30 Days', 'Last 3 Months'];

const kpiIcons = [<Users size={18} />, <Eye size={18} />, <MousePointerClick size={18} />, <Target size={18} />];
const kpiColors = ['#4f46e5', '#0ea5e9', '#f59e0b', '#22c55e'];

export default function PerformancePage() {
    const [period, setPeriod] = useState('Last 30 Days');

    return (
        <div className="page-content">
            {/* Page Header */}
            <div className="page-header">
                <div>
                    <h1 className="page-title">Performance</h1>
                    <p className="page-subtitle">Detailed analytics and traffic insights for your store</p>
                </div>
                <div className="filter-group">
                    {periods.map(p => (
                        <button key={p} className={`filter-btn ${period === p ? 'filter-btn--active' : ''}`} onClick={() => setPeriod(p)}>
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            {/* KPI Cards */}
            <div className="kpi-grid">
                {performanceKPIs.map((kpi, i) => (
                    <div className="kpi-card" key={i} style={{ '--kpi-color': kpiColors[i] } as React.CSSProperties}>
                        <div className="kpi-card__top">
                            <div className="kpi-icon-wrap" style={{ background: kpiColors[i] + '18', color: kpiColors[i] }}>
                                {kpiIcons[i]}
                            </div>
                            <div className={`kpi-card__growth ${kpi.positive ? 'kpi-card__growth--up' : 'kpi-card__growth--down'}`}>
                                {kpi.positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                <span>{kpi.growth}</span>
                            </div>
                        </div>
                        <p className="kpi-card__value">{kpi.value}</p>
                        <p className="kpi-card__label">{kpi.label}</p>
                        <p className="kpi-card__sub">{kpi.sub}</p>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="perf-charts-row">
                {/* Traffic Overview */}
                <div className="card perf-chart-card">
                    <div className="card-header">
                        <h2 className="card-title">Traffic Overview</h2>
                        <span className="card-subtitle">Sessions vs Pageviews</span>
                    </div>
                    <ResponsiveContainer width="100%" height={220}>
                        <LineChart data={sessionData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" vertical={false} />
                            <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{ borderRadius: '10px', border: '1px solid #e4e4e7', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: 'Plus Jakarta Sans' }}
                                formatter={(val: number) => [val.toLocaleString()]}
                            />
                            <Legend wrapperStyle={{ fontSize: '12px', fontFamily: 'Plus Jakarta Sans', paddingTop: '12px' }} />
                            <Line type="monotone" dataKey="sessions" stroke="#4f46e5" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} name="Sessions" />
                            <Line type="monotone" dataKey="pageviews" stroke="#0ea5e9" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} strokeDasharray="5 3" name="Pageviews" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Top Countries */}
                <div className="card perf-countries-card">
                    <div className="card-header">
                        <h2 className="card-title">Top Countries</h2>
                    </div>
                    <div className="countries-list">
                        {topCountries.map((c, i) => (
                            <div key={i} className="country-item">
                                <span className="country-flag">{c.flag}</span>
                                <span className="country-name">{c.name}</span>
                                <div className="country-bar-track">
                                    <div className="country-bar-fill" style={{ width: `${c.percentage}%` }} />
                                </div>
                                <span className="country-value">{c.sessions.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="perf-charts-row">
                {/* Top Pages */}
                <div className="card perf-table-card">
                    <div className="card-header">
                        <h2 className="card-title">Top Landing Pages</h2>
                    </div>
                    <table className="perf-table">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th>Sessions</th>
                                <th>Bounce Rate</th>
                                <th>Avg. Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topPages.map((p, i) => (
                                <tr key={i}>
                                    <td>
                                        <p className="perf-page-path">{p.page}</p>
                                        <p className="perf-page-title">{p.title}</p>
                                    </td>
                                    <td className="perf-td-num">{p.sessions.toLocaleString()}</td>
                                    <td className="perf-td-muted">{p.bounce}</td>
                                    <td className="perf-td-muted">{p.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Devices */}
                <div className="card perf-devices-card">
                    <div className="card-header">
                        <h2 className="card-title">Device Breakdown</h2>
                    </div>
                    <ResponsiveContainer width="100%" height={140}>
                        <BarChart data={deviceData} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="device" type="category" tick={{ fontSize: 12, fill: '#71717a', fontFamily: 'Plus Jakarta Sans' }} axisLine={false} tickLine={false} width={60} />
                            <Tooltip
                                contentStyle={{ borderRadius: '10px', border: '1px solid #e4e4e7', fontFamily: 'Plus Jakarta Sans' }}
                                formatter={(val: number) => [`${val}%`]}
                            />
                            <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                                {deviceData.map((d, i) => (
                                    <rect key={i} fill={d.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    <div className="device-legend">
                        {deviceData.map(d => (
                            <div key={d.device} className="device-legend-item">
                                <span className="device-legend-dot" style={{ background: d.color }} />
                                <span className="device-legend-label">{d.device}</span>
                                <span className="device-legend-value">{d.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
