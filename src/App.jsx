import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Perfil from "./views/Perfil";
import Navigation from "./components/Navbar";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
}

export default App;