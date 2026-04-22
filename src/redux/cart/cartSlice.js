import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const dishId = action.payload;
      state[dishId] ? (state[dishId] += 1) : (state[dishId] = 1);
    },
    decrement: (state, action) => {
      const dishId = action.payload;
      if (!state[dishId]) return;
      state[dishId] === 1 ? delete state[dishId] : (state[dishId] -= 1);
    },
  },
  selectors: {
    selectDishCountById: (state, dishId) => state[dishId] || 0,
  },
});

export const { increment, decrement } = cartSlice.actions;
export const { selectDishCountById } = cartSlice.selectors;
