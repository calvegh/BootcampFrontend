import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
