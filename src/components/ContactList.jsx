/* eslint-disable react/prop-types */
import './ContactList.css'

export default function ContactList({ nombre, telefono, isActive, onClick }) {
  return (
    <div 
      className={`contact-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <h3>{nombre}</h3>
      <p className="phone-number">📞 {telefono}</p>
    </div>
  );
}