import { Link } from "react-router-dom";

function Nosotros() {
  return (
    <section className="pagina-nosotros">
      <h1>Sobre Turismo Perú</h1>
      <p>
        <strong>Turismo Perú</strong> es una aplicación web desarrollada con React
        y Vite para explorar atractivos turísticos del país organizados por
        categoría, ubicación y detalle de visita.
      </p>
      <p>
        El proyecto integra rutas con <code>react-router-dom</code>, un diseño
        compartido mediante layout y consumo de datos locales desde{" "}
        <code>destinos.json</code> a través de un servicio dedicado.
      </p>
      <Link to="/destinos" className="btn-principal">
        Ver catálogo de destinos
      </Link>
    </section>
  );
}

export default Nosotros;