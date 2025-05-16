import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import SelectionHistory from './components/SelectionHistory';
import { contacts } from './data/contacts';

function App() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [selectionHistory, setSelectionHistory] = useState([contacts[0]]);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setSelectionHistory(prev => {
      const newHistory = [contact, ...prev.filter(item => item.id !== contact.id)].slice(0, 3);
      return newHistory;
    });
  };

  const handleClearContact = () => {
    setSelectedContact(null);
  };

  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <div style={styles.layout}>
          <div>
            <ContactPinned 
              contact={selectedContact}
              onClear={handleClearContact}
            />
            <SelectionHistory history={selectionHistory} />
          </div>
          <ContactList 
            contacts={contacts}
            selectedContact={selectedContact}
            onContactSelect={handleContactSelect}
          />
        </div>
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  main: {
    padding: '2rem'
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '2rem'
  }
};

export default App;
