const ContactPinned = ({ contact, onClear }) => {
  if (!contact) {
    return (
      <div style={styles.placeholder}>
        <p>Ningún contacto seleccionado</p>
        <p style={styles.hint}>Selecciona un contacto de la lista para ver sus detalles</p>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>Contacto Destacado</h3>
        <button 
          onClick={onClear}
          style={styles.clearButton}
        >
          ❌ Limpiar
        </button>
      </div>
      <div style={styles.content}>
        <div style={styles.typeContainer}>
          <span style={{
            ...styles.badge,
            backgroundColor: 
              contact.type === 'familia' ? '#4CAF50' :
              contact.type === 'trabajo' ? '#2196F3' : '#FF9800'
          }}>
            {contact.type}
          </span>
        </div>
        <h2 style={styles.name}>{contact.fullname}</h2>
        <div style={styles.info}>
          <p style={styles.detail}>📱 {contact.phonenumber}</p>
          <p style={styles.detail}>✉️ {contact.email}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '20px 0'
  },
  placeholder: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#666',
    border: '2px dashed #dee2e6'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '20px'  // Añadimos gap para separar el título del botón
  },
  title: {
    margin: 0,
    color: '#333',
    fontSize: '1.2rem',
    flexGrow: 1  // Permite que el título ocupe el espacio disponible
  },
  badge: {
    padding: '4px 12px',
    borderRadius: '12px',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  name: {
    margin: 0,
    color: '#333',
    fontSize: '1.5rem'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  detail: {
    margin: 0,
    color: '#666',
    fontSize: '1rem'
  },
  clearButton: {
    padding: '8px 16px',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    flexShrink: 0,  // Evita que el botón se encoja
    ':hover': {
      backgroundColor: '#cc0000',
      transform: 'translateY(-2px)'
    }
  },
  hint: {
    fontSize: '0.9rem',
    color: '#999',
    marginTop: '10px'
  }
};

export default ContactPinned;