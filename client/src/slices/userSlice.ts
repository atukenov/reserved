import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../app/store";
import { Authorization, UserState } from "../utils/types";
import { setAlert } from "./alertSlice";
import _service from "../utils/apis";

const initialState: UserState = {
  user: null,
  loading: true,
};

export const login = createAsyncThunk(
  "user/login",
  async (body: Authorization, thunkAPI) => {
    try {
      const response = await _service.login(body);
      return response.data;
    } catch (error) {
      const e = error as Error;
      console.log(e);
      thunkAPI.dispatch(setAlert({ alertType: "error", msg: e.message }));
      throw error;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    cleanData: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { cleanData } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
