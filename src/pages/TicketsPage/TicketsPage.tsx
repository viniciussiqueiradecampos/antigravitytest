import { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { tickets } from '../../data/mockData';
import './TicketsPage.css';

const statusConfig = {
    open: { label: 'Open', class: 'status--open' },
    'in-progress': { label: 'In Progress', class: 'status--progress' },
    resolved: { label: 'Resolved', class: 'status--resolved' },
};

const priorityConfig = {
    critical: { label: 'Critical', class: 'priority--critical' },
    high: { label: 'High', class: 'priority--high' },
    medium: { label: 'Medium', class: 'priority--medium' },
    low: { label: 'Low', class: 'priority--low' },
};

const avatarColors = ['#dbeafe', '#fce7f3', '#d1fae5', '#fef3c7', '#ede9fe', '#fee2e2', '#d1fae5', '#fef3c7'];
const avatarText = ['#1e40af', '#9d174d', '#065f46', '#92400e', '#5b21b6', '#7f1d1d', '#065f46', '#92400e'];

export default function TicketsPage() {
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const stats = [
        { label: 'Open', value: tickets.filter(t => t.status === 'open').length, color: '#4f46e5' },
        { label: 'In Progress', value: tickets.filter(t => t.status === 'in-progress').length, color: '#f59e0b' },
        { label: 'Resolved', value: tickets.filter(t => t.status === 'resolved').length, color: '#22c55e' },
        { label: 'Critical', value: tickets.filter(t => t.priority === 'critical').length, color: '#ef4444' },
    ];

    const filtered = tickets.filter(t => {
        const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.customer.toLowerCase().includes(search.toLowerCase());
        const matchStatus = filterStatus === 'all' || t.status === filterStatus;
        return matchSearch && matchStatus;
    });

    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Support Tickets</h1>
                    <p className="page-subtitle">Manage and resolve customer support requests</p>
                </div>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Plus size={16} />
                    New Ticket
                </button>
            </div>

            {/* Stats */}
            <div className="tickets-stats">
                {stats.map(s => (
                    <div key={s.label} className="tickets-stat-card">
                        <span className="tickets-stat-value" style={{ color: s.color }}>{s.value}</span>
                        <span className="tickets-stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="tickets-toolbar">
                <div className="toolbar-search">
                    <Search size={15} color="var(--color-text-placeholder)" />
                    <input
                        type="text"
                        placeholder="Search tickets or customers..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="toolbar-search-input"
                    />
                </div>
                <div className="filter-group">
                    {['all', 'open', 'in-progress', 'resolved'].map(s => (
                        <button key={s} className={`filter-btn ${filterStatus === s ? 'filter-btn--active' : ''}`} onClick={() => setFilterStatus(s)}>
                            {s === 'all' ? 'All' : s === 'in-progress' ? 'In Progress' : s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="tickets-table">
                    <thead>
                        <tr>
                            <th>Ticket</th>
                            <th>Customer</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Category</th>
                            <th>Assignee</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((tk, i) => {
                            const sc = statusConfig[tk.status as keyof typeof statusConfig];
                            const pc = priorityConfig[tk.priority as keyof typeof priorityConfig];
                            return (
                                <tr key={tk.id} className="ticket-row">
                                    <td>
                                        <p className="ticket-id">{tk.id}</p>
                                        <p className="ticket-title">{tk.title}</p>
                                    </td>
                                    <td>
                                        <div className="ticket-customer">
                                            <div className="t-avatar" style={{ background: avatarColors[i % 8], color: avatarText[i % 8] }}>{tk.avatar}</div>
                                            <span>{tk.customer}</span>
                                        </div>
                                    </td>
                                    <td><span className={`priority-badge ${pc.class}`}>{pc.label}</span></td>
                                    <td><span className={`status-pill ${sc.class}`}>{sc.label}</span></td>
                                    <td><span className="ticket-category">{tk.category}</span></td>
                                    <td className="perf-td-muted">{tk.assignee || <span className="unassigned">Unassigned</span>}</td>
                                    <td className="perf-td-muted">{tk.date}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
