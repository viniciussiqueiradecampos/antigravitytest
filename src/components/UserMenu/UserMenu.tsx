import { User, Settings, HelpCircle, CreditCard, LogOut, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './UserMenu.css';

interface Props { isOpen: boolean; }

export default function UserMenu({ isOpen }: Props) {
    const { closeAll, navigate, setShowLogoutModal, userPhoto } = useApp();

    const menuItems = [
        { icon: <User size={15} />, label: 'View Profile', sub: 'Manage your details', action: () => { navigate('settings'); } },
        { icon: <Settings size={15} />, label: 'Account Settings', sub: 'Preferences & security', action: () => { navigate('settings'); } },
        { icon: <CreditCard size={15} />, label: 'Billing & Plans', sub: 'Current plan: Pro', action: () => { navigate('settings'); } },
        { icon: <HelpCircle size={15} />, label: 'Help & Support', sub: 'Docs & contact', action: closeAll },
    ];

    if (!isOpen) return null;

    return (
        <>
            <div className="user-menu-backdrop" onClick={closeAll} />
            <div className="user-menu">
                <div className="user-menu__profile">
                    <div className="user-menu__avatar">
                        <img src={userPhoto} alt="User Avatar" />
                    </div>
                    <div>
                        <p className="user-menu__name">Mariana Campos</p>
                        <p className="user-menu__email">mariana@vinnycampos.eu</p>
                    </div>
                    <div className="user-menu__plan">Pro</div>
                </div>

                <div className="user-menu__divider" />

                {menuItems.map((item, i) => (
                    <button key={i} className="user-menu__item" onClick={() => { item.action(); closeAll(); }}>
                        <span className="user-menu__item-icon">{item.icon}</span>
                        <div className="user-menu__item-text">
                            <span className="user-menu__item-label">{item.label}</span>
                            <span className="user-menu__item-sub">{item.sub}</span>
                        </div>
                        <ChevronRight size={14} className="user-menu__item-arrow" />
                    </button>
                ))}

                <div className="user-menu__divider" />

                <button className="user-menu__item user-menu__item--logout" onClick={() => { closeAll(); setShowLogoutModal(true); }}>
                    <span className="user-menu__item-icon"><LogOut size={15} /></span>
                    <span className="user-menu__item-label">Sign out</span>
                </button>
            </div>
        </>
    );
}
