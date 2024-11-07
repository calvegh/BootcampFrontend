<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
=======
import { configureStore, Middleware } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import usersReducer from "./userSlices";

const persistedState: Middleware = store => next => action => {

  //en refencia al estado pre cambio


  next(action);

  console.log(action)
  //en referencia al estado post cambio
  const estado = store.getState()

  const estadoAsJson = JSON.stringify(estado.users)
  localStorage.setItem('__redux__users__', estadoAsJson)

}
>>>>>>> 9e1730e2e8b9e14a345c2a91add7f6eaf5d70c2c


export const store = configureStore({
  reducer: {
    counter: counterReducer,
<<<<<<< HEAD
    user:userReducer,
=======
    users: usersReducer,
>>>>>>> 9e1730e2e8b9e14a345c2a91add7f6eaf5d70c2c
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(persistedState),
});

export type RootType = ReturnType<typeof store.getState>;
