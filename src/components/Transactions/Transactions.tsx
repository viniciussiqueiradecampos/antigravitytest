import { MoreHorizontal, ChevronRight } from 'lucide-react';
import { transactions } from '../../data/mockData';
import './Transactions.css';

type StatusType = 'completed' | 'pending' | 'canceled';

const statusConfig: Record<StatusType, { label: string; className: string }> = {
    completed: { label: 'Completed', className: 'badge--completed' },
    pending: { label: 'Pending', className: 'badge--pending' },
    canceled: { label: 'Canceled', className: 'badge--canceled' },
};

export default function Transactions() {
    return (
        <div className="transactions">
            <div className="transactions__header">
                <div>
                    <h2 className="transactions__title">Transactions</h2>
                    <p className="transactions__subtitle">Lorem ipsum dolor sit amet, consectetur adipis.</p>
                </div>
                <button className="see-all-btn">
                    <span>See All Transactions</span>
                    <ChevronRight size={14} />
                </button>
            </div>

            <div className="transaction-list">
                {transactions.map((tx) => {
                    const { label, className } = statusConfig[tx.status as StatusType];
                    return (
                        <div className="transaction-row" key={tx.id}>
                            <div className="transaction-row__status">
                                <span className={`status-badge ${className}`}>
                                    <span className="status-dot" />
                                    {label}
                                </span>
                            </div>
                            <div className="transaction-row__info">
                                <p className="tx-method">{tx.method}</p>
                                <p className="tx-type">{tx.type}</p>
                            </div>
                            <div className="transaction-row__amount">
                                <p className="tx-amount">{tx.amount}</p>
                                <p className="tx-date">{tx.date}</p>
                            </div>
                            <div className="transaction-row__dest">
                                <p className="tx-dest">{tx.destination}</p>
                            </div>
                            <button className="tx-more-btn">
                                <MoreHorizontal size={18} />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
