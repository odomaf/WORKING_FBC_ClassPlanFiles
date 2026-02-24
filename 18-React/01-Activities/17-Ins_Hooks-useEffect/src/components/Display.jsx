import { useEffect, useState } from "react";

const STORAGE_KEY = "week18_click_count";

export default function Display() {
  const [count, setCount] = useState(0);

  // ✅ Effect #1: Run ONCE after the first render (component "mounts")
  // Use case: reading from localStorage, loading initial data, setting up subscriptions
  useEffect(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    // localStorage stores strings — convert back to a number
    if (storedValue !== null) {
      setCount(parseInt(storedValue, 10));
    }
  }, []);

  // ✅ Effect #2: Run every time `count` changes
  // Use case: syncing state -> localStorage, updating the document title, saving to an API, etc.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(count));
  }, [count]);

  const handleIncrease = () => {
    // Functional update prevents stale state issues
    setCount((currentCount) => currentCount + 1);
  };

  const handleReset = () => {
    // Avoid clearing ALL localStorage — remove only what this demo owns
    localStorage.removeItem(STORAGE_KEY);
    setCount(0);
  };

  return (
    <div className="text-center">
      <h2 className="mb-3">Persistent Click Counter</h2>

      <p className="lead mb-1">
        You clicked <strong>{count}</strong> times
      </p>

      <p className="text-muted mb-4">
        Refresh the page — the count stays because we sync it to{" "}
        <code>localStorage</code>.
      </p>

      <div className="d-flex gap-2 justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrease}>
          Click Me
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleReset}>
          Reset
        </button>
      </div>

      <hr className="my-4" />

      <p className="small text-muted mb-0">
        Tip: Open DevTools → Application → Local Storage and look for{" "}
        <code>{STORAGE_KEY}</code>
      </p>
    </div>
  );
}
