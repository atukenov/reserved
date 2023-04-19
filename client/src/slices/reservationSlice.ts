import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Error, Reservation, ReservationState } from "../utils/types";
import { setAlert } from "./alertSlice";
import _service from "../utils/apis";
import { AxiosError } from "axios";

const initialState: ReservationState = {
  reservations: [],
  reservation: null,
  loading: false,
};

export const getReservationById = createAsyncThunk(
  "reservations/getById",
  async (reservationId: string, thunkAPI) => {
    try {
      const response = await _service.getReservationById(reservationId);
      return response.data;
    } catch (error) {
      const e = error as Error;
      thunkAPI.dispatch(setAlert({ alertType: "error", msg: e.message }));
      throw error;
    }
  }
);

export const getReservationsByUserId = createAsyncThunk(
  "reservations/getByUserId",
  async (userId: string, thunkAPI) => {
    try {
      const response = await _service.getReservationsByUserId(userId);
      return response.data;
    } catch (error) {
      const e = error as Error;
      thunkAPI.dispatch(setAlert({ alertType: "error", msg: e.message }));
      throw error;
    }
  }
);

export const createReservation = createAsyncThunk(
  "reservations/create",
  async (body: Reservation, thunkAPI) => {
    try {
      const response = await _service.createReservation(body);
      thunkAPI.dispatch(
        setAlert({ alertType: "success", msg: "Reservation Created" })
      );
      return response.data;
    } catch (error) {
      const e = error as AxiosError;
      if (!e.response) throw e;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.message })
      );
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const updateReservation = createAsyncThunk(
  "reservations/update",
  async (body: Reservation, thunkAPI) => {
    try {
      const response = await _service.updateReservation(body);
      thunkAPI.dispatch(
        setAlert({ alertType: "success", msg: "Reservation Updated" })
      );
      return response.data;
    } catch (error) {
      const e = error as AxiosError;
      if (!e.response) throw e;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.message })
      );
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const deleteReservation = createAsyncThunk(
  "reservations/delete",
  async (reservationId: string, thunkAPI) => {
    try {
      const response = await _service.deleteReservation(reservationId);
      thunkAPI.dispatch(
        setAlert({ alertType: "success", msg: "Reservation deleted" })
      );
      return response.data;
    } catch (error) {
      const e = error as AxiosError;
      if (!e.response) throw e;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.message })
      );
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: initialState,
  reducers: {
    cleanData: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservationById.fulfilled, (state, action) => {
        state.reservation = action.payload;
        state.loading = false;
      })
      .addCase(getReservationById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReservationById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getReservationsByUserId.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.loading = false;
      })
      .addCase(getReservationsByUserId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReservationsByUserId.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.reservation = action.payload;
        state.reservations?.push(action.payload);
        state.loading = false;
      })
      .addCase(createReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createReservation.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations?.map((i) => {
          return i._id === action.payload._id ? action.payload : i;
        });
        state.loading = false;
      })
      .addCase(updateReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateReservation.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        let newReservations = state.reservations?.filter(
          (i) => i._id !== action.payload._id
        );
        console.log(newReservations);
        state.reservations = newReservations;
        state.loading = false;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteReservation.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { cleanData } = reservationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const reservationSelector = (state: RootState) => state.reservation;

export default reservationSlice.reducer;
