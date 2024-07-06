"use client";
import { createSlice } from "@reduxjs/toolkit";

let stateList = {
  all: [
    {
      title: "Mem 1",
      upvotes: 0,
      downvotes: 0,
      img: "1.jpg",
      id: 0,
    },
    {
      title: "Mem 2",
      upvotes: 0,
      downvotes: 0,
      img: "2.jpg",
      id: 1,
    },
    {
      title: "Mem 3",
      upvotes: 0,
      downvotes: 0,
      img: "3.jpg",
      id: 2,
    },
    {
      title: "Mem 4",
      upvotes: 0,
      downvotes: 0,
      img: "4.jpg",
      id: 3,
    },
    {
      title: "Mem 5",
      upvotes: 0,
      downvotes: 0,
      img: "5.jpg",
      id: 4,
    },
    {
      title: "Mem 6",
      upvotes: 0,
      downvotes: 0,
      img: "6.jpg",
      id: 5,
    },
    {
      title: "Mem 7",
      upvotes: 0,
      downvotes: 0,
      img: "7.jpg",
      id: 6,
    },
    {
      title: "Mem 8",
      upvotes: 0,
      downvotes: 0,
      img: "8.jpg",
      id: 7,
    },
    {
      title: "Mem 9",
      upvotes: 0,
      downvotes: 0,
      img: "9.jpg",
      id: 8,
    },
  ],
  regular: [],
  hot: [],
};

const hotList = [];
const regularList = [];

export const counterSlice = createSlice({
  initialState : stateList.all,
  name: "counter",
  reducers: {
    addToHotList: (state, action) => {
      console.log(action.payload)
      const memId = action.payload.mem.id;
      

      let isAddedToHotList = hotList.filter((z) => z.id === memId)
      if(isAddedToHotList .length > 0) {
        hotList
      } else hotList.push(action.payload.mem)
      return state = {stateList:{all:[...stateList.all],regular:[...stateList.regular],hot:[...stateList.hot,...hotList]}}
    },
    addToRegularList: (state, action) => {
      console.log(action.payload)
      const memId = action.payload.mem.id;
      

      let isAddedToHotList = regularList.filter((z) => z.id === memId)
      if(isAddedToHotList .length > 0) {
        hotList
      } else hotList.push(action.payload.mem)
      return state = {stateList:{all:[...stateList.all],regular:[...stateList.regular],hot:[...stateList.hot,...regularList]}}
    },
    clearHotList: (state, action) => {
      return state = {stateList:{all:[...stateList.all],regular:[...stateList.regular],hot:[]}}
    },
  },
});

export const { addToHotList,addToRegularList,clearHotList } = counterSlice.actions;
export default counterSlice.reducer;