"use client";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  mems from "./reducers/ReducerSlice";
import { useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const memPersistConfig = {
  key: "counter",
  storage: storage,
  whitelist: ["stateList"],
};

const memRootReducer = combineReducers({
  stateList: persistReducer(memPersistConfig, mems),
});

export const store = configureStore({
  reducer: {
    memRootReducer
  },
})

export const useAppSelector = useSelector;