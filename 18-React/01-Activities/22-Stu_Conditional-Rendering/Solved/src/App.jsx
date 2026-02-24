import PortfolioContainer from "./components/PortfolioContainer";

export default function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">Conditional Rendering</h1>
        <p className="text-muted mb-0">
          Solved example with clear comments you can demo from.
        </p>
      </header>

      <div className="card shadow-sm p-4">
        <PortfolioContainer />
      </div>
    </div>
  );
}
