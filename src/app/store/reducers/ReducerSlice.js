"use client";
import { createSlice } from "@reduxjs/toolkit";

const list = [];

export const counterSlice = createSlice({
  initialState: [],
  name: "counter",
  reducers: {
    login: (state = list, action) => {
      console.log(list);
      return [...state,list.push(action.payload.mem)]
    },
  },
});

export const { login } = counterSlice.actions;
export default counterSlice.reducer;

