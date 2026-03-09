import { useEffect } from "react";
import "./App.css";
import StudentDirectory from "./components/StudentDirectory";
import StudentStats from "./components/StudentStats";
import StudentProvider from "./utils/StudentContext";

export default function App() {
  useEffect(() => {
    document.title = "Unit 20: Updating Shared State";
  }, []);

  return (
    <StudentProvider>
      <main className="app">
        <h1>Unit 20: Shared State with Context</h1>
        <h2 className="subtitle">Access and Update Shared Data</h2>

        <p className="intro">
          In this activity, components use React Context to read and update
          shared state without passing props through every level of the app.
        </p>

        <StudentStats />
        <StudentDirectory />
      </main>
    </StudentProvider>
  );
}
