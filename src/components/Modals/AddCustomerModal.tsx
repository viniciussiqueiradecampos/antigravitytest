import BaseModal from '../BaseModal/BaseModal';
import { useApp } from '../../context/AppContext';

export default function AddCustomerModal() {
    const { showCustomerModal, setShowCustomerModal } = useApp();

    return (
        <BaseModal
            isOpen={showCustomerModal}
            onClose={() => setShowCustomerModal(false)}
            title="Add New Customer"
            footer={
                <>
                    <button className="btn-secondary" onClick={() => setShowCustomerModal(false)}>Cancel</button>
                    <button className="btn-primary">Save Customer</button>
                </>
            }
        >
            <div className="form-group">
                <label className="form-label">Customer Name</label>
                <input type="text" className="form-input" placeholder="e.g. Acme Corp" />
            </div>
            <div className="form-group">
                <label className="form-label">Contact Email</label>
                <input type="email" className="form-input" placeholder="billing@acme.com" />
            </div>
            <div className="form-group">
                <label className="form-label">Location</label>
                <input type="text" className="form-input" placeholder="City, Country" />
            </div>
        </BaseModal>
    );
}
