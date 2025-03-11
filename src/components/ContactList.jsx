/* eslint-disable react/prop-types */
import ContactItem from './ContactItem'
import './ContactList.css'

export default function ContactList({ contacts, onContactClick, activeContactId, isGridView }) {
  return (
    <div className={`contacts-list ${isGridView ? 'grid-view' : 'list-view'}`}>
      <h2>Lista de Contactos ({contacts.length})</h2>
      <div className={`contacts-container ${isGridView ? 'grid-container' : ''}`}>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            isActive={contact.id === activeContactId}
            onClick={() => onContactClick(contact)}
            isGridView={isGridView}
          />
        ))}
      </div>
    </div>
  );
}