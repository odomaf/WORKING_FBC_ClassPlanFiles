import SearchResultContainer from "./components/SearchResultContainer";

export default function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">Fetching Data with useEffect</h1>
        <p className="text-muted mb-0">
          Instructor demo: fetch GIF results from an API and render them in
          React.
        </p>
      </header>

      <div className="card shadow-sm p-4">
        <SearchResultContainer />
      </div>
    </div>
  );
}
