import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStateProvider } from "./GlobalStateContext.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStateProvider>
      <Router>
        <Route path="/" element={<App />} />
      </Router>
    </GlobalStateProvider>
  </StrictMode>,
);
