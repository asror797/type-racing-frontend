import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: 'Typeracer was created by programmer Alex, using RReactjs. Players compete by racing miniture cars that advance as the users type various passages. The passages range in lengths from approximatally.',
  isOver: false,
  isOpen: false,
  gameID: '',
  players: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    startGame: (state, action) => {
      state.isOver = action.payload
    },
    joinNewPLayer: (state, action) => {
      state.players.push(action.payload)
    }
  }
})

export const { startGame, joinNewPLayer } = gameSlice.actions
