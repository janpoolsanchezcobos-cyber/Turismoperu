import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <section className="pagina-404">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>
        La ruta que intentas visitar no existe o fue movida dentro de Turismo
        Perú.
      </p>
      <div className="acciones-404">
        <Link to="/" className="btn-principal">
          Ir al inicio
        </Link>
        <Link to="/destinos" className="btn-secundario">
          Ver destinos
        </Link>
      </div>
    </section>
  );
}

export default NoEncontrado;