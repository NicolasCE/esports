import React from "react";
import { googleLogin } from "../firebase/auth";
import "../styles/Welcome.css";

const Welcome = () => {
  const handleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <div className="welcome">
      <h1>Bienvenido a Esports Gaming</h1>
      <button onClick={handleLogin}>Iniciar Sesión con Google</button>
    </div>
  );
};

export default Welcome;
