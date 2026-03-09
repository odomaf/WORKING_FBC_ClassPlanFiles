import { useState } from "react";
import { useGlobalContext } from "../utils/GlobalState";

// ======================================================
// CAR FORM
// ------------------------------------------------------
// This component manages local form state.
// When submitted, it sends the new car to global state.
// ======================================================

export default function CarForm() {
  const { addCar } = useGlobalContext();

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic guard so we do not add blank rows
    if (
      !formData.make.trim() ||
      !formData.model.trim() ||
      !formData.year.trim()
    ) {
      return;
    }

    addCar({
      make: formData.make.trim(),
      model: formData.model.trim(),
      year: formData.year.trim(),
    });

    // Reset the form after a successful submission
    setFormData({
      make: "",
      model: "",
      year: "",
    });
  };

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="make"
        placeholder="Make"
        value={formData.make}
        onChange={handleChange}
      />

      <input
        type="text"
        name="model"
        placeholder="Model"
        value={formData.model}
        onChange={handleChange}
      />

      <input
        type="text"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
      />

      <button type="submit" className="btn-add">
        Add Car
      </button>
    </form>
  );
}
