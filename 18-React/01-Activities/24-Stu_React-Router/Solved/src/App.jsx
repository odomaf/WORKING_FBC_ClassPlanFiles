import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">React Router — Student Lab</h1>
        <p className="text-muted mb-0">
          The URL controls which page component renders inside{" "}
          <code>Outlet</code>.
        </p>
      </header>

      <div className="card shadow-sm">
        <div className="card-header bg-dark">
          <Nav />
        </div>

        <main className="card-body">
          {/* ✅ Child routes render here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
