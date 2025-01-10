import React from "react";
//falta añadir css

const Players = () => {
  const players = [
    { id: 1, name: "Jugador 1", Role: "top" },
    { id: 2, name: "Jugador 2", Role: "jungla" },
    { id: 3, name: "Jugador 3", Role: "mid" },
    { id: 4, name: "Jugador 4", Role: "adc" },
    { id: 5, name: "Jugador 5", Role: "support" },
  ];

  return (
    <div className="players">
      <h1>Jugadores</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.Role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
