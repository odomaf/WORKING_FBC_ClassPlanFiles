import ReactList from "./ReactList";

// TODO: Add a comment explaining what a React component is
function Hello() {
  const heading = "Learning How React Apps Work";

  return (
    <div>
      {/* TODO: Explain what JSX is */}

      <h2>{heading}</h2>

      {/* TODO: Explain what is happening when we render <ReactList /> */}
      <ReactList />
    </div>
  );
}

// TODO: Explain why this export is necessary
export default Hello;
