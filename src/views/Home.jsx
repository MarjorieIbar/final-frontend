const Home = () => {
  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center text-white" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        textAlign: 'center'
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Bienvenidos</h1>
      <h2 style={{ fontSize: '3rem' }}>al</h2>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>MarketPlace</h1>
      
      <div style={{ fontSize: '2.5rem' }}>
        💻 🖱️ 🚐 🏠 👩
      </div>
    </div>
  );
};

export default Home;