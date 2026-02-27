import BaseModal from '../BaseModal/BaseModal';
import { useApp } from '../../context/AppContext';

export default function NewTicketModal() {
    const { showTicketModal, setShowTicketModal } = useApp();

    return (
        <BaseModal
            isOpen={showTicketModal}
            onClose={() => setShowTicketModal(false)}
            title="Create New Ticket"
            footer={
                <>
                    <button className="btn-secondary" onClick={() => setShowTicketModal(false)}>Cancel</button>
                    <button className="btn-primary">Create Ticket</button>
                </>
            }
        >
            <div className="form-group">
                <label className="form-label">Title / Issue</label>
                <input type="text" className="form-input" placeholder="e.g. Broken checkout link" />
            </div>
            <div className="form-group">
                <label className="form-label">Priority</label>
                <select className="form-select">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
            <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-input" style={{ height: '100px', padding: '12px' }} placeholder="Detail the issue..."></textarea>
            </div>
        </BaseModal>
    );
}
