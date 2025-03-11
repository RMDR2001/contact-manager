/* eslint-disable react/prop-types */
import './ContactItem.css'

export default function ContactItem({ contact, isActive, onClick }) {
  const getTypeIcon = (type) => {
    switch(type) {
      case 'familia': return '👨‍👩‍👧‍👦';
      case 'trabajo': return '💼';
      case 'social': return '🎮';
      default: return '👤';
    }
  };

  return (
    <div 
      className={`contact-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="contact-header">
        <h3>{contact.nombre}</h3>
        <span className="type-badge">
          {getTypeIcon(contact.type)} {contact.type}
        </span>
      </div>
      <div className="contact-info">
        <p><span className="icon">📞</span> {contact.telefono}</p>
        <p><span className="icon">✉️</span> {contact.email}</p>
      </div>
    </div>
  );
}