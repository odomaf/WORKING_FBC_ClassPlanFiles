// Import the Alert component from the components folder
import Alert from "./components/Alert";

// These values will be passed down to the Alert component as props
const message = "Heads up: Your session will expire soon.";
const alertType = "warning";

// App is the parent component.
// It renders <Alert /> and passes data down using props.
function App() {
  return (
    <>
      {/* Alert with BOTH props (type + message) */}
      <Alert type={alertType} message={message} />

      {/* Alert with ONLY message (type will fall back to the default in Alert.jsx) */}
      <Alert message="Success: Your changes were saved." />
    </>
  );
}

export default App;
