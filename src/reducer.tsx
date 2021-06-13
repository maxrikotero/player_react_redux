import { v4 as uuidv4 } from "uuid";

export const initialStateReducer = {
  players: [],
  player: {
    nombre: "",
    dorsal: 0,
    equipo: "",
    isNew: true,
    id: uuidv4()
  }
};

export const initalState = {
  nombre: "",
  dorsal: 0,
  equipo: "",
  isNew: true,
  id: uuidv4()
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return {
        ...state,
        players: action.payload
      };
    case "ADD_PLAYER":
      return {
        ...state,
        player: initalState,
        players: [...state.players, { ...action.payload, isNew: false }]
      };
    case "SET_PLAYER":
      return {
        ...state,
        player: {
          ...state.player,
          [action.payload.name]: action.payload.value
        }
      };
    case "SET_EDIT_PLAYER":
      return {
        ...state,
        player: action.payload
      };
    case "EDIT_PLAYER":
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === state.player.id ? state.player : player
        ),
        player: initalState
      };
    case "REMOVE_PLAYER":
      return {
        ...state,
        players: state.players.filter(
          (player) => player.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};
