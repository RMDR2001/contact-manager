import { useState } from 'react';
import ContactItem from './ContactItem';
import ContactGrid from './ContactGrid';
import SearchBar from './SearchBar';

const ContactList = ({ contacts, onContactSelect, selectedContact }) => {
  const [viewType, setViewType] = useState('list');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const toggleView = () => setViewType(viewType === 'list' ? 'grid' : 'list');

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredContacts(contacts);
      return;
    }

    const filtered = contacts.filter(contact => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        contact.fullname.toLowerCase().includes(searchTermLower) ||
        contact.email.toLowerCase().includes(searchTermLower) ||
        contact.phonenumber.includes(searchTerm) ||
        contact.type.toLowerCase().includes(searchTermLower)
      );
    });

    setFilteredContacts(filtered);
  };

  return (
    <div>
      <div style={styles.header}>
        <h2>Mis Contactos</h2>
        <button onClick={toggleView} style={styles.toggleButton}>
          {viewType === 'list' ? '📱 Ver Cards' : '📝 Ver Lista'}
        </button>
      </div>

      <SearchBar onSearch={handleSearch} />

      {viewType === 'list' ? (
        <ul style={styles.list}>
          {filteredContacts.map(contact => (
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
          contacts={filteredContacts}
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
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0'
  }
};

export default ContactList;