"use client";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  mems from "./reducers/ReducerSlice";
import { useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const memPersistConfig = {
  key: "counter",
  storage: storage,
  whitelist: ["stateList"],
};

const memRootReducer = combineReducers({
  stateList: persistReducer(memPersistConfig, mems),
});
// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false
// })

export const store = configureStore({
  reducer: {
    memRootReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const useAppSelector = useSelector;