import BaseModal from '../BaseModal/BaseModal';
import { useApp } from '../../context/AppContext';
import { Globe, DollarSign, BarChart2 } from 'lucide-react';

export default function ConnectAccountModal() {
    const { showConnectModal, setShowConnectModal } = useApp();

    return (
        <BaseModal
            isOpen={showConnectModal}
            onClose={() => setShowConnectModal(false)}
            title="Connect New Account"
        >
            <div className="connect-options">
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                    Choose a platform to synchronize your store data and analytics.
                </p>
                <div className="connect-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                        { name: 'Shopify', icon: <Globe />, color: '#95bf47' },
                        { name: 'Stripe', icon: <DollarSign />, color: '#635bff' },
                        { name: 'Analytics', icon: <BarChart2 />, color: '#f9ab00' },
                        { name: 'WooCommerce', icon: <Globe />, color: '#96588a' },
                    ].map(p => (
                        <button key={p.name} className="connect-card" style={{
                            padding: '20px',
                            borderRadius: '16px',
                            border: '1px solid var(--color-border)',
                            background: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '12px',
                            transition: 'var(--transition)'
                        }}>
                            <div style={{ color: p.color }}>{p.icon}</div>
                            <span style={{ fontWeight: '600', fontSize: '13px' }}>{p.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </BaseModal>
    );
}
