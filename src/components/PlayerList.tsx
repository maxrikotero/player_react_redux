import React from "react";

import { Button, Table } from "react-bootstrap";

const PlayerList = ({ dispatch, players }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dorsal</th>
          <th>Equipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{player.nombre}</td>
            <td>{player.dorsal}</td>
            <td>{player.equipo}</td>
            <td>
              <Button
                onClick={() =>
                  dispatch({ type: "SET_EDIT_PLAYER", payload: player })
                }
              >
                {" "}
                Edit
              </Button>
            </td>
            <td>
              <Button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_PLAYER",
                    payload: { id: player.id }
                  });
                }}
              >
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayerList;
