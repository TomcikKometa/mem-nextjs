"use client";

import { configureStore } from "@reduxjs/toolkit";
import  mem from "./reducers/ReducerSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    mem
  },
})

export const useAppSelector = useSelector;