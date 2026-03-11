import { useReducer, useState } from "react";
import reducer from "../utils/reducer";
import { ADD_CAR, REMOVE_CAR } from "../utils/actions";

// Starting data shown when the page first loads.
// This gives students something to see right away.
const initialState = {
  cars: [
    { id: 1, make: "Honda", model: "Civic", year: "2008" },
    { id: 2, make: "Tesla", model: "Model Y", year: "2021" },
  ],
};

export default function Garage() {
  // useReducer manages the car inventory state
  const [state, dispatch] = useReducer(reducer, initialState);

  // useState is still useful for temporary form input values
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
  });

  // Update one form field at a time based on the input name
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Build a new car object and send it to the reducer
  const handleSubmit = (event) => {
    event.preventDefault();

    // Prevent blank submissions
    if (!form.make.trim() || !form.model.trim() || !form.year.trim()) {
      return;
    }

    const newCar = {
      id: Date.now(),
      make: form.make.trim(),
      model: form.model.trim(),
      year: form.year.trim(),
    };

    dispatch({
      type: ADD_CAR,
      payload: newCar,
    });

    // Clear the form after a successful submission
    setForm({
      make: "",
      model: "",
      year: "",
    });
  };

  // Send the id of the car we want to remove
  const removeCar = (id) => {
    dispatch({
      type: REMOVE_CAR,
      payload: id,
    });
  };

  return (
    <section className="dashboard-card">
      <h2 className="section-heading">Inventory Dashboard</h2>

      <form className="car-form" onSubmit={handleSubmit}>
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

        <button type="submit" className="btn-add">
          Add Car
        </button>
      </form>

      {state.cars.length ? (
        <div className="car-list">
          {state.cars.map((car) => (
            <article className="car-card" key={car.id}>
              <div className="car-details">
                <h3>
                  {car.year} {car.make} {car.model}
                </h3>
                <p>Inventory ID: {car.id}</p>
              </div>

              <button
                type="button"
                className="btn-remove"
                onClick={() => removeCar(car.id)}>
                Remove
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No cars in the garage yet. Add one above.</p>
        </div>
      )}
    </section>
  );
}
