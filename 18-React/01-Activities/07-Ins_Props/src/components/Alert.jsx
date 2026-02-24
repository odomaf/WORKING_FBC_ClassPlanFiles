// This component accepts ONE argument: `props`.
// `props` is an object containing data passed down from the parent component.
// In this example, we expect to receive `message` and (optionally) `type`.
function Alert(props) {
  // Inspect what props looks like in the console
  console.log("Alert props:", props);

  // If no type is provided, we fall back to "success"
  const alertClass = `alert alert-${props.type || "success"}`;

  return (
    <div className={alertClass} role="alert">
      {props.message}
    </div>
  );
}

export default Alert;
