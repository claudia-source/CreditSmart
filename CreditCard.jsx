export default function CreditCard({ title, rate, max, plazo, image }) {
  return (
    <div className="credit-card">
      <img src={image} alt={title} className="credit-icon" />

      <h3 className="card-title">{title}</h3>

      <p className="card-text"><strong>Tasa:</strong> {rate}</p>
      <p className="card-text">
        <strong>Monto Máximo:</strong> ${max.toLocaleString()}
      </p>
      <p className="card-text">
        <strong>Plazo Máximo:</strong> {plazo} meses
      </p>

      <button className="card-button">Simular</button>
    </div>
  );
}


