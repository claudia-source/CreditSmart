import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../config"; // 👈 Ruta corregida a src/config.js
import "../styles/MisSolicitudesPage.css";

const ESTADOS = {
  PENDIENTE: "PENDIENTE",
  EN_REVISION: "EN_REVISION",
  APROBADA: "APROBADA",
  RECHAZADA: "RECHAZADA"
};

export default function MisSolicitudesPage() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [filtro, setFiltro] = useState("TODOS");
  const [loading, setLoading] = useState(false);

  // Estados del modal de trazabilidad
  const [modalAbierto, setModalAbierto] = useState(false);
  const [solicitudSeleccionada, setSolicitudSeleccionada] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [loadingHistorial, setLoadingHistorial] = useState(false);

  // Cargar solicitudes desde Firestore Local Emulator
  const cargarSolicitudes = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "solicitudes"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setSolicitudes(data);
    } catch (error) {
      console.error("Error al consultar solicitudes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarSolicitudes();
  }, []);

  // Avanzar en la máquina de estados y registrar trazabilidad
  const handleCambiarEstado = async (solicitud, nuevoEstado) => {
    const motivo = prompt(`Ingresa el motivo para cambiar a ${nuevoEstado}:`) || "Evaluación de solicitud";

    try {
      // 1. Actualizar el estado principal del documento
      const docRef = doc(db, "solicitudes", solicitud.id);
      await updateDoc(docRef, {
        estado: nuevoEstado,
        updatedAt: serverTimestamp()
      });

      // 2. Crear evento inmutable en la subcolección 'historial'
      await addDoc(collection(db, "solicitudes", solicitud.id, "historial"), {
        estadoAnterior: solicitud.estado || ESTADOS.PENDIENTE,
        nuevoEstado: nuevoEstado,
        motivo: motivo,
        usuario: "Analista de Crédito",
        fecha: new Date().toLocaleString()
      });

      alert(`✅ Estado actualizado a ${nuevoEstado}`);
      cargarSolicitudes();
    } catch (error) {
      console.error("Error al actualizar estado:", error);
      alert("Error al actualizar la solicitud");
    }
  };

  // Cargar trazabilidad desde la subcolección 'historial'
  const handleVerHistorial = async (solicitud) => {
    setSolicitudSeleccionada(solicitud);
    setModalAbierto(true);
    setLoadingHistorial(true);

    try {
      const subcollRef = collection(db, "solicitudes", solicitud.id, "historial");
      const snapshot = await getDocs(subcollRef);
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setHistorial(data);
    } catch (error) {
      console.error("Error cargando auditoría:", error);
    } finally {
      setLoadingHistorial(false);
    }
  };

  const solicitudesFiltradas = solicitudes.filter(s =>
    filtro === "TODOS" ? true : s.estado === filtro
  );

  return (
    <div className="solicitudes-container">
      <h2>Gestión de Solicitudes de Crédito</h2>

      {/* Pestañas de Filtro */}
      <div className="filtros-bar">
        {["TODOS", "PENDIENTE", "EN_REVISION", "APROBADA", "RECHAZADA"].map((st) => (
          <button
            key={st}
            className={filtro === st ? "active" : ""}
            onClick={() => setFiltro(st)}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Grid de Tarjetas */}
      {loading ? (
        <p>Cargando datos del emulador...</p>
      ) : solicitudesFiltradas.length === 0 ? (
        <p>No se encontraron solicitudes.</p>
      ) : (
        <div className="solicitudes-grid">
          {solicitudesFiltradas.map((sol) => {
            const estadoActual = sol.estado || ESTADOS.PENDIENTE;
            return (
              <div key={sol.id} className="solicitud-card">
                <div className="card-header">
                  <span className={`badge badge-${estadoActual.toLowerCase()}`}>
                    {estadoActual}
                  </span>
                  <small>{sol.tipoCredito || "Crédito General"}</small>
                </div>

                <h3>{sol.nombre || "Cliente"}</h3>
                <p><strong>Correo:</strong> {sol.correo}</p>
                <p><strong>Monto:</strong> ${sol.monto}</p>

                <div className="card-actions">
                  <button className="btn-historial" onClick={() => handleVerHistorial(sol)}>
                    📜 Ver Trazabilidad
                  </button>

                  {estadoActual === ESTADOS.PENDIENTE && (
                    <button
                      className="btn-revision"
                      onClick={() => handleCambiarEstado(sol, ESTADOS.EN_REVISION)}
                    >
                      Evaluar
                    </button>
                  )}

                  {estadoActual === ESTADOS.EN_REVISION && (
                    <>
                      <button
                        className="btn-aprobar"
                        onClick={() => handleCambiarEstado(sol, ESTADOS.APROBADA)}
                      >
                        Aprobar
                      </button>
                      <button
                        className="btn-rechazar"
                        onClick={() => handleCambiarEstado(sol, ESTADOS.RECHAZADA)}
                      >
                        Rechazar
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal de Trazabilidad / Auditoría */}
      {modalAbierto && solicitudSeleccionada && (
        <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Auditoría: {solicitudSeleccionada.nombre}</h3>
            {loadingHistorial ? (
              <p>Cargando historial inmutable...</p>
            ) : historial.length === 0 ? (
              <p>Sin registros de trazabilidad aún.</p>
            ) : (
              <div className="timeline">
                {historial.map((h, index) => (
                  <div key={h.id || index} className="timeline-item">
                    <strong>
                      {h.estadoAnterior ? `${h.estadoAnterior} ➔ ${h.nuevoEstado}` : h.nuevoEstado}
                    </strong>
                    <p>{h.motivo}</p>
                    <small>Auditor: {h.usuario} | {h.fecha}</small>
                  </div>
                ))}
              </div>
            )}
            <button onClick={() => setModalAbierto(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}