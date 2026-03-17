import React from "react";
import ReactDOM from "react-dom/client"; // ← new import
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>,

  // or more commonly:
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
