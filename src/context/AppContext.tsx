import { createContext, useContext, useState, type ReactNode } from 'react';

export type Page = 'dashboard' | 'performance' | 'hotjar' | 'tickets' | 'agents' | 'customers' | 'products' | 'orders' | 'reports' | 'settings';
export type Panel = 'none' | 'notifications' | 'messages';

interface AppContextType {
    currentPage: Page;
    navigate: (p: Page) => void;
    openPanel: Panel;
    togglePanel: (p: Panel) => void;
    showUserMenu: boolean;
    setShowUserMenu: (v: boolean) => void;
    closeAll: () => void;
    showLogoutModal: boolean;
    setShowLogoutModal: (v: boolean) => void;
    showProductModal: boolean;
    setShowProductModal: (v: boolean) => void;
    editingProduct: any;
    setEditingProduct: (p: any) => void;
    userPhoto: string;
    setUserPhoto: (url: string) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (v: boolean) => void;
    // New Modals
    showConnectModal: boolean;
    setShowConnectModal: (v: boolean) => void;
    showTicketModal: boolean;
    setShowTicketModal: (v: boolean) => void;
    showAgentModal: boolean;
    setShowAgentModal: (v: boolean) => void;
    showCustomerModal: boolean;
    setShowCustomerModal: (v: boolean) => void;
    showExportOrdersModal: boolean;
    setShowExportOrdersModal: (v: boolean) => void;
    showExportPDFModal: boolean;
    setShowExportPDFModal: (v: boolean) => void;
    // Agent View
    viewingAgent: any;
    setViewingAgent: (a: any) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
    const [currentPage, setCurrentPage] = useState<Page>('dashboard');
    const [openPanel, setOpenPanel] = useState<Panel>('none');
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [userPhoto, setUserPhoto] = useState('https://api.dicebear.com/9.x/avataaars/svg?seed=mariana&backgroundColor=b6e3f4');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // New Modals State
    const [showConnectModal, setShowConnectModal] = useState(false);
    const [showTicketModal, setShowTicketModal] = useState(false);
    const [showAgentModal, setShowAgentModal] = useState(false);
    const [showCustomerModal, setShowCustomerModal] = useState(false);
    const [showExportOrdersModal, setShowExportOrdersModal] = useState(false);
    const [showExportPDFModal, setShowExportPDFModal] = useState(false);

    // Agent Detail View
    const [viewingAgent, setViewingAgent] = useState<any>(null);

    function closeAll() {
        setOpenPanel('none');
        setShowUserMenu(false);
        setMobileMenuOpen(false);
        setShowLogoutModal(false);
        setShowProductModal(false);
        setShowConnectModal(false);
        setShowTicketModal(false);
        setShowAgentModal(false);
        setShowCustomerModal(false);
        setShowExportOrdersModal(false);
        setShowExportPDFModal(false);
    }

    function navigate(p: Page) {
        setCurrentPage(p);
        closeAll();
        setViewingAgent(null);
    }

    function togglePanel(p: Panel) {
        setOpenPanel(prev => prev === p ? 'none' : p);
        setShowUserMenu(false);
    }

    return (
        <AppContext.Provider value={{
            currentPage, navigate, openPanel, togglePanel,
            showUserMenu, setShowUserMenu, closeAll,
            showLogoutModal, setShowLogoutModal,
            showProductModal, setShowProductModal,
            editingProduct, setEditingProduct,
            userPhoto, setUserPhoto,
            mobileMenuOpen, setMobileMenuOpen,
            showConnectModal, setShowConnectModal,
            showTicketModal, setShowTicketModal,
            showAgentModal, setShowAgentModal,
            showCustomerModal, setShowCustomerModal,
            showExportOrdersModal, setShowExportOrdersModal,
            showExportPDFModal, setShowExportPDFModal,
            viewingAgent, setViewingAgent,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useApp must be used within AppProvider');
    return ctx;
}
