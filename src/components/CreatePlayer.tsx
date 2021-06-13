import React from "react";
import { Form, Button } from "react-bootstrap";

type Player = {
  nombre: string;
  dorsal: number;
  equipo: string;
  isNew: boolean;
  id: string;
};

type Props = {
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  playerToEdit: Player;
};

const CreatePlayer: React.FC<Props> = ({ dispatch, state }) => {
  const { player } = state;
  const { nombre, dorsal, equipo } = player;

  const handleChange = (e) => {
    dispatch({
      type: "SET_PLAYER",
      payload: { name: e.target.name, value: e.target.value }
    });
  };
  console.log(player);
  const handleSubmit = () => {
    debugger;
    if (typeof player.isNew === "undefined" || player.isNew) {
      dispatch({
        type: "ADD_PLAYER",
        payload: player
      });
    } else {
      dispatch({
        type: "EDIT_PLAYER"
      });
    }
  };

  return (
    <React.Fragment>
      <Form.Group controlId="nombreInput">
        <Form.Label className="primary bold">Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDosal">
        <Form.Label>Dorsal</Form.Label>
        <Form.Control
          type="number"
          name="dorsal"
          value={dorsal}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEquipo">
        <Form.Label>Equipo</Form.Label>
        <Form.Control
          type="text"
          name="equipo"
          value={equipo}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        style={{ marginTop: 10 }}
        onClick={handleSubmit}
      >
        {player.isNew ? "Add" : "Edit"}
      </Button>
    </React.Fragment>
  );
};

export default CreatePlayer;
