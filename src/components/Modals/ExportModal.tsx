import BaseModal from '../BaseModal/BaseModal';
import { useApp } from '../../context/AppContext';
import { FileText, Table } from 'lucide-react';

export default function ExportModal() {
    const {
        showExportOrdersModal, setShowExportOrdersModal,
        showExportPDFModal, setShowExportPDFModal
    } = useApp();

    const isOrders = showExportOrdersModal;
    const isPDF = showExportPDFModal;
    const isOpen = isOrders || isPDF;

    const handleClose = () => {
        setShowExportOrdersModal(false);
        setShowExportPDFModal(false);
    };

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={handleClose}
            title={isOrders ? "Export Orders Data" : "Export Analytics PDF"}
            footer={
                <>
                    <button className="btn-secondary" onClick={handleClose}>Cancel</button>
                    <button className="btn-primary">Download {isOrders ? 'CSV' : 'PDF'}</button>
                </>
            }
        >
            <div className="export-options" style={{ textAlign: 'center' }}>
                <div style={{
                    fontSize: '48px',
                    color: isOrders ? '#4f46e5' : '#ef4444',
                    marginBottom: '20px',
                    animation: 'bounceIn 0.5s ease'
                }}>
                    {isOrders ? <Table size={48} /> : <FileText size={48} />}
                </div>
                <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: '600', marginBottom: '8px' }}>
                    Your {isOrders ? 'orders report' : 'analytics summary'} is ready.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                    Click download to save the {isOrders ? 'table data' : 'document'} to your device.
                </p>
                <div style={{
                    background: 'var(--color-bg)',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border)'
                }}>
                    <strong>File Name:</strong> {isOrders ? 'orders_export_2024.csv' : 'monthly_report_v1.pdf'}
                    <br />
                    <strong>File Size:</strong> {isOrders ? '1.2 MB' : '480 KB'}
                </div>
            </div>
        </BaseModal>
    );
}
