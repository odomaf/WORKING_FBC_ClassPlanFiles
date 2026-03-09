import { reducer } from "../utils/reducers";

const ADD_CAR = "ADD_CAR";
const REMOVE_CAR = "REMOVE_CAR";

const initialState = {
  cars: [
    {
      id: 101,
      make: "Toyota",
      model: "Camry",
      year: 2022,
    },
    {
      id: 102,
      make: "Tesla",
      model: "Model 3",
      year: 2023,
    },
  ],
};

test("ADD_CAR", () => {
  const newState = reducer(initialState, {
    type: ADD_CAR,
    payload: [
      {
        make: "Ford",
        model: "Mustang",
        year: 2021,
      },
    ],
  });

  // Original state should remain unchanged
  expect(initialState.cars.length).toBe(2);

  // New state should contain the new car
  expect(newState.cars.length).toBe(3);
});

test("REMOVE_CAR", () => {
  const newState = reducer(initialState, {
    type: REMOVE_CAR,
    payload: 101,
  });

  // Original state should remain unchanged
  expect(initialState.cars.length).toBe(2);

  // New state should remove the matching car
  expect(newState.cars.length).toBe(1);
});
