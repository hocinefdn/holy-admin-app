import { createSlice } from "@reduxjs/toolkit";
export const componentSlice = createSlice({
  name: "component",
  initialState: {
    sideBar: true,
  },
  reducers: {
    setSideBar: (state, action) => {
      state.sideBar = action.payload.value;
    },
  },
});
export const { setSideBar } = componentSlice.actions;
export default componentSlice.reducer;
