// =====================================================
// REDUCER FUNCTION
// -----------------------------------------------------
// A reducer is a function that decides how state
// changes based on an action.
//
// It always follows this pattern:
//
// reducer(currentState, action) -> newState
//
// Important rules:
// 1. Never modify the original state directly
// 2. Always return a NEW copy of the state
// =====================================================

import { ADD_CAR, REMOVE_CAR } from "./actions";

export default function reducer(state, action) {
  // action.type tells us what kind of update to perform
  switch (action.type) {
    // -------------------------------------------------
    // ADD CAR
    // -------------------------------------------------
    case ADD_CAR:
      return {
        ...state,

        // Add the new car to the end of the array
        cars: [...state.cars, action.payload],
      };

    // -------------------------------------------------
    // REMOVE CAR
    // -------------------------------------------------
    case REMOVE_CAR:
      return {
        ...state,

        // Keep all cars except the one with this id
        cars: state.cars.filter((car) => car.id !== action.payload),
      };

    // -------------------------------------------------
    // DEFAULT
    // -------------------------------------------------
    // If we receive an unknown action, just return
    // the current state unchanged
    default:
      return state;
  }
}
