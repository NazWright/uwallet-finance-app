import React from "react";
import { Link } from "react-router-dom";
import "./steps.css";

export default function OnboardingTasksOverview({ handleCompletedStep }) {
  return (
    <div className="screen-3">
      <div className="LOG-IN-4">
        <div className="overlap-12">
          <img className="path-13" alt="Path" src="/img/path-13-1.png" />
          <img className="union" alt="Union" src="/img/union-1.png" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="text-wrapper-27">How it works</div>
          <p className="add-your-card-so-we">
            Add your card so we can track your
            <br />
            Spending habits
          </p>
          <p className="learn-through-mini">
            Learn through mini modules, complete
            <br />
            quizzes for points, and exchange points
            <br />
            For rewards
          </p>
          <div className="text-wrapper-28">Meet your personal advisor</div>
          <img
            className="untitled-design-2"
            alt="Untitled design"
            src="/img/untitled-design-32.png"
          />
          <Link className="group-16">
            <div className="text-wrapper-29" onClick={handleCompletedStep}>
              Continue
            </div>
          </Link>
        </div>
        <div className="status-bar-4">
          <img
            className="cellular-connection-3"
            alt="Cellular connection"
            src="/img/cellular-connection-10.png"
          />
          <img className="wifi-4" alt="Wifi" src="/img/wifi-3.png" />
          <div className="time-4">9:30</div>
          <div className="battary-4">
            <img className="cap-4" alt="Cap" src="/img/cap-10.png" />
            <div className="overlap-group-4">
              <div className="rectangle-9" />
            </div>
          </div>
        </div>
        <div className="overlap-13">
          <div className="rectangle-10" />
        </div>
        <div className="text-wrapper-30">3 STEPS LEFT</div>
        <div className="group-17">
          <div className="text-wrapper-31">Please complete the</div>
          <div className="ellipse-5" />
          <p className="text-wrapper-32">Task to be all set up!</p>
        </div>
      </div>
    </div>
  );
}
