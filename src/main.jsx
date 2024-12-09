import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import "./styles/shapeDivs.css";
import LandingPage from "./pages/LandingPage.jsx";
import LpAposentadoria from "./pages/LpAposentadoria.jsx";
import LpAutoPecas from "./pages/LpAutoPecas.jsx";
import LpMedicos from "./pages/LpMedicos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/lp" element={<LandingPage />} />
      <Route path="/aposentadoria" element={<LpAposentadoria />} />
      <Route path="/autopecas" element={<LpAutoPecas />} />
      <Route path="/medicos" element={<LpMedicos />} />
    </Routes>
  </Router>
);
