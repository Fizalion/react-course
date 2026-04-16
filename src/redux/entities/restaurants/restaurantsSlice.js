import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantById: (state, restaurantId) => state.entities[restaurantId],
    selectRestaurantIds: (state) => state.ids,
  },
});

export const { selectRestaurantById, selectRestaurantIds } =
  restaurantsSlice.selectors;
