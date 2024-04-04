import { createSlice } from "@reduxjs/toolkit";


export const timeSlice = createSlice({
  name: 'time',
  initialState: { time: '' },
  reducers: {
    startTime: (state, action) => {
      state.time = action.payload
    }
  }
})


export const { startTime } = timeSlice.actions