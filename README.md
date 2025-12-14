 💳 CreditSmart – Simulador y Solicitud de Créditos

**Estudiante:** Claudia Liliana Cabrera Cabezas  
**Curso:** Desarrollo Web con React  
**Actividad:** S40 - EA3 Integración con Backend Firebase  

---

## 📌 Descripción del proyecto

**CreditSmart** es una aplicación web desarrollada con **React** que permite a los usuarios:

- Visualizar los créditos disponibles
- Simular un crédito según tipo, monto y plazo
- Enviar una solicitud de crédito mediante un formulario
- Guardar las solicitudes en **Firebase Firestore**
- Consultar los datos almacenados en la nube

El proyecto integra **frontend + backend (Firebase)**, aplicando conceptos de componentes, hooks, formularios controlados, operaciones CRUD y persistencia de datos.

---

## 🛠️ Tecnologías utilizadas

- **React** (Vite)
- **React Router DOM**
- **Firebase**
  - Firestore Database
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

---

## 📂 Estructura del proyecto

credit-smart/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── firebase/
│ ├── styles/
│ └── data/
│
├── screenshots/
│ ├── inicio.png
│ ├── simulador.png
│ ├── solicitar.png
│ ├── firestore.png
│
├── .env.example
├── .gitignore
├── package.json
└── README.md

yaml
Copiar código

---

## ⚙️ Instalación y ejecución

1️⃣ Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/credit-smart.git
2️⃣ Entrar al proyecto:

bash
Copiar código
cd credit-smart
3️⃣ Instalar dependencias:

bash
Copiar código
npm install
4️⃣ Crear el archivo de variables de entorno:

bash
Copiar código
cp .env.example .env
5️⃣ Ejecutar el proyecto:

bash
Copiar código
npm run dev
🔐 Variables de entorno
El proyecto utiliza variables de entorno para Firebase.
Nunca se suben credenciales reales al repositorio.

Ejemplo (.env.example):

env
Copiar código
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
VITE_FIREBASE_PROJECT_ID=xxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxx
VITE_FIREBASE_APP_ID=xxxx
🔄 Funcionalidades implementadas
✔️ Simulación de cuota mensual

✔️ Formulario de solicitud controlado

✔️ Validaciones básicas

✔️ Guardado de solicitudes en Firestore

✔️ Manejo de estados de carga

✔️ Navegación con React Router

✔️ Componentes reutilizables

✔️ Persistencia de datos en la nube

📸 Capturas de pantalla
🏠 Página de inicio

📊 Simulador de crédito

📝 Formulario de solicitud

🔥 Firebase Firestore – Colección de solicitudes

🎥 Video demostrativo
📹 Video de demostración (3–4 minutos) donde se muestra:

Navegación de la app

Simulación de crédito

Envío de solicitud

Registro de datos en Firebase Console

(El enlace al video se entrega junto con el repositorio)

🧪 Pruebas realizadas
Creación de solicitudes

Verificación de documentos en Firestore

Manejo de errores de conexión

Pruebas de validación de formulario

📌 Notas finales
Este proyecto fue desarrollado con fines académicos.

El código refleja el aprendizaje del curso.

Firebase se utilizó dentro de los límites del plan gratuito.

© 2025 – CreditSmart | Desarrollado por Claudia Cabrera

yaml
Copiar código

---

## ✅ Qué te recomiendo hacer ahora

1️⃣ Crear la carpeta **`screenshots/`**  
2️⃣ Guardar las imágenes con estos nombres exactos:
- `inicio.png`
- `simulador.png`
- `solicitar.png`
- `firestore.png`
