import React from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";
import uWalletLogo from "./download.png";

export default function Authentication() {
  const uWalletAltImageText =
    "This is the current logo for the financial application system";

  return (
    <div className="login">
      <div>
        <img
          className="application-logo"
          src={uWalletLogo}
          alt={uWalletAltImageText}
        />
      </div>

      <div>
        <Card className="auth-form-card">
          <Card.Body>
            <Tabs
              defaultActiveKey="signin"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="signin" title="Login">
                <SignIn />
              </Tab>
              <Tab eventKey="signup" title="Sign Up">
                <SignUp />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
