import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
  status: REQUEST_STATUS.IDLE,
  error: null,
});

export const loadUsers = createAsyncThunk("users/loadUsers", async () => {
  const response = await fetch("http://localhost:3001/api/users");
  const result = await response.json();

  return result;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUserById: (state, userId) => state.entities[userId],
    selectUserIds: (state) => state.ids,
  },
  extraReducers: (builder) => {
    builder.addCase(loadUsers.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
      state.error = null;
    });
    builder.addCase(loadUsers.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.SUCCESS;
      usersAdapter.setAll(state, action.payload);
    });
    builder.addCase(loadUsers.rejected, (state, action) => {
      state.status = REQUEST_STATUS.FAILED;
      state.error = action.error.message;
    });
  },
});

export const { selectUserById, selectUserIds } = usersSlice.selectors;
