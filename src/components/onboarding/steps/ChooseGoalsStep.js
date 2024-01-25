import React from "react";
import { Link } from "react-router-dom";
import "./steps.css";

export default function ChooseGoalsStep() {
  return (
    <div className="LOG-IN-screen">
      <div className="LOG-IN-2">
        <div className="status-bar-2">
          <img
            className="img"
            alt="Cellular connection"
            src="/img/cellular-connection-10.png"
          />
          <img className="wifi-2" alt="Wifi" src="/img/wifi-3.png" />
          <div className="time-2">9:30</div>
          <div className="battary-2">
            <img className="cap-2" alt="Cap" src="/img/cap-10.png" />
            <div className="rectangle-wrapper">
              <div className="rectangle-4" />
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="rectangle-5" />
        </div>
        <div className="text-wrapper-4">2 STEPS LEFT</div>
        <p className="p">CHOOSE YOUR GOALS (Pick 3)</p>
        <p className="LEARNING-EARNS">
          LEARNING EARNS POINTS, WHICH CAN <br />
          BE REDEEMED FOR REWARDS.
        </p>
        <div className="overlap-wrapper">
          <div className="SAVINGS-INVEST-wrapper">
            <div className="SAVINGS-INVEST">SAVINGS &amp; INVEST</div>
          </div>
        </div>
        <div className="group-3">
          <div className="text-wrapper-5">BUDGETING</div>
        </div>
        <div className="group-4">
          <div className="text-wrapper-6">DEBT PAYOFF</div>
        </div>
        <div className="group-5">
          <div className="text-wrapper-7">EARN</div>
        </div>
        <div className="group-6">
          <div className="text-wrapper-8">SPEND</div>
        </div>
        <div className="group-7">
          <div className="text-wrapper-9">COLLEGE</div>
        </div>
        <div className="group-8">
          <div className="text-wrapper-10">PROTECT</div>
        </div>
        <div className="group-9">
          <div className="text-wrapper-11">BORROW</div>
        </div>
        <div className="group-10">
          <div className="text-wrapper-12">JOBS</div>
        </div>
        <Link className="group-11" to="/log-in-93">
          <div className="text-wrapper-13">Continue</div>
        </Link>
      </div>
    </div>
  );
}
