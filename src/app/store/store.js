"use client";


import { configureStore } from "@reduxjs/toolkit";
import  mems from "./reducers/ReducerSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
   mems
  },
})

export const useAppSelector = useSelector;