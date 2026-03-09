import { useStudentContext } from "../utils/StudentContext";

export default function StudentStats() {
  const { students, majors } = useStudentContext();

  return (
    <section className="stats-row">
      <div className="stat-card">
        <h3>{students.length}</h3>
        <p>Students in Shared State</p>
      </div>

      <div className="stat-card">
        <h3>{majors.length}</h3>
        <p>Majors in Shared State</p>
      </div>
    </section>
  );
}
