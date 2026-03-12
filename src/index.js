import React from "react";
import ReactDOM from "react-dom/client"; // ← new import
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />,
  // or more commonly:
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
