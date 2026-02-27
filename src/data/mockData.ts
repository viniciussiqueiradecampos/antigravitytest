// ─── Dashboard ───────────────────────────────────────────────────────────────
export const salesData = [
    { month: 'Feb', value: 28000 }, { month: 'Mar', value: 32000 },
    { month: 'Apr', value: 27000 }, { month: 'May', value: 34000 },
    { month: 'Jun', value: 45591 }, { month: 'Jul', value: 38000 },
    { month: 'Aug', value: 42000 }, { month: 'Sep', value: 36000 },
    { month: 'Oct', value: 44000 }, { month: 'Nov', value: 39000 },
    { month: 'Dec', value: 48000 }, { month: 'Jan', value: 52000 },
];

export const trafficSources = [
    { name: 'Direct', value: 143382, percentage: 81 },
    { name: 'Referral', value: 87974, percentage: 65 },
    { name: 'Social Media', value: 45211, percentage: 33 },
    { name: 'Twitter', value: 21893, percentage: 13 },
];

export const transactions = [
    { id: 1, status: 'completed', method: 'Visa card  **** 4831', type: 'Card payment', amount: '$182.94', date: 'Jan 17, 2022', destination: 'Amazon' },
    { id: 2, status: 'completed', method: 'Mastercard  **** 6442', type: 'Card payment', amount: '$99.00', date: 'Jan 17, 2022', destination: 'Facebook' },
    { id: 3, status: 'pending', method: 'Account  ****882', type: 'Bank payment', amount: '$249.94', date: 'Jan 17, 2022', destination: 'Netflix' },
    { id: 4, status: 'canceled', method: 'Amex card  **** 5666', type: 'Card payment', amount: '$199.24', date: 'Jan 17, 2022', destination: 'Amazon Prime' },
];

export const recentCustomers = [
    { id: 1, name: 'Jenny Wilson', email: 'w.lawson@example.com', amount: '$11,234', city: 'Austin', avatar: 'JW', photo: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Devon Lane', email: 'dat.roberts@example.com', amount: '$11,159', city: 'New York', avatar: 'DL', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Jane Cooper', email: 'jgraham@example.com', amount: '$10,483', city: 'Toledo', avatar: 'JC', photo: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, name: 'Dianne Russell', email: 'curtis.d@example.com', amount: '$9,084', city: 'Naperville', avatar: 'DR', photo: 'https://randomuser.me/api/portraits/women/4.jpg' },
];

export const kpiCards = [
    { label: "Today's Sale", value: '$12,426', growth: '+36%', positive: true },
    { label: 'Total Sales', value: '$2,38,485', growth: '+14%', positive: false },
    { label: 'Total Orders', value: '84,382', growth: '+36%', positive: true },
    { label: 'Total Customers', value: '33,493', growth: '+36%', positive: true },
];

// ─── Notifications ────────────────────────────────────────────────────────────
export const notifications = [
    { id: 1, type: 'order', title: 'New order received', message: 'Order #4821 from Jenny Wilson — $182.94', time: '2 min ago', unread: true },
    { id: 2, type: 'message', title: 'New message', message: 'Devon Lane: "Hi, I need help with my order..."', time: '15 min ago', unread: true },
    { id: 3, type: 'alert', title: 'Payment failed', message: 'Transaction #882 for $249.94 was declined', time: '1 hour ago', unread: true },
    { id: 4, type: 'customer', title: 'New customer registered', message: 'Jane Cooper just created an account', time: '3 hours ago', unread: false },
    { id: 5, type: 'report', title: 'Monthly report ready', message: 'Your January 2022 report is now available', time: '1 day ago', unread: false },
    { id: 6, type: 'order', title: 'Order shipped', message: 'Order #4819 has been dispatched via FedEx', time: '2 days ago', unread: false },
];

// ─── Messages ────────────────────────────────────────────────────────────────
export const conversations = [
    {
        id: 1, name: 'Jenny Wilson', email: 'w.lawson@example.com', avatar: 'JW', photo: 'https://randomuser.me/api/portraits/women/1.jpg', lastMessage: 'Hi! I need help with my recent order...', time: '2 min', unread: 3, online: true,
        messages: [
            { id: 1, from: 'them', text: 'Hi! I need help with my recent order', time: '10:42 AM' },
            { id: 2, from: 'them', text: 'Order #4821 — the item arrived damaged', time: '10:43 AM' },
            { id: 3, from: 'me', text: 'Hi Jenny! I\'m sorry to hear that. Let me look into this right away.', time: '10:45 AM' },
            { id: 4, from: 'them', text: 'Thank you! I really appreciate the quick response', time: '10:46 AM' },
        ]
    },
    {
        id: 2, name: 'Devon Lane', email: 'dat.roberts@example.com', avatar: 'DL', photo: 'https://randomuser.me/api/portraits/men/2.jpg', lastMessage: 'Payment was processed successfully!', time: '1h', unread: 1, online: true,
        messages: [
            { id: 1, from: 'them', text: 'Hey, just wanted to confirm my payment went through', time: '9:30 AM' },
            { id: 2, from: 'me', text: 'Yes! Payment was processed successfully.', time: '9:35 AM' },
            { id: 3, from: 'them', text: 'Payment was processed successfully!', time: '9:36 AM' },
        ]
    },
    {
        id: 3, name: 'Jane Cooper', email: 'jgraham@example.com', avatar: 'JC', photo: 'https://randomuser.me/api/portraits/women/3.jpg', lastMessage: 'Is the product still available?', time: '3h', unread: 0, online: false,
        messages: [
            { id: 1, from: 'them', text: 'Is the Pro plan product still available?', time: 'Yesterday' },
            { id: 2, from: 'me', text: 'Yes, it\'s available! Would you like more details?', time: 'Yesterday' },
        ]
    },
    {
        id: 4, name: 'Dianne Russell', email: 'curtis.d@example.com', avatar: 'DR', photo: 'https://randomuser.me/api/portraits/women/4.jpg', lastMessage: 'Thanks for the quick support!', time: '1d', unread: 0, online: false,
        messages: [
            { id: 1, from: 'them', text: 'Thanks for the quick support!', time: '2 days ago' },
            { id: 2, from: 'me', text: 'Happy to help! Feel free to reach out anytime.', time: '2 days ago' },
        ]
    },
];

// ─── Performance ─────────────────────────────────────────────────────────────
export const performanceKPIs = [
    { label: 'Total Sessions', value: '284,391', growth: '+12.4%', positive: true, sub: 'vs last period' },
    { label: 'Pageviews', value: '891,240', growth: '+8.2%', positive: true, sub: 'vs last period' },
    { label: 'Bounce Rate', value: '42.3%', growth: '-3.1%', positive: true, sub: 'lower is better' },
    { label: 'Conversion Rate', value: '3.8%', growth: '+0.6%', positive: true, sub: 'goal completions' },
];

export const sessionData = [
    { date: 'Jan 1', sessions: 8200, pageviews: 24100 },
    { date: 'Jan 5', sessions: 10400, pageviews: 31200 },
    { date: 'Jan 10', sessions: 9600, pageviews: 28400 },
    { date: 'Jan 15', sessions: 12800, pageviews: 38400 },
    { date: 'Jan 20', sessions: 11200, pageviews: 33600 },
    { date: 'Jan 25', sessions: 14600, pageviews: 43800 },
    { date: 'Jan 30', sessions: 13200, pageviews: 39600 },
    { date: 'Feb 4', sessions: 16800, pageviews: 50400 },
    { date: 'Feb 8', sessions: 15400, pageviews: 46200 },
    { date: 'Feb 12', sessions: 18200, pageviews: 54600 },
];

export const topCountries = [
    { flag: '🇺🇸', name: 'United States', sessions: 94280, percentage: 72 },
    { flag: '🇬🇧', name: 'United Kingdom', sessions: 38420, percentage: 48 },
    { flag: '🇧🇷', name: 'Brazil', sessions: 22140, percentage: 31 },
    { flag: '🇩🇪', name: 'Germany', sessions: 18900, percentage: 24 },
    { flag: '🇫🇷', name: 'France', sessions: 14820, percentage: 18 },
];

export const topPages = [
    { page: '/home', title: 'Home Page', sessions: 52400, bounce: '38%', duration: '2m 14s' },
    { page: '/products', title: 'Products', sessions: 38200, bounce: '42%', duration: '3m 08s' },
    { page: '/checkout', title: 'Checkout', sessions: 24100, bounce: '12%', duration: '5m 22s' },
    { page: '/blog', title: 'Blog', sessions: 18900, bounce: '61%', duration: '1m 48s' },
    { page: '/about', title: 'About Us', sessions: 8200, bounce: '54%', duration: '1m 12s' },
];

export const deviceData = [
    { device: 'Desktop', value: 58, color: '#4f46e5' },
    { device: 'Mobile', value: 34, color: '#818cf8' },
    { device: 'Tablet', value: 8, color: '#c7d2fe' },
];

// ─── Hotjar ───────────────────────────────────────────────────────────────────
export const recordings = [
    { id: 'R-8821', user: 'Anonymous #4821', country: '🇺🇸 US', duration: '4m 32s', pages: 8, rage: 2, date: 'Jan 20, 2022', device: 'Desktop', status: 'watched' },
    { id: 'R-8820', user: 'Jenny Wilson', country: '🇬🇧 UK', duration: '2m 18s', pages: 4, rage: 0, date: 'Jan 19, 2022', device: 'Mobile', status: 'new' },
    { id: 'R-8819', user: 'Anonymous #4819', country: '🇧🇷 BR', duration: '7m 04s', pages: 14, rage: 5, date: 'Jan 19, 2022', device: 'Desktop', status: 'new' },
    { id: 'R-8818', user: 'Devon Lane', country: '🇩🇪 DE', duration: '1m 42s', pages: 3, rage: 1, date: 'Jan 18, 2022', device: 'Mobile', status: 'watched' },
    { id: 'R-8817', user: 'Anonymous #4817', country: '🇫🇷 FR', duration: '11m 28s', pages: 22, rage: 0, date: 'Jan 18, 2022', device: 'Tablet', status: 'new' },
];

export const funnelSteps = [
    { step: 'Visited Homepage', count: 10000, rate: 100 },
    { step: 'Viewed Product', count: 6200, rate: 62 },
    { step: 'Added to Cart', count: 2800, rate: 28 },
    { step: 'Started Checkout', count: 1400, rate: 14 },
    { step: 'Completed Purchase', count: 840, rate: 8.4 },
];

// ─── Tickets ──────────────────────────────────────────────────────────────────
export const tickets = [
    { id: '#T-1042', title: 'Cannot access premium features after upgrade', customer: 'Jenny Wilson', priority: 'high', status: 'open', assignee: 'Alex Turner', date: 'Jan 20, 2022', category: 'Account', avatar: 'JW', photo: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '#T-1041', title: 'Payment declined on checkout — recurring issue', customer: 'Devon Lane', priority: 'critical', status: 'in-progress', assignee: 'Sarah Chen', date: 'Jan 19, 2022', category: 'Billing', avatar: 'DL', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: '#T-1040', title: 'Export to CSV not working on orders page', customer: 'Jane Cooper', priority: 'medium', status: 'in-progress', assignee: 'Mike Ross', date: 'Jan 18, 2022', category: 'Bug', avatar: 'JC', photo: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: '#T-1039', title: 'Email notifications stopped arriving', customer: 'Dianne Russell', priority: 'high', status: 'open', assignee: 'Alex Turner', date: 'Jan 18, 2022', category: 'Notifications', avatar: 'DR', photo: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: '#T-1038', title: 'Wrong price displayed on product page', customer: 'Robert Fox', priority: 'critical', status: 'resolved', assignee: 'Sarah Chen', date: 'Jan 17, 2022', category: 'Bug', avatar: 'RF', photo: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: '#T-1037', title: 'Request for bulk order discount', customer: 'Cody Fisher', priority: 'low', status: 'open', assignee: '', date: 'Jan 17, 2022', category: 'Sales', avatar: 'CF', photo: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { id: '#T-1036', title: 'Account locked after too many login attempts', customer: 'Esther Howard', priority: 'medium', status: 'resolved', assignee: 'Mike Ross', date: 'Jan 16, 2022', category: 'Account', avatar: 'EH', photo: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: '#T-1035', title: 'Integration with Shopify not syncing', customer: 'Brooklyn Simmons', priority: 'high', status: 'in-progress', assignee: 'Alex Turner', date: 'Jan 15, 2022', category: 'Integration', avatar: 'BS', photo: 'https://randomuser.me/api/portraits/women/8.jpg' },
];

// ─── Agents ───────────────────────────────────────────────────────────────────
export const agents = [
    { id: 1, name: 'Alex Turner', role: 'Support Lead', email: 'a.turner@vinnycampos.eu', avatar: 'AT', photo: 'https://randomuser.me/api/portraits/men/32.jpg', status: 'online', department: 'Support', ticketsOpen: 12, ticketsResolved: 234, rating: 4.9, responseTime: '2m', joined: 'Mar 2020' },
    { id: 2, name: 'Sarah Chen', role: 'Senior Agent', email: 's.chen@vinnycampos.eu', avatar: 'SC', photo: 'https://randomuser.me/api/portraits/women/44.jpg', status: 'online', department: 'Billing', ticketsOpen: 8, ticketsResolved: 198, rating: 4.8, responseTime: '3m', joined: 'Jul 2020' },
    { id: 3, name: 'Mike Ross', role: 'Technical Agent', email: 'm.ross@vinnycampos.eu', avatar: 'MR', photo: 'https://randomuser.me/api/portraits/men/56.jpg', status: 'busy', department: 'Technical', ticketsOpen: 15, ticketsResolved: 156, rating: 4.7, responseTime: '5m', joined: 'Nov 2020' },
    { id: 4, name: 'Jessica Park', role: 'Support Agent', email: 'j.park@vinnycampos.eu', avatar: 'JP', photo: 'https://randomuser.me/api/portraits/women/68.jpg', status: 'offline', department: 'Support', ticketsOpen: 0, ticketsResolved: 124, rating: 4.6, responseTime: '4m', joined: 'Jan 2021' },
    { id: 5, name: 'Carlos Vega', role: 'Support Agent', email: 'c.vega@vinnycampos.eu', avatar: 'CV', photo: 'https://randomuser.me/api/portraits/men/75.jpg', status: 'online', department: 'Support', ticketsOpen: 6, ticketsResolved: 89, rating: 4.5, responseTime: '6m', joined: 'Apr 2021' },
    { id: 6, name: 'Priya Nair', role: 'Billing Specialist', email: 'p.nair@vinnycampos.eu', avatar: 'PN', photo: 'https://randomuser.me/api/portraits/women/90.jpg', status: 'busy', department: 'Billing', ticketsOpen: 4, ticketsResolved: 67, rating: 4.8, responseTime: '3m', joined: 'Jun 2021' },
];

// ─── Customers ────────────────────────────────────────────────────────────────
export const customers = [
    { id: 1, name: 'Jenny Wilson', email: 'w.lawson@example.com', location: 'Austin, TX', orders: 12, totalSpent: 11234, status: 'active', joined: 'Jan 12, 2021', avatar: 'JW', photo: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Devon Lane', email: 'dat.roberts@example.com', location: 'New York, NY', orders: 8, totalSpent: 11159, status: 'active', joined: 'Feb 28, 2021', avatar: 'DL', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Jane Cooper', email: 'jgraham@example.com', location: 'Toledo, OH', orders: 5, totalSpent: 10483, status: 'active', joined: 'Mar 15, 2021', avatar: 'JC', photo: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, name: 'Dianne Russell', email: 'curtis.d@example.com', location: 'Naperville, IL', orders: 9, totalSpent: 9084, status: 'active', joined: 'Apr 3, 2021', avatar: 'DR', photo: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Robert Fox', email: 'r.fox@example.com', location: 'Miami, FL', orders: 3, totalSpent: 4820, status: 'inactive', joined: 'May 22, 2021', avatar: 'RF', photo: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Cody Fisher', email: 'c.fisher@example.com', location: 'Dallas, TX', orders: 1, totalSpent: 1200, status: 'active', joined: 'Jun 8, 2021', avatar: 'CF', photo: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { id: 7, name: 'Esther Howard', email: 'e.howard@example.com', location: 'Seattle, WA', orders: 7, totalSpent: 7640, status: 'active', joined: 'Jul 19, 2021', avatar: 'EH', photo: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: 8, name: 'Brooklyn Simmons', email: 'b.simmons@example.com', location: 'Boston, MA', orders: 4, totalSpent: 3980, status: 'inactive', joined: 'Aug 30, 2021', avatar: 'BS', photo: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 9, name: 'Cameron Douglas', email: 'c.douglas@example.com', location: 'Chicago, IL', orders: 6, totalSpent: 6210, status: 'active', joined: 'Sep 14, 2021', avatar: 'CD', photo: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 10, name: 'Leslie Alexander', email: 'l.alex@example.com', location: 'Denver, CO', orders: 2, totalSpent: 2480, status: 'active', joined: 'Oct 5, 2021', avatar: 'LA', photo: 'https://randomuser.me/api/portraits/women/10.jpg' },
];

// ─── Products ─────────────────────────────────────────────────────────────────
export const products = [
    { id: 'P-001', name: 'MacBook Pro 14"', category: 'Electronics', price: 1999.99, stock: 45, status: 'active', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop', rating: 4.8, sales: 128, sku: 'MBP-14-2022' },
    { id: 'P-002', name: 'iPhone 15 Pro', category: 'Electronics', price: 1199.99, stock: 82, status: 'active', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop', rating: 4.9, sales: 342, sku: 'IP15-PRO-BLK' },
    { id: 'P-003', name: 'AirPods Pro 2nd Gen', category: 'Electronics', price: 249.99, stock: 120, status: 'active', image: 'https://images.unsplash.com/photo-1588423771073-b8903febb85b?w=200&h=200&fit=crop', rating: 4.7, sales: 289, sku: 'APP-2G-WHT' },
    { id: 'P-004', name: 'iPad Air 5th Gen', category: 'Electronics', price: 749.99, stock: 34, status: 'active', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop', rating: 4.6, sales: 98, sku: 'IPAD-AIR5-BLU' },
    { id: 'P-005', name: 'Apple Watch Ultra 2', category: 'Electronics', price: 799.99, stock: 0, status: 'out_of_stock', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop', rating: 4.9, sales: 67, sku: 'AW-ULT2-TIT' },
    { id: 'P-006', name: 'Sony WH-1000XM5', category: 'Audio', price: 399.99, stock: 58, status: 'active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop', rating: 4.8, sales: 201, sku: 'SNY-XM5-BLK' },
    { id: 'P-007', name: 'Nike Air Max 2024', category: 'Footwear', price: 189.99, stock: 145, status: 'active', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop', rating: 4.5, sales: 412, sku: 'NK-AM24-WHT' },
    { id: 'P-008', name: 'Leather Tote Bag', category: 'Accessories', price: 299.99, stock: 22, status: 'active', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop', rating: 4.4, sales: 87, sku: 'LTH-TOT-BRN' },
];

// ─── Orders ───────────────────────────────────────────────────────────────────
export const orders = [
    { id: '#ORD-4821', customer: 'Jenny Wilson', photo: 'https://randomuser.me/api/portraits/women/1.jpg', items: 3, total: 182.94, status: 'delivered', date: 'Jan 17, 2022', payment: 'Visa *4831', address: 'Austin, TX 78701', products: ['MacBook Pro 14"', 'AirPods Pro'] },
    { id: '#ORD-4820', customer: 'Devon Lane', photo: 'https://randomuser.me/api/portraits/men/2.jpg', items: 1, total: 99.00, status: 'shipped', date: 'Jan 17, 2022', payment: 'Mastercard *6442', address: 'New York, NY 10001', products: ['Nike Air Max 2024'] },
    { id: '#ORD-4819', customer: 'Jane Cooper', photo: 'https://randomuser.me/api/portraits/women/3.jpg', items: 2, total: 249.94, status: 'processing', date: 'Jan 17, 2022', payment: 'Account *882', address: 'Toledo, OH 43604', products: ['AirPods Pro', 'Leather Tote Bag'] },
    { id: '#ORD-4818', customer: 'Dianne Russell', photo: 'https://randomuser.me/api/portraits/women/4.jpg', items: 1, total: 199.24, status: 'canceled', date: 'Jan 16, 2022', payment: 'Amex *5666', address: 'Naperville, IL 60540', products: ['Sony WH-1000XM5'] },
    { id: '#ORD-4817', customer: 'Robert Fox', photo: 'https://randomuser.me/api/portraits/men/5.jpg', items: 4, total: 2849.96, status: 'delivered', date: 'Jan 15, 2022', payment: 'Visa *9201', address: 'Miami, FL 33101', products: ['iPhone 15 Pro', 'iPad Air', 'Apple Watch Ultra 2'] },
    { id: '#ORD-4816', customer: 'Cody Fisher', photo: 'https://randomuser.me/api/portraits/men/6.jpg', items: 1, total: 189.99, status: 'shipped', date: 'Jan 14, 2022', payment: 'Paypal', address: 'Dallas, TX 75201', products: ['Nike Air Max 2024'] },
    { id: '#ORD-4815', customer: 'Esther Howard', photo: 'https://randomuser.me/api/portraits/women/7.jpg', items: 2, total: 649.98, status: 'delivered', date: 'Jan 13, 2022', payment: 'Visa *3341', address: 'Seattle, WA 98101', products: ['Sony WH-1000XM5', 'Leather Tote Bag'] },
    { id: '#ORD-4814', customer: 'Brooklyn Simmons', photo: 'https://randomuser.me/api/portraits/women/8.jpg', items: 1, total: 1999.99, status: 'delivered', date: 'Jan 12, 2022', payment: 'Mastercard *8812', address: 'Boston, MA 02101', products: ['MacBook Pro 14"'] },
];

// ─── Reports ──────────────────────────────────────────────────────────────────
export const monthlyRevenue = [
    { month: 'Jul', revenue: 42000, expenses: 18000, profit: 24000 },
    { month: 'Aug', revenue: 38000, expenses: 16500, profit: 21500 },
    { month: 'Sep', revenue: 51000, expenses: 21000, profit: 30000 },
    { month: 'Oct', revenue: 47000, expenses: 19500, profit: 27500 },
    { month: 'Nov', revenue: 62000, expenses: 24000, profit: 38000 },
    { month: 'Dec', revenue: 78000, expenses: 28000, profit: 50000 },
    { month: 'Jan', revenue: 54000, expenses: 22000, profit: 32000 },
];

export const revenueByCategory = [
    { category: 'Electronics', revenue: 124840, percentage: 52, color: '#4f46e5' },
    { category: 'Audio', revenue: 58420, percentage: 24, color: '#0ea5e9' },
    { category: 'Footwear', revenue: 38900, percentage: 16, color: '#22c55e' },
    { category: 'Accessories', revenue: 18200, percentage: 8, color: '#f59e0b' },
];

export const topSellingProducts = [
    { name: 'iPhone 15 Pro', category: 'Electronics', units: 342, revenue: 410357, growth: '+28%' },
    { name: 'Nike Air Max 2024', category: 'Footwear', units: 412, revenue: 78284, growth: '+15%' },
    { name: 'AirPods Pro 2nd Gen', category: 'Electronics', units: 289, revenue: 72247, growth: '+22%' },
    { name: 'Sony WH-1000XM5', category: 'Audio', units: 201, revenue: 80398, growth: '+9%' },
    { name: 'MacBook Pro 14"', category: 'Electronics', units: 128, revenue: 255999, growth: '+31%' },
];
