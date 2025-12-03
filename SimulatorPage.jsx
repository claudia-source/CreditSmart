// src/pages/SimulatorPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SimulatorPage.css";

export default function SimulatorPage() {
  const [tipo, setTipo] = useState("");
  const [monto, setMonto] = useState("");
  const [plazo, setPlazo] = useState("");

  const navigate = useNavigate();

  // 👉 Formatea monto con puntos automáticamente
  const formatCOP = (value) => {
    let num = value.replace(/\D/g, "");
    return new Intl.NumberFormat("es-CO").format(num);
  };

  const handleMontoChange = (e) => {
    setMonto(formatCOP(e.target.value));
  };

  // 👉 Cálculo estable de cuota
  const calcularCuota = () => {
    if (!monto || !plazo || !tipo) return 0;

    const tasaBasica = 0.015; // base 1.5%
    const tasa =
      tipo === "Hipotecario"
        ? 0.011
        : tipo === "Vehicular"
        ? 0.013
        : tipo === "Educativo"
        ? 0.010
        : tipo === "Personal"
        ? 0.018
        : tipo === "Empresarial"
        ? 0.015
        : 0.017; // PyME

    const numberMonto = Number(monto.replace(/\./g, "")); // limpiar puntos

    const cuota =
      (numberMonto * tasa) / (1 - Math.pow(1 + tasa, -Number(plazo)));

    return isNaN(cuota) ? 0 : Math.round(cuota);
  };

  return (
    <section className="simulador-wrapper">
      <div className="simulador-card">
        <h2>Simulador de Crédito</h2>

        <label>Tipo de crédito</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="Hipotecario">Crédito Hipotecario</option>
          <option value="Vehicular">Crédito Vehicular</option>
          <option value="Educativo">Crédito Educativo</option>
          <option value="Personal">Crédito Personal</option>
          <option value="Empresarial">Crédito Empresarial</option>
          <option value="PyME">Crédito PyME</option>
        </select>

        <label>Monto solicitado (COP)</label>
        <input
          type="text"
          placeholder="Ej: 20.000.000"
          value={monto}
          onChange={handleMontoChange}
        />

        <label>Plazo (meses)</label>
        <input
          type="number"
          placeholder="Ej: 36"
          value={plazo}
          onChange={(e) => setPlazo(e.target.value)}
        />

        <p className="cuota">
          Cuota estimada:{" "}
          <strong>
            ${new Intl.NumberFormat("es-CO").format(calcularCuota())}
          </strong>
        </p>

        <button
          className="btn-simular"
          disabled={!tipo || !monto || !plazo}
          onClick={() =>
            navigate(
              `/solicitar?tipo=${tipo}&monto=${monto}&plazo=${plazo}`
            )
          }
        >
          Solicitar este crédito
        </button>
      </div>
    </section>
  );
}



