import "../styles/ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contáctanos</h2>

      <p className="contact-subtitle">
        ¿Tienes dudas o necesitas asesoría? Estamos para ayudarte.
      </p>

      <div className="contact-grid">
        <div className="contact-box">
          <h3>📞 Teléfono</h3>
          <p>+57 320 555 8899</p>
        </div>

        <div className="contact-box">
          <h3>📧 Correo</h3>
          <p>soporte@creditsmart.com</p>
        </div>

        <div className="contact-box">
          <h3>📍 Dirección</h3>
          <p>Bogotá, Colombia</p>
        </div>
      </div>
    </section>
  );
}

