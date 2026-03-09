import { useStudentContext } from "../utils/StudentContext";

export default function StudentDirectory() {
  const { students } = useStudentContext();

  return (
    <section className="card">
      <h3>Student Directory</h3>
      <p className="card-text">
        This component is reading shared data from the StudentProvider using the{" "}
        <code>useStudentContext</code> custom hook.
      </p>

      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-card">
            <strong>{student.name}</strong>
            <span>{student.major}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
