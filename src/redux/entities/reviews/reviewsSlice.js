import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants";

const reviewsAdapter = createEntityAdapter();

const initialState = reviewsAdapter.getInitialState({
  status: REQUEST_STATUS.IDLE,
  error: null,
});

export const loadReviewsByRestaurantId = createAsyncThunk(
  "reviews/loadReviewsByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    );
    const result = await response.json();

    return result;
  },
);

export const createReview = createAsyncThunk(
  "reviews/createReview",
  async ({ restaurantId, review }) => {
    const response = await fetch(
      `http://localhost:3001/api/review/${restaurantId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      },
    );

    const result = await response.json();
    return result;
  },
);

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewById: (state, reviewId) => state.entities[reviewId],
    selectReviewIds: (state) => state.ids,
  },
  extraReducers: (builder) => {
    builder.addCase(loadReviewsByRestaurantId.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
      state.error = null;
    });
    builder.addCase(loadReviewsByRestaurantId.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.SUCCESS;
      reviewsAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(loadReviewsByRestaurantId.rejected, (state, action) => {
      state.status = REQUEST_STATUS.FAILED;
      state.error = action.error.message;
    });
  },
});

export const { selectReviewById, selectReviewIds } = reviewsSlice.selectors;
