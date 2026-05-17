import { useState, useContext } from "react"; 
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "https://backend-0vx7.onrender.com";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  
  const { login } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${BACKEND_URL}/registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) throw new Error("Error al registrar usuario");

      const datosUsuario = { email, avatar };
      login(datosUsuario); 
      
      alert("¡Registro exitoso! Ya puedes ver tu perfil.");
      navigate("/"); 

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-5 rounded shadow text-white" style={{ backgroundColor: "#198754", width: "450px" }}>
        <h2 className="mb-1 fw-bold">Market Place</h2>
        <p className="mb-4">Registrarse</p>
        
        <form onSubmit={handleRegistro}>
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
          
          <div className="mb-4">
            <label className="form-label">Avatar URL</label>
            <input 
              type="url" 
              className="form-control" 
              placeholder="https://imagen.jpg"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
          
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-warning fw-bold text-dark">
              Registrarme
            </button>
            <button 
              type="button" 
              className="btn btn-light" 
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

export default Registro;