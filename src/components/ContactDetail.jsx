/* eslint-disable react/prop-types */
import './ContactDetail.css'

export default function ContactDetail({ contact }) {
  return (
    <div className="contact-detail">
      <h2>Contacto Destacado</h2>
      <div className="contact-detail-card">
        <div className="contact-avatar">
          👤
        </div>
        <div className="contact-info">
          <h3>{contact.nombre}</h3>
          <p><span className="icon">📞</span> {contact.telefono}</p>
          <p><span className="icon">✉️</span> {contact.email}</p>
        </div>
      </div>
    </div>
  );
}