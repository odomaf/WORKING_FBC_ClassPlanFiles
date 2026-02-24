import { useState } from "react";
import "./style.css";

import { checkPassword, validateEmail } from "../../utils/helpers";

export default function Form() {
  // Controlled input state
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Message displayed under the form
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") return setEmail(value);
    if (name === "username") return setUsername(value);
    if (name === "password") return setPassword(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Clear previous error
    setErrorMessage("");

    // 1️⃣ Prevent empty submissions
    if (!email || !username || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    // 2️⃣ Validate email format
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // 3️⃣ Validate password strength
    if (!checkPassword(password)) {
      setErrorMessage(
        "Password must be 8–15 characters, start with a letter, and contain only letters, numbers, and underscores.",
      );
      return;
    }

    // If everything is valid
    alert(`Welcome, ${username}!`);

    // 4️⃣ Clear form after success
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="text-center">
      <h2 className="mb-3">Create an Account</h2>
      <p className="text-muted mb-4">Controlled inputs + simple validation.</p>

      <form className="form mx-auto" onSubmit={handleFormSubmit}>
        <div className="mb-3 text-start">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className="form-control"
            value={username}
            name="username"
            onChange={handleInputChange}
            type="text"
            placeholder="pilotCoder99"
            autoComplete="username"
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="form-control"
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
            autoComplete="new-password"
          />
        </div>

        <button
          className="btn btn-primary w-100"
          type="submit"
          disabled={!email || !username || !password}>
          Submit
        </button>
      </form>

      {errorMessage && (
        <div className="mt-3">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
