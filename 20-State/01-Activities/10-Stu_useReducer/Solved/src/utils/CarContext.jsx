import { createContext, useState, useContext } from "react";
import createId from "./createId";

// Create a Context object.
// This will allow components anywhere in our app to access the car data.
export const CarContext = createContext();
// React Context allows us to share state between components
// without passing props down through multiple layers (prop drilling).

// Custom hook to make accessing the context easier.
// Instead of writing useContext(CarContext) everywhere,
// components can simply call useCar().
export const useCar = () => useContext(CarContext);

// Provider component that wraps our app
// and shares global car state with all child components.
export default function CarProvider({ children }) {
  const [cars, setCars] = useState([
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
  ]);

  // Adds a new car to the garage
  const addCar = (car) => {
    const newCar = {
      ...car,
      id: createId(cars),
      isRunning: false,
    };

    setCars((prevCars) => [...prevCars, newCar]);
  };

  // Removes a car from the garage
  const removeCar = (id) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== id));
  };

  // Marks a car as running
  const startCar = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, isRunning: true } : car,
      ),
    );
  };

  // Marks a car as stopped
  const stopCar = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, isRunning: false } : car,
      ),
    );
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        addCar,
        removeCar,
        startCar,
        stopCar,
      }}>
      {children}
    </CarContext.Provider>
  );
}
