import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
