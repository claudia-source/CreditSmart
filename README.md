💳 CreditSmart – Simulador y Solicitud de Créditos
Nombre del estudiante: CLAUDIA LILIANA CABRERA CABEZAS

Aplicación web desarrollada en React que permite:

Ver diferentes tipos de crédito disponibles.
Filtrar y ordenar créditos por tipo, tasa, monto y plazo.
Simular un crédito con cálculo de cuota mensual.
Diligenciar un formulario para solicitar crédito.
Navegar entre páginas usando React Router.
🧩 Descripción del proyecto
CreditSmart es una aplicación de simulación y solicitud de créditos.
Incluye:

Página de inicio con:
Hero de bienvenida
Filtros y tarjetas de créditos (CreditCard)
Sección “Por qué elegirnos”
Sección de contacto
Página de Simulador:
Tipo de crédito
Monto con formato COP
Plazo en meses
Cálculo de cuota mensual estimada
Enlace directo a la página de solicitud
Página de Solicitar:
Formulario controlado con useState
Datos personales, del crédito y laborales
Validaciones básicas
Confirmación de envío
🛠️ Tecnologías utilizadas
React (componentes funcionales)
Vite (entorno de desarrollo)
React Router DOM (navegación entre páginas)
JavaScript ES6+
HTML5 y CSS3
Hooks de React: useState, useEffect
Métodos de arrays: .map(), .filter(), .sort()
⚙️ Instrucciones de instalación
Clonar el repositorio:
git clone https://github.com/TU_USUARIO/credit-smart.git
cd credit-smart
ucativos.
Instalar dependencias:

npm install


Ejecutar en modo desarrollo:

npm run dev


Abrir en el navegador:

Normalmente: http://localhost:5173/

📂 Estructura principal del proyecto
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Hero.jsx
 │   ├─ CreditsList.jsx
 │   ├─ CreditCard.jsx
 │   ├─ WhyChooseUs.jsx
 │   ├─ ContactSection.jsx
 │   ├─ Footer.jsx
 │
 ├─ pages/
 │   ├─ SimulatorPage.jsx
 │   ├─ SolicitarPage.jsx
 │
 ├─ data/
 │   ├─ creditsData.js
 │
 ├─ styles/
 │   ├─ global.css
 │   ├─ Navbar.css
 │   ├─ SimulatorPage.css
 │   ├─ SolicitarPage.css
 │   ├─ WhyChoose.css
 │
 ├─ App.jsx
 ├─ main.jsx

📌 Funcionalidades clave (relacionadas con la rúbrica)
✅ Componentes y Props

CreditCard recibe title, rate, max, plazo, image como props.

CreditsList recorre creditsData con .map() para mostrar tarjetas.

✅ Manejo de Estado (useState)

Formularios controlados en:

SimulatorPage

SolicitarPage

Filtros y ordenamiento controlados en:

CreditsList

✅ Búsqueda y Filtros Dinámicos

Filtro por tipo de crédito.

Orden por:

Tasa más baja/alta

Monto más bajo/alto

Plazo más corto/largo

✅ Formulario Controlado

Página Solicitar:

Campos controlados con useState.

Validaciones básicas en el submit.

Uso de preventDefault para evitar recarga.

✅ Manipulación de Arrays

.map() para listar créditos.

.filter() para filtrar por tipo de crédito.

.sort() para ordenar por tasa, monto y plazo.

✅ Cálculo de Cuota Mensual

Fórmula implementada en SimulatorPage.

Actualización dinámica al cambiar monto/plazo/tipo.

Formato de moneda COP.

🖼️ Capturas de pantalla

Agrega aquí tus imágenes reales, por ejemplo:

screenshots/inicio.png – Página de inicio con tarjetas de crédito.

screenshots/simulador.png – Simulador de crédito.

screenshots/solicitar.png – Formulario de solicitud.

Ejemplo de inserción en Markdown:

![Inicio](screenshots/inicio.png)
![Simulador](screenshots/simulador.png)
![Solicitar](screenshots/solicitar.png)

🧾 Commits realizados

Ejemplos de commits (recomendado mínimo 8):

git commit -m "Configuración inicial de React con Vite"

git commit -m "Componente CreditCard creado con props"

git commit -m "Listado de créditos y filtros dinámicos"

git commit -m "Simulador de crédito con cálculo de cuota mensual"

git commit -m "Formulario de solicitud con validaciones básicas"

git commit -m "Estilos globales y diseño morado/blanco"

git commit -m "Navegación entre Inicio, Simulador y Solicitar"

git commit -m "Correcciones finales y documentación en README"


Con eso cubres TODOS los puntos que te piden del README ✅

---

## 5️⃣ Hacer los commits (mínimo 8)

En tu terminal, dentro de la carpeta del proyecto:

```bash
cd "C:\Users\KAROL DAYANA CABRERA\credit-smart"
git init
git add .
git commit -m "Configuración inicial de React con Vite"
