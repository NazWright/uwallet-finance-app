import React from "react";
import { Link } from "react-router-dom";
import "./steps.css";

export default function WelcomeStep({ handleCompletedStep }) {
  return (
    <div className="LOG-IN">
      <div className="div">
        <div className="status-bar">
          <img
            className="cellular-connection"
            alt="Cellular connection"
            src="/img/cellular-connection-10.png"
          />
          <img className="wifi" alt="Wifi" src="/img/wifi-3.png" />
          <div className="time">9:30</div>
          <div className="battary">
            <img className="cap" alt="Cap" src="/img/cap-10.png" />
            <div className="overlap-group">
              <div className="rectangle" />
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="rectangle-2" />
        </div>
        <div className="text-wrapper">1 STEPS LEFT</div>
        <div className="overlap-2">
          <p className="hi-welcome-to">
            Hi welcome to University Wallet!
            <br />I am your personal advisor. My friends <br />
            call me P.A. I’m here to guide you through
            <br />
            your financial Journey. If you have <br />
            any questions just click the message tab
            <br />
            whenever you need me!
          </p>
          <div className="group">
            <div className="overlap-3">
              <div className="ellipse" />
              <img
                className="untitled-design"
                alt="Untitled design"
                src="/img/untitled-design-33.png"
              />
              <div className="rectangle-3" />
            </div>
          </div>
          <div className="text-wrapper-2">P.A</div>
        </div>
        <Link className="group-2">
          <div className="text-wrapper-3" onClick={handleCompletedStep}>
            Home
          </div>
        </Link>
      </div>
    </div>
  );
}
