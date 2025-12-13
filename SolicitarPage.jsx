// src/pages/SolicitarPage.jsx
import { useState, useEffect } from "react";
import { guardarSolicitud } from "../firebase/solicitudes";
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

  const [enviando, setEnviando] = useState(false);

  /* ================================
     FORMATO COP
  ================================= */
  const formatCOP = (value) => {
    if (!value) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  /* ================================
     PRELLENAR DESDE SIMULADOR
  ================================= */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get("tipo");
    const monto = params.get("monto");
    const plazo = params.get("plazo");

    setForm((prev) => ({
      ...prev,
      tipoCredito: tipo || prev.tipoCredito,
      monto: monto ? formatCOP(monto.replace(/\./g, "")) : prev.monto,
      plazo: plazo || prev.plazo
    }));
  }, []);

  /* ================================
     MANEJO DE INPUTS
  ================================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "monto" || name === "ingresos") {
      const numeric = value.replace(/\D/g, "");
      setForm({ ...form, [name]: formatCOP(numeric) });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  /* ================================
     VALIDACIÓN
  ================================= */
  const validateForm = () => {
    return (
      form.nombre &&
      form.documento &&
      form.correo &&
      form.telefono &&
      form.tipoCredito &&
      form.monto &&
      form.plazo &&
      form.destino
    );
  };

  /* ================================
     SUBMIT → FIRESTORE
  ================================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("⚠️ Completa todos los campos obligatorios (*)");
      return;
    }

    setEnviando(true);

    try {
      console.log("📤 Enviando datos:", form);

      await guardarSolicitud({
        ...form,
        monto: form.monto.replace(/\./g, ""),
        ingresos: form.ingresos.replace(/\./g, ""),
        createdAt: new Date()
      });

      alert("✅ Solicitud enviada correctamente");

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

    } catch (error) {
      console.error("❌ Error al guardar:", error);
      alert("❌ Error al enviar la solicitud");
    } finally {
      setEnviando(false);
    }
  };

  /* ================================
     RENDER
  ================================= */
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
              <input name="nombre" value={form.nombre} onChange={handleChange} required />
            </label>

            <label>
              Documento *
              <input name="documento" value={form.documento} onChange={handleChange} required />
            </label>

            <label>
              Correo *
              <input type="email" name="correo" value={form.correo} onChange={handleChange} required />
            </label>

            <label>
              Teléfono *
              <input name="telefono" value={form.telefono} onChange={handleChange} required />
            </label>
          </div>
        </fieldset>

        {/* Detalles del crédito */}
        <fieldset>
          <legend>Detalles del Crédito</legend>
          <div className="form-grid">
            <label>
              Tipo de crédito *
              <select name="tipoCredito" value={form.tipoCredito} onChange={handleChange} required>
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
              <input name="monto" value={form.monto} onChange={handleChange} required />
            </label>

            <label>
              Plazo (meses) *
              <input name="plazo" value={form.plazo} onChange={handleChange} required />
            </label>

            <label>
              Destino del crédito *
              <textarea name="destino" value={form.destino} onChange={handleChange} required />
            </label>
          </div>
        </fieldset>

        {/* Información Laboral */}
        <fieldset>
          <legend>Situación Laboral</legend>
          <div className="form-grid">
            <label>
              Empresa
              <input name="empresa" value={form.empresa} onChange={handleChange} />
            </label>

            <label>
              Cargo
              <input name="cargo" value={form.cargo} onChange={handleChange} />
            </label>

            <label>
              Ingresos mensuales (COP)
              <input name="ingresos" value={form.ingresos} onChange={handleChange} />
            </label>
          </div>
        </fieldset>

        {/* Acciones */}
        <div className="form-actions">
          <button type="submit" className="btn-submit" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar solicitud"}
          </button>

          <button
            type="button"
            className="btn-reset"
            disabled={enviando}
            onClick={() =>
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
              })
            }
          >
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}












