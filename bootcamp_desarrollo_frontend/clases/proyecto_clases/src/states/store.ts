import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import usersReducer from "./userSlices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
