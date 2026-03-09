import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/garage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarProvider from "./utils/CarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CarProvider>
    <App />
  </CarProvider>,
);
