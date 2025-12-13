import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="CreditSmart" className="navbar-logo" />
      </div>

      {/* Ocultar menú SOLO en inicio */}
      {!isHome && (
        <nav>
          <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/simulador">Simulador</Link></li>
            <li><Link to="/solicitar">Solicitar</Link></li>
            <li><Link to="/mis-solicitudes">Mis solicitudes</Link></li>

          </ul>
        </nav>
      )}
    </header>
  );
}


