import { ChevronRight } from 'lucide-react';
import { recentCustomers } from '../../data/mockData';
import './RecentCustomers.css';

const avatarColors = [
    { bg: '#dbeafe', text: '#1e40af' },
    { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#d1fae5', text: '#065f46' },
    { bg: '#fef3c7', text: '#92400e' },
];

export default function RecentCustomers() {
    return (
        <div className="recent-customers">
            <div className="recent-customers__header">
                <div>
                    <h2 className="recent-customers__title">Recent Customers</h2>
                    <p className="recent-customers__subtitle">Lorem ipsum dolor sit ametis.</p>
                </div>
            </div>

            <div className="customer-list">
                {recentCustomers.map((c, i) => (
                    <div className="customer-row" key={c.id}>
                        <div
                            className="customer-avatar"
                            style={{ background: avatarColors[i % avatarColors.length].bg, color: avatarColors[i % avatarColors.length].text }}
                        >
                            {c.avatar}
                        </div>
                        <div className="customer-info">
                            <p className="customer-name">{c.name}</p>
                            <p className="customer-email">{c.email}</p>
                        </div>
                        <div className="customer-meta">
                            <p className="customer-amount">{c.amount}</p>
                            <p className="customer-city">{c.city}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="see-all-customers-btn">
                <span>SEE ALL CUSTOMERS</span>
                <ChevronRight size={14} />
            </button>
        </div>
    );
}
