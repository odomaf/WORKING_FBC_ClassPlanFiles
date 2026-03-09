import { createContext, useContext, useState } from "react";

export const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);

export default function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    { id: 1, name: "Alex Kim", major: "Computer Science" },
    { id: 2, name: "Jordan Lee", major: "Information Systems" },
    { id: 3, name: "Sam Rivera", major: "Software Engineering" },
  ]);

  const [majors, setMajors] = useState([
    "Computer Science",
    "Information Systems",
    "Software Engineering",
    "Art",
  ]);

  const addStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: `New Student ${students.length + 1}`,
      major: majors[students.length % majors.length],
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const removeStudent = () => {
    setStudents((prevStudents) => prevStudents.slice(0, -1));
  };

  const addMajor = () => {
    const newMajor = `Major ${majors.length + 1}`;
    setMajors((prevMajors) => [...prevMajors, newMajor]);
  };

  const removeMajor = () => {
    setMajors((prevMajors) => prevMajors.slice(0, -1));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        majors,
        addStudent,
        removeStudent,
        addMajor,
        removeMajor,
      }}>
      {children}
    </StudentContext.Provider>
  );
}
