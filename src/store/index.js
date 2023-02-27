import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userSlice";

export default configureStore(
  {
    reducer: {
      user: userReducer,
    },
  },
  composeWithDevTools
);
