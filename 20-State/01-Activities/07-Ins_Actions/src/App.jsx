import { GlobalProvider } from "./utils/GlobalState";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import "./index.css";

// ======================================================
// APP
// ------------------------------------------------------
// This instructor example demonstrates the flow:
//
// Component -> dispatch(action) -> reducer -> new state
//
// The provider wraps the UI so child components can
// access global state using our custom context hook.
// ======================================================

function App() {
  return (
    <GlobalProvider>
      <div className="app-wrapper">
        <header className="page-header">
          <p className="eyebrow">React Context + Actions</p>
          <h1>Garage Inventory</h1>
          <p className="page-description">
            This example shows how actions and reducers work together to manage
            shared state in a React application.
          </p>
        </header>

        <section className="dashboard-card">
          <CarForm />
          <CarList />
        </section>
      </div>
    </GlobalProvider>
  );
}

export default App;
