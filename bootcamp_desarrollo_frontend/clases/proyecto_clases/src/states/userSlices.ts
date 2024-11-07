import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE:UserWithId[] = [{
  id: "1",
  name: "Leanne Graham",
  username: "Bret",
  email: "leanne@gmail.com",
},
{
  id: "2",
  name: "Ervin Howell",
  username: "Antonette",
  email: "ervin@gmail.com",
},
{
  id: "3",
  name: "Clementine Bauch",
  username: "Samantha",
  email: "clementine@gmail.com",
},]
const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__users__");
  return persistedState ? JSON.parse(persistedState) as UserWithId[] : DEFAULT_STATE;
})();

export interface User {
  name: string;
  username: string;
  email: string;
}

export type userId = string;

export interface UserWithId extends User {
  id: userId;
}

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser(state, action: PayloadAction<User>) {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
      console.log(current(state));

      return state;
    },
    deleteUser: (state, action: PayloadAction<userId>) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser:(state, action:PayloadAction<UserWithId>)=>{
      const index = state.findIndex(user=>user.id === action.payload.id)
      state[index] = action.payload
      return state;
    }
  },
});

export default usersSlice.reducer;

export const { addUser } = usersSlice.actions;
