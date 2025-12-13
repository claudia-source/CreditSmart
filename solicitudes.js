import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export async function guardarSolicitud(datos) {
  try {
    console.log("🌐 Guardando en Firestore...", datos);

    const docRef = await addDoc(collection(db, "solicitudes"), {
      ...datos,
      createdAt: serverTimestamp(),
    });

    console.log("✅ Guardado con ID:", docRef.id);
    return { ok: true, id: docRef.id };
  } catch (error) {
    console.error("❌ Error Firestore:", error);
    return { ok: false, error: error.message };
  }
}
