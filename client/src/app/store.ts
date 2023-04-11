import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import alertReducer from "../slices/alertSlice";
import projectReducer from "../slices/projectSlice";
import adminReducer from "../slices/adminSlice";
import chatReducer from "../slices/chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    project: projectReducer,
    admin: adminReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
