import ProfileCard from "./components/ProfileCard";

// Data defined in the parent component
const name = "Alex Rivera";
const role = "Frontend Developer";

function App() {
  return (
    <>
      {/* Passing data to the child component using props */}
      <ProfileCard name={name} role={role} />
    </>
  );
}

export default App;
