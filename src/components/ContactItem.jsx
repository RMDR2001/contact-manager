/* eslint-disable react/prop-types */
import './ContactItem.css'

export default function ContactItem({ contact }) {
  const getTypeIcon = (type) => {
    switch(type) {
      case 'familia': return '👨‍👩‍👧‍👦';
      case 'trabajo': return '💼';
      case 'social': return '🎮';
      default: return '👤';
    }
  };

  return (
    <div className="contact-item">
      <div className="contact-header">
        <h3>{contact.nombre}</h3>
        <span className="type-badge">
          {getTypeIcon(contact.type)} {contact.type}
        </span>
      </div>
      <div className="contact-details">
        <p><span className="icon">📞</span> {contact.telefono}</p>
        <p><span className="icon">✉️</span> {contact.email}</p>
      </div>
    </div>
  );
}