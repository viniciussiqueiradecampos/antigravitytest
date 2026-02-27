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
    editingProduct: unknown;
    setEditingProduct: (p: unknown) => void;
    userPhoto: string;
    setUserPhoto: (url: string) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (v: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
    const [currentPage, setCurrentPage] = useState<Page>('dashboard');
    const [openPanel, setOpenPanel] = useState<Panel>('none');
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState<unknown>(null);
    const [userPhoto, setUserPhoto] = useState('https://api.dicebear.com/9.x/avataaars/svg?seed=mariana&backgroundColor=b6e3f4');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function closeAll() {
        setOpenPanel('none');
        setShowUserMenu(false);
        setMobileMenuOpen(false);
    }

    function navigate(p: Page) {
        setCurrentPage(p);
        closeAll();
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
