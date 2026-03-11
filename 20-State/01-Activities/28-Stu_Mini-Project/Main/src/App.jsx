import "./App.css";
import Garage from "./components/Garage";

function App() {
  return (
    <div className="app-shell">
      <header className="page-header">
        <p className="eyebrow">React • useReducer</p>
        <h1>Garage Inventory Tracker</h1>
        <p className="page-description">
          Practice managing state with <code>useReducer</code> by adding and
          removing cars from a small inventory dashboard.
        </p>
      </header>

      <Garage />
    </div>
  );
}

export default App;
