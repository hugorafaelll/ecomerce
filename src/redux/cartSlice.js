import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  //todo metodo qe vai detro do slice que faz o toolkit mais facil
  name: "cart",

  initialState,

  reducers: {
    add(state, action) {
      // o que vai dentro do redux

      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
