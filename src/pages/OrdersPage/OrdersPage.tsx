import { useState } from 'react';
import { Search } from 'lucide-react';
import { orders } from '../../data/mockData';
import './OrdersPage.css';

const statusConfig = {
    delivered: { label: 'Delivered', class: 'ord-status--delivered' },
    shipped: { label: 'Shipped', class: 'ord-status--shipped' },
    processing: { label: 'Processing', class: 'ord-status--processing' },
    canceled: { label: 'Canceled', class: 'ord-status--canceled' },
};

export default function OrdersPage() {
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [openOrder, setOpenOrder] = useState<string | null>(null);

    const stats = [
        { label: 'Total Orders', value: orders.length },
        { label: 'Delivered', value: orders.filter(o => o.status === 'delivered').length, color: '#22c55e' },
        { label: 'In Transit', value: orders.filter(o => o.status === 'shipped').length, color: '#0ea5e9' },
        { label: 'Revenue', value: `$${orders.reduce((s, o) => s + o.total, 0).toFixed(2)}` },
    ];

    const filtered = orders.filter(o => {
        const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.includes(search);
        const matchStatus = filterStatus === 'all' || o.status === filterStatus;
        return matchSearch && matchStatus;
    });

    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Orders</h1>
                    <p className="page-subtitle">Track and manage all customer orders</p>
                </div>
                <button className="btn-primary">Export Orders</button>
            </div>

            <div className="kpi-grid">
                {stats.map((s, i) => (
                    <div key={i} className="kpi-card">
                        <p className="kpi-card__label">{s.label}</p>
                        <p className="kpi-card__value" style={{ marginTop: 8, color: s.color || 'var(--color-text-primary)' }}>{s.value}</p>
                    </div>
                ))}
            </div>

            <div className="tickets-toolbar">
                <div className="toolbar-search">
                    <Search size={15} color="var(--color-text-placeholder)" />
                    <input type="text" placeholder="Search by order ID or customer..." value={search} onChange={e => setSearch(e.target.value)} className="toolbar-search-input" />
                </div>
                <div className="filter-group">
                    {['all', 'delivered', 'shipped', 'processing', 'canceled'].map(s => (
                        <button key={s} className={`filter-btn ${filterStatus === s ? 'filter-btn--active' : ''}`} onClick={() => setFilterStatus(s)}>
                            {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="customers-table">
                    <thead>
                        <tr>
                            <th>Order ID</th><th>Customer</th><th>Products</th><th>Items</th><th>Total</th><th>Payment</th><th>Status</th><th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(order => {
                            const sc = statusConfig[order.status as keyof typeof statusConfig];
                            return (
                                <>
                                    <tr key={order.id} className="customer-table-row" onClick={() => setOpenOrder(openOrder === order.id ? null : order.id)}>
                                        <td><span className="recording-id">{order.id}</span></td>
                                        <td>
                                            <div className="cust-info">
                                                <img src={order.photo} alt={order.customer} className="cust-avatar" style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-border)' }} />
                                                <span className="cust-name">{order.customer}</span>
                                            </div>
                                        </td>
                                        <td className="perf-td-muted" style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {order.products.join(', ')}
                                        </td>
                                        <td className="perf-td-num">{order.items}</td>
                                        <td className="cust-spent">${order.total.toFixed(2)}</td>
                                        <td className="perf-td-muted">{order.payment}</td>
                                        <td><span className={`ord-status ${sc.class}`}>{sc.label}</span></td>
                                        <td className="perf-td-muted">{order.date}</td>
                                    </tr>
                                    {openOrder === order.id && (
                                        <tr className="order-detail-row">
                                            <td colSpan={8}>
                                                <div className="order-detail">
                                                    <div className="order-detail-section">
                                                        <p className="order-detail-label">Shipping Address</p>
                                                        <p className="order-detail-value">{order.address}</p>
                                                    </div>
                                                    <div className="order-detail-section">
                                                        <p className="order-detail-label">Products</p>
                                                        <div className="order-products-list">
                                                            {order.products.map((p, i) => (
                                                                <span key={i} className="order-product-tag">{p}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="order-timeline">
                                                        {['Order Placed', 'Processing', 'Shipped', 'Delivered'].map((step, i) => {
                                                            const stepMap = { delivered: 4, shipped: 3, processing: 2, canceled: 1 };
                                                            const current = stepMap[order.status as keyof typeof stepMap];
                                                            return (
                                                                <div key={i} className={`timeline-step ${i < current ? 'timeline-step--done' : i === current - 1 ? 'timeline-step--current' : ''}`}>
                                                                    <div className="timeline-dot" />
                                                                    {i < 3 && <div className="timeline-line" />}
                                                                    <p className="timeline-label">{step}</p>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
