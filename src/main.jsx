import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStateProvider } from "./GlobalStateContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStateProvider>
      <Router>
        <App />
      </Router>
    </GlobalStateProvider>
  </StrictMode>,
);
