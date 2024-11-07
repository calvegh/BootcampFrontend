import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => (state += 1),
    decrement: (state) => (state -= 1),
    increment_2: (state, action) => {
      const { payload } = action;
      state += payload;
      return state;
    },
  },
});

export const { increment, decrement, increment_2 } = counterSlice.actions;
export default counterSlice.reducer;
