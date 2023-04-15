import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Error, Restaurant, RestaurantState } from "../utils/types";
import { setAlert } from "./alertSlice";
import _service from "../utils/apis";
import { AxiosError } from "axios";

const initialState: RestaurantState = {
  restaurants: [],
  restaurant: null,
  totalItem: 0,
  pageSize: 10,
  loading: true,
};

export const getRestaurantById = createAsyncThunk(
  "restaurants/getById",
  async (restaurantId: string, thunkAPI) => {
    try {
      const response = await _service.getRestaurantById(restaurantId);
      return response.data;
    } catch (error) {
      const e = error as Error;
      thunkAPI.dispatch(setAlert({ alertType: "error", msg: e.message }));
      throw error;
    }
  }
);

export const getAllRestaurants = createAsyncThunk(
  "restaurants/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await _service.getAllRestaurants();
      return response.data;
    } catch (error) {
      const e = error as Error;
      thunkAPI.dispatch(setAlert({ alertType: "error", msg: e.message }));
      throw error;
    }
  }
);

export const createRestaurant = createAsyncThunk(
  "restaurants/create",
  async (body: Restaurant, thunkAPI) => {
    try {
      const response = await _service.createRestaurant(body);
      thunkAPI.dispatch(
        setAlert({ alertType: "success", msg: "Restaurant Created" })
      );
      return response.data;
    } catch (error) {
      const e = error as AxiosError;
      if (!e.response) throw e;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.message })
      );
    }
  }
);

export const updateRestaurant = createAsyncThunk(
  "restaurants/update",
  async (body: Restaurant, thunkAPI) => {
    try {
      const response = await _service.updateRestaurant(body);
      thunkAPI.dispatch(
        setAlert({ alertType: "success", msg: "Restaurant Updated" })
      );
      return response.data;
    } catch (error) {
      const e = error as AxiosError;
      if (!e.response) throw e;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.message })
      );
    }
  }
);

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    cleanData: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantById.fulfilled, (state, action) => {
        state.restaurant = action.payload;
        state.loading = false;
      })
      .addCase(getRestaurantById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRestaurantById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllRestaurants.fulfilled, (state, action) => {
        state.restaurants = action.payload;
        state.loading = false;
      })
      .addCase(getAllRestaurants.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRestaurants.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createRestaurant.fulfilled, (state, action) => {
        state.restaurant = action.payload;
        state.loading = false;
      })
      .addCase(createRestaurant.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRestaurant.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateRestaurant.fulfilled, (state, action) => {
        state.restaurant = action.payload;
        state.loading = false;
      })
      .addCase(updateRestaurant.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateRestaurant.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { cleanData } = restaurantSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const restaurantSelector = (state: RootState) => state.restaurant;

export default restaurantSlice.reducer;
