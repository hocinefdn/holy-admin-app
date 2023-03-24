import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// reducers
import userReducer from "./reducers/userSlice";
import componentReducer from "./reducers/componentsSlice";
import shopReducer from "./reducers/shopSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  components: componentReducer,
  shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  composeWithDevTools
);
