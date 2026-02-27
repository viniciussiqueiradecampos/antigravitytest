import { useState, useRef } from 'react';
import { X, Upload } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './ProductModal.css';

const categories = ['Electronics', 'Audio', 'Footwear', 'Accessories', 'Clothing', 'Home & Garden'];

export default function ProductModal() {
    const { showProductModal, setShowProductModal, editingProduct } = useApp();
    const product = editingProduct as Record<string, unknown> | null;
    const imgRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        name: (product?.name as string) || '',
        category: (product?.category as string) || 'Electronics',
        price: String(product?.price || ''),
        stock: String(product?.stock || ''),
        sku: (product?.sku as string) || '',
        status: (product?.status as string) || 'active',
        description: '',
    });
    const [previewImg, setPreviewImg] = useState<string>((product?.image as string) || '');

    if (!showProductModal) return null;

    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setPreviewImg(URL.createObjectURL(file));
    };

    const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(prev => ({ ...prev, [k]: e.target.value }));

    return (
        <div className="modal-overlay" onClick={() => setShowProductModal(false)}>
            <div className="modal product-modal" onClick={e => e.stopPropagation()}>
                <div className="product-modal__header">
                    <h2 className="product-modal__title">{product ? 'Edit Product' : 'Add New Product'}</h2>
                    <button className="modal-close" onClick={() => setShowProductModal(false)}><X size={18} /></button>
                </div>

                <div className="product-modal__body">
                    {/* Image Upload */}
                    <div className="product-img-upload" onClick={() => imgRef.current?.click()}>
                        {previewImg ? (
                            <img src={previewImg} alt="Product" className="product-img-preview" />
                        ) : (
                            <div className="product-img-placeholder">
                                <Upload size={24} color="var(--color-text-placeholder)" />
                                <p>Click to upload product image</p>
                                <p className="product-img-hint">PNG, JPG up to 10MB</p>
                            </div>
                        )}
                        <input ref={imgRef} type="file" accept="image/*" hidden onChange={handleImgChange} />
                    </div>

                    <div className="settings-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Product Name</label>
                                <input className="form-input" value={form.name} onChange={set('name')} placeholder="e.g. MacBook Pro 14&quot;" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">SKU</label>
                                <input className="form-input" value={form.sku} onChange={set('sku')} placeholder="e.g. MBP-14-2022" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Category</label>
                                <select className="form-input" value={form.category} onChange={set('category')}>
                                    {categories.map(c => <option key={c}>{c}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Status</label>
                                <select className="form-input" value={form.status} onChange={set('status')}>
                                    <option value="active">Active</option>
                                    <option value="out_of_stock">Out of Stock</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Price ($)</label>
                                <input className="form-input" type="number" value={form.price} onChange={set('price')} placeholder="0.00" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Stock Quantity</label>
                                <input className="form-input" type="number" value={form.stock} onChange={set('stock')} placeholder="0" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea className="form-textarea" rows={3} value={form.description} onChange={set('description')} placeholder="Product description..." />
                        </div>
                    </div>
                </div>

                <div className="product-modal__footer">
                    <button className="btn-outline" onClick={() => setShowProductModal(false)}>Cancel</button>
                    <button className="btn-primary" onClick={() => setShowProductModal(false)}>
                        {product ? 'Save Changes' : 'Add Product'}
                    </button>
                </div>
            </div>
        </div>
    );
}
