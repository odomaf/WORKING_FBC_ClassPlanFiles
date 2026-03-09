// ======================================================
// ACTION TYPES
// ------------------------------------------------------
// Actions are plain objects that describe what happened
// in the app.
//
// Instead of changing state directly, components call
// helper functions that DISPATCH actions to the reducer.
//
// Example:
// dispatch({
//   type: ADD_CAR,
//   payload: { id: 3, make: "Ford", model: "Mustang", year: "2016" }
// })
// ======================================================

// Add a new car to the garage inventory
export const ADD_CAR = "ADD_CAR";

// Remove a car by id
export const REMOVE_CAR = "REMOVE_CAR";
