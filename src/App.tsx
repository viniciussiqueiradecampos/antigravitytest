import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NotificationsPanel from './components/NotificationsPanel/NotificationsPanel';
import MessagesPanel from './components/MessagesPanel/MessagesPanel';
import UserMenu from './components/UserMenu/UserMenu';
import LogoutModal from './components/LogoutModal/LogoutModal';
import ProductModal from './components/ProductModal/ProductModal';
import KpiCards from './components/KpiCards/KpiCards';
import SalesChart from './components/SalesChart/SalesChart';
import TrafficSources from './components/TrafficSources/TrafficSources';
import Transactions from './components/Transactions/Transactions';
import RecentCustomers from './components/RecentCustomers/RecentCustomers';
import PerformancePage from './pages/PerformancePage/PerformancePage';
import HotjarPage from './pages/HotjarPage/HotjarPage';
import TicketsPage from './pages/TicketsPage/TicketsPage';
import AgentsPage from './pages/AgentsPage/AgentsPage';
import CustomersPage from './pages/CustomersPage/CustomersPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import ReportsPage from './pages/ReportsPage/ReportsPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import './App.css';

function Dashboard() {
    return (
        <>
            <div className="welcome-bar">
                <h1 className="welcome-title">
                    Hey Mariana –{' '}
                    <span className="welcome-subtitle">here's what's happening with your store today</span>
                </h1>
            </div>
            <KpiCards />
            <div className="charts-row">
                <div className="charts-row__main"><SalesChart /></div>
                <div className="charts-row__side"><TrafficSources /></div>
            </div>
            <div className="tables-row">
                <div className="tables-row__main"><Transactions /></div>
                <div className="tables-row__side"><RecentCustomers /></div>
            </div>
        </>
    );
}

function AppInner() {
    const { currentPage, openPanel, showUserMenu } = useApp();

    const pageMap: Record<string, React.ReactNode> = {
        dashboard: <Dashboard />,
        performance: <PerformancePage />,
        hotjar: <HotjarPage />,
        tickets: <TicketsPage />,
        agents: <AgentsPage />,
        customers: <CustomersPage />,
        products: <ProductsPage />,
        orders: <OrdersPage />,
        reports: <ReportsPage />,
        settings: <SettingsPage />,
    };

    return (
        <div className="app">
            <Header />
            <Sidebar />
            <main className="main-content">
                {pageMap[currentPage] || <Dashboard />}
            </main>

            {/* Slide-in Panels */}
            <NotificationsPanel isOpen={openPanel === 'notifications'} />
            <MessagesPanel isOpen={openPanel === 'messages'} />

            {/* Dropdowns */}
            <UserMenu isOpen={showUserMenu} />

            {/* Modals */}
            <LogoutModal />
            <ProductModal />
        </div>
    );
}

export default function App() {
    return (
        <AppProvider>
            <AppInner />
        </AppProvider>
    );
}
