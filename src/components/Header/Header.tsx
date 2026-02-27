import { Search, Bell, Mail } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './Header.css';

export default function Header() {
    const { togglePanel, openPanel, showUserMenu, setShowUserMenu, userPhoto } = useApp();

    return (
        <header className="header">
            <div className="header__logo">
                <div className="logo-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#4f46e5" strokeWidth="2.5" />
                        <circle cx="12" cy="12" r="4" fill="#4f46e5" />
                    </svg>
                </div>
                <span className="logo-text">Vinnycampos<span>.eu</span></span>
            </div>

            <div className="header__search">
                <Search size={16} color="var(--color-text-placeholder)" />
                <input type="text" placeholder="Type to search" className="search-input" />
            </div>

            <div className="header__actions">
                <div className={`action-icon-wrap ${openPanel === 'messages' ? 'action-icon-wrap--active' : ''}`}
                    onClick={() => togglePanel('messages')} title="Messages">
                    <Mail size={20} color="var(--color-text-secondary)" />
                    <span className="action-badge">2</span>
                </div>

                <div className={`action-icon-wrap ${openPanel === 'notifications' ? 'action-icon-wrap--active' : ''}`}
                    onClick={() => togglePanel('notifications')} title="Notifications">
                    <Bell size={20} color="var(--color-text-secondary)" />
                </div>

                <div className={`avatar ${showUserMenu ? 'avatar--active' : ''}`}
                    onClick={() => setShowUserMenu(!showUserMenu)} title="Profile">
                    <img src={userPhoto} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </header>
    );
}
