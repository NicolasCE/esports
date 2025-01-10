import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>¡Bienvenido a Esports Gaming!</h1>
      <p>Explora nuestra plataforma, Lugar perfecto de E-sports</p>

      <div className="home-sections">
        <a href="/players"> Ver jugadores</a>
        <a href="/teams"> Ver Equipos</a>
      </div>
    </div>
  );
};

export default Home;