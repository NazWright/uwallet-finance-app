import React from "react";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";
import uWalletLoginImage from "../../static/img/untitled-design-36-3.png";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { constants } from "../../constants/applicationConstants";

export default function Authentication() {
  const [logInToggled, setLogInToggled] = useState(true);
  const [isVerification, setIsVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && (
        <div className="login">
          <div className="screen-14">
            <div className="LOG-IN-10">
              <div
                className={`authentication-form ${
                  logInToggled ? "sign-in" : "sign-up"
                } ${isVerification ? "verification" : ""}`}
              >
                {/*TODO: Work on button toggling functionality */}
                <div className={`overlap-89 ${logInToggled ? "active" : ""}`}>
                  <div className={`overlap-90 ${logInToggled ? "" : "active"}`}>
                    <div
                      className={`text-wrapper-179`}
                      onClick={(event) => setLogInToggled(false)}
                    >
                      Sign Up
                    </div>
                  </div>
                  <div
                    className="text-wrapper-180"
                    onClick={(event) => setLogInToggled(true)}
                  >
                    Log In
                  </div>
                </div>
                {logInToggled && (
                  <SignIn setLoading={(isLoading) => setIsLoading(isLoading)} />
                )}

                {!logInToggled && (
                  <SignUp
                    setLoading={(isLoading) => setIsLoading(isLoading)}
                    verificationHandler={() => setIsVerification(true)}
                  />
                )}
              </div>
              <img
                className="untitled-design-46"
                alt="Untitled design"
                src={uWalletLoginImage}
              />
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div
          className={
            isLoading && constants.flexFullWidthHeightCenteredClassName
          }
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
}
