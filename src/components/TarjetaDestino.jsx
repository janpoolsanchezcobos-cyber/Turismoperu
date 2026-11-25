import { Link } from "react-router-dom";

function TarjetaDestino({ destino }) {
  return (
    <article className="tarjeta-destino">
      <img
        src={destino.imagen}
        alt={destino.nombre}
        className="tarjeta-imagen"
      />

      <div className="tarjeta-cuerpo">
        <span className="tarjeta-categoria">{destino.categoria}</span>
        <h3 className="tarjeta-titulo">{destino.nombre}</h3>
        <p className="tarjeta-ciudad">{destino.ciudad}</p>

        <Link to={`/destinos/${destino.id}`} className="tarjeta-btn">
          Ver destino
        </Link>
      </div>
    </article>
  );
}

export default TarjetaDestino;