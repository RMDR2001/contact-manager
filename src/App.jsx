import { useState } from 'react'
import Header from './components/Header'
import contacts from './data/contacts'
import ContactList from './components/ContactList'
import ContactPinned from './components/ContactPinned'
import './App.css'

function App() {
  const [contactList, setContactList] = useState([...contacts]);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [isGridView, setIsGridView] = useState(false);

  const handleContactClick = (contact) => {
    setSelectedContact({ ...contact });
  };

  const handleClearContact = () => {
    setSelectedContact(null);
  };

  const updateContact = (updatedContact) => {
    const updatedList = contactList.map(contact => 
      contact.id === updatedContact.id ? { ...updatedContact } : contact
    );
    setContactList([...updatedList]);
  };

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="app">
      <Header />
      <div className="contacts-container">
        <ContactPinned 
          contact={selectedContact} 
          onClearContact={handleClearContact}
          onUpdateContact={updateContact}
        />
        <div className="view-controls">
          <button 
            className="toggle-button"
            onClick={toggleView}
          >
            {isGridView ? '📝 Vista Lista' : '📑 Vista Tarjetas'}
          </button>
        </div>
        <ContactList 
          contacts={contactList}
          onContactClick={handleContactClick}
          activeContactId={selectedContact?.id}
          isGridView={isGridView}
        />
      </div>
    </div>
  );
}

export default App
