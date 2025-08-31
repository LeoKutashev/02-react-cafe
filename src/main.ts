import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // @ts-ignore
  <React.StrictMode>
    // @ts-ignore
    <App />
    // @ts-ignore
  </React.StrictMode>
);
