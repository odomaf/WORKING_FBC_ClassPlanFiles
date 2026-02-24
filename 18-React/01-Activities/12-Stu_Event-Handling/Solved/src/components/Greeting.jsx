function Greeting() {
  // This function runs when a button is clicked.
  // It accepts a student name and displays a message.
  const welcomeStudent = (studentName) => {
    alert(`Welcome, ${studentName}!`);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Welcome the Students</h2>

      <div className="list-group">
        {/* 
          In React, onClick expects a FUNCTION.
          
          If we write:
            onClick={welcomeStudent('Avery')}
          
          the function runs immediately when the component renders.

          Instead, we wrap it in an arrow function:
            onClick={() => welcomeStudent('Avery')}

          This tells React:
            "Only run this function when the button is clicked."
        */}

        <button
          onClick={() => welcomeStudent("Avery")}
          className="list-group-item list-group-item-action"
          type="button">
          Avery
        </button>

        <button
          onClick={() => welcomeStudent("Jordan")}
          className="list-group-item list-group-item-action"
          type="button">
          Jordan
        </button>

        <button
          onClick={() => welcomeStudent("Kai")}
          className="list-group-item list-group-item-action"
          type="button">
          Kai
        </button>
      </div>
    </div>
  );
}

export default Greeting;
