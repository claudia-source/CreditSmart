// src/pages/SolicitarPage.jsx
import { useState, useEffect } from "react";
import "../styles/SolicitarPage.css";

export default function SolicitarPage() {
  const [form, setForm] = useState({
    nombre: "",
    documento: "",
    correo: "",
    telefono: "",
    tipoCredito: "",
    monto: "",
    plazo: "",
    destino: "",
    empresa: "",
    cargo: "",
    ingresos: ""
  });

  const params = new URLSearchParams(window.location.search);

  // COP formatter (miles con puntos)
  const formatCOP = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Prellenar desde simulador
  useEffect(() => {
    const tipo = params.get("tipo");
    const monto = params.get("monto")?.replace(/\./g, "");
    const plazo = params.get("plazo");

    setForm((prev) => ({
      ...prev,
      tipoCredito: tipo || prev.tipoCredito,
      monto: monto ? formatCOP(monto) : prev.monto,
      plazo: plazo || prev.plazo
    }));
  }, []);

  // Manejo genérico de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Formatear monto e ingresos como COP
    if (name === "monto" || name === "ingresos") {
      const numeric = value.replace(/[^\d]/g, "");
      return setForm({ ...form, [name]: formatCOP(numeric) });
    }

    setForm({ ...form, [name]: value });
  };

  // Validación rápida
  const validateForm = () => {
    if (!form.nombre || !form.correo || !form.documento || !form.monto)
      return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("⚠️ Debes completar los campos obligatorios marcados con *");
      return;
    }

    alert("✅ Solicitud enviada con éxito. Nos contactaremos contigo pronto.");
    setForm({
      nombre: "",
      documento: "",
      correo: "",
      telefono: "",
      tipoCredito: "",
      monto: "",
      plazo: "",
      destino: "",
      empresa: "",
      cargo: "",
      ingresos: ""
    });
  };

  return (
    <section className="solicitar-container">
      <h2 className="solicitar-title">Solicitud de Crédito</h2>
      <p className="solicitar-subtitle">
        Completa la información para continuar con tu solicitud.
      </p>

      <form className="solicitar-form" onSubmit={handleSubmit}>
        
        {/* Información Personal */}
        <fieldset>
          <legend>Información Personal</legend>
          <div className="form-grid">

            <label>
              Nombre completo *
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Documento *
              <input
                type="number"
                name="documento"
                value={form.documento}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Correo *
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Teléfono *
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                pattern="[0-9+\s\-]+"
                required
              />
            </label>

          </div>
        </fieldset>

        {/* Datos de crédito */}
        <fieldset>
          <legend>Detalles del Crédito</legend>
          <div className="form-grid">

            <label>
              Tipo de crédito *
              <select
                name="tipoCredito"
                value={form.tipoCredito}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione…</option>
                <option>Hipotecario</option>
                <option>Vehicular</option>
                <option>Educativo</option>
                <option>Personal</option>
                <option>Empresarial</option>
                <option>PyME</option>
              </select>
            </label>

            <label>
              Monto solicitado (COP) *
              <input
                type="text"
                name="monto"
                value={form.monto}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Plazo (meses) *
              <input
                type="number"
                name="plazo"
                value={form.plazo}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Destino del crédito *
              <textarea
                name="destino"
                value={form.destino}
                onChange={handleChange}
                required
              ></textarea>
            </label>

          </div>
        </fieldset>

        {/* Datos laborales */}
        <fieldset>
          <legend>Situación Laboral</legend>
          <div className="form-grid">

            <label>
              Empresa
              <input
                type="text"
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
              />
            </label>

            <label>
              Cargo
              <input
                type="text"
                name="cargo"
                value={form.cargo}
                onChange={handleChange}
              />
            </label>

            <label>
              Ingresos mensuales (COP)
              <input
                type="text"
                name="ingresos"
                value={form.ingresos}
                onChange={handleChange}
              />
            </label>

          </div>
        </fieldset>

        {/* Botones */}
        <div className="form-actions">
          <button type="submit" className="btn-submit">Enviar solicitud</button>
          <button type="reset" className="btn-reset">Limpiar</button>
        </div>

      </form>
    </section>
  );
}







