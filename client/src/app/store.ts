import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "../slices/alertSlice";
import projectReducer from "../slices/projectSlice";
import userReducer from "../slices/userSlice";
import restaurantReducer from "../slices/restaurantSlice";
import reservationReducer from "../slices/reservationSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    project: projectReducer,
    user: userReducer,
    restaurant: restaurantReducer,
    reservation: reservationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
