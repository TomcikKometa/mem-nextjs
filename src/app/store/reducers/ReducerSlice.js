"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [
    { title: "Mem 1", upvotes: 0, downvotes: 0, img: "1.jpg", id: 0 },
    { title: "Mem 2", upvotes: 0, downvotes: 0, img: "2.jpg", id: 1 },
    { title: "Mem 3", upvotes: 0, downvotes: 0, img: "3.jpg", id: 2 },
    { title: "Mem 4", upvotes: 0, downvotes: 0, img: "4.jpg", id: 3 },
    { title: "Mem 5", upvotes: 0, downvotes: 0, img: "5.jpg", id: 4 },
    { title: "Mem 6", upvotes: 0, downvotes: 0, img: "6.jpg", id: 5 },
    { title: "Mem 7", upvotes: 0, downvotes: 0, img: "7.jpg", id: 6 },
    { title: "Mem 8", upvotes: 0, downvotes: 0, img: "8.jpg", id: 7 },
    { title: "Mem 9", upvotes: 0, downvotes: 0, img: "9.jpg", id: 8 },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    upvote: (state, action) => {
      const memId = action.payload.id;
      const mem = state.all.find((m) => m.id === memId);
      if (mem) {
        mem.upvotes += 1;
      }
    },
    downvote: (state, action) => {
      const memId = action.payload.id;
      const mem = state.all.find((m) => m.id === memId);
      if (mem) {
        mem.downvotes += 1;
      }
    },
    clearLists: (state, action) => {
      return state = initialState
    },
  },
});

export const { upvote, downvote,clearLists } = counterSlice.actions;
export default counterSlice.reducer;