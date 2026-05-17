import { useState, useContext } from "react"; 
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { login } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    
    
    const usuarioLogueado = { 
      email: email, 
      avatar: "https://via.placeholder.com/150" 
    };
    
    login(usuarioLogueado); 
    
    alert("¡Bienvenido de nuevo!");
    navigate("/"); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      
      <div className="p-5 rounded shadow" style={{ backgroundColor: "#ffc107", width: "400px" }}>
        <h2 className="mb-3 fw-bold">Market Place</h2>
        <p>Iniciar sesión</p>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success fw-bold">
              Iniciar Sesión
            </button>
            <button 
              type="button" 
              className="btn btn-light border"
              onClick={() => navigate("/")}
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;