import React from "react";
import {
  Button,
  Card,
  Heading,
  withAuthenticator,
} from "@aws-amplify/ui-react";

function Dashboard({ signOut }) {
  return (
    <div>
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default withAuthenticator(Dashboard);
