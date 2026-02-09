function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Alice in Wonderland</h1>
      <p style={styles.subtitle}>a surreal journey beyond logic</p>
    </header>
  );
}

const styles = {
  header: {
    padding: "28px 18px",
    textAlign: "center",
    backgroundColor: "#1b1b1b",
    color: "#f6f0e8",
    borderBottom: "2px solid #2a2a2a",
  },
  title: {
    margin: 0,
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  subtitle: {
    marginTop: "10px",
    marginBottom: 0,
    opacity: 0.85,
    fontStyle: "italic",
  },
};

export default Header;
