import React from "react";
import { Link } from "react-router-dom";
import "./steps.css";

export default function OnboardingStepsButton(handleCompletedStep) {
  return (
    <Link className="group-11" onClick={handleCompletedStep}>
      <div className="text-wrapper-13">Continue</div>
    </Link>
  );
}
