import { X, ShoppingBag, MessageCircle, AlertTriangle, UserPlus, TrendingUp, Package, Bell } from 'lucide-react';
import { notifications } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import './NotificationsPanel.css';

const iconMap: Record<string, React.ReactNode> = {
    order: <ShoppingBag size={16} />,
    message: <MessageCircle size={16} />,
    alert: <AlertTriangle size={16} />,
    customer: <UserPlus size={16} />,
    report: <TrendingUp size={16} />,
};

const colorMap: Record<string, string> = {
    order: '#4f46e5',
    message: '#0ea5e9',
    alert: '#ef4444',
    customer: '#22c55e',
    report: '#f59e0b',
};

interface Props { isOpen: boolean; }

export default function NotificationsPanel({ isOpen }: Props) {
    const { closeAll } = useApp();
    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <>
            {isOpen && <div className="panel-backdrop" onClick={closeAll} />}
            <div className={`notif-panel ${isOpen ? 'notif-panel--open' : ''}`}>
                <div className="notif-panel__header">
                    <div className="notif-panel__title">
                        <Bell size={18} />
                        <span>Notifications</span>
                        {unreadCount > 0 && <span className="notif-unread-count">{unreadCount}</span>}
                    </div>
                    <div className="notif-panel__actions">
                        <button className="notif-mark-read">Mark all read</button>
                        <button className="notif-close" onClick={closeAll}><X size={18} /></button>
                    </div>
                </div>

                <div className="notif-list">
                    {notifications.map(n => (
                        <div key={n.id} className={`notif-item ${n.unread ? 'notif-item--unread' : ''}`}>
                            <div className="notif-icon" style={{ background: colorMap[n.type] + '18', color: colorMap[n.type] }}>
                                {iconMap[n.type]}
                            </div>
                            <div className="notif-content">
                                <p className="notif-title">{n.title}</p>
                                <p className="notif-message">{n.message}</p>
                                <p className="notif-time">{n.time}</p>
                            </div>
                            {n.unread && <div className="notif-dot" />}
                        </div>
                    ))}
                </div>

                <div className="notif-panel__footer">
                    <button className="notif-view-all">View all notifications</button>
                </div>
            </div>
        </>
    );
}
