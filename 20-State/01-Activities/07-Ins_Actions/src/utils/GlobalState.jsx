import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers";
import { ADD_CAR, REMOVE_CAR } from "./actions";
import createId from "./createId";

// ======================================================
// GLOBAL CONTEXT
// ------------------------------------------------------
// Context lets us share data across multiple components
// without manually passing props through every level.
// ======================================================

const GlobalContext = createContext();

// Custom hook for easier access to the shared store
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used inside GlobalProvider");
  }

  return context;
};

// ======================================================
// INITIAL STATE
// ------------------------------------------------------
// This is the starting data for our app.
// ======================================================

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

// ======================================================
// GLOBAL PROVIDER
// ------------------------------------------------------
// This component wraps the app and provides:
// - shared state
// - functions that dispatch actions
// ======================================================

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // --------------------------------------------------
  // ADD CAR
  // --------------------------------------------------
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

  // --------------------------------------------------
  // REMOVE CAR
  // --------------------------------------------------
  const removeCar = (id) => {
    dispatch({
      type: REMOVE_CAR,
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cars: state.cars,
        addCar,
        removeCar,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
