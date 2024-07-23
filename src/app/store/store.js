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

const storage = createPersistStore();

const memPersistConfig = {
  key: "mems",
  storage: storage,
  whitelist: ["stateList"],
};

const rootReducer = combineReducers({
  mems: persistReducer(memPersistConfig, mems),
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["mems"],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);