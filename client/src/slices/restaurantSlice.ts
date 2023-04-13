import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../app/store";
import { Error, UserProps } from "../utils/types";
import { setAlert } from "./alertSlice";
import _service from "../utils/api";

const initialState: UserProps = {
  userData: null,
  user: null,
  loading: true,
};

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (restaurantId: string, thunkAPI) => {
    try {
      const response = await _service.getRestairantById(restaurantId);
      console.log(response);
      return response.data;
    } catch (error) {
      const e = error as Error;
      thunkAPI.dispatch(setAlert({ alertType: "error", msg: e.message }));
      throw error;
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "admin/fetchUsers",
  async (arg, thunkAPI) => {
    try {
      const res = await axios.get("/api/admin/user", config);
      const data = await res.data;

      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({ alertType: "success", msg: "All Users fetched" })
        );
        return data;
      }
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "admin/registerUser",
  async (data: any, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    data.email = data.email.toLowerCase();
    const body = JSON.stringify(data);
    try {
      const res = await axios.post("/api/admin/register", body, config);
      let data = await res.data;
      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({
            alertType: "success",
            msg: "User registered successfully!",
          })
        );
        return data;
      }
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (id: string, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    const body = JSON.stringify({ id: id });
    try {
      const res = await axios.delete("/api/admin/delete", {
        headers: config.headers,
        data: body,
      });
      let data = await res.data;
      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({ alertType: "success", msg: "User deleted" })
        );
        return data;
      }
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    cleanData: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { cleanData } = adminSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const adminSelector = (state: RootState) => state.admin;

export default adminSlice.reducer;
