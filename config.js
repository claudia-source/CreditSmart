import { initializeApp, getApps } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// 🔒 Evita inicializar Firebase más de una vez
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApps()[0];

console.log("🔥 Firebase projectId:", firebaseConfig.projectId);

export const db = getFirestore(app);


//⚡ CONEXIÓN AL EMULADOR LOCAL
if (import.meta.env.DEV && window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  console.log("⚡ Conectado exitosamente al emulador local de Firestore");
}
