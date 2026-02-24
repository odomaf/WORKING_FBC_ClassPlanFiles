// This component receives data from App.jsx using props.
// We destructure the `users` prop so we can use it directly (instead of writing props.users).
export default function List({ users }) {
  return (
    <div className="container">
      <h1>User List</h1>

      <ul className="list-group">
        {/* map() loops over the users array and returns a new array of <li> elements */}
        {users.map((user) => (
          <li className="list-group-item" key={user.login.uuid}>
            {`${user.name.first} ${user.name.last} (${user.login.username})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
