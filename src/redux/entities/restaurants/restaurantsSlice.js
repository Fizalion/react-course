import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants";

const restaurantsAdapter = createEntityAdapter();

const initialState = restaurantsAdapter.getInitialState({
  status: REQUEST_STATUS.IDLE,
  error: null,
});

export const loadRestaurants = createAsyncThunk(
  "restaurants/loadRestaurants",
  async () => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();

    return result;
  },
);

export const loadRestaurantById = createAsyncThunk(
  "restaurants/loadRestaurantById",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`,
    );
    const result = await response.json();

    return result;
  },
);

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantById: (state, restaurantId) => state.entities[restaurantId],
    selectRestaurantIds: (state) => state.ids,
  },
  extraReducers: (builder) => {
    builder.addCase(loadRestaurants.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
      state.error = null;
    });
    builder.addCase(loadRestaurants.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.SUCCESS;
      restaurantsAdapter.setAll(state, action.payload);
    });
    builder.addCase(loadRestaurants.rejected, (state, action) => {
      state.status = REQUEST_STATUS.FAILED;
      state.error = action.error.message;
    });
    builder.addCase(loadRestaurantById.fulfilled, (state, action) => {
      restaurantsAdapter.upsertOne(state, action.payload);
    });
  },
});

export const { selectRestaurantById, selectRestaurantIds } =
  restaurantsSlice.selectors;
