import PortfolioContainer from "./components/PortfolioContainer";

export default function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">Conditional Rendering</h1>
        <p className="text-muted mb-0">
          Student activity: add comments that explain how tabs + conditional
          rendering works.
        </p>
      </header>

      <div className="card shadow-sm p-4">
        <PortfolioContainer />
      </div>
    </div>
  );
}
