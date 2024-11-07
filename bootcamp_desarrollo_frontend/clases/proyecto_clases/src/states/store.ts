import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
