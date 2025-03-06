
import contacts from './data/contacts'
import ContactCard from './components/ContactCard'
import './App.css'

function App() {
  return (
    <>
      <div className="contacts-container">
        <h1>Administrador de Contactos</h1>
        <div className="contacts-list">
          <h2>Lista de Contactos</h2>
          <ul>
            {contacts.map((contacto) => (
              <ContactCard 
                key={contacto.id}
                nombre={contacto.nombre}
                telefono={contacto.telefono}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
