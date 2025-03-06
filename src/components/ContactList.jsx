/* eslint-disable react/prop-types */

export default function ContactCard({ nombre, telefono }) {
  return (
    <div className="contact-card">
      <h3>{nombre}</h3>
      <p className="phone-number">📞 {telefono}</p>
    </div>
  );
}