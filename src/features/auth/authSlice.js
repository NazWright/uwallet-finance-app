import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
  given_name: "",
  family_name: "",
  email: "",
  phone_number: "",
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
    getUser: (state) => {
      return state.user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser, setUser, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;
