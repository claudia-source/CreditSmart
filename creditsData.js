// src/data/creditsData.js

import hipotecario from "../assets/logos/hipotecario.png";
import vehicular from "../assets/logos/vehicular.png";
import educativo from "../assets/logos/educativo.png";
import personal from "../assets/logos/personal.png";
import empresarial from "../assets/logos/empresarial.png";
import pyme from "../assets/logos/pyme.png";

const creditsData = [
  {
    id: 1,
    name: "Crédito Hipotecario",
    tipo: "vivienda",
    tasa: 0.009,
    max: 350000000,
    plazo: 240,
    image: hipotecario,
  },
  {
    id: 2,
    name: "Crédito Vehicular",
    tipo: "vehicular",
    tasa: 0.013,
    max: 150000000,
    plazo: 84,
    image: vehicular,
  },
  {
    id: 3,
    name: "Crédito Educativo",
    tipo: "educativo",
    tasa: 0.010,
    max: 80000000,
    plazo: 60,
    image: educativo,
  },
  {
    id: 4,
    name: "Crédito Personal",
    tipo: "personal",
    tasa: 0.018,
    max: 50000000,
    plazo: 60,
    image: personal,
  },
  {
    id: 5,
    name: "Crédito Empresarial",
    tipo: "empresarial",
    tasa: 0.015,
    max: 200000000,
    plazo: 120,
    image: empresarial,
  },
  {
    id: 6,
    name: "Crédito PyME",
    tipo: "pyme",
    tasa: 0.017,
    max: 120000000,
    plazo: 72,
    image: pyme,
  }
];

export default creditsData;

