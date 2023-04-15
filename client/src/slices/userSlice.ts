import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios, { AxiosError } from "axios";
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
      const e = error as AxiosError;
      if (!e.response) throw e;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.message })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (_, thunkAPI) => {
    try {
      const response = await _service.loadUser();
      return response.data;
    } catch (error) {
      const e = error as AxiosError;
      if (!e.response) throw e;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.message })
      );
      return thunkAPI.rejectWithValue(e.response.data);
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
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { cleanData, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
