import { Link } from "react-router-dom";
import React from "react";
import "./steps.css";

export default function AddNewCardStep({ handleCompletedStep }) {
  return (
    <div className="div-wrapper">
      <div className="LOG-IN-3">
        <div className="status-bar-3">
          <img
            className="cellular-connection-2"
            alt="Cellular connection"
            src="/img/cellular-connection-10.png"
          />
          <img className="wifi-3" alt="Wifi" src="/img/wifi-3.png" />
          <div className="time-3">9:30</div>
          <div className="battary-3">
            <img className="cap-3" alt="Cap" src="/img/cap-10.png" />
            <div className="overlap-group-2">
              <div className="rectangle-6" />
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="rectangle-7" />
        </div>
        <div className="text-wrapper-14">3 STEPS LEFT</div>
        <div className="overlap-6">
          <div className="scroll-group">
            <div className="group-12">
              <div className="card">
                <div className="overlap-7">
                  <div className="group-wrapper">
                    <div className="waves-wrapper">
                      <div className="waves" />
                    </div>
                  </div>
                  <div className="visa-pay-logo">
                    <div className="overlap-8">
                      <img
                        className="shape"
                        alt="Shape"
                        src="/img/shape-40.png"
                      />
                      <img
                        className="shape-2"
                        alt="Shape"
                        src="/img/shape-41.png"
                      />
                      <img
                        className="shape-3"
                        alt="Shape"
                        src="/img/shape-42.png"
                      />
                    </div>
                    <div className="overlap-group-3">
                      <img
                        className="shape-4"
                        alt="Shape"
                        src="/img/shape-43.png"
                      />
                      <img
                        className="shape-5"
                        alt="Shape"
                        src="/img/shape-44.png"
                      />
                    </div>
                  </div>
                  <div className="text-wrapper-15">CARD HOLDER</div>
                  <div className="stephen-austin">Emery Murrain</div>
                  <div className="text-wrapper-16">VALID THRU</div>
                  <div className="text-wrapper-17">04 / 21</div>
                  <div className="div-2">
                    <img className="path" alt="Path" src="/img/path-128.png" />
                    <img
                      className="path-2"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-3"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-4"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-5"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-6"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-7"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-8"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-9"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-10"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-11"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <img
                      className="path-12"
                      alt="Path"
                      src="/img/path-128.png"
                    />
                    <div className="text-wrapper-18">4765</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-19">Add New Card</div>
              <div className="element-wrapper">
                <div className="element">
                  4171&nbsp;&nbsp;1911&nbsp;&nbsp;2674&nbsp;&nbsp;4765
                </div>
              </div>
              <div className="text-wrapper-20">Card Number</div>
              <div className="group-13">
                <div className="overlap-9">
                  <div className="text-wrapper-21">02/25</div>
                </div>
                <div className="overlap-10">
                  <div className="text-wrapper-22">808</div>
                </div>
                <div className="text-wrapper-23">CVV</div>
                <div className="text-wrapper-24">EXP</div>
              </div>
              <div className="overlap-11">
                <div className="group-14">
                  <div className="rectangle-8" />
                  <div className="text-wrapper-24">Name on Card </div>
                </div>
                <div className="text-wrapper-25">Jamie Johnson</div>
              </div>
            </div>
          </div>
          <Link className="group-15">
            <div className="text-wrapper-26" onClick={handleCompletedStep}>
              Continue
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
