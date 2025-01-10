import React from "react";
import { getAuth } from "firebase/auth";
import "./../styles/UserProfile.css";

const UserProfile = ({ user }) => {
  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut();
  };

  return (
    <div className="user-profile">
      <h1>Bienvenido, {user.displayName}</h1>
      <img src={user.photoURL} alt="Foto de perfil" />
      <p>Correo: {user.email}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default UserProfile;
