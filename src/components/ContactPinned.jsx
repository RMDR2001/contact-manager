/* eslint-disable react/prop-types */
import './ContactPinned.css'

export default function ContactPinned({ contact, onClearContact }) {
  if (!contact) {
    return (
      <div className="contact-pinned">
        <h2>Contacto Destacado</h2>
        <div className="empty-state">
          <p>📱 No hay contacto seleccionado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-pinned">
      <div className="pinned-header">
        <h2>Contacto Destacado</h2>
        <button 
          className="clear-button"
          onClick={onClearContact}
          title="Limpiar contacto destacado"
        >
          ❌ Limpiar
        </button>
      </div>
      <div className="pinned-card">
        <div className="contact-info">
          <h3>{contact.nombre}</h3>
          <p><span>📞</span> {contact.telefono}</p>
          <p><span>✉️</span> {contact.email}</p>
          <p className="contact-type">
            {contact.type === 'familia' ? '👨‍👩‍👧‍👦' : 
             contact.type === 'trabajo' ? '💼' : '🎮'} 
            {contact.type}
          </p>
        </div>
      </div>
    </div>
  );
}