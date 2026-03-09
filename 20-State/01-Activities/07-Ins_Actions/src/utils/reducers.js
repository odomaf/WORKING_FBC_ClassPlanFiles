import { ADD_CAR, REMOVE_CAR } from "./actions";

// ======================================================
// REDUCER FUNCTION
// ------------------------------------------------------
// A reducer decides how state changes based on an action.
//
// Pattern:
// reducer(currentState, action) -> newState
//
// Rules:
// 1. Never mutate the original state directly
// 2. Always return a new state object
// 3. Use action.type to decide what update to make
// ======================================================

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,

        // Add the new car to the end of the array
        cars: [...state.cars, action.payload],
      };

    case REMOVE_CAR:
      return {
        ...state,

        // Keep every car except the one matching the id
        cars: state.cars.filter((car) => car.id !== action.payload),
      };

    default:
      // If we do not recognize the action, return state unchanged
      return state;
  }
}
