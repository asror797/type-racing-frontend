import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: '',
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
