import { createContext, useContext, useReducer } from "react";
import { ADD_STUDENT, REMOVE_STUDENT } from "./actions";
import createId from "./createId";
import reducer from "./reducers";

const StudentContext = createContext();

export const useStudentContext = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("useStudentContext must be used inside StudentProvider");
  }

  return context;
};

const initialState = {
  students: [
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
  ],
  majors: [
    "Mathematics",
    "Computer Science",
    "Data Science",
    "Art",
    "English",
    "Political Science",
    "Journalism",
    "Engineering",
  ],
};

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addStudent = (student) => {
    if (!student.name.trim() || !student.major) {
      return;
    }

    const newStudent = {
      ...student,
      id: createId(state.students),
    };

    // TODO:
    // Dispatch an ADD_STUDENT action with newStudent as the payload
  };

  const removeStudent = (id) => {
    // TODO:
    // Dispatch a REMOVE_STUDENT action with the id as the payload
  };

  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        majors: state.majors,
        addStudent,
        removeStudent,
      }}>
      {children}
    </StudentContext.Provider>
  );
};
