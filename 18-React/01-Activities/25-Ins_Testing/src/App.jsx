import { useState } from "react";
import Welcome from "./components/Welcome";

export default function App() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">Testing React Components</h1>
        <p className="text-muted mb-0">
          Instructor demo: render a component and assert what the user sees.
        </p>
      </header>

      <div className="card shadow-sm p-4">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label" htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Roger"
              autoComplete="name"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label" htmlFor="topic">
              What do you want to learn?
            </label>
            <input
              id="topic"
              className="form-control"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: React Testing"
            />
          </div>
        </div>

        <hr className="my-4" />

        <Welcome name={name} topic={topic} />
      </div>
    </div>
  );
}
