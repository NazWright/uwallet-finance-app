import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCards: [],
  userGoals: [],
};

export const userOnboardingInformationSlice = createSlice({
  name: "userOnboardingInfo",
  initialState,
  reducers: {
    setUserCards(state, action) {
      state.userCards = action.payload;
    },
    setUserGoals(state, action) {
      state.userGoals = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserCards, setUserGoals } =
  userOnboardingInformationSlice.actions;

export default userOnboardingInformationSlice.reducer;
