// This component returns a styled list using Bootstrap classes.
function FeatureList() {
  return (
    <ul className="list-group list-group-flush mt-3">
      <li className="list-group-item">
        Applications are built from components
      </li>
      <li className="list-group-item">JSX combines JavaScript and markup</li>
      <li className="list-group-item">
        Variables can be displayed dynamically
      </li>
      <li className="list-group-item">
        Components can be nested inside each other
      </li>
    </ul>
  );
}

export default FeatureList;
