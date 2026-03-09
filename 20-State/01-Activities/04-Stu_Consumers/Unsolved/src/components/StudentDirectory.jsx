import { useStudentContext } from "../utils/StudentContext";

export default function StudentDirectory() {
  const { students, majors, addStudent, removeStudent, addMajor, removeMajor } =
    useStudentContext();

  return (
    <section className="card">
      <h3>Student Dashboard</h3>

      <p className="card-text">
        This component reads shared values and update functions from the
        StudentProvider using the <code>useStudentContext</code> hook.
      </p>

      <div className="button-row">
        <button className="btn" type="button" onClick={addStudent}>
          Add Student
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={removeStudent}>
          Remove Student
        </button>
        <button className="btn" type="button" onClick={addMajor}>
          Add Major
        </button>
        <button className="btn btn-danger" type="button" onClick={removeMajor}>
          Remove Major
        </button>
      </div>

      <div className="grid">
        <div>
          <h4>Students</h4>
          <ul className="student-list">
            {students.map((student) => (
              <li key={student.id} className="student-card">
                <strong>{student.name}</strong>
                <span>{student.major}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Majors</h4>
          <ul className="major-list">
            {majors.map((major) => (
              <li key={major} className="major-card">
                {major}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
