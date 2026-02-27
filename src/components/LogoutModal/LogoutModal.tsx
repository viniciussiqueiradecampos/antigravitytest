import { LogOut, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './LogoutModal.css';

export default function LogoutModal() {
    const { showLogoutModal, setShowLogoutModal } = useApp();
    if (!showLogoutModal) return null;

    return (
        <div className="modal-overlay" onClick={() => setShowLogoutModal(false)}>
            <div className="modal logout-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setShowLogoutModal(false)}><X size={18} /></button>
                <div className="logout-icon">
                    <LogOut size={28} color="#ef4444" />
                </div>
                <h2 className="logout-title">Sign Out?</h2>
                <p className="logout-desc">Are you sure you want to sign out of your Vinnycampos.eu account? You'll need to sign back in to access your dashboard.</p>
                <div className="logout-actions">
                    <button className="btn-outline logout-cancel" onClick={() => setShowLogoutModal(false)}>Cancel</button>
                    <button className="logout-confirm" onClick={() => setShowLogoutModal(false)}>Sign Out</button>
                </div>
            </div>
        </div>
    );
}
