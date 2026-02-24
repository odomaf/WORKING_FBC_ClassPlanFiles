// Importing the Hello component from the components folder.
// This allows us to use <Hello /> inside this file.
import Hello from "./components/Hello";

// The App component is the main component of our React application.
// It acts as a container for other components.
function App() {
  // Returning JSX that renders the Hello component.
  return <Hello />;
}

// Exporting App so it can be used in main.jsx.
export default App;
