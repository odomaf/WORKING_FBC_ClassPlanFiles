import { useEffect } from "react";
import { StudentProvider } from "./utils/StudentContext";
import StudentDirectory from "./components/StudentDirectory";
import "./App.css";

function App() {
  const title = "Activity 2: Shared State with Context";

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <main className="app">
      <h1>Unit 20: React State</h1>
      <h2 className="subtitle">{title}</h2>

      <p className="intro">
        In this example, a provider shares student data with child components so
        we can access the same information across the app without passing props
        through every level.
      </p>

      {/* The provider makes shared student data available to anything inside it. */}
      <StudentProvider>
        <StudentDirectory />
      </StudentProvider>
    </main>
  );
}

export default App;
