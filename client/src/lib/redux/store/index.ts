import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../slices/userSlice";
import { reducer as adminReducer } from "../slices/adminSlice";

export const store = configureStore({
  reducer: {
    userReducer,
    adminReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
