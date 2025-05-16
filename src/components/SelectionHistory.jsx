const SelectionHistory = ({ history }) => {
  if (!history.length) return null;

  return (
    <div style={styles.container}>
      <h4 style={styles.title}>Últimas selecciones:</h4>
      <ul style={styles.list}>
        {history.map((contact, index) => (
          <li key={`${contact.id}-${index}`} style={styles.item}>
            <span style={styles.name}>{contact.fullname}</span>
            <span style={styles.badge}>
              {contact.type}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #dee2e6'
  },
  title: {
    margin: '0 0 10px 0',
    color: '#495057',
    fontSize: '1rem'
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #dee2e6'
  },
  name: {
    color: '#495057',
    fontSize: '0.9rem'
  },
  badge: {
    fontSize: '0.8rem',
    color: '#6c757d'
  }
};

export default SelectionHistory;