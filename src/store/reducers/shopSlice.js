import { createSlice } from "@reduxjs/toolkit";
export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopData: null,
  },
  reducers: {
    setShopData: (state, action) => {
      state.shopData = action.payload.shop;
    },
    resetShop: (state) => {
      state.shopData = null;
    },
  },
});
export const { setShopData, resetShop } = shopSlice.actions;
export default shopSlice.reducer;
