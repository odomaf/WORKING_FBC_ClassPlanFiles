// ======================================================
// GARAGE REDUCER
// ------------------------------------------------------
// A reducer decides how state changes based on the
// action it receives.
//
// Pattern:
// reducer(currentState, action) -> newState
//
// Your task:
// Complete the ADD_CAR and REMOVE_CAR cases below.
// ======================================================

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_CAR":
      // TODO:
      // Return a NEW state object where the new car from
      // action.payload is added to the end of the cars array.

      return state;

    case "REMOVE_CAR":
      // TODO:
      // Return a NEW state object where the car whose id
      // matches action.payload is removed from the cars array.

      return state;

    default:
      return state;
  }
}
