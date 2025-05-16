const ContactItem = ({ contact, isSelected, onClick }) => {
  return (
    <li 
      onClick={onClick}
      style={{
        ...styles.listItem,
        backgroundColor: isSelected ? '#e8f5e9' : 'white',
        border: isSelected ? '2px solid #4CAF50' : '1px solid #eee'
      }}
    >
      <div style={styles.contactInfo}>
        <h3 style={styles.name}>{contact.fullname}</h3>
        <div style={styles.details}>
          <p style={styles.detail}>📱 {contact.phonenumber}</p>
          <p style={styles.detail}>✉️ {contact.email}</p>
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
    </li>
  );
};

const styles = {
  listItem: {
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  name: {
    margin: 0,
    fontSize: '1.1rem',
    color: '#333'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  detail: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#666'
  },
  badge: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '12px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    alignSelf: 'flex-start'
  }
};

export default ContactItem;