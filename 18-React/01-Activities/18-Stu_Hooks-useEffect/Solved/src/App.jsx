import Thermostat from "./components/Thermostat";

export default function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Week 18 — React useEffect</h1>
        <p className="text-muted">Syncing React state with the browser.</p>
      </header>

      <div className="card shadow-sm p-4">
        <Thermostat />
      </div>
    </div>
  );
}
