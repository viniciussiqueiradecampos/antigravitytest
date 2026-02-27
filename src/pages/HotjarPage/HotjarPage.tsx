import { useState } from 'react';
import { Play, Zap, MousePointer, FileText, ThumbsUp } from 'lucide-react';
import { recordings, funnelSteps } from '../../data/mockData';
import './HotjarPage.css';

const tabs = ['Heatmaps', 'Recordings', 'Funnels', 'Feedback'];

export default function HotjarPage() {
    const [activeTab, setActiveTab] = useState('Heatmaps');

    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Hotjar Analytics</h1>
                    <p className="page-subtitle">Understand how users experience your store</p>
                </div>
                <div className="hotjar-kpis">
                    <div className="hotjar-kpi">
                        <span className="hotjar-kpi-val">1,284</span>
                        <span className="hotjar-kpi-label">Heatmaps</span>
                    </div>
                    <div className="hotjar-kpi">
                        <span className="hotjar-kpi-val">328</span>
                        <span className="hotjar-kpi-label">Recordings</span>
                    </div>
                    <div className="hotjar-kpi">
                        <span className="hotjar-kpi-val" style={{ color: '#22c55e' }}>72</span>
                        <span className="hotjar-kpi-label">NPS Score</span>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="hotjar-tabs">
                {tabs.map(t => (
                    <button key={t} className={`hotjar-tab ${activeTab === t ? 'hotjar-tab--active' : ''}`} onClick={() => setActiveTab(t)}>
                        {t === 'Heatmaps' && <MousePointer size={14} />}
                        {t === 'Recordings' && <Play size={14} />}
                        {t === 'Funnels' && <Zap size={14} />}
                        {t === 'Feedback' && <ThumbsUp size={14} />}
                        {t}
                    </button>
                ))}
            </div>

            {activeTab === 'Heatmaps' && (
                <div className="hotjar-main-grid">
                    <div className="card heatmap-card">
                        <div className="card-header">
                            <h2 className="card-title">Click Heatmap — Home Page</h2>
                            <div className="filter-group">
                                <button className="filter-btn filter-btn--active">Clicks</button>
                                <button className="filter-btn">Move</button>
                                <button className="filter-btn">Scroll</button>
                            </div>
                        </div>
                        <div className="heatmap-container">
                            {/* Browser mockup */}
                            <div className="heatmap-browser">
                                <div className="heatmap-browser__bar">
                                    <span className="browser-dot" style={{ background: '#ef4444' }} />
                                    <span className="browser-dot" style={{ background: '#f59e0b' }} />
                                    <span className="browser-dot" style={{ background: '#22c55e' }} />
                                    <div className="browser-url">vinnycampos.eu</div>
                                </div>
                                <div className="heatmap-content">
                                    <div className="heatmap-overlay">
                                        {/* CSS heatmap spots */}
                                        <div className="heat-spot heat-spot--hot" style={{ top: '20%', left: '50%', width: 120, height: 120 }} />
                                        <div className="heat-spot heat-spot--warm" style={{ top: '45%', left: '30%', width: 90, height: 90 }} />
                                        <div className="heat-spot heat-spot--warm" style={{ top: '35%', left: '68%', width: 80, height: 80 }} />
                                        <div className="heat-spot heat-spot--cool" style={{ top: '70%', left: '20%', width: 70, height: 70 }} />
                                        <div className="heat-spot heat-spot--cool" style={{ top: '60%', left: '55%', width: 100, height: 100 }} />
                                        <div className="heat-spot heat-spot--hot" style={{ top: '80%', left: '45%', width: 60, height: 60 }} />
                                    </div>
                                    {/* Page skeleton */}
                                    <div className="page-skeleton">
                                        <div className="skel-nav" />
                                        <div className="skel-hero" />
                                        <div className="skel-cards">
                                            <div className="skel-card" /><div className="skel-card" /><div className="skel-card" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="heatmap-legend">
                            <span className="legend-label">Low</span>
                            <div className="heatmap-gradient-bar" />
                            <span className="legend-label">High</span>
                        </div>
                    </div>

                    <div className="hotjar-side-col">
                        <div className="card hotjar-stats-card">
                            <h2 className="card-title" style={{ marginBottom: 16 }}>Page Stats</h2>
                            {[
                                { label: 'Total clicks', value: '12,840', icon: <MousePointer size={14} /> },
                                { label: 'Rage clicks', value: '284', icon: <Zap size={14} />, warn: true },
                                { label: 'U-turns', value: '92', icon: <FileText size={14} /> },
                            ].map((s, i) => (
                                <div key={i} className="hj-stat-row">
                                    <span className={`hj-stat-icon ${s.warn ? 'hj-stat-icon--warn' : ''}`}>{s.icon}</span>
                                    <span className="hj-stat-label">{s.label}</span>
                                    <span className={`hj-stat-value ${s.warn ? 'hj-stat-value--warn' : ''}`}>{s.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="card nps-card">
                            <h2 className="card-title">NPS Score</h2>
                            <div className="nps-circle">
                                <span className="nps-number">72</span>
                                <span className="nps-label">Great</span>
                            </div>
                            <div className="nps-breakdown">
                                <div className="nps-row"><span className="nps-dot nps-dot--green" />Promoters<span className="nps-pct">68%</span></div>
                                <div className="nps-row"><span className="nps-dot nps-dot--gray" />Passives<span className="nps-pct">19%</span></div>
                                <div className="nps-row"><span className="nps-dot nps-dot--red" />Detractors<span className="nps-pct">13%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Recordings' && (
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Session Recordings</h2>
                        <span className="badge-new">328 NEW</span>
                    </div>
                    <div className="table-container">
                        <table className="perf-table">
                            <thead>
                                <tr>
                                    <th>Session ID</th>
                                    <th>User</th>
                                    <th>Country</th>
                                    <th>Duration</th>
                                    <th>Pages</th>
                                    <th>Rage Clicks</th>
                                    <th>Date</th>
                                    <th>Device</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {recordings.map(r => (
                                    <tr key={r.id}>
                                        <td><span className="recording-id">{r.id}</span></td>
                                        <td className="perf-td-num">{r.user}</td>
                                        <td className="perf-td-num">{r.country}</td>
                                        <td className="perf-td-muted">{r.duration}</td>
                                        <td className="perf-td-muted">{r.pages}</td>
                                        <td>
                                            <span className={`rage-badge ${r.rage > 0 ? 'rage-badge--warn' : ''}`}>{r.rage}</span>
                                        </td>
                                        <td className="perf-td-muted">{r.date}</td>
                                        <td className="perf-td-muted">{r.device}</td>
                                        <td>
                                            <button className="play-btn">
                                                <Play size={12} />
                                                <span>{r.status === 'new' ? 'Watch' : 'Replay'}</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'Funnels' && (
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Conversion Funnel — Checkout Flow</h2>
                    </div>
                    <div className="funnel-container">
                        {funnelSteps.map((step, i) => {
                            const drop = i > 0 ? ((funnelSteps[i - 1].count - step.count) / funnelSteps[i - 1].count * 100).toFixed(0) : null;
                            return (
                                <div key={i} className="funnel-step-wrap">
                                    {drop && <div className="funnel-drop">↓ {drop}% drop-off</div>}
                                    <div className="funnel-step">
                                        <div className="funnel-bar" style={{ width: `${step.rate}%` }}>
                                            <span className="funnel-bar-label">{step.step}</span>
                                        </div>
                                        <div className="funnel-meta">
                                            <span className="funnel-count">{step.count.toLocaleString()}</span>
                                            <span className="funnel-rate">{step.rate}%</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {activeTab === 'Feedback' && (
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">User Feedback</h2>
                    </div>
                    <div className="feedback-placeholder">
                        <ThumbsUp size={40} strokeWidth={1} color="var(--color-text-placeholder)" />
                        <p>Collect qualitative feedback from your users</p>
                        <button className="btn-primary">Set up Feedback Widget</button>
                    </div>
                </div>
            )}
        </div>
    );
}
