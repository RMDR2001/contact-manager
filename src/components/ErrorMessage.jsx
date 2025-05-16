const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div style={styles.container}>
      <div style={styles.error}>
        <div style={styles.content}>
          <span style={styles.icon}>⚠️</span>
          <p style={styles.message}>{message}</p>
        </div>
        <button 
          onClick={onRetry}
          style={styles.retryButton}
          aria-label="Reintentar carga"
        >
          🔄 Reintentar
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  error: {
    backgroundColor: '#fff3f3',
    border: '1px solid #ffcdd2',
    borderRadius: '8px',
    padding: '20px',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  icon: {
    fontSize: '24px'
  },
  message: {
    margin: 0,
    color: '#d32f2f',
    fontSize: '1rem'
  },
  retryButton: {
    padding: '8px 16px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#1976D2',
      transform: 'translateY(-1px)'
    }
  }
};

export default ErrorMessage;