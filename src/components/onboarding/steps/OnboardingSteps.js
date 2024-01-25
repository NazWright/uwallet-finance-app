import "./steps.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageState } from "../../../features/onboarding/userActionPagesSlice";
import { useNavigate } from "react-router-dom";

export default function OnboardingSteps() {
  const userActionPages = useSelector((state) => state.userAction.pages);
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (userActionPages[pageIndex].complete === true) {
      setPageIndex(pageIndex + 1);
    }
  }, [pageIndex, setPageIndex, userActionPages]);

  function markPageStatusAsComplete(pages, currentPageIndex) {
    const newPageState = pages.map((page) => {
      if (page.id === currentPageIndex) {
        return {
          id: page.id,
          complete: true,
          element: page.element,
        };
      }
      return page;
    });
    dispatch(setPageState(newPageState));

    if (isAllOnboardingStepsComplete(newPageState)) {
      naviagte("/dashboard");
    }
  }

  function isAllOnboardingStepsComplete(pages) {
    return pages[pages.length - 1].complete;
  }

  return React.cloneElement(userActionPages[pageIndex].element, {
    handleCompletedStep: () =>
      markPageStatusAsComplete(userActionPages, pageIndex),
  });
}
