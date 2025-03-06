import Header from './components/Header'
import contacts from './data/contacts'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import './App.css'

function App() {
  // Seleccionamos el primer contacto como destacado
  const destacado = contacts[0];

  return (
    <div className="app">
      <Header />
      <div className="contacts-container">
        <ContactDetail contact={destacado} />
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
      </div>
    </div>
  )
}

export default App
