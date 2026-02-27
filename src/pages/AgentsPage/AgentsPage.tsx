import { Plus } from 'lucide-react';
import { agents } from '../../data/mockData';
import './AgentsPage.css';

const avatarColors = [
    { bg: '#dbeafe', text: '#1e40af' }, { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#d1fae5', text: '#065f46' }, { bg: '#fef3c7', text: '#92400e' },
    { bg: '#ede9fe', text: '#5b21b6' }, { bg: '#ffedd5', text: '#7c2d12' },
];
const statusConfig = {
    online: { label: 'Online', color: '#22c55e' },
    busy: { label: 'Busy', color: '#f59e0b' },
    offline: { label: 'Offline', color: '#a1a1aa' },
};

export default function AgentsPage() {
    const totalTickets = agents.reduce((s, a) => s + a.ticketsResolved, 0);
    const avgRating = (agents.reduce((s, a) => s + a.rating, 0) / agents.length).toFixed(1);
    const onlineCount = agents.filter(a => a.status === 'online').length;
    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Support Agents</h1>
                    <p className="page-subtitle">Manage your team and track performance</p>
                </div>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Plus size={16} /> Add Agent
                </button>
            </div>
            <div className="kpi-grid">
                {[
                    { label: 'Total Agents', value: agents.length },
                    { label: 'Online Now', value: onlineCount },
                    { label: 'Avg. Rating', value: avgRating },
                    { label: 'Total Resolved', value: totalTickets },
                ].map((s, i) => (
                    <div key={i} className="kpi-card">
                        <p className="kpi-card__label">{s.label}</p>
                        <p className="kpi-card__value" style={{ marginTop: 8 }}>{s.value}</p>
                    </div>
                ))}
            </div>
            <div className="agents-grid">
                {agents.map((agent, i) => {
                    const sc = statusConfig[agent.status as keyof typeof statusConfig];
                    const ac = avatarColors[i % 6];
                    return (
                        <div key={agent.id} className="agent-card">
                            <div className="agent-card__header">
                                <div className="agent-avatar-wrap">
                                    <div className="agent-avatar" style={{ background: ac.bg, color: ac.text }}>{agent.avatar}</div>
                                    <div className="agent-status-dot" style={{ background: sc.color }} />
                                </div>
                                <span className="agent-status-label" style={{ color: sc.color }}>● {sc.label}</span>
                            </div>
                            <h3 className="agent-name">{agent.name}</h3>
                            <p className="agent-role">{agent.role} · {agent.department}</p>
                            <p className="agent-email">{agent.email}</p>
                            <div className="agent-stars">
                                {'★'.repeat(Math.round(agent.rating))}{'☆'.repeat(5 - Math.round(agent.rating))}
                                <span className="agent-rating-num">{agent.rating}</span>
                            </div>
                            <div className="agent-card__stats">
                                <div className="agent-stat"><span className="agent-stat-value">{agent.ticketsOpen}</span><span className="agent-stat-label">Open</span></div>
                                <div className="agent-stat-divider" />
                                <div className="agent-stat"><span className="agent-stat-value">{agent.ticketsResolved}</span><span className="agent-stat-label">Resolved</span></div>
                                <div className="agent-stat-divider" />
                                <div className="agent-stat"><span className="agent-stat-value">{agent.responseTime}</span><span className="agent-stat-label">Avg Reply</span></div>
                            </div>
                            <div className="agent-card__footer">
                                <button className="agent-btn">View Profile</button>
                                <button className="agent-btn agent-btn--primary">Assign</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
