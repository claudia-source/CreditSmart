import { useState } from "react";
import CreditCard from "./CreditCard";
import creditsData from "../data/creditsData";

import hipotecario from "../assets/logos/hipotecario.png";
import vehicular from "../assets/logos/vehicular.png";
import educativo from "../assets/logos/educativo.png";
import personal from "../assets/logos/personal.png";
import empresarial from "../assets/logos/empresarial.png";
import pyme from "../assets/logos/pyme.png";

const creditImages = {
  1: hipotecario,
  2: vehicular,
  3: educativo,
  4: personal,
  5: empresarial,
  6: pyme,
};

export default function CreditsList() {
  const [tipoFiltro, setTipoFiltro] = useState("todos");
  const [orden, setOrden] = useState("ninguno");

  // 1️⃣ FILTRADO POR TIPO DE CRÉDITO
  const filtrar = creditsData.filter((credit) => {
    if (tipoFiltro === "todos") return true;
    return credit.name.toLowerCase().includes(tipoFiltro.toLowerCase());
  });

  // 2️⃣ ORDENAMIENTO
  const ordenar = filtrar.sort((a, b) => {
    switch (orden) {
      case "tasaAsc":
        return a.tasa - b.tasa; // menor tasa
      case "tasaDesc":
        return b.tasa - a.tasa; // mayor tasa
      case "montoAsc":
        return a.max - b.max; // menor monto
      case "montoDesc":
        return b.max - a.max; // mayor monto
      case "plazoAsc":
        return a.plazo - b.plazo; // menor plazo
      case "plazoDesc":
        return b.plazo - a.plazo; // mayor plazo
      default:
        return 0;
    }
  });

  return (
    <section style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#6a0dad" }}>
        Créditos Disponibles
      </h2>

      {/* 🎛️ Filtros */}
      <div className="filters-container">
        <div className="filter-box">
          <label>Filtrar por tipo:</label>
          <select
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="hipotecario">Hipotecario</option>
            <option value="vehicular">Vehicular</option>
            <option value="educativo">Educativo</option>
            <option value="personal">Personal</option>
            <option value="empresarial">Empresarial</option>
            <option value="pyme">PyME</option>
          </select>
        </div>

        <div className="filter-box">
          <label>Ordenar por:</label>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="ninguno">Ninguno</option>

            <option value="tasaAsc">Tasa más baja</option>
            <option value="tasaDesc">Tasa más alta</option>

            <option value="montoAsc">Monto más bajo</option>
            <option value="montoDesc">Monto más alto</option>

            <option value="plazoAsc">Plazo más corto</option>
            <option value="plazoDesc">Plazo más largo</option>
          </select>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="credits-grid">
        {ordenar.map((credit) => (
          <CreditCard
            key={credit.id}
            title={credit.name}
            rate={(credit.tasa * 100).toFixed(2) + "%"}
            max={credit.max}
            plazo={credit.plazo}
            image={creditImages[credit.id]}
          />
        ))}
      </div>
    </section>
  )
}


