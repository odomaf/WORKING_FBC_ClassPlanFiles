import reducer from "../utils/reducers";
import { ADD_CAR, REMOVE_CAR } from "../utils/actions";

const initialState = {
  cars: [
    {
      id: 1,
      make: "Honda",
      model: "Civic",
      year: "2008",
    },
    {
      id: 2,
      make: "Tesla",
      model: "Model Y",
      year: "2021",
    },
  ],
};

test("ADD_CAR adds a new car to state", () => {
  const newCar = {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: "2016",
  };

  const newState = reducer(initialState, {
    type: ADD_CAR,
    payload: newCar,
  });

  expect(initialState.cars.length).toBe(2);
  expect(newState.cars.length).toBe(3);
  expect(newState.cars[2]).toEqual(newCar);
});

test("REMOVE_CAR removes the matching car from state", () => {
  const newState = reducer(initialState, {
    type: REMOVE_CAR,
    payload: 1,
  });

  expect(initialState.cars.length).toBe(2);
  expect(newState.cars.length).toBe(1);
  expect(newState.cars[0].id).toBe(2);
});

test("unknown action returns the existing state", () => {
  const newState = reducer(initialState, {
    type: "UNKNOWN_ACTION",
  });

  expect(newState).toEqual(initialState);
});
