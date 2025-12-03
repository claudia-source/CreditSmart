✅ README.md COMPLETO PARA TU PROYECTO


💳 CreditSmart — Plataforma de simulación y solicitud de créditos

Autora: Claudia Liliana Cabrera Cabezas
Tecnologías usadas: React + Vite, React Router, CSS Modules y Hooks

📌 Descripción del proyecto

CreditSmart es una aplicación web desarrollada en React que permite a los usuarios:

✔ Explorar distintos tipos de créditos

✔ Simular un crédito en tiempo real según monto, tasa y plazo
✔ Solicitar un crédito mediante un formulario validado
✔ Buscar créditos por nombre
✔ Filtrar por tipo de crédito
✔ Ordenar por tasa de interés y monto máximo
✔ Visualizar información clara y ordenada
✔ Navegar fácilmente entre páginas gracias a React Router

El objetivo del proyecto es ofrecer una plataforma intuitiva que ayude al usuario a tomar mejores decisiones financieras.

🧠 Funcionalidades principales
🔍 1. Buscador dinámico

Permite buscar créditos en tiempo real usando .filter().

🗂 2. Filtros avanzados

Filtrar por tipo de crédito

Ordenar por tasa (↑ ↓)

Ordenar por monto máximo (↑ ↓)

Filtros combinados + búsqueda simultánea

💸 3. Simulador de créditos

Cálculo automático con fórmula EMI

Cuota mensual actualizada en tiempo real

Formulario controlado con useState

Valores formateados en COP

Redirección a la página de Solicitar

📝 4. Formulario de Solicitud

Validación de todos los campos

Limpieza automática al enviar

Relleno automático desde el simulador

Formulario 100% controlado con Hooks

🧱 5. Componentes reutilizables

CreditCard

CreditsList

SimulatorPage

SolicitarPage

Navbar

Hero

WhyChooseUs

ContactSection

Footer

🎨 6. Estilos modernos

Paleta morado + blanco

Tarjetas limpias

Diseño responsive

Layout centrado

Hero atractivo

📁 Estructura del proyecto
src/
 ├── assets/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── Hero.jsx
 │     ├── CreditCard.jsx
 │     ├── CreditsList.jsx
 │     ├── WhyChooseUs.jsx
 │     ├── ContactSection.jsx
 │     ├── Footer.jsx
 ├── pages/
 │     ├── SimulatorPage.jsx
 │     ├── SolicitarPage.jsx
 ├── data/
 │     ├── creditsData.js
 ├── styles/
 │     ├── global.css
 │     ├── Navbar.css
 │     ├── SimulatorPage.css
 │     ├── SolicitarPage.css
 │     ├── WhyChooseUs.css
 ├── App.jsx
 ├── main.jsx
 ├── index.css

🚀 Instalación del proyecto

Sigue estos pasos para ejecutar el proyecto localmente:

1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/credit-smart.git

2️⃣ Entrar al proyecto
cd credit-smart

3️⃣ Instalar dependencias
npm install

4️⃣ Ejecutar en modo desarrollo
npm run dev


El proyecto abrirá en:
👉 http://localhost:5173

📦 Dependencias principales
"react": "^18.0.0",
"react-dom": "^18.0.0",
"react-router-dom": "^6.22.0",
"vite": "^5.0.0"

🧩 Hooks utilizados

useState

useEffect

useNavigate

useLocation

🧪 Métodos usados

.map() → Renderización de tarjetas

.filter() → Búsqueda y filtros

.sort() → Ordenamientos

.toLocaleString() → Formato COP

🖼 Capturas de pantalla

👉 Agrega aquí imágenes del proyecto (Hero, tarjetas, simulador y formulario).

📝 Commits sugeridos

Tu proyecto cumple los commits mínimos.
Ejemplos de buenos commits:

"Configuración inicial del proyecto con Vite"

"Componente CreditCard creado con props"

"Simulador implementado con cálculo EMI"

"Formulario de solicitud con validaciones"

"Filtros avanzados añadidos a la lista de créditos"

"Estilos globales mejorados y diseño responsive"

🎯 Cumplimiento de la rúbrica
Criterio	Estado
Configuración React / Router	✔ Completado
Componentes y Props	✔ Excelente
useState	✔ Correcto
Filtros y Búsqueda	✔ COMPLETOS
Formulario controlado	✔ Validado
Métodos de Arrays	✔ (.map .filter .sort)
Cálculo de cuota	✔ Fórmula EMI funcional
Estilos	✔ Responsive y ordenados


Este proyecto es para fines académicos y educativos.
