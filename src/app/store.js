import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import plaidAuthSlice from "../features/plaid/plaidSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    plaidAuth: plaidAuthSlice,
  },
});
