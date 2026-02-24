import "../styles/Header.css";

// Importing a CSS file adds those styles to the page.

// React also supports inline styles.
// In JSX, the style attribute expects a JavaScript object (not a string).
// CSS property names are written in camelCase (ex: backgroundColor).
// Most values are strings (ex: '16px', '2rem').

const styles = {
  headerStyle: {
    background: "red",
  },
  headingStyle: {
    fontSize: "4rem",
  },
};

// We use JSX curly braces { } to apply the style objects.

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome</h1>
    </header>
  );
}

export default Header;
