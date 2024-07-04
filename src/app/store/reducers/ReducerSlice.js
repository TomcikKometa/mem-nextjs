"use client";
import { createSlice } from "@reduxjs/toolkit";

let list = [
  {
    title: "Mem 1",
    upvotes: 6,
    downvotes: 0,
    img: "1.jpg",
    id: 0,
  },
  {
    title: "Mem 2",
    upvotes: 1,
    downvotes: 2,
    img: "2.jpg",
    id: 1,
  },
  {
    title: "Mem 3",
    upvotes: 6,
    downvotes: 0,
    img: "3.jpg",
    id: 2,
  },
  {
    title: "Mem 4",
    upvotes: 1,
    downvotes: 2,
    img: "4.jpg",
    id: 3,
  },
  {
    title: "Mem 5",
    upvotes: 6,
    downvotes: 0,
    img: "5.jpg",
    id: 4,
  },
  {
    title: "Mem 6",
    upvotes: 1,
    downvotes: 2,
    img: "6.jpg",
    id: 5,
  },
  {
    title: "Mem 7",
    upvotes: 1,
    downvotes: 2,
    img: "7.jpg",
    id: 6,
  },
  {
    title: "Mem 8",
    upvotes: 1,
    downvotes: 2,
    img: "8.jpg",
    id: 7,
  },
  {
    title: "Mem 9",
    upvotes: 1,
    downvotes: 2,
    img: "9.jpg",
    id: 8,
  },
];

let stateList = {
  all: [
    {
      title: "Mem 1",
      upvotes: 6,
      downvotes: 0,
      img: "1.jpg",
      id: 0,
    },
    {
      title: "Mem 2",
      upvotes: 1,
      downvotes: 2,
      img: "2.jpg",
      id: 1,
    },
    {
      title: "Mem 3",
      upvotes: 6,
      downvotes: 0,
      img: "3.jpg",
      id: 2,
    },
    {
      title: "Mem 4",
      upvotes: 1,
      downvotes: 2,
      img: "4.jpg",
      id: 3,
    },
    {
      title: "Mem 5",
      upvotes: 6,
      downvotes: 0,
      img: "5.jpg",
      id: 4,
    },
    {
      title: "Mem 6",
      upvotes: 1,
      downvotes: 2,
      img: "6.jpg",
      id: 5,
    },
    {
      title: "Mem 7",
      upvotes: 1,
      downvotes: 2,
      img: "7.jpg",
      id: 6,
    },
    {
      title: "Mem 8",
      upvotes: 1,
      downvotes: 2,
      img: "8.jpg",
      id: 7,
    },
    {
      title: "Mem 9",
      upvotes: 1,
      downvotes: 2,
      img: "9.jpg",
      id: 8,
    },
  ],
  regular: [],
  hot: [],
};

export const counterSlice = createSlice({
  initialState: [],
  name: "counter",
  reducers: {
    add: (state = [], action) => {
      console.log(stateList)
      return stateList.hot.push(action.payload)
    },
  },
});

export const { add } = counterSlice.actions;
export default counterSlice.reducer;
