import { useState } from "react";
import Welcome from "./components/Welcome";

export default function App() {
  // We keep auth state in the parent so it's easy to share later
  // (ex: navbar, profile menu, protected routes, etc.)
  const [loggedIn, setLoggedIn] = useState(false);

  // Prefer functional updates for toggles (avoids stale state issues)
  const toggleLoggedIn = () => setLoggedIn((prev) => !prev);

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">Conditional Rendering</h1>
        <p className="text-muted mb-0">
          Instructor demo: show different UI based on a boolean state value.
        </p>
      </header>

      <div className="card shadow-sm p-4">
        <Welcome loggedIn={loggedIn} onToggle={toggleLoggedIn} />
      </div>
    </div>
  );
}
