import "./App.css";
import BucketList from "./components/BucketList";

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1 className="app-title">QuestList</h1>
          <p className="app-subtitle">
            A bucket list with priorities, completion, and edits — built with
            React.
          </p>
        </div>

        <div className="app-badge" title="Mini Project">
          Mini Project
        </div>
      </header>

      <main className="app-card">
        <BucketList />
      </main>

      <footer className="app-footer">
        Week 18 — React Fundamentals • Think. Build. Launch.
      </footer>
    </div>
  );
}
