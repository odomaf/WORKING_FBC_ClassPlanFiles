// Greeting receives props from its parent (App).
// In this example we expect an onGreetAll function prop.
function Greeting(props) {
  // This handler is defined inside the child component.
  // It demonstrates that components can define their own event handlers too.
  const greetStudent = (studentName) => {
    alert(`Welcome, ${studentName}!`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="list-group text-center">
            {/* In React, we attach event handlers directly to elements using camelCase props like onClick */}
            <button
              onClick={props.onGreetAll}
              className="list-group-item list-group-item-action list-group-item-info"
              type="button">
              Greet the whole class
            </button>

            {/* You can also call a handler with a value by wrapping it in an arrow function */}
            <button
              onClick={() => greetStudent("Sam")}
              className="list-group-item list-group-item-action"
              type="button">
              Greet Sam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
