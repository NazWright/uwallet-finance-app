import React from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";
import uWalletLogo from "./download.png";
import SignInFormContent from "../signIn/SignInForm";
import uWalletLoginImage from "../../static/img/untitled-design-36-3.png";
import { useState } from "react";

export default function Authentication() {
  const [logInToggled, setLogInToggled] = useState(true);

  return (
    <div className="login">
      <div className="screen-14">
        <div className="LOG-IN-10">
          <div className="authentication-form">
            {/*TODO: Work on button toggling functionality */}
            <div className={`overlap-89 ${logInToggled ? "active" : ""}`}>
              <div className={`overlap-90 ${logInToggled ? "" : "active"}`}>
                <div className={`text-wrapper-179`}>Sign Up</div>
              </div>
              <div className="text-wrapper-180">Log In</div>
            </div>
            <SignIn />
          </div>
          <img
            className="untitled-design-46"
            alt="Untitled design"
            src={uWalletLoginImage}
          />
        </div>
      </div>
    </div>
  );
}
