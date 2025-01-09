import React from 'react';
import { googleLogin } from './firebase/auth';

function App() {
  return (
    <div>
      <h1>Prueba de equipo de esports - By: Nikito</h1>
      <button onClick={googleLogin}>Iniciar sesión con Google</button>
    </div>
  );
}

export default App;
