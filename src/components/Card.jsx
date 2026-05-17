const Card = ({ producto }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={producto.img} className="card-img-top" alt={producto.nombre} />
      <div className="card-body">
        <h5 className="card-title text-dark font-weight-bold">{producto.nombre}</h5>
        <p className="card-text text-secondary">{producto.descripcion}</p>
        <p className="h5 text-primary">Precio: ${producto.precio.toLocaleString('es-CL')}</p>
        <p className="small text-muted">Publicado por: {producto.vendedor}</p>
        <button className="btn btn-outline-danger btn-sm">❤️</button>
      </div>
    </div>
  );
};

export default Card;