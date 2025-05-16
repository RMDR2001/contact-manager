const ContactCard = ({ contact, isSelected, onClick }) => {
  return (
    <div 
      style={{
        ...styles.card,
        border: isSelected ? '2px solid #4CAF50' : '1px solid #eee'
      }}
      onClick={onClick}
    >
      <div style={styles.cardContent}>
        <span style={{
          ...styles.badge,
          backgroundColor: 
            contact.type === 'familia' ? '#4CAF50' :
            contact.type === 'trabajo' ? '#2196F3' : '#FF9800'
        }}>
          {contact.type}
        </span>
        <h3 style={styles.name}>{contact.fullname}</h3>
        <div style={styles.details}>
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
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }
  },
  cardContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  badge: {
    alignSelf: 'flex-start',
    padding: '4px 12px',
    borderRadius: '12px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  name: {
    margin: 0,
    fontSize: '1.1rem',
    color: '#333'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  detail: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#666'
  }
};

export default ContactCard;