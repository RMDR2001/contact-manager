import { useState } from 'react'
import Header from './components/Header'
import contacts from './data/contacts'
import ContactList from './components/ContactList'
import ContactCard from './components/ContactCard'
import './App.css'

function App() {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="contacts-container">
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
                nombre={contacto.nombre}
                telefono={contacto.telefono}
                email={contacto.email}
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
                  nombre={contacto.nombre}
                  telefono={contacto.telefono}
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
