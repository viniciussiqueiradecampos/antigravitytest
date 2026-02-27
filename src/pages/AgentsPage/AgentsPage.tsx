import { Plus, ArrowLeft, Star, Clock, CheckCircle, Mail, MapPin, Briefcase } from 'lucide-react';
import { agents } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
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
    const { viewingAgent, setViewingAgent, setShowAgentModal, setShowTicketModal } = useApp();
    const totalTickets = agents.reduce((s, a) => s + a.ticketsResolved, 0);
    const avgRating = (agents.reduce((s, a) => s + a.rating, 0) / agents.length).toFixed(1);
    const onlineCount = agents.filter(a => a.status === 'online').length;

    if (viewingAgent) {
        const sc = statusConfig[viewingAgent.status as keyof typeof statusConfig];
        const ac = avatarColors[agents.indexOf(viewingAgent) % 6] || avatarColors[0];

        return (
            <div className="page-content agent-profile-view">
                <button className="back-btn" onClick={() => setViewingAgent(null)}>
                    <ArrowLeft size={18} /> Back to Agents
                </button>

                <div className="profile-hero">
                    <div className="profile-header-main">
                        <div className="profile-avatar-large" style={{ background: ac.bg, color: ac.text }}>
                            {viewingAgent.avatar}
                            <div className="profile-status-ring" style={{ background: sc.color }} />
                        </div>
                        <div className="profile-title-group">
                            <h1 className="profile-name">{viewingAgent.name}</h1>
                            <div className="profile-badges">
                                <span className="p-badge" style={{ color: sc.color, background: `${sc.color}15` }}>
                                    ● {sc.label}
                                </span>
                                <span className="p-badge-gray">{viewingAgent.role}</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile-actions">
                        <button className="btn-secondary" onClick={() => setShowTicketModal(true)}>Assign New Ticket</button>
                        <button className="btn-primary">Update Profile</button>
                    </div>
                </div>

                <div className="profile-content-grid">
                    <div className="profile-main-col">
                        <div className="profile-card">
                            <h3 className="profile-card-title">Performance Overview</h3>
                            <div className="profile-stats-grid">
                                <div className="p-stat">
                                    <div className="p-stat-icon" style={{ background: '#eef2ff', color: '#4f46e5' }}><CheckCircle size={20} /></div>
                                    <div className="p-stat-info">
                                        <span className="p-stat-val">{viewingAgent.ticketsResolved}</span>
                                        <span className="p-stat-lab">Resolved Tickets</span>
                                    </div>
                                </div>
                                <div className="p-stat">
                                    <div className="p-stat-icon" style={{ background: '#fff7ed', color: '#f59e0b' }}><Star size={20} /></div>
                                    <div className="p-stat-info">
                                        <span className="p-stat-val">{viewingAgent.rating} / 5.0</span>
                                        <span className="p-stat-lab">Satisfaction Rating</span>
                                    </div>
                                </div>
                                <div className="p-stat">
                                    <div className="p-stat-icon" style={{ background: '#ecfdf5', color: '#10b981' }}><Clock size={20} /></div>
                                    <div className="p-stat-info">
                                        <span className="p-stat-val">{viewingAgent.responseTime}</span>
                                        <span className="p-stat-lab">Avg. Response Time</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-card">
                            <h3 className="profile-card-title">Latest Activities</h3>
                            <div className="activity-list">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="activity-item">
                                        <div className="activity-dot" />
                                        <div className="activity-info">
                                            <p className="activity-text">Resolved ticket <strong>#432{i}</strong> for Store Analytics issue.</p>
                                            <span className="activity-time">{i * 2} hours ago</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="profile-side-col">
                        <div className="profile-card">
                            <h3 className="profile-card-title">Contact Information</h3>
                            <div className="contact-list">
                                <div className="contact-item"><Mail size={16} /> {viewingAgent.email}</div>
                                <div className="contact-item"><Briefcase size={16} /> {viewingAgent.department}</div>
                                <div className="contact-item"><MapPin size={16} /> Remote · HQ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Support Agents</h1>
                    <p className="page-subtitle">Manage your team and track performance</p>
                </div>
                <button className="btn-primary" onClick={() => setShowAgentModal(true)} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Plus size={16} /> Add Agent
                </button>
            </div>
            {/* KPI Cards section... same as before but ensured it fits */}
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
                                <button className="btn-secondary" onClick={() => setViewingAgent(agent)}>View Profile</button>
                                <button className="btn-primary" onClick={() => setShowTicketModal(true)}>Assign</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
