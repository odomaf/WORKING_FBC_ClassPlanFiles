import { useEffect } from "react";
import { StudentProvider } from "./utils/StudentContext";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const pageTitle = "Student Roster Dashboard";

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div className="app-shell">
      <header className="page-header">
        <p className="eyebrow">React • Context • Reducers</p>
        <h1>{pageTitle}</h1>
        <p className="page-description">
          Manage a simple roster with shared state using Context and useReducer.
        </p>
      </header>

      {/* 
        The provider wraps the components that need access to our shared state.
        Anything inside StudentProvider can use the useStudentContext hook.
      */}
      <StudentProvider>
        <StudentList />
      </StudentProvider>
    </div>
  );
}

export default App;
