export default function Footer() {
  return (
    <footer style={{ background: "#111827", color: "white", padding: "1rem", marginTop: "auto", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
}