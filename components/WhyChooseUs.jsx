import "../styles/WhyChoose.css";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <h2 className="section-title">¿Por qué elegir CreditSmart?</h2>

      <div className="why-grid">
        <div className="why-card">
          <h3>Procesos rápidos</h3>
          <p>Aprobamos solicitudes en minutos.</p>
        </div>

        <div className="why-card">
          <h3>Bajos intereses</h3>
          <p>Tasas competitivas según tu perfil.</p>
        </div>

        <div className="why-card">
          <h3>Acompañamiento</h3>
          <p>Te guiamos en toda la solicitud del crédito.</p>
        </div>
      </div>
    </section>
  );
}


