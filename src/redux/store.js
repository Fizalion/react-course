import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/restaurantsSlice";
import { dishesSlice } from "./entities/dishes/dishesSlice";
import { reviewsSlice } from "./entities/reviews/reviewsSlice";
import { usersSlice } from "./entities/users/usersSlice";
import { cartSlice } from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
