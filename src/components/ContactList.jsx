import { useState } from 'react';
import ContactItem from './ContactItem';
import ContactGrid from './ContactGrid';

const ContactList = ({ contacts, onContactSelect, selectedContact }) => {
  const [viewType, setViewType] = useState('list');

  const toggleView = () => {
    setViewType(viewType === 'list' ? 'grid' : 'list');
  };

  return (
    <div className="contact-list">
      <div style={styles.header}>
        <h2>Mis Contactos</h2>
        <button onClick={toggleView} style={styles.toggleButton}>
          {viewType === 'list' ? '📱 Ver Cards' : '📝 Ver Lista'}
        </button>
      </div>

      {viewType === 'list' ? (
        <ul style={styles.list}>
          {contacts.map(contact => (
            <ContactItem 
              key={contact.id}
              contact={contact}
              isSelected={selectedContact?.id === contact.id}
              onClick={() => onContactSelect(contact)}
            />
          ))}
        </ul>
      ) : (
        <ContactGrid
          contacts={contacts}
          selectedContact={selectedContact}
          onContactSelect={onContactSelect}
        />
      )}
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  toggleButton: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0'
  }
};

export default ContactList;