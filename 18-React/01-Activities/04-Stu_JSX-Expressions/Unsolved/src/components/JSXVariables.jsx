function JSXVariables() {
  // TODO: Create a variable called "name" and assign it your name

  // TODO: Create a variable called "thoughts"
  // It should contain a short string describing your thoughts on React

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-primary">JSX Expressions in Action</h2>

          {/* TODO: Render the name variable below */}
          <p>
            <strong>Name:</strong>
          </p>

          {/* TODO: Render the number of letters in the name variable */}
          <p>
            <strong>Number of letters in my name:</strong>
          </p>

          {/* TODO: Render the thoughts variable below */}
          <p>
            <strong>My thoughts on React:</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
