// This component demonstrates styling using inline style objects.
function Navbar() {
  // Creating a JavaScript object that stores CSS styles.
  const styles = {
    navStyle: {
      backgroundColor: "#333",
      padding: "15px",
      color: "white",
    },
    headingStyle: {
      margin: 0,
    },
  };

  return (
    <nav style={styles.navStyle}>
      {/* Applying styles from our `styles` object */}
      <h2 style={styles.headingStyle}>Inline Styles</h2>
    </nav>
  );
}

export default Navbar;
