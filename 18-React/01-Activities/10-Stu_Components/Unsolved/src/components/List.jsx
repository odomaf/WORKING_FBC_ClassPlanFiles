// TODO: Receive props from App.jsx.
// You may use either props or destructuring.
export default function List(props) {
  return (
    <div className="container">
      <h1>Grocery List</h1>

      <ul className="list-group">
        {props.groceries.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
