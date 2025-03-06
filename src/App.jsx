import { useState } from 'react'
import Header from './components/Header'
import contacts from './data/contacts'
import ContactList from './components/ContactList'
import ContactCard from './components/ContactCard'
import ContactDetail from './components/ContactDetail'
import './App.css'

function App() {
  const [isGridView, setIsGridView] = useState(false);
  const [contactoDestacado, setContactoDestacado] = useState(contacts[0]);

  const handleContactClick = (contacto) => {
    setContactoDestacado(contacto);
  };

  return (
    <div className="app">
      <Header />
      <div className="contacts-container">
        <ContactDetail contact={contactoDestacado} />
        
        <div className="view-toggle">
          <button 
            className="toggle-button"
            onClick={() => setIsGridView(!isGridView)}
          >
            {isGridView ? '📝 Vista Lista' : '📑 Vista Cards'}
          </button>
        </div>

        {isGridView ? (
          <div className="contacts-grid">
            {contacts.map((contacto) => (
              <ContactCard 
                key={contacto.id}
                {...contacto}
                isActive={contacto.id === contactoDestacado.id}
                onClick={() => handleContactClick(contacto)}
              />
            ))}
          </div>
        ) : (
          <div className="contacts-list">
            <h2>Lista de Contactos</h2>
            <ul>
              {contacts.map((contacto) => (
                <ContactList 
                  key={contacto.id}
                  {...contacto}
                  isActive={contacto.id === contactoDestacado.id}
                  onClick={() => handleContactClick(contacto)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
