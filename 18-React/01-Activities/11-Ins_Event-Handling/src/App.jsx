// Import the Greeting component so App can render it
import Greeting from "./components/Greeting";

// App is the top-level component.
// It defines an event handler and passes it down to a child component as a prop.
function App() {
  // Event handlers in React receive an event object (a SyntheticEvent).
  const handleGreetAll = (event) => {
    console.log("Click event:", event);
    alert("Welcome to event handling in React!");
  };

  // Pass the handler to Greeting using a prop that follows React naming conventions (onX)
  return <Greeting onGreetAll={handleGreetAll} />;
}

export default App;
