// ======================================================
// ACTION TYPES
// ------------------------------------------------------
// These constants act like labels for reducer updates.
//
// Instead of changing state directly, components
// dispatch an action object with a "type" and
// sometimes a "payload".
//
// Example:
// dispatch({
//   type: ADD_STUDENT,
//   payload: { id: 3, name: "Avery", major: "Engineering" }
// })
//
// The reducer reads the action type and decides
// how the application state should change.
// ======================================================

// ADD_STUDENT
// Expects:
// - a full student object in the payload
// Net effect on state:
// - adds that new student object to the students array
export const ADD_STUDENT = "ADD_STUDENT";

// REMOVE_STUDENT
// Expects:
// - a student id in the payload
// Net effect on state:
// - removes the student whose id matches the payload
export const REMOVE_STUDENT = "REMOVE_STUDENT";
