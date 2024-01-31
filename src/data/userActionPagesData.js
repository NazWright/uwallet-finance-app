import WelcomeStep from "../components/onboarding/steps/WelcomeStep";
import ChooseGoalsStep from "../components/onboarding/steps/ChooseGoalsStep";
import OnboardingTasksOverview from "../components/onboarding/steps/OnboardingTasksOverview";
import AddNewCardStep from "../components/onboarding/steps/AddNewCardStep";

export const pages = [
  {
    id: 0,
    element: (
      <OnboardingTasksOverview
        handleCompletedStep={console.info("Initializing overview step page...")}
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
];
