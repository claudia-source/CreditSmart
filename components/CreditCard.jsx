import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreditCard({ title, rate, max, plazo, image }) {
  const navigate = useNavigate();

  const handleSimular = () => {
    // Redirige a la página de solicitud pasando el título como parámetro de URL
    navigate(`/solicitar?tipo=${encodeURIComponent(title)}`);
  };

  return (
    <div className="credit-card">
      <img src={image} alt={title} className="credit-icon" />

      <h3 className="card-title">{title}</h3>

      <p className="card-text">
        <strong>Tasa:</strong> {rate}
      </p>
      <p className="card-text">
        <strong>Monto Máximo:</strong> ${max ? max.toLocaleString() : 0}
      </p>
      <p className="card-text">
        <strong>Plazo Máximo:</strong> {plazo} meses
      </p>

      <button className="card-button" onClick={handleSimular}>
        Simular
      </button>
    </div>
  );
}


