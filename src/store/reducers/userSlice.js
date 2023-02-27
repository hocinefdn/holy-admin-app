import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    token: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.userData = null;
      state.token = null;
    },
  },
});
export const { setUserData, logout } = userSlice.actions;
export default userSlice.reducer;
