// Importing the ReactList component so it can be rendered inside Hello.
import ReactList from "./ReactList";

// This is a functional React component.
// Components are reusable pieces of UI.
function Hello() {
  // This is a JavaScript variable that will be displayed inside JSX.
  const heading = "Learning How React Apps Work";

  return (
    <div>
      {/* JSX allows us to write HTML-like syntax inside JavaScript */}

      {/* The heading variable is inserted into JSX using curly braces {} */}
      <h2>{heading}</h2>

      {/* Below we are rendering another component inside this one.
          React components can be nested inside each other. */}
      {/* <ReactList /> */}
    </div>
  );
}

// Exporting this component so it can be used in App.jsx.
export default Hello;
