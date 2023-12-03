import { Auth, API } from "aws-amplify";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import { constants } from "../../constants/applicationConstants";

export default function Dashboard({ user }) {
  const dispatch = useDispatch();

  async function onSignOut() {
    try {
      await Auth.signOut();
      dispatch(setAuthenticated(false));
      dispatch(setUser(undefined));
      console.info(
        "User has been successfully signed out. Redirecting to sign in..."
      );
    } catch (error) {
      console.error(error);
      dispatch(setAuthenticated(false));
      dispatch(setUser(undefined));
    }
  }

  async function createPlaidAuthToken() {
    const response = await API.post(
      constants.FINANCEAPI,
      "/createPlaidAuthToken-main/plaid",
      {}
    );
    return response;
  }

  return (
    <div>
      Welcome
      <Button onClick={onSignOut}>Sign Out</Button>
      <Button onClick={createPlaidAuthToken}>Auth with Plaid</Button>
    </div>
  );
}
