import { useState } from 'react';
import { X, Send, MessageSquare, SquarePen } from 'lucide-react';
import { conversations } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import './MessagesPanel.css';

const avatarColors = [
    { bg: '#dbeafe', text: '#1e40af' },
    { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#d1fae5', text: '#065f46' },
    { bg: '#fef3c7', text: '#92400e' },
];

interface Props { isOpen: boolean; }

export default function MessagesPanel({ isOpen }: Props) {
    const { closeAll } = useApp();
    const [selectedConvo, setSelectedConvo] = useState<number | null>(null);
    const [newMsg, setNewMsg] = useState('');

    const convo = conversations.find(c => c.id === selectedConvo);
    const totalUnread = conversations.reduce((s, c) => s + c.unread, 0);

    return (
        <>
            {isOpen && <div className="panel-backdrop" onClick={closeAll} />}
            <div className={`msg-panel ${isOpen ? 'msg-panel--open' : ''}`}>
                {/* Header */}
                <div className="msg-panel__header">
                    {selectedConvo && (
                        <button className="msg-back" onClick={() => setSelectedConvo(null)}>
                            ←
                        </button>
                    )}
                    <div className="msg-panel__title">
                        <MessageSquare size={18} />
                        <span>{convo ? convo.name : 'Messages'}</span>
                        {!convo && totalUnread > 0 && <span className="notif-unread-count">{totalUnread}</span>}
                    </div>
                    <div className="notif-panel__actions">
                        {!convo && <button className="notif-close" title="New message"><SquarePen size={16} /></button>}
                        <button className="notif-close" onClick={closeAll}><X size={18} /></button>
                    </div>
                </div>

                {/* Conversation List */}
                {!selectedConvo ? (
                    <div className="msg-list">
                        {conversations.map((c, i) => (
                            <div key={c.id} className="msg-convo-item" onClick={() => setSelectedConvo(c.id)}>
                                <div className="msg-avatar-wrap">
                                    <div className="msg-avatar" style={{ background: avatarColors[i % 4].bg, color: avatarColors[i % 4].text }}>
                                        {c.avatar}
                                    </div>
                                    {c.online && <div className="msg-online-dot" />}
                                </div>
                                <div className="msg-convo-info">
                                    <div className="msg-convo-top">
                                        <p className="msg-convo-name">{c.name}</p>
                                        <span className="msg-convo-time">{c.time}</span>
                                    </div>
                                    <p className="msg-convo-last">{c.lastMessage}</p>
                                </div>
                                {c.unread > 0 && <span className="msg-unread-badge">{c.unread}</span>}
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Chat View */
                    <div className="msg-chat">
                        <div className="msg-chat__messages">
                            {convo?.messages.map(m => (
                                <div key={m.id} className={`msg-bubble-wrap ${m.from === 'me' ? 'msg-bubble-wrap--me' : ''}`}>
                                    <div className={`msg-bubble ${m.from === 'me' ? 'msg-bubble--me' : 'msg-bubble--them'}`}>
                                        {m.text}
                                    </div>
                                    <span className="msg-bubble-time">{m.time}</span>
                                </div>
                            ))}
                        </div>
                        <div className="msg-chat__input">
                            <input
                                type="text"
                                value={newMsg}
                                onChange={e => setNewMsg(e.target.value)}
                                placeholder="Type a message..."
                                className="msg-input"
                                onKeyDown={e => e.key === 'Enter' && setNewMsg('')}
                            />
                            <button className="msg-send" onClick={() => setNewMsg('')}>
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
