import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants";

const dishesAdapter = createEntityAdapter();

const initialState = dishesAdapter.getInitialState({
  status: REQUEST_STATUS.IDLE,
  error: null,
});

export const loadDishesByRestaurantId = createAsyncThunk(
  "dishes/loadDishesByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
    );
    const result = await response.json();

    return result;
  },
);

export const loadDishById = createAsyncThunk(
  "dishes/loadDishById",
  async (dishId) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json();

    return result;
  },
);

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selectDishById: (state, dishId) => state.entities[dishId],
    selectDishIds: (state) => state.ids,
  },
  extraReducers: (builder) => {
    builder.addCase(loadDishesByRestaurantId.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
      state.error = null;
    });
    builder.addCase(loadDishesByRestaurantId.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.SUCCESS;
      dishesAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(loadDishesByRestaurantId.rejected, (state, action) => {
      state.status = REQUEST_STATUS.FAILED;
      state.error = action.error.message;
    });
    builder.addCase(loadDishById.fulfilled, (state, action) => {
      dishesAdapter.upsertOne(state, action.payload);
    });
  },
});

export const { selectDishById, selectDishIds } = dishesSlice.selectors;
