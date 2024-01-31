import "./steps.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageState } from "../../../features/onboarding/userActionPagesSlice";
import { useNavigate } from "react-router-dom";
import { pages } from "../../../data/userActionPagesData";
import OnboardingTasksOverview from "./OnboardingTasksOverview";
import AddNewCardStep from "./AddNewCardStep";
import ChooseGoalsStep from "./ChooseGoalsStep";
import WelcomeStep from "./WelcomeStep";

export default function OnboardingSteps() {
  const userIsAuthenticated = useSelector((state) => state.auth.authenticated);
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  function markPageStatusAsComplete() {
    setPageIndex(pageIndex + 1);

    redirectIfOnboardingIsComplete(pageIndex);
  }

  function redirectIfOnboardingIsComplete(pageIndex) {
    if (pageIndex === 3) {
      if (userIsAuthenticated) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  }

  function getCurrentPageElement() {
    switch (pageIndex) {
      case 0:
        return (
          <OnboardingTasksOverview
            handleCompletedStep={markPageStatusAsComplete}
          />
        );
      case 1:
        return (
          <AddNewCardStep handleCompletedStep={markPageStatusAsComplete} />
        );
      case 2:
        return (
          <ChooseGoalsStep handleCompletedStep={markPageStatusAsComplete} />
        );
      case 3:
        return <WelcomeStep handleCompletedStep={markPageStatusAsComplete} />;

      default:
        navigate("/");
    }
  }

  return getCurrentPageElement(pageIndex);
}
