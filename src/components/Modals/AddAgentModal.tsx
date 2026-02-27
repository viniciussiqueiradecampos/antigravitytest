import BaseModal from '../BaseModal/BaseModal';
import { useApp } from '../../context/AppContext';

export default function AddAgentModal() {
    const { showAgentModal, setShowAgentModal } = useApp();

    return (
        <BaseModal
            isOpen={showAgentModal}
            onClose={() => setShowAgentModal(false)}
            title="Add New Agent"
            footer={
                <>
                    <button className="btn-secondary" onClick={() => setShowAgentModal(false)}>Cancel</button>
                    <button className="btn-primary">Add Agent</button>
                </>
            }
        >
            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="e.g. John Doe" />
            </div>
            <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="john@example.com" />
            </div>
            <div className="form-group">
                <label className="form-label">Role</label>
                <select className="form-select">
                    <option>Support Specialist</option>
                    <option>Team Lead</option>
                    <option>Account Manager</option>
                </select>
            </div>
        </BaseModal>
    );
}
