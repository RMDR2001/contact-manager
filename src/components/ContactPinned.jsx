/* eslint-disable react/prop-types */
import './ContactPinned.css'

export default function ContactPinned({ contact, onClear }) {
  const getTypeIcon = (type) => {
    switch(type) {
      case 'familia': return '👨‍👩‍👧‍👦';
      case 'trabajo': return '💼';
      case 'social': return '🎮';
      default: return '👤';
    }
  };

  if (!contact) {
    return (
      <div className="contact-pinned">
        <h2>Contacto Destacado</h2>
        <div className="pinned-empty">
          <p>📭 No hay contacto seleccionado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-pinned">
      <div className="pinned-header">
        <h2>Contacto Destacado</h2>
        <button className="clear-button" onClick={onClear}>
          ❌ Limpiar
        </button>
      </div>
      <div className="pinned-card">
        <div className="pinned-avatar">
          {getTypeIcon(contact.type)}
        </div>
        <div className="pinned-info">
          <h3>{contact.nombre}</h3>
          <p className="pinned-type">
            {getTypeIcon(contact.type)} {contact.type}
          </p>
          <p className="pinned-phone">📞 {contact.telefono}</p>
          <p className="pinned-email">✉️ {contact.email}</p>
        </div>
      </div>
    </div>
  );
}