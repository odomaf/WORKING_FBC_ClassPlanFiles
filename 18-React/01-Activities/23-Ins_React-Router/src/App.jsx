import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";

export default function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">React Router</h1>
        <p className="text-muted mb-0">
          Instructor demo: change the URL to render different pages without a
          full refresh.
        </p>
      </header>

      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <NavTabs />
        </div>

        <main className="card-body">
          {/* Outlet is where the current route's page component will render */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
