"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mems from "./reducers/ReducerSlice";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

export function createPersistStore() {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

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
    memRootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
