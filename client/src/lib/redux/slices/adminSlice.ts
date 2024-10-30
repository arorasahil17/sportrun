import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin } from "../../../types";

interface InitialState {
  admin: Admin | null;
}
const initialState: InitialState = {
  admin: null,
};

export const adminSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setAdmin: (state, action: PayloadAction<Admin>) => {
      console.log("payload", action.payload);
      state.admin = action.payload;
    },
    clearAdmin: (state) => {
      state.admin = null;
    },
  },
});

export const { actions, reducer } = adminSlice;

export const { setAdmin, clearAdmin } = actions;
