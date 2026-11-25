import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LayoutPrincipal() {
  return (
    <div className="layout">
      <Header />
      <main className="contenido-principal">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LayoutPrincipal;