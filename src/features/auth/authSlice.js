import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  givenName: "",
  familyName: "",
  userName: "",
  password: "",
  email: "",
  phone: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.auth = action.payload;
      // return action.payload;
    },
    getUser: (state) => {
      return state.auth;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser, setUser } = authSlice.actions;

export default authSlice.reducer;
