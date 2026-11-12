 CreditSmart - Tablero Administrativo de Gestión Crediticia 💳

Plataforma web para la administración, filtrado y auditoría de solicitudes de crédito en tiempo real. El proyecto está construido sobre una arquitectura Serverless / BaaS utilizando React en el frontend y Google Cloud Firestore como base de datos NoSQL, garantizando la trazabilidad e inmutabilidad de los estados mediante reglas de seguridad en el servidor (firestore.rules).

🚀 Tecnologías y Herramientas

Frontend: React 18, Vite 5, React Router Dom 6

Backend & Persistence: Google Firebase Firestore (NoSQL, Serverless)

Entorno de Desarrollo Local: Firebase Local Emulator Suite

Requisitos del Sistema: Node.js (v18+), Java JDK 21+ (LTS)

🏛️ Arquitectura del Sistema y Máquina de Estados

El sistema implementa una máquina de estados finitos que gestiona el ciclo de vida de cada solicitud de crédito:

PENDIENTE ---> EN_REVISIÓN ---> {APROBADA ---> RECHAZADA}

Principios de Diseño:

Desacoplamiento de Servicios (solicitudes.js): La vista en React no interactúa directamente con la SDK de Firestore para modificaciones de estado, sino que delega la lógica al módulo de servicios.

Subcolección de Auditoría Inmutable (/historial): Cada cambio de estado registra un evento cronológico con justificación obligatoria.

Seguridad Server-Side (firestore.rules): Las transiciones de estado y la política de solo lectura/escritura acumulativa (append-only) de la subcolección de historial están validadas a nivel de servidor, impidiendo modificaciones arbitrarias desde el cliente.

⚙️ Requisitos Previos

Antes de ejecutar la aplicación localmente, asegúrate de contar con:

Java Development Kit (JDK) 21 o superior: Requerido por firebase-tools para ejecutar los emuladores locales.

Verifica la versión con: java -version

Node.js (v18 o superior):

Verifica la versión con: node -v

Firebase CLI instalado globalmente:

npm install -g firebase-tools



📦 Instalación y Configuración Local

Clonar el repositorio:

git clone https://github.com/claudia-source/CreditSmart.git
cd CreditSmart



Instalar dependencias:

npm install



Configurar las variables de entorno:
Verifica el archivo de configuración de Firebase (src/config.js o .env) para apuntar a tu proyecto o al emulador local.

🛠️ Comandos y Scripts Disponibles

Comando

Descripción

npm run dev

Inicia el servidor de desarrollo de Vite para el frontend.

npm run emulator

Inicia el emulador local de Firestore importando y exportando datos persistentes en ./emulator-data.

npm run build

Compila el proyecto para producción en la carpeta dist.

npm run preview

Previsualiza localmente el build compilado.

🔄 Flujo de Trabajo con Emuladores y Persistencia Local

Para no perder los datos de prueba entre sesiones del emulador:

Iniciar el emulador con persistencia:

npm run emulator



En una segunda terminal, iniciar la aplicación React:

npm run dev



Al finalizar la sesión de trabajo, presiona Ctrl + C en la terminal del emulador para guardar automáticamente los datos modificados en la carpeta ./emulator-data.

🔒 Despliegue de Reglas de Seguridad en Cloud

Si deseas publicar las reglas oficiales directamente en la consola de Firebase Cloud:

firebase deploy --only firestore:rules



🎓 Contexto Académico

Este proyecto forma parte del trabajo de grado en la modalidad de Sistematización de Experiencias (bajo la metodología de Oscar Jara Holliday) para los programas de Tecnología en Desarrollo de Software / Ingeniería de Software y Datos de la Institución Universitaria Digital de Antioquia (IU Digital).

Año: 2026

Institución: IU Digital de Antioquia - Medellín, Colombia.