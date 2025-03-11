import './Header.css'
import PropTypes from 'prop-types';

export default function Header({ onNavigate, currentView }) {
  return (
    <header className="header">
      <h1>Administrador de Contactos</h1>
      <nav className="nav-menu">
        <button 
          className={`nav-button ${currentView === 'contacts' ? 'active' : ''}`}
          onClick={() => onNavigate('contacts')}
        >
          👥 Contactos
        </button>
        <button 
          className={`nav-button ${currentView === 'add' ? 'active' : ''}`}
          onClick={() => onNavigate('add')}
        >
          ➕ Agregar Nuevo Contacto
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  currentView: PropTypes.string.isRequired,
};