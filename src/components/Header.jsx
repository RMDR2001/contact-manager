const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        <h1 style={styles.title}>Contact Manager</h1>
      </div>
      <nav style={styles.nav}>
        <a href="/contacts" style={styles.link}>Contactos</a>
        <a href="/favorites" style={styles.link}>Favoritos</a>
        <a href="/settings" style={styles.link}>Configuración</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e9ecef'
  },
  brand: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: '1.5rem',
    margin: 0,
    color: '#333'
  },
  nav: {
    display: 'flex',
    gap: '2rem'
  },
  link: {
    textDecoration: 'none',
    color: '#495057',
    fontWeight: '500',
    ':hover': {
      color: '#228be6'
    }
  }
};

export default Header;