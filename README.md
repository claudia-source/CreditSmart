💳 CreditSmart – Plataforma de Créditos Inteligentes

Estudiante: Claudia Liliana Cabrera Cabezas
Curso: Desarrollo Web con React
Actividad: S40 – EA3 Integración con Backend Firebase

📌 Descripción del Proyecto

CreditSmart es una aplicación web desarrollada con React que permite a los usuarios:

Visualizar diferentes tipos de créditos disponibles

Simular créditos con cálculo automático de cuota mensual

Realizar solicitudes de crédito mediante un formulario controlado

Almacenar y consultar solicitudes en la nube usando Firebase Firestore

El proyecto implementa conceptos clave de desarrollo frontend moderno y persistencia de datos en la nube, completando el ciclo completo de una aplicación web.

🛠️ Tecnologías Utilizadas

React (Componentes funcionales y Hooks)

React Router DOM (Navegación entre páginas)

Vite (Entorno de desarrollo)

Firebase Firestore (Base de datos NoSQL)

JavaScript (ES6+)

HTML5

CSS3

Git & GitHub

📂 Estructura del Proyecto
credit-smart/
│
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/             # Páginas principales
│   ├── data/              # Datos de créditos
│   ├── firebase/          # Configuración Firebase
│   ├── styles/            # Estilos CSS
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── .env.example
├── .gitignore
├── package.json
└── README.md

🚀 Funcionalidades Principales
✔ Créditos Disponibles

Renderizado dinámico usando .map()

Datos almacenados en creditsData.js

Tarjetas reutilizables con props

✔ Simulador de Crédito

Selección de tipo de crédito

Cálculo automático de cuota mensual

Formato COP con separadores de miles

Redirección automática al formulario de solicitud

✔ Formulario de Solicitud

Formulario 100% controlado con useState

Validaciones de campos obligatorios

Formato automático de montos en COP

Limpieza del formulario tras envío exitoso

✔ Firebase Firestore

Guardado de solicitudes (addDoc)

Consulta de solicitudes (getDocs)

Manejo de errores con try-catch

Variables de entorno seguras

🔐 Seguridad

Las credenciales de Firebase se manejan mediante variables de entorno

Archivo .env excluido del repositorio

Se incluye .env.example sin datos sensibles

⚙️ Instalación y Ejecución

1️⃣ Clonar el repositorio

git clone https://github.com/tu-usuario/credit-smart.git


2️⃣ Instalar dependencias

npm install


3️⃣ Configurar variables de entorno
Crear un archivo .env en la raíz con:

VITE_FIREBASE_API_KEY=TU_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=TU_DOMINIO
VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=TU_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=TU_SENDER_ID
VITE_FIREBASE_APP_ID=TU_APP_ID


4️⃣ Ejecutar la aplicación

npm run dev

🧪 Pruebas Realizadas

Creación de solicitudes desde el formulario

Verificación de documentos en Firebase Console

Simulación de desconexión para manejo de errores

Navegación entre páginas

🎥 Video Demostrativo

📹 Duración: 3–4 minutos
Incluye:

Recorrido por la aplicación

Uso del simulador

Envío de solicitud

Visualización en Firebase Console

(Agregar enlace al video aquí)

📸 Capturas de Pantalla

📷 Pantalla de inicio
📷 Simulador de crédito
📷 Formulario de solicitud
📷 Firebase Console con colecciones

(Agregar imágenes o GIFs aquí)

📌 Commits Relevantes

Configuración inicial del proyecto con Vite

Componente CreditCard creado con props

Simulador con cálculo de cuota mensual

Formulario de solicitud con validaciones

Integración con Firebase Firestore

Lectura de solicitudes desde la base de datos

Estilos responsive actualizados

✅ Estado del Proyecto

✔ Funcional
✔ Integrado con Firebase
✔ Cumple criterios de evaluación
✔ Listo para sustentación

📚 Créditos

Proyecto desarrollado como parte del proceso de aprendizaje en React y Firebase.
Documentación utilizada:

React Docs

React Router Docs

Firebase Docs

MDN Web Docs