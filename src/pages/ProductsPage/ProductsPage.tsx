import { useState } from 'react';
import { Plus, Search, Star, Package } from 'lucide-react';
import { products } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import './ProductsPage.css';

const categories = ['All', 'Electronics', 'Audio', 'Footwear', 'Accessories'];

const statusConfig = {
    active: { label: 'Active', class: 'prod-status--active' },
    out_of_stock: { label: 'Out of Stock', class: 'prod-status--oos' },
    draft: { label: 'Draft', class: 'prod-status--draft' },
};

export default function ProductsPage() {
    const { setShowProductModal, setEditingProduct } = useApp();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [view, setView] = useState<'grid' | 'list'>('grid');

    const filtered = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchCat = category === 'All' || p.category === category;
        return matchSearch && matchCat;
    });

    const totalRevenue = products.reduce((s, p) => s + p.price * p.sales, 0);

    const handleEditProduct = (product: unknown) => {
        setEditingProduct(product);
        setShowProductModal(true);
    };

    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Products</h1>
                    <p className="page-subtitle">Manage your product catalog and inventory</p>
                </div>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                    onClick={() => { setEditingProduct(null); setShowProductModal(true); }}>
                    <Plus size={16} /> Add Product
                </button>
            </div>

            <div className="kpi-grid">
                {[
                    { label: 'Total Products', value: products.length },
                    { label: 'Active', value: products.filter(p => p.status === 'active').length },
                    { label: 'Out of Stock', value: products.filter(p => p.stock === 0).length },
                    { label: 'Total Revenue', value: `$${Math.round(totalRevenue / 1000)}K` },
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
                    <input type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} className="toolbar-search-input" />
                </div>
                <div className="filter-group">
                    {categories.map(c => (
                        <button key={c} className={`filter-btn ${category === c ? 'filter-btn--active' : ''}`} onClick={() => setCategory(c)}>{c}</button>
                    ))}
                </div>
                <div className="view-toggle">
                    <button className={`view-btn ${view === 'grid' ? 'view-btn--active' : ''}`} onClick={() => setView('grid')}>⊞</button>
                    <button className={`view-btn ${view === 'list' ? 'view-btn--active' : ''}`} onClick={() => setView('list')}>☰</button>
                </div>
            </div>

            {view === 'grid' ? (
                <div className="products-grid">
                    {filtered.map(product => {
                        const sc = statusConfig[product.status as keyof typeof statusConfig];
                        return (
                            <div key={product.id} className="product-card" onClick={() => handleEditProduct(product)}>
                                <div className="product-card__img-wrap">
                                    <img src={product.image} alt={product.name} className="product-img" />
                                    <span className={`prod-status-badge ${sc.class}`}>{sc.label}</span>
                                </div>
                                <div className="product-card__body">
                                    <p className="product-sku">{product.sku}</p>
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-category">{product.category}</p>
                                    <div className="product-stars">
                                        {'★'.repeat(Math.round(product.rating))}
                                        <span className="product-rating">{product.rating}</span>
                                    </div>
                                    <div className="product-footer">
                                        <span className="product-price">${product.price.toFixed(2)}</span>
                                        <div className="product-stock">
                                            <Package size={12} />
                                            <span>{product.stock} left</span>
                                        </div>
                                    </div>
                                    <div className="product-sales">
                                        <Star size={11} color="var(--color-text-placeholder)" /> {product.sales} sold
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <table className="customers-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Sales</th>
                                <th>Rating</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(product => {
                                const sc = statusConfig[product.status as keyof typeof statusConfig];
                                return (
                                    <tr key={product.id} className="customer-table-row" onClick={() => handleEditProduct(product)}>
                                        <td>
                                            <div className="cust-info">
                                                <img src={product.image} alt={product.name} className="product-thumb" />
                                                <span className="cust-name">{product.name}</span>
                                            </div>
                                        </td>
                                        <td><code className="product-sku-code">{product.sku}</code></td>
                                        <td className="perf-td-muted">{product.category}</td>
                                        <td className="cust-spent">${product.price.toFixed(2)}</td>
                                        <td className="perf-td-num">{product.stock}</td>
                                        <td className="perf-td-num">{product.sales}</td>
                                        <td><span style={{ color: '#f59e0b' }}>{'★'.repeat(Math.round(product.rating))}</span> {product.rating}</td>
                                        <td><span className={`cust-status ${sc.class}`}>{sc.label}</span></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
