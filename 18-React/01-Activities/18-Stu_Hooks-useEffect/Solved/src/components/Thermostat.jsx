import { useState, useEffect } from "react";

export default function Thermostat() {
  const [temp, setTemp] = useState(72);

  const handleIncrease = () => {
    setTemp((currentTemp) => currentTemp + 1);
  };

  const handleDecrease = () => {
    setTemp((currentTemp) => currentTemp - 1);
  };

  // 🔥 Effect runs AFTER render
  // It synchronizes React state → browser tab title
  useEffect(() => {
    document.title = `Current Temp: ${temp}°F`;
  }, [temp]); // Runs only when temp changes

  return (
    <div className="text-center">
      <h2 className="mb-4">Smart Thermostat</h2>

      <h3 className="display-5 mb-4">{temp}°F</h3>

      <div className="d-flex gap-2 justify-content-center">
        <button className="btn btn-primary" onClick={handleIncrease}>
          Increase
        </button>

        <button className="btn btn-outline-secondary" onClick={handleDecrease}>
          Decrease
        </button>
      </div>

      <p className="text-muted mt-4">
        The browser tab updates whenever temperature changes.
      </p>
    </div>
  );
}
