// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
// Reducer is only way to update the store !
// Reducer is pure function with "Takes old state and Return new State"
