import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="brand">
          Turismo Perú
        </Link>

        <nav className="nav" aria-label="Navegación principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/destinos"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Destinos
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Nosotros
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;