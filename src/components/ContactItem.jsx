/* eslint-disable react/prop-types */
import './ContactItem.css'

export default function ContactItem({ contact, isActive, onClick, isGridView }) {
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
      className={`contact-item ${isActive ? 'active' : ''} ${isGridView ? 'grid-item' : 'list-item'}`}
      onClick={onClick}
    >
      <div className="contact-main">
        <h3>{contact.nombre}</h3>
        <div className="contact-details">
          <p><span>📞</span> {contact.telefono}</p>
          <p><span>✉️</span> {contact.email}</p>
        </div>
      </div>
      <div className="contact-type">
        <span className="type-badge">
          {getTypeIcon(contact.type)} {contact.type}
        </span>
      </div>
    </div>
  );
}