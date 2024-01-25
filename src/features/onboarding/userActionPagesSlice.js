import { createSlice } from "@reduxjs/toolkit";
import OnboardingTasksOverview from "../../components/onboarding/steps/OnboardingTasksOverview";
import AddNewCardStep from "../../components/onboarding/steps/AddNewCardStep";
import ChooseGoalsStep from "../../components/onboarding/steps/ChooseGoalsStep";
import WelcomeStep from "../../components/onboarding/steps/WelcomeStep";

const initialState = {
  pages: [
    {
      id: 0,
      element: (
        <OnboardingTasksOverview
          handleCompletedStep={console.info(
            "Initializing overview step page..."
          )}
        />
      ),
      complete: false,
    },
    {
      id: 1,
      element: (
        <AddNewCardStep
          handleCompletedStep={() =>
            console.info("Initializing add new card step page...")
          }
        />
      ),
      complete: false,
    },
    {
      id: 2,
      element: (
        <ChooseGoalsStep
          handleCompletedStep={() =>
            console.info("Initializing choose goals step page...")
          }
        />
      ),
      complete: false,
    },
    {
      id: 3,
      element: (
        <WelcomeStep
          handleCompletedStep={() =>
            console.info("Initializing welcome step page...")
          }
        />
      ),
      complete: false,
    },
  ],
};

export const userActionPageSlice = createSlice({
  name: "userAction",
  initialState,
  reducers: {
    setPageState: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPageState } = userActionPageSlice.actions;

export default userActionPageSlice.reducer;
