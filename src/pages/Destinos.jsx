import { useEffect, useState } from "react";
import { listarDestinos, listarPorCategoria } from "../services/destinoService";
import TarjetaDestino from "../components/TarjetaDestino";

const CATEGORIAS = ["Todos", "Arqueológico", "Naturaleza", "Playa"];

function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;
    setCargando(true);

    const consulta =
      categoriaActiva === "Todos"
        ? listarDestinos()
        : listarPorCategoria(categoriaActiva);

    consulta
      .then((datos) => {
        if (activo) {
          setDestinos(datos);
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
  }, [categoriaActiva]);

  return (
    <section className="pagina-destinos">
      <h1>Destinos turísticos</h1>
      <p>Filtra los lugares por categoría para planificar tu recorrido.</p>

      <div className="filtros-categoria" role="group" aria-label="Filtrar por categoría">
        {CATEGORIAS.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={
              categoriaActiva === categoria ? "btn-filtro activo" : "btn-filtro"
            }
            onClick={() => setCategoriaActiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {cargando ? (
        <p>Cargando destinos...</p>
      ) : destinos.length === 0 ? (
        <p>No hay destinos disponibles en esta categoría.</p>
      ) : (
        <div className="grid-destinos">
          {destinos.map((destino) => (
            <TarjetaDestino key={destino.id} destino={destino} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Destinos;