import { useState } from "react";
import { useStudentContext } from "../utils/StudentContext";

export default function StudentList() {
  // Pull shared state and shared actions from our custom hook.
  const { students, addStudent, removeStudent, majors } = useStudentContext();

  // Local state is used only for the form inputs.
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentMajor, setNewStudentMajor] = useState("");

  const handleAddStudent = () => {
    // Basic guard to prevent blank or placeholder submissions.
    if (!newStudentName.trim() || !newStudentMajor) {
      return;
    }

    addStudent({
      name: newStudentName.trim(),
      major: newStudentMajor,
    });

    // Reset the form after a successful add.
    setNewStudentName("");
    setNewStudentMajor("");
  };

  return (
    <section className="roster-card">
      <div className="toolbar">
        <input
          type="text"
          placeholder="Enter student name..."
          value={newStudentName}
          onChange={(event) => setNewStudentName(event.target.value)}
        />

        <select
          value={newStudentMajor}
          onChange={(event) => setNewStudentMajor(event.target.value)}>
          <option value="">Choose major...</option>
          {majors.map((major) => (
            <option key={major} value={major}>
              {major}
            </option>
          ))}
        </select>

        <button
          type="button"
          className="primary-btn"
          onClick={handleAddStudent}>
          Add Student
        </button>
      </div>

      {students.length ? (
        <div className="table-wrap">
          <table className="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Major</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <span className="major-badge">{student.major}</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => removeStudent(student.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="empty-state">No students yet. Add the first one above.</p>
      )}
    </section>
  );
}
