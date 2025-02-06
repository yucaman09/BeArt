import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import BeartApp from "./BeartApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <BeartApp />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>
);
