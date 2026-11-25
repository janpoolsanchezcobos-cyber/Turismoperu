import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarDestacados } from "../services/destinoService";
import TarjetaDestino from "../components/TarjetaDestino";

function Inicio() {
  const [destacados, setDestacados] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;

    listarDestacados()
      .then((datos) => {
        if (activo) {
          setDestacados(datos);
          setCargando(false);
        }
      })
      .catch(() => {
        if (activo) {
          setCargando(false);
        }
      });

    return () => {
      activo = false;
    };
  }, []);

  return (
    <section className="pagina-inicio">
      <div className="hero">
        <h1>Turismo Perú</h1>
        <p>
          Descubre sitios arqueológicos, reservas naturales y playas emblemáticas
          a lo largo del país.
        </p>
        <Link to="/destinos" className="btn-principal">
          Explorar todos los destinos
        </Link>
      </div>

      <h2>Destinos destacados</h2>

      {cargando ? (
        <p>Cargando destinos destacados...</p>
      ) : (
        <div className="grid-destinos">
          {destacados.map((destino) => (
            <TarjetaDestino key={destino.id} destino={destino} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Inicio;