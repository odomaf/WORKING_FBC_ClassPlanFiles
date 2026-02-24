import "../styles/Navbar.css";

// Importing a CSS file adds those styles to the page.
// We'll override some of those styles using inline styles.

const styles = {
  navbarStyle: {
    background: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "12px",
  },
};

// Apply the style object using curly braces { } on the JSX tag.

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
