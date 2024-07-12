"use client";
import { createSlice } from "@reduxjs/toolkit";

const hotList = [];
const regularList = [];

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
  regular: [...regularList],
  hot: [...hotList],
};


export const counterSlice = createSlice({
  initialState: stateList,
  name: "counter",
  reducers: {
    addToHotList: (state, action) => {
      const memId = action.payload.memUpdated.id;

      let isAddedToHotList = hotList.filter((z) => z.id === memId);
      if (isAddedToHotList.length > 0) {
        hotList;
      } else hotList.push(action.payload.memUpdated);
      return {
          all: [...stateList.all],
          regular: [...regularList],
          hot: [...hotList],
      };
    },
    addToRegularList: (state, action) => {
      const memId = action.payload.memUpdated.id;
      let isAddedToRegularList = regularList.filter((z) => z.id === memId);
      if (isAddedToRegularList.length > 0) {
        regularList;
      } else {
        regularList.push(action.payload.memUpdated);
      }
      return {
          all: [...stateList.all],
          regular: [...regularList],
          hot: [...hotList],
      };
    },
    clearHotList: (state, action) => {
      hotList.length = 0;
      return (state = {
          all: [...stateList.all],
          regular: [...regularList],
          hot: [],
      });
    },
    clearRegularList: (state, action) => {
      regularList.length = 0;
      return (state = {
          all: [...stateList.all],
          regular: [],
          hot: [...hotList],
      });
    },
    removeFromRegularList: (state, action) => {
      let indexToRemove = regularList.findIndex((x) => x.id == action.payload.memUpdated.id);
      if(indexToRemove >= 0){
        regularList.splice(indexToRemove,1)
      }
      return state = {
          all: [...stateList.all],
          regular: [...regularList],
          hot: [...hotList],
      };
      
    }
  },
});

export const {
  addToHotList,
  addToRegularList,
  clearHotList,
  clearRegularList,
  removeFromRegularList,
  returnStateList
} = counterSlice.actions;
export default counterSlice.reducer;
