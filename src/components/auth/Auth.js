import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import SignUp from "../signUp/SignUp";

export default function Authentication() {
  return (
    <Tabs
      defaultActiveKey="signIn"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="signIn" title="SignIn">
        Tab content for Home
      </Tab>
      <Tab eventKey="signUp" title="signUp">
        <SignUp />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}
