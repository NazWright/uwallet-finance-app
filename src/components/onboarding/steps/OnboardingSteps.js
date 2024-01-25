import "./steps.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageState } from "../../../features/onboarding/userActionPagesSlice";
import { useNavigate } from "react-router-dom";

export default function OnboardingSteps() {
  const userActionPages = useSelector((state) => state.userAction.pages);
  const userIsAuthenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (userActionPages[pageIndex].complete === true) {
      setPageIndex(pageIndex + 1);
    }
  }, [pageIndex, setPageIndex, userActionPages]);

  function markPageStatusAsComplete(pages, currentPageIndex) {
    const newPageState = pages.map((page) => {
      /* TODO: it would be imperative to check if the previous page is complete here as well. */
      if (page.id === currentPageIndex) {
        return {
          id: page.id,
          complete: true,
          element: page.element,
        };
      }
      return page;
    });
    dispatch(setPageState({ pages: newPageState }));

    redirectIfOnboardingIsComplete(newPageState);
  }

  function redirectIfOnboardingIsComplete(pageState) {
    if (allOnboardingStepsAreComplete(pageState)) {
      if (userIsAuthenticated) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  }

  function allOnboardingStepsAreComplete(pages) {
    return pages[pages.length - 1].complete;
  }

  return React.cloneElement(userActionPages[pageIndex].element, {
    handleCompletedStep: () =>
      markPageStatusAsComplete(userActionPages, pageIndex),
  });
}
