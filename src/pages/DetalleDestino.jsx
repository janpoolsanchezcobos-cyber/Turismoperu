import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerDestino } from "../services/destinoService";

function DetalleDestino() {
  const { id } = useParams();
  const [destino, setDestino] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;
    setCargando(true);

    obtenerDestino(id)
      .then((encontrado) => {
        if (activo) {
          setDestino(encontrado ?? null);
          setCargando(false);
        }
      })
      .catch(() => {
        if (activo) {
          setDestino(null);
          setCargando(false);
        }
      });

    return () => {
      activo = false;
    };
  }, [id]);

  if (cargando) {
    return (
      <section className="pagina-detalle">
        <p>Cargando información del destino...</p>
      </section>
    );
  }

  if (!destino) {
    return (
      <section className="pagina-detalle">
        <h1>Destino no encontrado</h1>
        <p>No existe un destino con el identificador solicitado.</p>
        <Link to="/destinos" className="btn-secundario">
          Volver a Destinos
        </Link>
      </section>
    );
  }

  const entradaTexto =
    destino.precioEntrada === 0 ? "Gratis" : `S/ ${destino.precioEntrada}`;

  return (
    <section className="pagina-detalle">
      <Link to="/destinos" className="btn-volver">
        ← Volver a Destinos
      </Link>

      <img
        src={destino.imagen}
        alt={destino.nombre}
        className="detalle-imagen"
      />

      <div className="detalle-info">
        <span className="detalle-categoria">{destino.categoria}</span>
        <h1>{destino.nombre}</h1>
        <p className="detalle-ubicacion">
          <strong>Ciudad:</strong> {destino.ciudad} — <strong>Región:</strong>{" "}
          {destino.region}
        </p>
        <p className="detalle-descripcion">{destino.descripcion}</p>

        <ul className="detalle-datos">
          <li>
            <strong>Duración de visita:</strong> {destino.duracionVisita}
          </li>
          <li>
            <strong>Precio de entrada:</strong> {entradaTexto}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DetalleDestino;