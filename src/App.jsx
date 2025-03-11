import { useState } from 'react'
import Header from './components/Header'
import contacts from './data/contacts'
import ContactList from './components/ContactList'
import ContactPinned from './components/ContactPinned'
import './App.css'

function App() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleClearContact = () => {
    setSelectedContact(null);
  };

  return (
    <div className="app">
      <Header />
      <div className="contacts-container">
        <ContactPinned 
          contact={selectedContact} 
          onClear={handleClearContact}
        />
        <ContactList 
          contacts={contacts}
          onContactClick={handleContactClick}
          activeContactId={selectedContact?.id}
        />
      </div>
    </div>
  );
}

export default App
