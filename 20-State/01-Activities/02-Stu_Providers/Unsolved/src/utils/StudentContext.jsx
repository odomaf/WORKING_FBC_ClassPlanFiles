import { createContext, useContext } from "react";

// TODO: 1 Create a context that will store shared student data.
const StudentContext = createContext();

// TODO: 2 Custom hook so components can read student data more easily.
export const useStudentContext = () => useContext(StudentContext);

// TODO: 3 Provider component that supplies shared student data to child components.
export const StudentProvider = ({ children }) => {
  const sharedState = {
    students: [
      {
        id: 1,
        name: "Alex Kim",
        major: "Computer Science",
      },
      {
        id: 2,
        name: "Jordan Lee",
        major: "Information Systems",
      },
      {
        id: 3,
        name: "Sam Rivera",
        major: "Software Engineering",
      },
      {
        id: 4,
        name: "Taylor Smith",
        major: "Data Science",
      }
    ],
  };

  return (
    <StudentContext.Provider value={sharedState}>
      {children}
    </StudentContext.Provider>
  );
};
