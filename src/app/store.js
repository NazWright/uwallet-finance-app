import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import plaidAuthSlice from "../features/plaid/plaidSlice";
import userActionPagesSlice from "../features/onboarding/userActionPagesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    plaidAuth: plaidAuthSlice,
    userAction: userActionPagesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
