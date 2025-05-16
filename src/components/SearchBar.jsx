import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Buscar contactos..."
        value={searchTerm}
        onChange={handleChange}
        style={styles.input}
      />
      <span style={styles.icon}>🔍</span>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    marginBottom: '20px',
    width: '100%',  // Asegura que el contenedor ocupe el ancho disponible
    maxWidth: '100%', // Evita que se desborde
    boxSizing: 'border-box' // Incluye padding y border en el ancho total
  },
  input: {
    width: '100%',
    padding: '8px 36px 8px 12px', // Reducido el padding vertical
    fontSize: '0.9rem', // Reducido el tamaño de fuente
    border: '1px solid #ddd',
    borderRadius: '6px',
    outline: 'none',
    boxSizing: 'border-box', // Importante para el cálculo del ancho
    transition: 'all 0.2s ease',
    backgroundColor: 'white',
    color: '#000000', // Añadido: color negro para el texto
    '::placeholder': {
      color: '#666666' // Color más suave para el placeholder
    },
    ':focus': {
      borderColor: '#4CAF50',
      boxShadow: '0 0 0 2px rgba(74, 175, 80, 0.1)'
    }
  },
  icon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
    fontSize: '0.9rem', // Reducido el tamaño del ícono
    pointerEvents: 'none'
  }
};

export default SearchBar;