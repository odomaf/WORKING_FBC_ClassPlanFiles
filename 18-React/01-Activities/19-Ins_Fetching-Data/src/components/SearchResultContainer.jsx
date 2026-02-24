import { useEffect, useState } from "react";
import ResultList from "./ResultList";
import searchGifs from "../utils/API";

export default function SearchResultContainer() {
  // Results returned from the API
  const [results, setResults] = useState([]);

  // Controlled input state (what the user types)
  const [query, setQuery] = useState("kittens");

  // Helpful UI state for demos
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch helper (keeps our effects & handlers clean)
  const runSearch = async (searchTerm) => {
    try {
      setErrorMessage("");
      setIsLoading(true);

      const response = await searchGifs(searchTerm);
      setResults(response.data.data);
    } catch (error) {
      setErrorMessage(
        "Something went wrong while fetching data. Check your API key or internet connection.",
      );
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Effect: run once on page load (initial data)
  useEffect(() => {
    runSearch("kittens");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic guard (keeps demo smooth)
    if (!query.trim()) {
      setErrorMessage("Please type something to search.");
      return;
    }

    runSearch(query.trim());
  };

  return (
    <div>
      <form className="mb-4" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="query">
          Search Giphy
        </label>

        <div className="d-flex gap-2">
          <input
            id="query"
            className="form-control"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: aviation, coding, react, pizza..."
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>

        {errorMessage && (
          <p className="text-danger mt-2 mb-0">{errorMessage}</p>
        )}
      </form>

      <ResultList results={results} isLoading={isLoading} />
    </div>
  );
}
