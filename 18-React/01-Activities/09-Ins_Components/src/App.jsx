import List from "./components/List";
import Nav from "./components/Nav";

// Import a static list of sample users (local data)
import users from "./users";

// App composes our UI by rendering Nav and passing users into List as props.
export default function App() {
  return (
    <div>
      <Nav />
      <List users={users} />
    </div>
  );
}
