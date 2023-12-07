import { Auth, API } from "aws-amplify";
import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import { constants } from "../../constants/applicationConstants";
import {
  errorLogFormatter,
  infoLogFormatter,
} from "../../utils/infoLogFormatter";
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
      infoLogFormatter("User has successfully authenticated with plaid");
      const response = await API.post(
        constants.FINANCEAPI,
        "/plaid/access-token",
        JSON.stringify({ body: { public_token } })
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
      errorLogFormatter(error.message);
      errorLogFormatter(caughtError);
    }
  }

  async function onSignOut() {
    try {
      await Auth.signOut();
      dispatch(setAuthenticated(false));
      dispatch(setUser(undefined));
      infoLogFormatter(
        "User has been successfully signed out. Redirecting to sign in..."
      );
    } catch (error) {
      errorLogFormatter(error);
      dispatch(setAuthenticated(false));
      dispatch(setUser(undefined));
    }
  }

  return (
    <div>
      Welcome
      <Button onClick={onSignOut}>Sign Out</Button>
      <Button onClick={openPlaidAuthenticationPortal}>Auth with Plaid</Button>
    </div>
  );
}
