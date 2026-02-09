function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Moral: Question authority, trust your perception, and recognize that identity is shaped
        through change.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "18px",
    textAlign: "center",
    backgroundColor: "#1b1b1b",
    color: "#f6f0e8",
    borderTop: "2px solid #2a2a2a",
  },
  text: {
    margin: 0,
    fontStyle: "italic",
    opacity: 0.9,
  },
};

export default Footer;
