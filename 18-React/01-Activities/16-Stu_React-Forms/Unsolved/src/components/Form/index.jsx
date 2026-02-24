import { useState } from "react";
import "./style.css";

// Helpers provided for this activity
import { checkPassword, validateEmail } from "../../utils/helpers";

export default function Form() {
  // Controlled inputs: React state drives the UI
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  // Included so the starter code runs — students will wire it up
  const [password, setPassword] = useState("");

  // Display-friendly message under the form
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the correct piece of state based on the input's `name`
    if (name === "email") return setEmail(value);
    if (name === "username") return setUsername(value);

    // TODO 1: Wire up the password input
    // - When name is "password", update password state
    // if (name === "password") return setPassword(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Clear old errors before validating again
    setErrorMessage("");

    // TODO 2: Prevent empty submissions
    // If email/username/password is missing:
    // setErrorMessage("All fields are required.");
    // return;

    // TODO 3: Validate email format
    // If validateEmail(email) is false:
    // setErrorMessage("Please enter a valid email address.");
    // return;

    // TODO 4: Validate password strength
    // If checkPassword(password) is false:
    // setErrorMessage("Password must be 8–15 chars and only use letters, numbers, and underscores.");
    // return;

    // If everything is valid:
    alert(`Welcome, ${username}!`);

    // TODO 5: Clear all fields after successful submit
    // setEmail("");
    // setUsername("");
    // setPassword("");
  };

  return (
    <div className="text-center">
      <h2 className="mb-3">Create an Account</h2>
      <p className="text-muted mb-4">
        Practice controlled inputs + simple validation.
      </p>

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

        {/* TODO 1 (continued): Add a password input field
            Requirements:
            - value={password}
            - name="password"
            - type="password"
            - onChange={handleInputChange}
            - placeholder="Password"
            - autoComplete="new-password" (nice bonus)
        */}

        <button
          className="btn btn-primary w-100"
          type="submit"
          // Optional tiny UX bonus (no new React concept):
          // disabled={!email || !username || !password}
        >
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
