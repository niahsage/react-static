function Content() {
  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <p>
          Alice’s journey begins when she follows a strangely anxious White Rabbit and falls into
          Wonderland, a world where logic no longer applies. Time behaves unpredictably, language
          loses meaning, and nothing remains consistent for long.
        </p>

        <p>
          As Alice moves through this surreal landscape, she encounters characters who challenge
          her sense of identity and reality, including the Cheshire Cat, the Caterpillar, and the
          Mad Hatter. Each interaction exposes the instability of rules and authority in a world
          driven by nonsense and contradiction.
        </p>

        <p>
          The story reaches its peak in the Queen of Hearts’ court, where power is loud, arbitrary,
          and theatrical. When the chaos becomes overwhelming, Alice awakens, left questioning how much of the experience was fantasy and how
          much just reflected the confusion of growing up.
        </p>
      </section>
    </main>
  );
}

const styles = {
  main: {
    padding: "24px 16px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#111",
    minHeight: "70vh",
  },
  card: {
    maxWidth: "780px",
    width: "100%",
    backgroundColor: "#161616",
    color: "#f6f0e8",
    padding: "24px",
    borderRadius: "14px",
    lineHeight: "1.75",
    border: "1px solid #2a2a2a",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
};

export default Content;
