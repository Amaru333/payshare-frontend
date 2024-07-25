import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const userSlice = createSlice({
  name: "user",
  initialState: {
    details: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.details = action.payload;
    },
    removeUser: (state) => {
      state.details = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const getUser = createSelector(
  (state) => state.user,
  (user) => user.details
);

export const getUserDefaultCurrency = createSelector(
  (state) => state.user,
  (user) => user?.details?.default_currency
);

export default userSlice.reducer;
