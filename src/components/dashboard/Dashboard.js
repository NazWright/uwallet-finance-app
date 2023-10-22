import { Auth } from "aws-amplify";
import React from "react";
import { Button } from "react-bootstrap";

export default function Dashboard({ user }) {
  function onSignOut() {
    Auth.signOut();
  }

  return (
    <div>
      {" "}
      Welcome
      <Button onClick={onSignOut}>Sign Out</Button>
    </div>
  );
}
