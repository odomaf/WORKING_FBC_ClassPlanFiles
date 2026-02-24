export default function ResultList({ results, isLoading }) {
  if (isLoading) {
    return <p className="text-muted">Loading results...</p>;
  }

  if (!results.length) {
    return <p className="text-muted">No results yet. Try a new search.</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {results.map((result) => (
        <div className="col" key={result.id}>
          <div className="card h-100">
            <img
              className="card-img-top"
              src={result.images?.fixed_width?.url}
              alt={result.title || "Giphy result"}
            />
            <div className="card-body">
              <p className="card-text small mb-0">
                {result.title ? result.title : "Untitled GIF"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
