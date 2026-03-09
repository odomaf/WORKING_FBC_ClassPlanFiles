import { createContext, useContext, useState } from "react";
import createId from "./createId";

// Create a context object for our student data.
const StudentContext = createContext();

// Custom hook for easier access to the context value.
export const useStudentContext = () => useContext(StudentContext);

// The provider owns the shared student state and exposes
// helper functions that child components can use.
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Avery Smith",
      major: "Computer Science",
    },
    {
      id: 2,
      name: "Jordan Lee",
      major: "Data Science",
    },
  ]);

  // Add a new student to the current list.
  const addStudent = (student) => {
    const id = createId(students);
    const newStudent = { ...student, id };

    setStudents([...students, newStudent]);
  };

  // Remove the student whose id matches the provided id.
  const removeStudent = (id) => {
    const newStudentsList = students.filter((student) => student.id !== id);
    setStudents(newStudentsList);
  };

  // Available major options for the dropdown menu.
  const majors = [
    "Mathematics",
    "Computer Science",
    "Art",
    "English",
    "Political Science",
    "Journalism",
    "Engineering",
  ];

  return (
    <StudentContext.Provider
      value={{ students, addStudent, removeStudent, majors }}>
      {children}
    </StudentContext.Provider>
  );
};
