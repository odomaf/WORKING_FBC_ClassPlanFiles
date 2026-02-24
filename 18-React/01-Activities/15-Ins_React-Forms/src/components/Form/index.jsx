import { useState } from "react";
import "./style.css";

export default function Form() {
  // Instead of separate state variables,
  // we use one object to store all form fields.
  // This scales better as forms grow.
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
  });

  // Destructure for cleaner JSX usage
  const { firstName, lastName } = formState;

  // This function handles ALL input changes
  // It uses the input's "name" attribute
  // to update the correct property in state.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation example
    if (!firstName || !lastName) {
      alert("Please fill out both fields.");
      return;
    }

    alert(`Welcome ${firstName} ${lastName}!`);

    // Reset form
    setFormState({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <>
      <h2 className="mb-3">Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            autoComplete="given-name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
    </>
  );
}
