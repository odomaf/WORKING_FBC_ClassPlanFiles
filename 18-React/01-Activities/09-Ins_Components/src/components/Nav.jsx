export default function Nav() {
  // Inline styles in React are written as JavaScript objects.
  // Each CSS property uses camelCase (ex: backgroundColor instead of background-color).
  const linkStyle = {
    border: "1px solid black",
    padding: "5px",
  };

  return (
    <nav className="main-header-menu">
      <section
        // This is an inline style object applied directly to the <section>.
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}>
        <div style={linkStyle}>
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Login</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Register</a>
        </div>
        <div style={linkStyle}>
          <a href="#">About</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
      </section>
    </nav>
  );
}
