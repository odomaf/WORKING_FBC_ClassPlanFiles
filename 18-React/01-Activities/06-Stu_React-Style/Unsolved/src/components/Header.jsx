// Importing a CSS file loads those styles into the page.
import "../styles/Header.css";

// TODO: Create a styles object named "styles".
// It should contain style objects for:
//   1) the <header>
//   2) the <h1>

function Header() {
  // TODO: Add a style attribute to the <header> and the <h1>.
  // Hint: style expects a JavaScript object, not a string.

  return (
    <header className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
