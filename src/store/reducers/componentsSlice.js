import { createSlice } from "@reduxjs/toolkit";
export const componentSlice = createSlice({
  name: "component",
  initialState: {
    sideBar: true,
    displayLinearProgress: true,
  },
  reducers: {
    setSideBar: (state, action) => {
      state.sideBar = action.payload.value;
    },
    setDisplayLinearProgress: (state, action) => {
      state.displayLinearProgress = action.payload.value;
    },
  },
});
export const { setSideBar, setDisplayLinearProgress } = componentSlice.actions;
export default componentSlice.reducer;
