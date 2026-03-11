// ======================================================
// GARAGE REDUCER
// ------------------------------------------------------
// A reducer decides how application state changes
// based on the action it receives.
//
// Pattern:
//
// reducer(currentState, action) -> newState
//
// Important Rules:
//
// 1. Never mutate the existing state
// 2. Always return a NEW state object
// 3. Use action.type to determine the update
// ======================================================

export default function reducer(state, action) {
  switch (action.type) {
    // --------------------------------------------------
    // ADD CAR
    // --------------------------------------------------
    // Expects:
    // action.payload = new car object
    //
    // Effect:
    // adds the new car to the garage list
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };

    // --------------------------------------------------
    // REMOVE CAR
    // --------------------------------------------------
    // Expects:
    // action.payload = car id
    //
    // Effect:
    // removes the matching car from the list
    case "REMOVE_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };

    case "START_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id == action.payload),
      };

    case "STOP_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id == action.payload),
      };

  
    default:
      return state;
  }
}
