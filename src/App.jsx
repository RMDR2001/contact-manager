import { useState } from 'react'
import Header from './components/Header'
import contacts from './data/contacts'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import './App.css'

function App() {
  const [contactList, setContactList] = useState([...contacts]);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [isGridView, setIsGridView] = useState(false);
  const [currentView, setCurrentView] = useState('contacts'); // 'contacts' o 'add'

  const handleAddContact = (newContact) => {
    setContactList(prevList => [...prevList, newContact]);
  };

  const handleContactClick = (contact) => {
    setSelectedContact({ ...contact });
  };



  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app">
      <Header onNavigate={handleNavigation} currentView={currentView} />
      <div className="contacts-container">
        {currentView === 'add' ? (
          <ContactForm onAddContact={handleAddContact} />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default App
