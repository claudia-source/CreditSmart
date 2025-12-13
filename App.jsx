import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditsList from "./components/CreditsList";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import SimulatorPage from "./pages/SimulatorPage";
import SolicitarPage from "./pages/SolicitarPage";
import MisSolicitudesPage from "./pages/MisSolicitudesPage";

import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
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

        <Route path="/simulador" element={<SimulatorPage />} />
        <Route path="/solicitar" element={<SolicitarPage />} />
        <Route path="/mis-solicitudes" element={<MisSolicitudesPage />} />
      </Routes>

      <Footer />
    </>
  );
}


