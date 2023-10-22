import React from "react";
import {
  Button,
  Card,
  Heading,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import Navbar from "../navbar/Navbar";

function Dashboard({ signOut }) {
  return (
    <div>
      <Navbar />
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default withAuthenticator(Dashboard);
