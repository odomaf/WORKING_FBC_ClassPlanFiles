function Greeting() {
  // welcomeStudent takes a student name and shows an alert message.
  const welcomeStudent = (studentName) => {
    alert(`Welcome, ${studentName}!`);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Welcome the Students</h2>

      <div className="list-group">
        {/* TODO:
            Fix the onClick handlers so the alert only runs when a button is clicked.
            Remember: onClick expects a function — not the RESULT of calling a function.
        */}

        <button
          onClick={welcomeStudent("Avery")}
          className="list-group-item list-group-item-action"
          type="button">
          Avery
        </button>

        <button
          onClick={welcomeStudent("Jordan")}
          className="list-group-item list-group-item-action"
          type="button">
          Jordan
        </button>

        <button
          onClick={welcomeStudent("Kai")}
          className="list-group-item list-group-item-action"
          type="button">
          Kai
        </button>
      </div>
    </div>
  );
}

export default Greeting;
