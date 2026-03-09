import { useState } from "react";
import { useCar } from "./utils/CarContext";
import CarComponent from "./components/CarComponent";

// =====================================================
// MAIN APP
// =====================================================

function App() {
  const { cars, addCar } = useCar();

  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addCar(form);

    setForm({
      make: "",
      model: "",
      year: "",
    });
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">🚗 Garage Inventory</h1>

      {/* ADD CAR FORM */}

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

        <button className="btn-add">Add</button>
      </form>

      {/* CAR LIST */}

      {cars.map((car) => (
        <CarComponent key={car.id} car={car} />
      ))}
    </div>
  );
}

export default App;
