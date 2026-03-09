// Import our custom hook so this component can consume shared theme data.
import { useTheme } from "../utils/ThemeContext";

// This component reads values from ThemeContext and reacts to changes.
export default function ThemePanel() {
  const { darkTheme, toggleTheme } = useTheme();

  // Stronger contrast so students clearly see the theme change.
  const panelStyles = {
    background: darkTheme
      ? "linear-gradient(135deg, #020617, #0f172a)"
      : "linear-gradient(135deg, #ffffff, #e2e8f0)",
    color: darkTheme ? "#f8fafc" : "#0f172a",
    border: darkTheme ? "2px solid #475569" : "2px solid #cbd5f5",
    boxShadow: darkTheme
      ? "0 10px 25px rgba(0,0,0,0.6)"
      : "0 10px 25px rgba(0,0,0,0.15)",
    padding: "2rem",
    borderRadius: "16px",
    marginTop: "1rem",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <h1>Theme Consumer Demo</h1>

      <p className="description">
        This component is consuming shared state from the ThemeProvider using
        our custom <code>useTheme</code> hook.
      </p>

      <button id="button" onClick={toggleTheme} className="btn" type="button">
        Toggle Theme
      </button>

      <section className="status">
        Current theme:
        <code className="status-code">
          {darkTheme ? " 🌙 Dark Mode" : " ☀️ Light Mode"}
        </code>
      </section>

      <div className="theme-panel" style={panelStyles}>
        <h2>{darkTheme ? "Dark Theme Active" : "Light Theme Active"}</h2>

        <p>
          When the button is clicked, the shared context value updates and this
          component re-renders with the new theme.
        </p>

        <p>
          This demonstrates how React Context allows multiple components to
          react to shared state changes.
        </p>
      </div>
    </>
  );
}
