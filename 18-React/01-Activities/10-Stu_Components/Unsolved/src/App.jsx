import List from "./components/List";
import Nav from "./components/Nav";

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];

// App is the top-level component of the application.
// TODO: Pass the users data to the List component as props.
function App() {
  return (
    <div>
      <Nav />
      <List groceries={groceries} />
    </div>
  );
}

export default App;
