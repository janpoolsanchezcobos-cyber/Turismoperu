import "./Footer.css";

function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-brand">Turismo Perú</p>
        <p className="footer-copy">
          © {anioActual} Turismo Perú — Explora la historia, naturaleza y costas del país.
        </p>
      </div>
    </footer>
  );
}

export default Footer;