import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewById: (state, reviewId) => state.entities[reviewId],
    selectReviewIds: (state) => state.ids,
  },
});

export const { selectReviewById, selectReviewIds } = reviewsSlice.selectors;
