/* eslint-disable react/prop-types */
import './ContactList.css'

export default function ContactList({ nombre, telefono }) {
  return (
    <div className="contact-card">
      <h3>{nombre}</h3>
      <p className="phone-number">📞 {telefono}</p>
    </div>
  );
}