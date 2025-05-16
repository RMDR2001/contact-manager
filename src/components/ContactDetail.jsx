const ContactDetail = ({ contact }) => {
  if (!contact) return <div>Selecciona un contacto</div>;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Detalles del Contacto</h3>
      <div style={styles.content}>
        <div style={styles.field}>
          <span style={styles.label}>Nombre:</span>
          <span style={styles.value}>{contact.fullname}</span>
        </div>
        <div style={styles.field}>
          <span style={styles.label}>Teléfono:</span>
          <span style={styles.value}>{contact.phonenumber}</span>
        </div>
        <div style={styles.field}>
          <span style={styles.label}>Email:</span>
          <span style={styles.value}>{contact.email}</span>
        </div>
        <div style={styles.field}>
          <span style={styles.label}>Tipo:</span>
          <span style={{
            ...styles.badge,
            backgroundColor: 
              contact.type === 'familia' ? '#4CAF50' :
              contact.type === 'trabajo' ? '#2196F3' : '#FF9800'
          }}>
            {contact.type}
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  },
  title: {
    margin: '0 0 1rem 0',
    color: '#333',
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '0.5rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
  },
  field: {
    display: 'flex',
    gap: '1rem'
  },
  label: {
    fontWeight: 'bold',
    minWidth: '80px',
    color: '#666'
  },
  value: {
    color: '#333'
  },
  badge: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '12px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
};

export default ContactDetail;