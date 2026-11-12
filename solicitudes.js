import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  query,
  where,
  orderBy,
  serverTimestamp 
} from "firebase/firestore";
import { db } from "./config";

// 📌 1. Definición formal de la Máquina de Estados
export const ESTADOS_SOLICITUD = {
  PENDIENTE: "PENDIENTE",
  EN_REVISION: "EN_REVISION",
  APROBADA: "APROBADA",
  RECHAZADA: "RECHAZADA",
};

// 📌 2. GUARDAR SOLICITUD + HISTORIAL INICIAL
export async function guardarSolicitud(datos) {
  try {
    console.log("🌐 Guardando en Firestore...", datos);

    const docRef = await addDoc(collection(db, "solicitudes"), {
      ...datos,
      estado: ESTADOS_SOLICITUD.PENDIENTE,
      observaciones: "",
      montoAprobado: null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    await addDoc(collection(db, "solicitudes", docRef.id, "historial"), {
      estadoAnterior: null,
      nuevoEstado: ESTADOS_SOLICITUD.PENDIENTE,
      motivo: "Registro inicial de la solicitud por parte del cliente",
      usuario: datos.nombre || "Cliente",
      timestamp: serverTimestamp(),
    });

    console.log("✅ Solicitud e historial creados con ID:", docRef.id);
    return { ok: true, id: docRef.id };
  } catch (error) {
    console.error("❌ Error Firestore (guardar):", error);
    return { ok: false, error: error.message };
  }
}

// 📌 3. OBTENER TODAS LAS SOLICITUDES (Ordenadas por fecha descendente)
export async function obtenerSolicitudes() {
  try {
    console.log("🌐 Obteniendo todas las solicitudes ordenadas...");
    const q = query(collection(db, "solicitudes"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    
    const solicitudes = querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    return { ok: true, datos: solicitudes };
  } catch (error) {
    console.error("❌ Error Firestore (obtener):", error);
    return { ok: false, error: error.message };
  }
}

// 📌 4. OBTENER SOLICITUDES FILTRADAS POR ESTADO
export async function obtenerSolicitudesPorEstado(filtroEstado) {
  try {
    console.log(`🌐 Obteniendo solicitudes filtradas por: ${filtroEstado}`);
    const q = query(
      collection(db, "solicitudes"),
      where("estado", "==", filtroEstado),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    
    const solicitudes = querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    return { ok: true, datos: solicitudes };
  } catch (error) {
    console.error("❌ Error Firestore (obtener por estado):", error);
    return { ok: false, error: error.message };
  }
}

// 📌 5. CAMBIAR ESTADO + REGISTRO DE AUDITORÍA
export async function cambiarEstadoSolicitud({
  solicitudId,
  estadoAnterior,
  nuevoEstado,
  motivo = "",
  usuario = "Analista de Crédito",
  montoAprobado = null
}) {
  try {
    console.log(`🌐 Transición: ${solicitudId} | ${estadoAnterior} ➔ ${nuevoEstado}`);
    
    const docRef = doc(db, "solicitudes", solicitudId);

    const datosActualizacion = {
      estado: nuevoEstado,
      observaciones: motivo,
      updatedAt: serverTimestamp(),
    };

    if (montoAprobado !== null) {
      datosActualizacion.montoAprobado = montoAprobado;
    }

    await updateDoc(docRef, datosActualizacion);

    await addDoc(collection(db, "solicitudes", solicitudId, "historial"), {
      estadoAnterior: estadoAnterior,
      nuevoEstado: nuevoEstado,
      motivo: motivo,
      usuario: usuario,
      timestamp: serverTimestamp(),
    });

    console.log("✅ Transición completada");
    return { ok: true };
  } catch (error) {
    console.error("❌ Error Firestore (actualizar estado):", error);
    return { ok: false, error: error.message };
  }
}

// 📌 6. CONSULTAR HISTORIAL DE UNA SOLICITUD
export async function obtenerHistorialSolicitud(solicitudId) {
  try {
    console.log(`🌐 Obteniendo historial de ${solicitudId}...`);
    const historialRef = collection(db, "solicitudes", solicitudId, "historial");
    const q = query(historialRef, orderBy("timestamp", "asc"));
    
    const querySnapshot = await getDocs(q);
    const historial = querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    return { ok: true, datos: historial };
  } catch (error) {
    console.error("❌ Error Firestore (obtener historial):", error);
    return { ok: false, error: error.message };
  }
}