// useState is a React Hook that lets a component "remember" data over time.
// When state changes, React re-renders the component so the UI stays up to date.
import { useState } from "react";

export default function Counter() {
  // useState returns an array with two values:
  // 1) the current state value (count)
  // 2) a function to update it (setCount)
  //
  // The argument passed to useState (0) is the initial value.
  const [count, setCount] = useState(0);

  // Event handlers run in response to user actions (like clicks).
  const handleClick = () => {
    // Use the "functional updater" form when the next state depends on the previous state.
    // This avoids stale values and works reliably even when React batches updates.
    setCount((prevCount) => {
      const nextCount = prevCount + 1;
      console.log(`New value of count: ${nextCount}`);
      return nextCount;
    });
  };

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Click Counter</div>

        <div className="card-body">
          <p className="card-text">Click Count: {count}</p>

          <button
            className="btn btn-primary"
            type="button"
            onClick={handleClick}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
