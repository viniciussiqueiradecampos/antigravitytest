import { Home, BarChart2, MousePointer2, LifeBuoy, User, Users, FolderOpen, ShoppingBag, BarChart, Settings, LogOut, Plus } from 'lucide-react';
import { useApp, type Page } from '../../context/AppContext';
import './Sidebar.css';

const iconMap: Record<string, React.ReactNode> = {
    home: <Home size={18} />, 'bar-chart': <BarChart2 size={18} />, cursor: <MousePointer2 size={18} />,
    ticket: <LifeBuoy size={18} />, user: <User size={18} />, users: <Users size={18} />,
    folder: <FolderOpen size={18} />, orders: <ShoppingBag size={18} />,
    'chart-square': <BarChart size={18} />, settings: <Settings size={18} />, logout: <LogOut size={18} />,
};

interface NavItemProps {
    label: string; icon: string; active?: boolean; badge?: string; badgeColor?: string; onClick?: () => void;
}

function NavItem({ label, icon, active, badge, badgeColor, onClick }: NavItemProps) {
    return (
        <div className={`nav-item ${active ? 'nav-item--active' : ''}`} onClick={onClick}>
            <span className="nav-item__icon">{iconMap[icon]}</span>
            <span className="nav-item__label">{label}</span>
            {badge && <span className={`nav-badge nav-badge--${badgeColor}`}>{badge}</span>}
        </div>
    );
}

export default function Sidebar() {
    const { currentPage, navigate, setShowLogoutModal } = useApp();
    const navTo = (p: Page) => () => navigate(p);

    return (
        <aside className="sidebar">
            <div className="sidebar__cta">
                <button className="btn-connect">
                    <Plus size={18} strokeWidth={2.5} /><span>Connect New Account</span>
                </button>
            </div>

            <nav className="sidebar__nav">
                <NavItem label="Dashboard" icon="home" active={currentPage === 'dashboard'} onClick={navTo('dashboard')} />

                <p className="nav-section">Analytics</p>
                <NavItem label="Performance" icon="bar-chart" active={currentPage === 'performance'} onClick={navTo('performance')} />
                <NavItem label="Hotjar" icon="cursor" badge="NEW" badgeColor="accent" active={currentPage === 'hotjar'} onClick={navTo('hotjar')} />

                <p className="nav-section">Support</p>
                <NavItem label="Tickets" icon="ticket" badge="15" badgeColor="gray" active={currentPage === 'tickets'} onClick={navTo('tickets')} />
                <NavItem label="Agents" icon="user" active={currentPage === 'agents'} onClick={navTo('agents')} />
                <NavItem label="Customers" icon="users" active={currentPage === 'customers'} onClick={navTo('customers')} />

                <p className="nav-section">Shop</p>
                <NavItem label="Products" icon="folder" active={currentPage === 'products'} onClick={navTo('products')} />
                <NavItem label="Orders" icon="orders" active={currentPage === 'orders'} onClick={navTo('orders')} />
                <NavItem label="Reports" icon="chart-square" active={currentPage === 'reports'} onClick={navTo('reports')} />
            </nav>

            <div className="sidebar__footer">
                <NavItem label="Settings" icon="settings" active={currentPage === 'settings'} onClick={navTo('settings')} />
                <NavItem label="Logout" icon="logout" onClick={() => setShowLogoutModal(true)} />
            </div>
        </aside>
    );
}
