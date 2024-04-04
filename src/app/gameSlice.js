import { createSlice } from "@reduxjs/toolkit";


export const gameSlice = createSlice({
  name: 'game',
  initialState: { isStart: false },
  reducers: {
    startGame: (state, action) => {
      state.isStart = action.payload
    }
  }
})

export const { startGame } = gameSlice.actions
