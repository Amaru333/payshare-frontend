import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import transactionReducer from "./slices/transactionSlice";
import groupReducer from "./slices/groupSlice";

import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

export const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transactionReducer,
    group: groupReducer,
  },
  devTools: false,
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(devToolsEnhancer()),
});

export default store;
