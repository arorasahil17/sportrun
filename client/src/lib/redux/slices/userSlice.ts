import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

interface InitialState {
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;

export const { setUser } = actions;
