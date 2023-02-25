import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      firstname: "hocine",
      lastname: "fedani",
      email: "",
      phone: "",
    },
    token: "",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
