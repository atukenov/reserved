import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../app/store";
import { AuthProps } from "../common/types";
import { setAlert } from "./alertSlice";
import socket from "../common/utils/socket";

const initialState: AuthProps = {
  token: localStorage.getItem("token"),
  isAdmin: false,
  isAuth: false,
  loading: true,
  user: null,
};

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (arg, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    try {
      const res = await axios.get("/api/auth", config);
      let data = await res.data;
      if (res.status === 200) {
        return { ...data };
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

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: any, thunkAPI) => {
    data.email = data.email.toLowerCase();
    const body = JSON.stringify(data);
    try {
      const res = await axios.post("/api/auth/login", body, config);
      let data = await res.data;
      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({ alertType: "success", msg: "You are logged in!" })
        );
        return { ...data };
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

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      console.log("LOGOUT", state);
      localStorage.removeItem("token");
      state.token = null;
      state.loading = false;
      state.user = null;
      state.isAdmin = false;
      state.isAuth = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    multipleUsersLogged: (state, action: PayloadAction<number>) => {
      console.log("multipleLogIn", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        state.isAuth = true;
        state.token = action.payload.token;
        state.loading = false;
        state.user = action.payload.user;
        state.isAdmin = state.user?.roles.includes("admin") ? true : false;
        socket.emit("set nickname", state.user?._id);
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        localStorage.removeItem("token");
        state.token = null;
        state.loading = false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload;
        state.isAdmin = state.user?.roles.includes("admin") ? true : false;
        socket.emit("set nickname", state.user?._id);
      })
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.rejected, (state, action) => {
        localStorage.removeItem("token");
        state.token = null;
        state.loading = false;
      });
  },
});

export const { logout, multipleUsersLogged } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
