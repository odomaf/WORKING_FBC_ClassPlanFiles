import { ADD_STUDENT, REMOVE_STUDENT } from "./actions";

// Reducer challenge:
// Use the action type to decide how state should change.
// Remember:
// 1. Do not mutate the original state
// 2. Always return a new state object
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT:
      // TODO:
      // Return a new state object that includes the new student
      return state;

    case REMOVE_STUDENT:
      // TODO:
      // Return a new state object with the matching student removed
      return state;

    default:
      return state;
  }
}
