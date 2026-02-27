import { useState, useRef } from 'react';
import { Camera, Save, User, Bell, Shield, Palette, CreditCard, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './SettingsPage.css';

const sections = [
    { id: 'profile', icon: <User size={16} />, label: 'Profile' },
    { id: 'notifications', icon: <Bell size={16} />, label: 'Notifications' },
    { id: 'security', icon: <Shield size={16} />, label: 'Security' },
    { id: 'appearance', icon: <Palette size={16} />, label: 'Appearance' },
    { id: 'billing', icon: <CreditCard size={16} />, label: 'Billing & Plans' },
];

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
    return (
        <button className={`toggle ${checked ? 'toggle--on' : ''}`} onClick={onChange}>
            <span className="toggle-knob" />
        </button>
    );
}

export default function SettingsPage() {
    const { userPhoto, setUserPhoto } = useApp();
    const [activeSection, setActiveSection] = useState('profile');
    const [saved, setSaved] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);

    const [profile, setProfile] = useState({
        name: 'Mariana Campos', email: 'mariana@vinnycampos.eu',
        phone: '+1 (555) 234-5678', role: 'Store Owner',
        bio: 'Running Vinnycampos.eu since 2020. Passionate about design and great customer experience.',
        location: 'Lisbon, Portugal', website: 'https://vinnycampos.eu',
    });

    const [notifs, setNotifs] = useState({
        newOrders: true, orderShipped: true, orderDelivered: false,
        newCustomer: true, lowStock: true, paymentFailed: true,
        weeklyReport: false, promotions: false,
    });

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setUserPhoto(URL.createObjectURL(file));
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    const toggleNotif = (key: keyof typeof notifs) => setNotifs(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="page-content">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Settings</h1>
                    <p className="page-subtitle">Manage your account, preferences and security</p>
                </div>
                <button className={`btn-primary ${saved ? 'btn-primary--saved' : ''}`} onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Save size={15} />
                    {saved ? '✓ Saved!' : 'Save Changes'}
                </button>
            </div>

            <div className="settings-layout">
                {/* Sidebar */}
                <div className="settings-nav">
                    {sections.map(s => (
                        <button key={s.id} className={`settings-nav-item ${activeSection === s.id ? 'settings-nav-item--active' : ''}`} onClick={() => setActiveSection(s.id)}>
                            <span className="settings-nav-icon">{s.icon}</span>
                            <span>{s.label}</span>
                            <ChevronRight size={14} className="settings-nav-arrow" />
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="settings-content">
                    {activeSection === 'profile' && (
                        <>
                            {/* Profile Photo */}
                            <div className="card settings-card">
                                <h3 className="settings-section-title">Profile Photo</h3>
                                <div className="photo-upload-area">
                                    <div className="photo-upload-preview" onClick={() => fileRef.current?.click()}>
                                        <img src={userPhoto} alt="Profile" className="photo-preview-img" />
                                        <div className="photo-upload-overlay">
                                            <Camera size={20} color="white" />
                                            <span>Change Photo</span>
                                        </div>
                                    </div>
                                    <input ref={fileRef} type="file" accept="image/*" hidden onChange={handlePhotoChange} />
                                    <div className="photo-upload-info">
                                        <p className="photo-upload-title">Upload a new photo</p>
                                        <p className="photo-upload-hint">JPG, PNG or GIF. Max size 5MB.</p>
                                        <div className="photo-upload-btns">
                                            <button className="btn-outline" onClick={() => fileRef.current?.click()}>Choose File</button>
                                            <button className="btn-outline btn-outline--danger" onClick={() => setUserPhoto('https://api.dicebear.com/9.x/avataaars/svg?seed=mariana&backgroundColor=b6e3f4')}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Info */}
                            <div className="card settings-card">
                                <h3 className="settings-section-title">Personal Information</h3>
                                <div className="settings-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Full Name</label>
                                            <input className="form-input" value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email Address</label>
                                            <input className="form-input" type="email" value={profile.email} onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Phone Number</label>
                                            <input className="form-input" value={profile.phone} onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Role</label>
                                            <input className="form-input" value={profile.role} readOnly style={{ opacity: 0.6 }} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Location</label>
                                            <input className="form-input" value={profile.location} onChange={e => setProfile(p => ({ ...p, location: e.target.value }))} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Website</label>
                                            <input className="form-input" value={profile.website} onChange={e => setProfile(p => ({ ...p, website: e.target.value }))} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Bio</label>
                                        <textarea className="form-textarea" rows={3} value={profile.bio} onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeSection === 'notifications' && (
                        <div className="card settings-card">
                            <h3 className="settings-section-title">Notification Preferences</h3>
                            <p className="settings-section-sub">Choose which notifications you want to receive</p>
                            <div className="notif-settings">
                                {[
                                    { key: 'newOrders', label: 'New Orders', sub: 'When a customer places a new order' },
                                    { key: 'orderShipped', label: 'Order Shipped', sub: 'When an order is marked as shipped' },
                                    { key: 'orderDelivered', label: 'Order Delivered', sub: 'When an order is confirmed delivered' },
                                    { key: 'newCustomer', label: 'New Customer', sub: 'When a new customer registers' },
                                    { key: 'lowStock', label: 'Low Stock Alert', sub: 'When product stock falls below 10 units' },
                                    { key: 'paymentFailed', label: 'Payment Failed', sub: 'When a payment attempt is declined' },
                                    { key: 'weeklyReport', label: 'Weekly Report', sub: 'Summary of your store performance' },
                                    { key: 'promotions', label: 'Platform Promotions', sub: 'News and offers from Vinnycampos' },
                                ].map(n => (
                                    <div key={n.key} className="notif-setting-row">
                                        <div>
                                            <p className="notif-setting-label">{n.label}</p>
                                            <p className="notif-setting-sub">{n.sub}</p>
                                        </div>
                                        <Toggle checked={notifs[n.key as keyof typeof notifs]} onChange={() => toggleNotif(n.key as keyof typeof notifs)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'security' && (
                        <>
                            <div className="card settings-card">
                                <h3 className="settings-section-title">Change Password</h3>
                                <div className="settings-form">
                                    <div className="form-group">
                                        <label className="form-label">Current Password</label>
                                        <div className="password-field">
                                            <input className="form-input" type={showPass ? 'text' : 'password'} placeholder="Enter current password" />
                                            <button className="pass-toggle" onClick={() => setShowPass(!showPass)}>{showPass ? <EyeOff size={16} /> : <Eye size={16} />}</button>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">New Password</label>
                                            <input className="form-input" type="password" placeholder="Min. 8 characters" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Confirm New Password</label>
                                            <input className="form-input" type="password" placeholder="Repeat new password" />
                                        </div>
                                    </div>
                                    <button className="btn-primary" style={{ width: 'fit-content' }}>Update Password</button>
                                </div>
                            </div>
                            <div className="card settings-card">
                                <h3 className="settings-section-title">Two-Factor Authentication</h3>
                                <div className="twofa-row">
                                    <div>
                                        <p className="notif-setting-label">Authenticator App</p>
                                        <p className="notif-setting-sub">Use Google Authenticator or similar app</p>
                                    </div>
                                    <span className="twofa-status">Not enabled</span>
                                    <button className="btn-outline">Enable 2FA</button>
                                </div>
                            </div>
                        </>
                    )}

                    {activeSection === 'appearance' && (
                        <div className="card settings-card">
                            <h3 className="settings-section-title">Appearance</h3>
                            <p className="settings-section-sub">Customize how the dashboard looks and feels</p>
                            <div className="appearance-options">
                                {[{ id: 'light', label: 'Light', selected: true }, { id: 'dark', label: 'Dark', selected: false }, { id: 'system', label: 'System', selected: false }].map(t => (
                                    <div key={t.id} className={`theme-option ${t.selected ? 'theme-option--selected' : ''}`}>
                                        <div className={`theme-preview theme-preview--${t.id}`}>
                                            <div className="theme-preview-sidebar" />
                                            <div className="theme-preview-main"><div className="theme-preview-card" /><div className="theme-preview-card" /></div>
                                        </div>
                                        <p className="theme-label">{t.label}</p>
                                        {t.selected && <span className="theme-active">Active</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'billing' && (
                        <div className="card settings-card">
                            <h3 className="settings-section-title">Billing & Plans</h3>
                            <div className="plan-card">
                                <div className="plan-badge">PRO PLAN</div>
                                <p className="plan-price">$79<span>/month</span></p>
                                <p className="plan-renews">Renews on February 27, 2026</p>
                                <ul className="plan-features">
                                    {['Unlimited products', 'Advanced analytics', 'Priority support', 'Custom integrations', 'Team collaboration (up to 10 agents)'].map(f => (
                                        <li key={f}>✓ {f}</li>
                                    ))}
                                </ul>
                                <div className="plan-actions">
                                    <button className="btn-outline">Change Plan</button>
                                    <button className="btn-primary">Manage Billing</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
