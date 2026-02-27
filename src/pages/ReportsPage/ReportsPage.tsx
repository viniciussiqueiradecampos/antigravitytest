import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { monthlyRevenue, revenueByCategory, topSellingProducts } from '../../data/mockData';
import './ReportsPage.css';

export default function ReportsPage() {
    const totalRev = monthlyRevenue.reduce((s, m) => s + m.revenue, 0);
    const totalProfit = monthlyRevenue.reduce((s, m) => s + m.profit, 0);
    const totalExpenses = monthlyRevenue.reduce((s, m) => s + m.expenses, 0);

    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Reports</h1>
                    <p className="page-subtitle">Financial overview and performance metrics</p>
                </div>
                <div className="filter-group">
                    <button className="filter-btn filter-btn--active">This Quarter</button>
                    <button className="filter-btn">Last Quarter</button>
                    <button className="filter-btn">Year to Date</button>
                    <button className="btn-primary" style={{ marginLeft: 8 }}>↓ Export PDF</button>
                </div>
            </div>

            <div className="kpi-grid">
                {[
                    { label: 'Total Revenue', value: `$${totalRev.toLocaleString()}`, growth: '+18.4%', positive: true },
                    { label: 'Total Expenses', value: `$${totalExpenses.toLocaleString()}`, growth: '+7.2%', positive: false },
                    { label: 'Net Profit', value: `$${totalProfit.toLocaleString()}`, growth: '+26.1%', positive: true },
                    { label: 'Profit Margin', value: `${Math.round(totalProfit / totalRev * 100)}%`, growth: '+4.2%', positive: true },
                ].map((s, i) => (
                    <div key={i} className="kpi-card">
                        <p className="kpi-card__label">{s.label}</p>
                        <p className="kpi-card__value" style={{ marginTop: 8 }}>{s.value}</p>
                        <span className={`kpi-card__growth ${s.positive ? 'kpi-card__growth--up' : 'kpi-card__growth--down'}`}>{s.growth}</span>
                    </div>
                ))}
            </div>

            {/* Revenue Chart */}
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Revenue vs Expenses vs Profit</h2>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={monthlyRevenue} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" vertical={false} />
                        <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 11, fill: '#71717a' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} />
                        <Tooltip contentStyle={{ borderRadius: '10px', border: '1px solid #e4e4e7', fontFamily: 'Plus Jakarta Sans' }} formatter={(v: any) => [`$${v?.toLocaleString() || '0'}`]} />
                        <Legend wrapperStyle={{ fontSize: '12px', fontFamily: 'Plus Jakarta Sans', paddingTop: '12px' }} />
                        <Bar dataKey="revenue" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Revenue" />
                        <Bar dataKey="expenses" fill="#e0e7ff" radius={[4, 4, 0, 0]} name="Expenses" />
                        <Bar dataKey="profit" fill="#22c55e" radius={[4, 4, 0, 0]} name="Profit" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="perf-charts-row">
                {/* Revenue by Category */}
                <div className="card">
                    <div className="card-header"><h2 className="card-title">Revenue by Category</h2></div>
                    <div className="category-list">
                        {revenueByCategory.map((c, i) => (
                            <div key={i} className="category-item">
                                <div className="category-item-top">
                                    <div className="category-color-dot" style={{ background: c.color }} />
                                    <span className="category-name">{c.category}</span>
                                    <span className="category-value">${c.revenue.toLocaleString()}</span>
                                    <span className="category-pct">{c.percentage}%</span>
                                </div>
                                <div className="country-bar-track">
                                    <div className="country-bar-fill" style={{ width: `${c.percentage}%`, background: c.color }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Products */}
                <div className="card">
                    <div className="card-header"><h2 className="card-title">Top Selling Products</h2></div>
                    <div className="table-container">
                        <table className="perf-table">
                            <thead>
                                <tr><th>Product</th><th>Units</th><th>Revenue</th><th>Growth</th></tr>
                            </thead>
                            <tbody>
                                {topSellingProducts.map((p, i) => (
                                    <tr key={i}>
                                        <td>
                                            <p className="perf-page-path">{p.name}</p>
                                            <p className="perf-page-title">{p.category}</p>
                                        </td>
                                        <td className="perf-td-num">{p.units}</td>
                                        <td className="cust-spent">${p.revenue.toLocaleString()}</td>
                                        <td><span style={{ color: '#22c55e', fontWeight: 600, fontSize: 12 }}>{p.growth}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
