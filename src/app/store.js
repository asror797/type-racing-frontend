import { configureStore } from "@reduxjs/toolkit";
import { wordSlice } from "./wordSlice";
import { timeSlice } from "./timeSlice";
import { gameSlice } from "./gameSlice";

const store = configureStore({
  reducer: {
    word: wordSlice.reducer,
    time: timeSlice.reducer,
    game: gameSlice.reducer
  }
})

export default store
