import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, logout } = useContext(UserContext); 

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">🛒 MarketPlace</Link>
      
      <div>
       
        {user ? (
          <>
            <span className="text-white me-3">Hola, {user.email}</span>
            <Link to="/perfil" className="btn btn-outline-info me-2">Mi Perfil</Link>
            <button onClick={logout} className="btn btn-outline-danger">Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-warning me-2">Iniciar Sesión</Link>
            <Link to="/registro" className="btn btn-outline-info">Regístrate</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;