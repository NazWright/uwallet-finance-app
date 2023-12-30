import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plaidAccessToken: "",
};

export const plaidAuthSlice = createSlice({
  name: "plaidAuth",
  initialState,
  reducers: {
    setPlaidAccessToken: (state, action) => {
      console.log("Setting access token");
      //state.plaidAccessToken = action.payload;
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlaidAccessToken } = plaidAuthSlice.actions;

export default plaidAuthSlice.reducer;
