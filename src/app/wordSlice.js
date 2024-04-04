import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currWord: '',
  typedWord: '',
  typedHistory: '',
  wordList: '',
  activeWordRef: '',
  caretRef: ''
  
}

export const wordSlice = createSlice({
  name: 'word',
  initialState: initialState,
  reducers: {
    setChar: (state, action) => {
      state.currWord = action.payload
    }
  }
})


export const { setChar } = wordSlice.actions
