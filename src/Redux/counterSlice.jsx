// src/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 10 },
  reducers: {
    //state === initial value;
    //increment ,incrementby10, decrement are actions ~  
    increment: (state) => {
      state.value += 1;
    },
    incrementby10: (state) => {
      state.value += 10;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement, incrementby10 } = counterSlice.actions;
export default counterSlice.reducer;
