import React, { useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import { reducer, initialStateReducer } from "./reducer";
import CreatePlayer from "./components/CreatePlayer";
import PlayerList from "./components/PlayerList";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateReducer);
  const { players } = state;

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={6}>
            <CreatePlayer {...{ dispatch, state }} />
          </Col>
          <Col xs={6}>
            <PlayerList {...{ dispatch, players }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
