import { createSelector } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import { selectRestaurantIds } from "../../redux/entities/restaurants/restaurantsSlice";

const selectRestaurant = (state, restaurantId) =>
  selectRestaurantById(state, restaurantId);
const selectRestaurantEntities = (state) => state.restaurants.entities;
const selectDishesEntities = (state) => state.dishes.entities;
const selectReviewsEntities = (state) => state.reviews.entities;

export const selectRestaurants = createSelector(
  [selectRestaurantIds, selectRestaurantEntities],
  (ids, entities) => {
    return ids
      .map((id) => entities[id])
      .filter((restaurant) => restaurant !== undefined);
  },
);

export const selectDishesByRestaurantId = createSelector(
  [selectRestaurant, selectDishesEntities],
  (restaurant, dishesEntities) => {
    if (!restaurant) return [];
    const { menu } = restaurant;
    if (!menu) return [];
    return menu
      .map((id) => dishesEntities[id])
      .filter((dish) => dish !== undefined);
  },
);

export const selectReviewsByRestaurantId = createSelector(
  [selectRestaurant, selectReviewsEntities],
  (restaurant, reviewsEntities) => {
    if (!restaurant) return [];
    const { reviews } = restaurant;
    if (!reviews) return [];
    return reviews
      .map((id) => reviewsEntities[id])
      .filter((review) => review !== undefined);
  },
);
