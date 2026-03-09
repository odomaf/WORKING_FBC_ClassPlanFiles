import { useEffect } from "react";
import { StudentProvider } from "./utils/StudentContext";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const pageTitle = "Student Roster Actions";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className="app-shell">
      <header className="page-header">
        <p className="eyebrow">React • Context • Actions</p>
        <h1>{pageTitle}</h1>
        <p className="page-description">
          Read the reducer logic, inspect the tests, and document what each
          action type expects and how it affects state.
        </p>
      </header>

      {/* The provider wraps components that need access to shared state. */}
      <StudentProvider>
        <StudentList />
      </StudentProvider>
    </div>
  );
}

export default App;
