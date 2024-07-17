"use client";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  mems from "./reducers/ReducerSlice";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const memPersistConfig = {
  key: "counter",
  storage: storage,
  whitelist: ["stateList"]
};

const memRootReducer = combineReducers({
  stateList: persistReducer(memPersistConfig, mems),
});

export const store = configureStore({
  reducer: {
    memRootReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false})
})

export const persistor = persistStore(store);