// Importing a CSS file loads those styles into the page.
import "../styles/Navbar.css";

// TODO: Create a styles object named "styles".
// It should contain a style object for the <nav>.

function Navbar() {
  // TODO: Add a style attribute to the <nav>.
  return (
    <nav className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
