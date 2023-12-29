import { Auth, API } from "aws-amplify";
import React, { useCallback, useState } from "react";
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
import "./Dashboard.css";
import StatusBar from "./StatusBar";
import ProfileToolTip from "./ProfileToolTip";
import DashboardContent from "./DashboardContent";
// The usePlaidLink hook manages Plaid Link creation
// It does not return a destroy function;
// instead, on unmount it automatically destroys the Link instance

export default function Dashboard({ accessToken }) {
  const dispatch = useDispatch();
  const [plaidAccessToken, setPlaidAccessToken] = useState("");

  const config = {
    onSuccess: async (public_token, metadata) => {
      try {
        infoLogFormatter("Successfully retrieved public token");
        infoLogFormatter(
          `Fetching plaid accessToken using public token: ${public_token}`
        );
        const response = await API.post(
          constants.FINANCEAPI,
          "/plaid/access-token",
          { body: { publicToken: public_token } }
        );
        setPlaidAccessToken(response.accessToken);
        infoLogFormatter(
          `successfully retrieved plaid accessToken: ${response.accessToken}`
        );
      } catch (error) {
        errorLogFormatter(error);
      }
    },
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

  async function retrieveAccountData() {
    const response = await API.post(constants.FINANCEAPI, "/plaid/accounts", {
      body: { accessToken: plaidAccessToken },
    });
    console.dir(response);
  }

  return (
    <div>
      <div className="home-page">
        <div className="div-3">
          <DashboardContent />
          <StatusBar />
          <ProfileToolTip />
        </div>
      </div>
    </div>
  );
}
