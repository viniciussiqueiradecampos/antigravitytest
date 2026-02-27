import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { customers } from '../../data/mockData';
import './CustomersPage.css';

const avatarColors = [
    { bg: '#dbeafe', text: '#1e40af' }, { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#d1fae5', text: '#065f46' }, { bg: '#fef3c7', text: '#92400e' },
    { bg: '#ede9fe', text: '#5b21b6' }, { bg: '#ffedd5', text: '#7c2d12' },
    { bg: '#d1fae5', text: '#065f46' }, { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#dbeafe', text: '#1e40af' }, { bg: '#fef3c7', text: '#92400e' },
];

import { useApp } from '../../context/AppContext';

export default function CustomersPage() {
    const { setShowCustomerModal } = useApp();
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const totalSpent = customers.reduce((s, c) => s + c.totalSpent, 0);
    const activeCount = customers.filter(c => c.status === 'active').length;
    const avgOrder = Math.round(totalSpent / customers.reduce((s, c) => s + c.orders, 0));

    const filtered = customers.filter(c => {
        const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
        const matchStatus = filterStatus === 'all' || c.status === filterStatus;
        return matchSearch && matchStatus;
    });
    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Customers</h1>
                    <p className="page-subtitle">View and manage all your store customers</p>
                </div>
                <button className="btn-primary" onClick={() => setShowCustomerModal(true)} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Plus size={16} /> Add Customer
                </button>
            </div>

            <div className="kpi-grid">
                {[
                    { label: 'Total Customers', value: customers.length.toLocaleString() },
                    { label: 'Active Customers', value: activeCount },
                    { label: 'Total Revenue', value: `$${totalSpent.toLocaleString()}` },
                    { label: 'Avg. Order Value', value: `$${avgOrder}` },
                ].map((s, i) => (
                    <div key={i} className="kpi-card">
                        <p className="kpi-card__label">{s.label}</p>
                        <p className="kpi-card__value" style={{ marginTop: 8 }}>{s.value}</p>
                    </div>
                ))}
            </div>

            <div className="tickets-toolbar">
                <div className="toolbar-search">
                    <Search size={15} color="var(--color-text-placeholder)" />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="toolbar-search-input"
                    />
                </div>
                <div className="filter-group">
                    {['all', 'active', 'inactive'].map(s => (
                        <button key={s} className={`filter-btn ${filterStatus === s ? 'filter-btn--active' : ''}`} onClick={() => setFilterStatus(s)}>
                            {s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="table-container">
                    <table className="customers-table">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Location</th>
                                <th>Orders</th>
                                <th>Total Spent</th>
                                <th>Status</th>
                                <th>Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((c, i) => (
                                <tr key={c.id} className="customer-table-row">
                                    <td>
                                        <div className="cust-info">
                                            <div className="cust-avatar" style={{ background: avatarColors[i % 10].bg, color: avatarColors[i % 10].text }}>{c.avatar}</div>
                                            <div>
                                                <p className="cust-name">{c.name}</p>
                                                <p className="cust-email">{c.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="perf-td-muted">{c.location}</td>
                                    <td className="perf-td-num">{c.orders}</td>
                                    <td>
                                        <span className="cust-spent">${c.totalSpent.toLocaleString()}</span>
                                    </td>
                                    <td>
                                        <span className={`cust-status ${c.status === 'active' ? 'cust-status--active' : 'cust-status--inactive'}`}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="perf-td-muted">{c.joined}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
