import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { user, logout } = useContext(UserContext); 
  const navigate = useNavigate();

  
  if (!user) {
    return (
      <Container className="mt-5 text-center">
        <h2>No has iniciado sesión</h2>
        <Button variant="warning" onClick={() => navigate("/login")}>Ir al Login</Button>
      </Container>
    );
  }

  return (
    <Container fluid className="p-0">
      <Row className="g-0" style={{ minHeight: "90vh" }}>
        
        
        <Col md={3} className="bg-warning p-4 d-flex flex-column align-items-center justify-content-between">
          <div className="text-center w-100">
            
            <div className="mb-3">
               <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} 
                alt="Avatar" 
                className="rounded-circle border bg-light" 
                style={{ width: '80px' }}
              />
            </div>
            <h3 className="fw-bold">Mi Perfil</h3>
            
            <div className="mt-5 text-start w-100">
              <Form.Label className="fw-bold">Ordenar Por</Form.Label>
              <Form.Select>
                <option>Precio mayor a menor</option>
                <option>Precio menor a mayor</option>
              </Form.Select>
            </div>
          </div>

          <Button 
            variant="danger" 
            className="w-100 mt-4" 
            onClick={() => { logout(); navigate("/"); }}
          >
            Cerrar Sesión
          </Button>
        </Col>

        
        <Col md={9} className="p-5 bg-light">
          <Form.Group className="mb-4">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" placeholder="Buscar mi publicación..." />
          </Form.Group>

          <h4 className="mb-4">Mis Publicaciones</h4>
          
          <Row>
            <Col md={4}>
              <Card className="shadow-sm border-0">
                <Card.Img 
                  variant="top" 
                  src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400" 
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">Batería electrónica Alesis Nitro Mesh</Card.Title>
                  <Card.Text className="text-muted small">
                    La mejor batería para iniciar, poco uso.
                  </Card.Text>
                  <p className="fw-bold mb-1">Precio: $350.000</p>
                  <p className="small text-secondary">Publicado por: {user.email}</p>
                  <Button variant="outline-secondary" size="sm">❤</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;