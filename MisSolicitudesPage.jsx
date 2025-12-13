import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase/config";

export default function MisSolicitudesPage() {
  const [correo, setCorreo] = useState("");
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function buscarSolicitudes() {
    if (!correo) {
      alert("Ingresa un correo");
      return;
    }

    setLoading(true);

    try {
      const q = query(
        collection(db, "solicitudes"),
        where("correo", "==", correo),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setSolicitudes(data);
    } catch (error) {
      console.error("Error consultando:", error);
      alert("Error al consultar solicitudes");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mis-solicitudes">
      <h2>Mis solicitudes</h2>

      <input
        type="email"
        placeholder="Ingresa tu correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <button onClick={buscarSolicitudes}>
        Buscar
      </button>

      {loading && <p>Cargando...</p>}

      {solicitudes.map(s => (
        <div key={s.id} className="solicitud-card">
          <p><strong>{s.nombre}</strong></p>
          <p>{s.tipoCredito}</p>
          <p>Monto: ${s.monto}</p>
        </div>
      ))}
    </section>
  );
}
