import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  enhancers: [composeWithDevTools()],
});

export default store;
