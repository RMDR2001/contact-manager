import { useState, useEffect } from 'react';

const ContactForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    type: 'social'
  });

  const [errors, setErrors] = useState({
    fullname: '',
    phonenumber: '',
    email: ''
  });

  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    const newErrors = {
      fullname: '',
      phonenumber: '',
      email: ''
    };

    // Validar nombre
    if (!formData.fullname.trim()) {
      newErrors.fullname = 'El nombre es requerido';
    } else if (formData.fullname.length < 3) {
      newErrors.fullname = 'El nombre debe tener al menos 3 caracteres';
    }

    // Validar teléfono
    const phoneRegex = /^\+?1?\d{9,15}$/;
    if (!formData.phonenumber) {
      newErrors.phonenumber = 'El teléfono es requerido';
    } else if (!phoneRegex.test(formData.phonenumber.replace(/\D/g, ''))) {
      newErrors.phonenumber = 'Formato de teléfono inválido';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  useEffect(() => {
    setIsValid(validateForm());
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const newContact = {
        ...formData,
        id: Date.now()
      };
      onSave(newContact);
      setFormData({
        fullname: '',
        phonenumber: '',
        email: '',
        type: 'social'
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.title}>Agregar Nuevo Contacto</h3>
      
      <div style={styles.field}>
        <label htmlFor="fullname" style={styles.label}>Nombre Completo:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          style={{
            ...styles.input,
            borderColor: errors.fullname ? '#ff4444' : '#ddd'
          }}
        />
        {errors.fullname && <span style={styles.error}>{errors.fullname}</span>}
      </div>

      <div style={styles.field}>
        <label htmlFor="phonenumber" style={styles.label}>Teléfono:</label>
        <input
          type="tel"
          id="phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          style={{
            ...styles.input,
            borderColor: errors.phonenumber ? '#ff4444' : '#ddd'
          }}
        />
        {errors.phonenumber && <span style={styles.error}>{errors.phonenumber}</span>}
      </div>

      <div style={styles.field}>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            ...styles.input,
            borderColor: errors.email ? '#ff4444' : '#ddd'
          }}
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}
      </div>

      <div style={styles.field}>
        <label htmlFor="type" style={styles.label}>Tipo:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="familia">Familia</option>
          <option value="trabajo">Trabajo</option>
          <option value="social">Social</option>
        </select>
      </div>

      <button 
        type="submit" 
        style={{
          ...styles.button,
          opacity: isValid ? 1 : 0.7,
          cursor: isValid ? 'pointer' : 'not-allowed'
        }}
        disabled={!isValid}
      >
        💾 Guardar Contacto
      </button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: 'white',
    padding: '25px',  // Aumentado el padding
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    maxWidth: '100%',  // Asegura que el formulario no se desborde
  },
  title: {
    margin: '0 0 20px 0',
    color: '#333',
    textAlign: 'center'  // Centra el título
  },
  field: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  input: {
    width: '94%',  // Ajustado para considerar el padding
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    ':focus': {
      borderColor: '#4CAF50'
    }
  },
  select: {
    width: '98%',  // Ajustado para el select
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '0.9rem',
    backgroundColor: 'white',
    outline: 'none',
    cursor: 'pointer'
  },
  button: {
    width: '98%',  // Ajustado para el botón
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#45a049',
      transform: 'translateY(-2px)'
    }
  },
  error: {
    color: '#ff4444',
    fontSize: '0.8rem',
    marginTop: '4px'
  }
};

export default ContactForm;