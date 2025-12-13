import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Finanzas simples, decisiones inteligentes</h1>

      <p className="hero-subtitle">
        Conoce nuestras opciones de crédito y obtén una aprobación rápida y segura.
      </p>

      <div className="hero-buttons">
        <Link to="/simulador">
          <button className="btn-main">Simular crédito</button>
        </Link>

        <Link to="/solicitar">
          <button className="btn-secondary">Solicitar crédito</button>
        </Link>
      </div>
    </section>
  );
}



