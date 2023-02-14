import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: {
    extension:
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  },
});

export default store;
