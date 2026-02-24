import Display from "./components/Display";

export default function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">React Hooks — useEffect</h1>
        <p className="text-muted mb-0">
          This demo shows two common useEffect patterns:
          <strong> run once on mount</strong> and{" "}
          <strong>run when state changes</strong>.
        </p>
      </header>

      <div className="card shadow-sm p-4">
        <Display />
      </div>
    </div>
  );
}
