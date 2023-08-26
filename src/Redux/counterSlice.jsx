// src/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 10 },
  reducers: {
    //state === initial value;
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => { 
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
