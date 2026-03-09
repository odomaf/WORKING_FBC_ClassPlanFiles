import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from "./actions";
import createId from "./createId";

// Reducer pattern:
// reducer(currentState, action) -> newState
//
// This file is one of the main clues students should use
// to understand what each action type does.
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudentId = createId(state.students);
      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }

    case REMOVE_STUDENT: {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload,
        ),
      };
    }

    case UPDATE_STUDENT: {
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id,
      );

      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      const newStudentsList = [...state.students];
      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList,
      };
    }

    case ADD_MAJOR: {
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }

    case REMOVE_MAJOR: {
      return {
        ...state,
        majors: state.majors.filter((major) => major !== action.payload),
      };
    }

    default:
      return state;
  }
}
