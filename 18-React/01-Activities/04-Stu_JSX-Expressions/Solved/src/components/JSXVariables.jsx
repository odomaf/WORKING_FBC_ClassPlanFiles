// This component demonstrates how to use JSX expressions
// to dynamically render JavaScript variables.

function JSXVariables() {
  // A variable that stores a name
  const name = "Your Name Here";

  // A variable that stores a short reflection about React
  const thoughts =
    "React makes building user interfaces more organized and dynamic.";

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-primary">JSX Expressions in Action</h2>

          {/* Rendering the name variable inside JSX */}
          <p>
            <strong>Name:</strong> {name}
          </p>

          {/* Using a JavaScript expression to calculate the number of letters */}
          <p>
            <strong>Number of letters in my name:</strong> {name.length}
          </p>

          {/* Rendering another variable inside JSX */}
          <p>
            <strong>My thoughts on React:</strong> {thoughts}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
