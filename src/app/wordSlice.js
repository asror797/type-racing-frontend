import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currWord: '',
  typedWord: '',
  typedHistory: '',
  wordList: [
    "Typeracer",
    "was",
    "created",
    "by",
    "programmer",
    "Alex,",
    "using",
    "RReactjs.",
    "Players",
    "compete",
    "by",
    "racing",
    "miniture",
    "cars",
    "that",
    "advance",
    "as",
    "the",
    "users",
    "type",
    "various",
    "passages.",
    "The",
    "passages",
    "range",
    "in",
    "lengths",
    "from",
    "approximatally."
  ],
  activeWordRef: '',
  caretRef: ''
  
}

export const wordSlice = createSlice({
  name: 'word',
  initialState: initialState,
  reducers: {
    setChar: (state, action) => {
      state.currWord = action.payload
    },
    setCurrWord: (state, action) => {
      state.currWord = action.payload
    },
    pushWord: (state, action) => {
      state.wordList.push(action.payload)
    }
  }
})


export const { setChar, pushWord } = wordSlice.actions
