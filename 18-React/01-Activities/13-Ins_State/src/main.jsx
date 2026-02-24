import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// createRoot mounts the React app to the <div id="root"> in index.html
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
