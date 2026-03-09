import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers";
import { ADD_CAR, REMOVE_CAR } from "./actions";
import createId from "./createId";

// =====================================================
// CONTEXT SETUP
// -----------------------------------------------------
// React Context lets us share state across multiple
// components without passing props everywhere.
//
// Think of this as a global "Car Store"
// =====================================================

export const CarContext = createContext();

// Custom hook so components can easily access the store
export const useCar = () => useContext(CarContext);

// =====================================================
// INITIAL STATE
// -----------------------------------------------------
// This is the starting data in our application
// =====================================================

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

// =====================================================
// PROVIDER COMPONENT
// -----------------------------------------------------
// This wraps our app and provides access to:
// - state
// - dispatch functions
// =====================================================

export default function CarProvider({ children }) {
  // useReducer manages state using our reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  // -------------------------------------------------
  // ADD CAR FUNCTION
  // -------------------------------------------------
  const addCar = (car) => {
    const newCar = {
      ...car,
      id: createId(state.cars),
    };

    dispatch({
      type: ADD_CAR,
      payload: newCar,
    });
  };

  // -------------------------------------------------
  // REMOVE CAR FUNCTION
  // -------------------------------------------------
  const removeCar = (id) => {
    dispatch({
      type: REMOVE_CAR,
      payload: id,
    });
  };

  return (
    <CarContext.Provider
      value={{
        cars: state.cars,
        addCar,
        removeCar,
      }}>
      {children}
    </CarContext.Provider>
  );
}
