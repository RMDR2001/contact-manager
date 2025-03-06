/* eslint-disable react/prop-types */
export default function ContactCard({ nombre, telefono, email, isActive, onClick }) {
  return (
    <div 
      className={`contact-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="contact-avatar">👤</div>
      <div className="contact-info">
        <h3>{nombre}</h3>
        <p><span>📞</span> {telefono}</p>
        <p><span>✉️</span> {email}</p>
      </div>
    </div>
  );
}