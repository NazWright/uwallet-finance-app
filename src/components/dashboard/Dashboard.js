import { Auth, API } from "aws-amplify";
import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import { constants } from "../../constants/applicationConstants";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";

// The usePlaidLink hook manages Plaid Link creation
// It does not return a destroy function;
// instead, on unmount it automatically destroys the Link instance

export default function Dashboard({ accessToken }) {
  const dispatch = useDispatch();

  const config = {
    onSuccess: useCallback(async (public_token, metadata) => {
      const response = await API.get(
        constants.FINANCEAPI,
        "/plaid/access-token",
        {
          Headers: "",
        }
      );
    }, []),
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    token: accessToken,
  };
  const { open, exit, ready, error } = usePlaidLink(config);

  function openPlaidAuthenticationPortal() {
    try {
      open();
    } catch (caughtError) {
      console.error(caughtError);
      console.error(error);
    }
  }

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
  console.log(accessToken);

  return (
    <div>
      Welcome
      <Button onClick={onSignOut}>Sign Out</Button>
      <Button onClick={openPlaidAuthenticationPortal}>Auth with Plaid</Button>
    </div>
  );
}
