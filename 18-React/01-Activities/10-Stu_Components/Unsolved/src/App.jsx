import List from "./components/List";
import Nav from "./components/Nav";
import users from "./users";

// App is the top-level component of the application.
// TODO: Pass the users data to the List component as props.
function App() {
  return (
    <div>
      <Nav />

      {/* TODO: Add the users prop below */}
      <List />
    </div>
  );
}

export default App;
