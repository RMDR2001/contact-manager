/* eslint-disable react/prop-types */
export default function ContactCard({ nombre, telefono, email }) {
  return (
    <div className="contact-card">
      <div className="contact-avatar">👤</div>
      <div className="contact-info">
        <h3>{nombre}</h3>
        <p><span>📞</span> {telefono}</p>
        <p><span>✉️</span> {email}</p>
      </div>
    </div>
  );
}