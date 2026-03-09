import { createContext, useContext, useReducer } from "react";
import { ADD_STUDENT, REMOVE_STUDENT } from "./actions";
import createId from "./createId";
import reducer from "./reducers";

// Create the shared context object.
const StudentContext = createContext();

// Custom hook for cleaner access to the context.
// This also gives students a much clearer error if the provider is missing.
export const useStudentContext = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("useStudentContext must be used inside StudentProvider");
  }

  return context;
};

// Initial shared state for the reducer.
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

    dispatch({
      type: ADD_STUDENT,
      payload: newStudent,
    });
  };

  const removeStudent = (id) => {
    dispatch({
      type: REMOVE_STUDENT,
      payload: id,
    });
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
