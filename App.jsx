// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditsList from "./components/CreditsList";
import WhyChooseUs from "./components/WhyChooseUs";  // 👈 IMPORTANTE
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import SimulatorPage from "./pages/SimulatorPage";
import SolicitarPage from "./pages/SolicitarPage";

import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Página de inicio */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChooseUs />
              <CreditsList />
              <ContactSection />
            </>
          }
        />

        {/* Página del simulador */}
        <Route path="/simulador" element={<SimulatorPage />} />

        {/* Página de solicitud */}
        <Route path="/solicitar" element={<SolicitarPage />} />
      </Routes>

      <Footer />
    </>
  );
}

