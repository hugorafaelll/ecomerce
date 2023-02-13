import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    chave: "valor",
  },
  devTools: {
    extension:
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  },
});

export default store;
