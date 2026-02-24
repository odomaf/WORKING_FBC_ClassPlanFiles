// ReactDOM is responsible for rendering our React application into the browser.
import ReactDOM from "react-dom/client";

// App is our top-level React component.
import App from "./App.jsx";

// createRoot tells React where our application should be mounted in the HTML.
// We pass in the DOM element with the id of "root" from index.html.
ReactDOM.createRoot(document.getElementById("root")).render(
  // The render method tells React what component to display.
  <App />,
);
