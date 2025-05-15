import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import { contacts } from './data/contacts';

function App() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <div style={styles.layout}>
          <ContactDetail contact={selectedContact} />
          <ContactList 
            contacts={contacts}
            onContactSelect={handleContactSelect}
            selectedContact={selectedContact}
          />
        </div>
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#fff',
    color: '#333'  // Agregamos color base para toda la aplicación
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
