import { useReducer, useState } from "react";
import reducer from "../utils/reducer";

// Initial garage inventory
const initialState = {
  cars: [
    { id: 1, make: "Honda", model: "Civic", year: "2008" },
    { id: 2, make: "Tesla", model: "Model Y", year: "2021" },
  ],
};

export default function Garage() {
  // useReducer returns current state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      id: Date.now(),
      ...form,
    };

    dispatch({
      type: "ADD_CAR",
      payload: newCar,
    });

    setForm({ make: "", model: "", year: "" });
  };

  const removeCar = (id) => {
    dispatch({
      type: "REMOVE_CAR",
      payload: id,
    });
  };

  return (
    <div>
      <h2>Garage Inventory</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="make"
          placeholder="Make"
          value={form.make}
          onChange={handleChange}
        />

        <input
          name="model"
          placeholder="Model"
          value={form.model}
          onChange={handleChange}
        />

        <input
          name="year"
          placeholder="Year"
          value={form.year}
          onChange={handleChange}
        />

        <button>Add Car</button>
      </form>

      {state.cars.map((car) => (
        <div key={car.id}>
          {car.year} {car.make} {car.model}
          <button onClick={() => removeCar(car.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
