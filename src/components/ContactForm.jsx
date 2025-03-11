import { useState } from 'react'
import PropTypes from 'prop-types'
import './ContactForm.css'

export default function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    type: 'social'
  });

  const [errors, setErrors] = useState({
    nombre: '',
    telefono: '',
    email: ''
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        return value.length < 3 ? 'El nombre debe tener al menos 3 caracteres' : '';
      case 'telefono':
        return !/^\d{9}$/.test(value) ? 'El teléfono debe tener 9 dígitos' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email inválido' : '';
      default:
    }
  };

  ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const isFormValid = () => {
    return (
      formData.nombre.length >= 3 &&
      /^\d{9}$/.test(formData.telefono) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      !errors.nombre &&
      !errors.telefono &&
      !errors.email
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const newContact = {
      id: Date.now(),
      ...formData
    };
    onAddContact(newContact);
    
    // Limpiar el formulario
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      type: 'social'
    });
    setErrors({
      nombre: '',
      telefono: '',
      email: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Agregar Nuevo Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'error' : ''}
            required
          />
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={errors.telefono ? 'error' : ''}
            required
          />
          {errors.telefono && <span className="error-message">{errors.telefono}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="type">Tipo de Contacto</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="familia">👨‍👩‍👧‍👦 Familia</option>
            <option value="trabajo">💼 Trabajo</option>
            <option value="social">🎮 Social</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={!isFormValid()}
        >
          Guardar Contacto
        </button>
      </form>
    </div>
  );
}