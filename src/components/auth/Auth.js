import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";

export default function Authentication() {
  return (
    <Tabs
      defaultActiveKey="signIn"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="signIn" title="SignIn">
        <SignIn />
      </Tab>
      <Tab eventKey="signUp" title="signUp">
        <SignUp />
      </Tab>
    </Tabs>
  );
}
