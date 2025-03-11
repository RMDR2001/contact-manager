/* eslint-disable react/prop-types */
import ContactItem from './ContactItem'
import './ContactList.css'

export default function ContactList({ contacts, onContactClick, activeContactId }) {
  return (
    <div className="contacts-list">
      <h2>Lista de Contactos ({contacts.length})</h2>
      <div className="contacts-container">
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            isActive={contact.id === activeContactId}
            onClick={() => onContactClick(contact)}
          />
        ))}
      </div>
    </div>
  );
}