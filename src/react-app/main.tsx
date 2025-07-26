import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App.tsx";
import Footer from "./Footer.tsx";
import DataSources from "./DataSources.tsx";
import About from "./About.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/datasources" element={<DataSources />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
