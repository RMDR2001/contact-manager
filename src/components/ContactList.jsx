/* eslint-disable react/prop-types */
import './ContactList.css'

export default function ContactList({ contacts, onContactClick, activeContactId }) {
  return (
    <div className="contacts-list">
      <h2>Lista de Contactos ({contacts.length})</h2>
      <div className="contacts-container">
        {contacts.map(contact => (
          <div 
            key={contact.id}
            className={`contact-wrapper ${contact.id === activeContactId ? 'active' : ''}`}
            onClick={() => onContactClick(contact)}
          >
            <div className="contact-content">
              <h3>{contact.nombre}</h3>
              <p className="contact-phone">📞 {contact.telefono}</p>
              <p className="contact-email">✉️ {contact.email}</p>
              <p className="contact-type">
                {contact.type === 'familia' ? '👨‍👩‍👧‍👦' : contact.type === 'trabajo' ? '💼' : '🎮'} 
                {contact.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}