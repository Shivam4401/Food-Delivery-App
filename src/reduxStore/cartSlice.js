import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart", // name of the slice
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.push(action.payload);
      } // here state is an array , payload is the argument that we pass with function
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    incrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },

    decrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
  }, // all the functions to be implemented on initialState (array)
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
