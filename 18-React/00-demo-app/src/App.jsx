import ProfileCard from "./components/ProfileCard";

// TODO: Create two variables:
// 1. A variable called "name"\
const name = "Anne"
// 2. A variable called "role"
const role = "Gremlin"

function App() {
  return (
    <>
      {/* TODO: Pass the name and role variables as props to ProfileCard */}
      <ProfileCard name={name} role={role} />
    </>
  );
}

export default App;
