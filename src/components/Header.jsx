import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <h1>📞 Contact Manager</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#contacts">Contactos</a></li>
          <li><a href="#favorites">Favoritos</a></li>
          <li><a href="#settings">Configuración</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;