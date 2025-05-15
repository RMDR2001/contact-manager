import { useState } from 'react';

const ContactList = ({ contacts, onContactSelect, selectedContact }) => {
  const [viewType, setViewType] = useState('list'); // 'list' o 'cards'

  const toggleView = () => {
    setViewType(viewType === 'list' ? 'cards' : 'list');
  };

  return (
    <div className="contact-list">
      <div style={styles.header}>
        <h2>Mis Contactos</h2>
        <button 
          onClick={toggleView} 
          style={styles.toggleButton}
        >
          {viewType === 'list' ? '📱 Ver Cards' : '📝 Ver Lista'}
        </button>
      </div>

      {viewType === 'list' ? (
        <ul style={styles.list}>
          {contacts.map(contact => (
            <li 
              key={contact.id} 
              style={{
                ...styles.listItem,
                backgroundColor: selectedContact.id === contact.id ? '#e8f5e9' : 'transparent',
                cursor: 'pointer'
              }}
              onClick={() => onContactSelect(contact)}
            >
              <div style={styles.contactInfo}>
                <span style={styles.name}>{contact.name}</span>
                <span style={styles.phone}>{contact.phone}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div style={styles.cardsGrid}>
          {contacts.map(contact => (
            <div 
              key={contact.id} 
              style={{
                ...styles.card,
                border: selectedContact.id === contact.id ? '2px solid #4CAF50' : 'none'
              }}
              onClick={() => onContactSelect(contact)}
            >
              <div style={styles.cardContent}>
                <h3 style={styles.cardName}>{contact.name}</h3>
                <p style={styles.cardPhone}>{contact.phone}</p>
              </div>
            </div>
          ))}
        </div>
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
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    margin: '5px 0',
    color: '#333'
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold',
    color: '#333'
  },
  phone: {
    color: '#666'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px 0'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  },
  cardContent: {
    padding: '15px'
  },
  cardName: {
    margin: '0 0 10px 0',
    color: '#333',
    fontSize: '1.1rem'
  },
  cardPhone: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem'
  }
};

export default ContactList;