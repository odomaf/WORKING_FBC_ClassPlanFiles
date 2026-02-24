// This component also demonstrates styling using inline style objects.
function Card() {
  const styles = {
    cardStyle: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      margin: "20px",
    },
    headingStyle: {
      fontSize: "20px",
      marginBottom: "10px",
    },
    contentStyle: {
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.cardStyle}>
      {/* Applying styles from our `styles` object */}
      <h3 style={styles.headingStyle}>Styled Card</h3>

      <div style={styles.contentStyle}>
        This card is styled using inline JavaScript style objects instead of a
        separate CSS file.
      </div>
    </div>
  );
}

export default Card;
