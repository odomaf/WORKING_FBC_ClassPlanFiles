import { ADD_CAR, REMOVE_CAR } from "./actions";
import createId from "./createId";

// Notice we moved the initial state object from our CarComponent to the reducer itself
const initalState = {
  cars: [
    {
      id: 1,
      make: "Honda",
      model: "Civic",
      year: "2008",
      isRunning: false,
    },
    {
      id: 2,
      make: "Tesla",
      model: "Y",
      year: "2021",
      isRunning: false,
    },
  ],
};

// A reducer decides how state changes based on the action it receives.
// Reducers should not mutate the old state directly.
// Instead, they return a brand-new state object.
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD_CAR:
      // TODO:
      // Return a new state object where action.payload
      // is added to the end of the cars array.
      return state;

    case REMOVE_CAR:
      // TODO:
      // Return a new state object where the car whose id
      // matches action.payload is removed from the cars array.
      return state;
    default: {
      return state;
    }
  }
}
